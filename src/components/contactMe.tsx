'use client';
import { useState, ChangeEvent, FormEvent } from 'react';

export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-16">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="w-full md:w-1/3">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Contact Me</h2>
          <p className="text-gray-700 mb-8">
            Feel free to reach out for collaboration opportunities or just to
            say hello.
          </p>

          <div className="flex flex-col gap-3 mt-6">
            <h3 className="text-sm font-semibold text-gray-700">
              Working on now:
            </h3>
            <div className="flex flex-wrap gap-2">
              <a
                href="https://github.com/VPAbraham/portfolio-v2"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-gray-50 text-gray-700 rounded-md border border-gray-200 hover:bg-gray-100 transition-colors flex items-center text-sm"
              >
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Personal Portfolio v2
              </a>

              {/* <a
                href="https://your-live-site.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-gray-50 text-gray-700 rounded-md border border-gray-200 hover:bg-gray-100 transition-colors flex items-center text-sm"
              >
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                E-commerce API
              </a>

              <a
                href="https://github.com/yourusername/project-three"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-gray-50 text-gray-700 rounded-md border border-gray-200 hover:bg-gray-100 transition-colors flex items-center text-sm"
              >
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                AI Content Generator
              </a> */}
            </div>
          </div>
        </div>

        <div className="w-full md:w-2/3">
          <form
            onSubmit={handleSubmit}
            className="accent-section p-6 rounded-lg space-y-5"
          >
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-md accent-input focus:accent-input-focus"
                required
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-md accent-input focus:accent-input-focus"
                required
              />
            </div>

            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                rows={6}
                className="w-full px-4 py-3 rounded-md accent-input focus:accent-input-focus resize-none"
                required
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="accent-button px-8 py-3 rounded-md font-medium transition-all"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
