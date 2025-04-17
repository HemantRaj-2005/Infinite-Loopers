"use client"
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const items = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Blogs", href: "/blogs" },
    { label: "Suggestion Box", href: "/suggestion-box" },
    { label: "Event Tracker", href: "/event-tracker" },
    { label: "Roadmap", href: "/roadmap" },
    { label: "Dashboard", href: "/dashboard" },
  ];

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="p-2 text-gray-200 focus:outline-none"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-gray-950 shadow-lg">
          <nav className="px-4 py-2">
            {items.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`block py-2 text-gray-200 hover:text-cyan-300 ${
                  pathname === item.href ? 'text-cyan-300 font-bold' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}

export default MobileNavbar; 