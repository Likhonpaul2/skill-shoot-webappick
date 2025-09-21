import React from 'react';

const FooterNav = () => {
    const NavLinks = [
    { path: "#home", name: "Home" },
    { path: "#course", name: "Course" },
    { path: "#subscribe", name: "Subscribe" },
    { path: "#about", name: "About" },
    { path: "#testimoni", name: "Testimoni" },
  ];
    return (
        <nav className="bg-primary-color text-basic-text">
              <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between px-4 py-4 lg:px-20">
                {/* logo */}
                <div className="hidden lg:block text-[20px] lg:text-2xl font-bold">
                  Skill <span className="text-secondary-color">Shoot</span>
                </div>
        
                {/* desktop menu */}
                <div className=" flex flex-col gap-10 lg:gap-0 md:flex lg:flex-row not-first-of-type: items-center lg:space-x-7">
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

                {/* logo */}
                <div className="lg:hidden text-[20px] lg:text-2xl font-bold mt-20">
                  Skill <span className="text-secondary-color">Shoot</span>
                </div>
        
        
                
              </div>
        
            </nav>
    );
};

export default FooterNav;