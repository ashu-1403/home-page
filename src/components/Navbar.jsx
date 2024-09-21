import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="https://play-lh.googleusercontent.com/mNEe0pw6FpUqGUpeXaRC3yIBIOdsp9gqF1ppnu9B3t_LNHIVUZ0IxqHwvErVRLtXiQ" 
            alt="Logo"
            className="w-8 h-8"
          />
          <span className="font-bold text-green-500 text-xl">Printify</span>
        </div>

        <div className="md:hidden flex items-center ml-36">
          <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>

        <div className="hidden md:flex space-x-6">
          <a href="/" className="text-gray-600 hover:text-green-500">
            Catalog
          </a>
          <a href="/" className="text-gray-600 hover:text-green-500">
            How it works
          </a>
          <a href="/" className="text-gray-600 hover:text-green-500">
            Pricing
          </a>
          <a href="/" className="text-gray-600 hover:text-green-500">
            Blog
          </a>
          <a href="/" className="text-gray-600 hover:text-green-500">
            Services
          </a>
          <a href="/" className="text-gray-600 hover:text-green-500">
            Use-cases
          </a>
          <a href="/" className="text-gray-600 hover:text-green-500">
            Need help?
          </a>
        </div>

        
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-green-500 hidden md:inline-block">Log in</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 hidden md:inline-block">
            Sign up
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white py-2">
          <a href="/" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-green-500">
            Catalog
          </a>
          <a href="/" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-green-500">
            How it works
          </a>
          <a href="/" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-green-500">
            Pricing
          </a>
          <a href="/" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-green-500">
            Blog
          </a>
          <a href="/" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-green-500">
            Services
          </a>
          <a href="/" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-green-500">
            Use-cases
          </a>
          <a href="/" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-green-500">
            Need help?
          </a>
          <div className="flex flex-col px-4 py-2 space-y-2">
            <button className="text-gray-600 hover:text-green-500">Log in</button>
            <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
              Sign up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;