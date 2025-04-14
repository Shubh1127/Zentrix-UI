import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/10 backdrop-blur-md z-50 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-black">Zentrix</h1>
        <ul className="flex space-x-6">
          <li>
            <a href="#home" className="text-black hover:text-yellow-400 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-black hover:text-yellow-400 transition">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="text-black hover:text-yellow-400 transition">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="text-black hover:text-yellow-400 transition">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;      