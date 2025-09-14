'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react' // ⬅️ icons

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/black-logo.png"
            alt="Logo"
            width={120}
            height={120}
            className="rounded-full w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 transition-transform hover:scale-105"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-gray-800 font-medium text-xl">
          <Link href="#home" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link
            href="#skills"
            className="hover:text-blue-600 transition-colors"
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className="hover:text-blue-600 transition-colors"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="hover:text-blue-600 transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-md overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col items-center space-y-4 py-6 text-gray-800 font-medium">
          <Link
            href="#home"
            className="hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="#skills"
            className="hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className="hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
