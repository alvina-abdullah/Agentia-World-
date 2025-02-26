'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed mx-auto top-0 z-10 w-full bg-gradient-to-r from-gray-900 to-indigo-900 p-4 text-white shadow-lg ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center text-xl font-bold">
          <span className="mr-2 text-2xl">🤖</span> Agentia <span className="text-purple-500">World</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="#technology" className="flex items-center gap-2 hover:text-indigo-400">
            ⚙️ Technology
          </Link>
          <Link href="#agents" className="flex items-center gap-2 hover:text-indigo-400">
            🤖 Agents
          </Link>
          <Link href="#pricing" className="flex items-center gap-2 hover:text-indigo-400">
            💲 Pricing
          </Link>
          <Link href="#contact" className="flex items-center gap-2 hover:text-indigo-400">
            ✉️ Contact
          </Link>
        </div>

        {/* CTA Button */}
        <Link
          href="/"
          className="hidden md:block bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2 rounded-lg text-white font-semibold hover:opacity-80"
        >
          Get Started
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-4 bg-gray-800 p-4 rounded-lg">
          <Link href="#technology" className="hover:text-indigo-400">
            ⚙️ Technology
          </Link>
          <Link href="#agents" className="hover:text-indigo-400">
            🤖 Agents
          </Link>
          <Link href="#pricing" className="hover:text-indigo-400">
            💲 Pricing
          </Link>
          <Link href="#contact" className="hover:text-indigo-400">
            ✉️ Contact
          </Link>
          <Link
            href="#get-started"
            className="bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2 rounded-lg text-white font-semibold text-center"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

