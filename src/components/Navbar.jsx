import React, { useState } from "react";
import Menu from "../assets/nav-elements/ep_menu.png";
import X from "../assets/nav-elements/ep_menu.png";

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
    <nav className="bg-primary-color text-basic-text">
      <div className="max-w-full mx-auto flex items-center justify-between px-4 py-4 lg:px-20">
        {/* logo */}
        <div className="text-[20px] lg:text-2xl font-bold">
          Skill <span className="text-secondary-color">Shoot</span>
        </div>

        {/* desktop menu */}
        <div className="hidden md:flex items-center space-x-7">
          {NavLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="text-[18px] text-basic-text/60 font-extralight hover:text-basic-text transition"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* desktop buttons */}
        <div className="hidden md:flex items-center space-x-5">
          <a href="#login" className="font-extralight">
            Login
          </a>
          <a
            href="#register"
            className="font-extralight px-6 py-2 bg-secondary-color rounded-[8px]"
          >
            Register
          </a>
        </div>

        {/* mobile menu hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? <img src={X} alt="X" /> : <img src={Menu} alt="menu" />}
        </button>
      </div>

      {/* mobile menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 pb-4">
          {NavLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="text-[18px] font-extralight hover:text-secondary-color transition"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-col items-center space-y-2 mt-4">
            <a href="#login" className="font-extralight">
              Login
            </a>
            <a
              href="#register"
              className="font-extralight px-6 py-2 bg-secondary-color  shadow rounded-[8px]"
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
