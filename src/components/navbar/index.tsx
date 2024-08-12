import React, { useState } from "react";
import "./navbar.css";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" text-white fixed w-full z-50"> {/* Added background and z-index */}
      <div className="container mx-auto flex justify-between items-center p-4"> {/* Added padding */}
        <div className="logo">
          <a href="#home" className="rotating-text">
            Roy
          </a>
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="#home" className="hover:text-gray-400">
            Home
          </a>
          <a href="#about" className="hover:text-gray-400">
            About
          </a>
          <a href="#services" className="hover:text-gray-400">
            Services
          </a>
          <a href="#contact" className="hover:text-gray-400">
            Contact
          </a>
        </div>
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
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
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-2 mt-2">
            <a href="#home" className="block p-2 hover:bg-gray-700">
              Home
            </a>
            <a href="#about" className="block p-2 hover:bg-gray-700">
              About
            </a>
            <a href="#services" className="block p-2 hover:bg-gray-700">
              Services
            </a>
            <a href="#contact" className="block p-2 hover:bg-gray-700">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;