'use client';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="h-screen flex flex-col items-center justify-center text-center ">
      <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
        I build seamless, user-friendly digital experiences with clean, scalable
        code.
      </h1>
      {/* <p className="text-lg md:text-2xl text-gray-600 max-w-2xl">
        I build seamless, user-friendly digital experiences with clean, scalable
        code.
      </p> */}
      <div className="mt-12">
        <a href="#selected-projects" aria-label="Scroll down">
          <svg
            className={`w-10 h-10 md:w-12 md:h-12 text-primary transition-transform duration-300 ${
              isScrolled ? 'opacity-50' : 'hover:scale-125'
            }`}
            xmlns="http://www.w3.org/2000/svg"
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
        </a>
      </div>
    </section>
  );
}
