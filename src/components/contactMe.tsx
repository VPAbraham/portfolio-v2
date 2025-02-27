'use client';
import { useState } from 'react';

export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
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

          <div className="flex space-x-6 mb-6">
            <a
              href="https://github.com/vpabraham"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2a10 10 0 00-3.16 19.49c.5.09.69-.22.69-.49 0-.24-.01-.86-.01-1.69-2.78.6-3.37-1.34-3.37-1.34-.46-1.17-1.11-1.49-1.11-1.49-.91-.63.07-.62.07-.62 1 .07 1.52 1.02 1.52 1.02.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.64-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.99 1.02-2.69-.1-.25-.45-1.27.1-2.65 0 0 .83-.27 2.75 1.02a9.59 9.59 0 015 0c1.92-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.63.7 1.02 1.6 1.02 2.69 0 3.84-2.33 4.69-4.55 4.94.36.31.69.92.69 1.86 0 1.34-.01 2.42-.01 2.75 0 .27.18.59.69.49A10 10 0 0012 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            <a
              href="https://linkedin.com/in/victorpabraham"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 20h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-1.337-.026-3.063-1.867-3.063-1.868 0-2.155 1.46-2.155 2.963v5.704h-3v-11h2.887v1.504h.041c.403-.76 1.387-1.562 2.852-1.562 3.048 0 3.618 2.007 3.618 4.618v6.44z" />
              </svg>
            </a>

            <a
              href="mailto:vpa456@gmail.com"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 13.5l-12-8.5v14h24v-14l-12 8.5zm0-2.5l12-8h-24l12 8z" />
              </svg>
            </a>
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
