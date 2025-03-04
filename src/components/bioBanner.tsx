'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function BioBanner() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="w-full py-12 border-b border-gray-100">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="w-32 h-32 md:w-48 md:h-48 relative rounded-full overflow-hidden border-4 border-white shadow-lg">
          <Image
            src="/portrait.jpg"
            alt="Victor Abraham"
            width={192}
            height={192}
            className="object-cover w-full h-full"
            onError={(e) => {
              // Fallback to a placeholder if image fails to load
              e.currentTarget.src =
                'https://via.placeholder.com/400x400.png?text=VA';
            }}
          />
        </div>

        {/* Bio Content */}
        <div className="flex-1">
          <div className="mb-4 flex flex-col sm:flex-row sm:items-center gap-3">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Victor Abraham
            </h1>
            <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full inline-flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Available for Work
            </span>
          </div>

          <h2 className="text-xl text-gray-700 mb-4">Software Engineer</h2>

          <div className={`text-gray-600 ${!showMore ? 'line-clamp-3' : ''}`}>
            <p className="mb-3">
              4+ years of experience building responsive, user-centric web
              applications with React, Next.js, and TypeScript. Passionate about
              creating seamless user experiences through clean code and
              innovative solutions.
            </p>

            {showMore && (
              <>
                <p className="mb-3">
                  I specialize in building scalable frontend architectures and
                  bridging the gap between design and development. My background
                  in both startups and enterprise environments has given me the
                  versatility to adapt to any team`s needs.
                </p>
                <p className="mb-3">
                  Currently seeking opportunities to work on challenging
                  projects that push the boundaries of web technology while
                  maintaining best practices in performance and accessibility.
                </p>
              </>
            )}
          </div>

          <button
            onClick={() => setShowMore(!showMore)}
            className="mt-2 text-blue-600 hover:text-blue-800 transition-colors flex items-center"
          >
            {showMore ? 'Show less' : 'Read more'}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 ml-1 transition-transform ${
                showMore ? 'rotate-180' : ''
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <div className="flex flex-wrap gap-4 mt-6">
            <a
              href="/resume.pdf"
              download="resume.pdf"
              className="accent-button px-5 py-2 rounded-md font-medium transition-all flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                />
              </svg>
              Download Resume
            </a>

            <a
              href="#contact"
              className="border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 px-5 py-2 rounded-md font-medium transition-all flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
