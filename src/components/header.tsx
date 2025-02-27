'use client';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent scrolling when menu is open
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <header
      className={`sticky top-0 w-full bg-white z-50 transition-all duration-200 ${
        isScrolled ? 'shadow-md' : ''
      }`}
    >
      {/* Regular header always visible */}
      <div className="lg:container mx-auto px-4 md:px-8 flex justify-between items-center py-5">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold text-gray-900 uppercase tracking-wider"
        >
          VICTOR ABRAHAM
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {['Home', 'Skills', 'Projects', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-800 hover:text-gray-900 hover:underline decoration-2 underline-offset-8 py-2 text-base font-medium transition-all"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-900 p-1 focus:outline-none focus:ring-2 focus:ring-gray-200 rounded"
          aria-label="Toggle menu"
        >
          {isOpen ? (
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

      {/* Mobile Menu Overlay - using a portal approach to prevent content shift */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col md:hidden">
          <div className="px-4 md:px-8 flex justify-between items-center py-5">
            <a
              href="#home"
              className="text-2xl font-bold text-gray-900 uppercase tracking-wider"
            >
              VICTOR ABRAHAM
            </a>
            <button
              onClick={closeMenu}
              className="text-gray-900 p-1 focus:outline-none focus:ring-2 focus:ring-gray-200 rounded"
              aria-label="Close menu"
            >
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
            </button>
          </div>

          <div className="flex items-center justify-center flex-grow">
            <nav className="grid grid-cols-1 gap-4 w-full px-4 md:px-6 max-w-sm">
              {['Home', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-center py-4 text-lg font-medium border border-gray-200 hover:bg-gray-50 transition-colors"
                  onClick={closeMenu}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
