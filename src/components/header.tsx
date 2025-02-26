'use client';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <header className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 py-4 flex justify-between items-center">
          {/* Name / Logo */}
          <p className="text-2xl site-name text-gray-900 uppercase">
            VICTOR ABRAHAM
          </p>

          {/* Toggle button - hamburger or X */}
          <button
            onClick={toggleMenu}
            className="text-gray-900"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              // X icon when menu is open
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              // Hamburger icon when menu is closed
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Centered Menu with borders */}
      {isOpen && (
        <div className="bg-gray-100 border-b border-gray-200">
          <div className="mx-auto max-w-5xl px-6 lg:px-8 py-4">
            <nav className="grid grid-cols-4 gap-4">
              {['Home', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="py-3 text-center nav-link text-gray-800 hover:text-gray-900 transition-colors border border-gray-300 bg-white"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
