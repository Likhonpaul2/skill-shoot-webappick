import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const NavLinks = [
    { path: "#home", name: "Home" },
    { path: "#course", name: "Course" },
    { path: "#subscribe", name: "Subscribe" },
    { path: "#about", name: "About" },
    { path: "#testimoni", name: "Testimoni" },
  ];

  return (
    <nav className="bg-primary-color text-basic-text w-full">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-4 py-3 sm:py-4 sm:px-6 lg:px-20">
        
        {/* logo */}
        <div className="text-lg sm:text-xl md:text-2xl font-bold">
          Skill <span className="text-secondary-color">Shoot</span>
        </div>

        {/* desktop menu */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-7">
          {NavLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="text-base lg:text-lg text-basic-text/60 font-extralight hover:text-basic-text transition"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* desktop buttons */}
        <div className="hidden md:flex items-center space-x-3 lg:space-x-5">
          <a href="#login" className="font-extralight text-base lg:text-lg">
            Login
          </a>
          <a
            href="#register"
            className="font-extralight px-4 py-1.5 lg:px-6 lg:py-2 bg-secondary-color rounded-[8px] text-base lg:text-lg"
          >
            Register
          </a>
        </div>

        {/* mobile menu hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <IoClose size={26} /> : <TiThMenu size={26} />}
        </button>
      </div>

      {/* mobile menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 pb-4 bg-primary-dark py-5 w-full z-50">
          {NavLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="text-base sm:text-lg font-extralight hover:text-secondary-color transition"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-col items-center space-y-2 mt-4 w-full">
            <a href="#login" className="font-extralight text-base sm:text-lg">
              Login
            </a>
            <a
              href="#register"
              className="font-extralight px-4 py-1.5 sm:px-6 sm:py-2 bg-secondary-color shadow rounded-[8px] text-base sm:text-lg"
            >
              Register
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
