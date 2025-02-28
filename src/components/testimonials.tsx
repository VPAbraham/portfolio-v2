'use client';
import { useState } from 'react';
import Image from 'next/image';

// Define the testimonial type
interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image?: string;
  content: string;
  relationship: string;
}

export default function Testimonials() {
  // Sample testimonials data
  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      role: 'Engineering Manager',
      company: 'TechCorp',
      image: '/testimonials/sarah.jpg',
      content:
        'Victor is an exceptional frontend developer who consistently delivers high-quality work. His attention to detail and problem-solving skills made him an invaluable asset to our team. His React components were not only visually appealing but also remarkably efficient.',
      relationship: 'Former Manager',
    },
    {
      id: '2',
      name: 'Michael Chen',
      role: 'Senior Developer',
      company: 'InnovateSoft',
      image: '/testimonials/michael.jpg',
      content:
        'Working alongside Victor was a fantastic experience. His deep knowledge of React and Next.js elevated our entire project. He&apos;s a team player who&apos;s always willing to share knowledge and help others. The performance optimizations he implemented reduced our load times by 40%.',
      relationship: 'Colleague',
    },
    {
      id: '3',
      name: 'Lisa Rodriguez',
      role: 'Product Manager',
      company: 'Digital Solutions Inc.',
      image: '/testimonials/lisa.jpg',
      content:
        'Victor bridged the gap between design and development beautifully. He&apos;s highly collaborative and communicative, making the product development process smooth and efficient. His ability to translate complex requirements into elegant interfaces was remarkable.',
      relationship: 'Client',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [imgError, setImgError] = useState(false);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setImgError(false);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
    setImgError(false);
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    setImgError(false);
  };

  const handleImageError = () => {
    setImgError(true);
  };

  // Get the current testimonial's image or fallback
  const imageUrl =
    imgError || !testimonials[activeIndex].image
      ? `https://ui-avatars.com/api/?name=${encodeURIComponent(
          testimonials[activeIndex].name
        )}&background=e0e8ff&color=4b6bfb&size=128`
      : testimonials[activeIndex].image;

  return (
    <section id="testimonials" className="w-full py-16 my-12">
      <h2 className="text-4xl hero-text text-gray-900 font-bold mb-12 text-center">
        What People Say
      </h2>

      <div className="accent-card rounded-lg overflow-hidden relative">
        {/* Main testimonial display */}
        <div className="p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Testimonial image */}
            <div className="w-24 h-24 md:w-32 md:h-32 relative rounded-full overflow-hidden border-4 border-white shadow-md flex-shrink-0">
              {imageUrl.startsWith('http') ? (
                // For external URLs (like the avatar API)
                <Image
                  src="/logo-images/react.svg"
                  // src={imageUrl}
                  height={64}
                  width={64}
                  alt={testimonials[activeIndex].name}
                  className="object-cover w-full h-full"
                  onError={handleImageError}
                />
              ) : (
                // For local images
                <Image
                  src={imageUrl}
                  alt={testimonials[activeIndex].name}
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                  onError={handleImageError}
                  priority
                />
              )}
            </div>

            {/* Testimonial content */}
            <div className="flex-1">
              <div className="mb-6">
                <svg
                  className="h-8 w-8 text-blue-100"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>

              <blockquote className="text-gray-700 text-lg mb-6">
                {testimonials[activeIndex].content}
              </blockquote>

              <div>
                <p className="font-semibold text-gray-900">
                  {testimonials[activeIndex].name}
                </p>
                <p className="text-gray-600">
                  {testimonials[activeIndex].role} at{' '}
                  {testimonials[activeIndex].company}
                </p>
                <p className="text-blue-600 text-sm mt-1">
                  {testimonials[activeIndex].relationship}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation controls */}
        <div className="p-4 border-t border-gray-100 bg-gray-50 flex items-center justify-between">
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-blue-500' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <div className="flex space-x-2">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full border border-gray-200 hover:bg-white transition-colors"
              aria-label="Previous testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full border border-gray-200 hover:bg-white transition-colors"
              aria-label="Next testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
