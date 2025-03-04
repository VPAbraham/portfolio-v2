'use client';
import { useState } from 'react';
import { testimonials } from '@/app/lib/testimonial-data';

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <div className="w-full bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Client Testimonials
        </h2>

        <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-xl font-bold text-emerald-600">
                {activeTestimonial.title}
              </h3>
              <div className="flex items-center mt-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
                <span className="ml-2 text-gray-600">
                  {activeTestimonial.rating}.00
                </span>
                <span className="ml-2 text-gray-500">
                  {activeTestimonial.date}
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
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
                onClick={handleNext}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
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

          <blockquote className="italic text-gray-700 border-l-4 border-emerald-500 pl-4 py-2 my-4">
            &quot;{activeTestimonial.content}&quot;
          </blockquote>

          <div className="mt-6 flex items-center">
            <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold">
              {activeTestimonial.client.name.charAt(0)}
            </div>
            <div className="ml-4">
              <div className="font-semibold">
                {activeTestimonial.client.name}
              </div>
              {activeTestimonial.client.role &&
                activeTestimonial.client.company && (
                  <div className="text-sm text-gray-600">
                    {activeTestimonial.client.role},{' '}
                    {activeTestimonial.client.company}
                  </div>
                )}
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {activeTestimonial.project.tags.map((tag) => (
              <span
                key={tag}
                className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === activeIndex ? 'bg-emerald-500' : 'bg-gray-400'
              }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
