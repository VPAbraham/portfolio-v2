'use client';
import { useState, useRef, useEffect } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="container flex justify-between items-end py-4">
      {/* Left: Name */}
      <p className="text-3xl font-bold tracking-wide">VICTOR ABRAHAM</p>

      {/* Right: Hamburger Menu */}
      <div ref={menuRef} className="relative">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="btn btn-ghost btn-circle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <ul className="absolute right-0 mt-2 w-48 bg-white rounded-lg p-2 border border-gray-300">
            {['Home', 'Skills', 'Projects'].map((item) => (
              <li key={item}>
                <a className="block py-2 px-4 hover:bg-gray-100">{item}</a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
};

export default Header;
