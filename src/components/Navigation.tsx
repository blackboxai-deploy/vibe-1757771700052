"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
  { name: "Book", href: "/book" },
  { name: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="bg-white shadow-lg border-b-2 border-sky-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-3 group"
            onClick={closeMenu}
          >
            <img
              src="https://i.postimg.cc/YqtGN1NK/IMG-20250808-WA0128.jpg"
              alt="Shobha Beauty Studio & Nails Logo"
              className="h-14 w-14 object-contain rounded-lg bg-white shadow-sm"
            />
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl text-gray-900 group-hover:text-sky-600 transition-colors">
                Shobha Beauty Studio
              </span>
              <span className="font-sans text-sm text-sky-600 -mt-1">
                & Nails • Since 2011
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  pathname === item.href
                    ? "bg-sky-500 text-white shadow-md"
                    : "text-gray-700 hover:text-sky-600 hover:bg-sky-50"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Info & Book Button - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+97143591532"
              className="text-sky-600 hover:text-sky-700 font-medium text-sm flex items-center space-x-2"
            >
              <span>📞</span>
              <span>+971 4 359 1532</span>
            </a>
            <Link
              href="/book"
              className="bg-gradient-to-r from-sky-500 to-sky-600 text-white px-6 py-2 rounded-full font-medium text-sm hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-96 opacity-100 pb-6"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="pt-4 pb-2 space-y-2">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                  pathname === item.href
                    ? "bg-sky-500 text-white shadow-md"
                    : "text-gray-700 hover:text-sky-600 hover:bg-sky-50"
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile Contact & Book */}
            <div className="pt-4 border-t border-gray-200 space-y-3">
              <a
                href="tel:+97143591532"
                className="block px-4 py-2 text-sky-600 font-medium"
                onClick={closeMenu}
              >
                📞 Call: +971 4 359 1532
              </a>
              <Link
                href="/book"
                onClick={closeMenu}
                className="block mx-4 bg-gradient-to-r from-sky-500 to-sky-600 text-white px-6 py-3 rounded-full font-medium text-center hover:shadow-lg transition-all duration-200"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}