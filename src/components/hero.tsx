'use client';
import { useEffect } from 'react';

export default function Hero() {
  useEffect(() => {
    // Add styles for gradient animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes gradientAnimation {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }

      .animated-gradient {
        background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
        background-size: 400% 400%;
        animation: gradientAnimation 15s ease infinite;
      }

      .wave-bg {
        position: relative;
        overflow: hidden;
      }

      .wave-bg::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 40%;
        background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='white' fill-opacity='1' d='M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,202.7C672,203,768,181,864,176C960,171,1056,181,1152,186.7C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E");
        background-size: cover;
        background-repeat: no-repeat;
        animation: wave 15s linear infinite;
        z-index: 1;
      }

      @keyframes wave {
        0% {
          background-position-x: 0%;
        }
        100% {
          background-position-x: 100%;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section className="h-screen flex flex-col items-center justify-center wave-bg animated-gradient px-6">
      <div className="max-w-screen-lg w-full z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-8">
          I BUILD THINGS <br />
          WITH MY MOUSE <br />
          AND KEYBOARD.
        </h1>

        <div className="mt-12">
          <a
            href="#projects"
            className="inline-flex items-center text-white group"
          >
            <span className="mr-2">SEE WHAT I'VE BUILT</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="12"
              viewBox="0 0 40 12"
              className="transform transition-transform group-hover:translate-x-2"
            >
              <line
                x1="0"
                y1="6"
                x2="38"
                y2="6"
                stroke="currentColor"
                strokeWidth="1"
              />
              <polygon points="32,2 39,6 32,10" fill="currentColor" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
