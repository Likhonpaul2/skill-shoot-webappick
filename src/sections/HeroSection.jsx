import React from "react";
import RightHeroImg from "../assets/hero-section-elements/image.png";
import instagram from "../assets/hero-section-elements/instragram.png";
import twitter from "../assets/hero-section-elements/twitter.png";
import discord from "../assets/hero-section-elements/discord.png";
import arrow from "../assets/hero-section-elements/arrow.png";
import vectorLine from "../assets/hero-section-elements/Vector 1.png";
import editIcon from "../assets/hero-section-elements/edit.png";
import playIcon from "../assets/hero-section-elements/play.png";
import calenderIcon from "../assets/hero-section-elements/calander.png";

const HeroSection = () => {
  const SocialMedia = [
    { path: instagram },
    { path: twitter },
    { path: discord },
  ];

  return (
    <div className="bg-primary-color">
      <div className="max-w-[1440px] mx-auto px-6 py-12 lg:px-20 lg:py-16">
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-10 lg:gap-0">
          {/* left-hero */}
          <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left relative">
            {/* heading */}
            <div className="relative inline-block">
              <h2 className="text-basic-text text-3xl sm:text-4xl lg:text-[60px] font-semibold leading-snug">
                There is always something new for us to learn
              </h2>
              <img
                className="absolute top-10 right-19 w-25 lg:w-auto lg:top-20 lg:right-43"
                src={vectorLine}
                alt="vector line"
              />
            </div>

            {/* sub-heading */}
            <p className="text-basic-text text-base text-[12px] lg:text-[18px] font-extralight leading-7 sm:leading-[35px] max-w-xl mx-auto lg:mx-0">
              We have created more than 100+ materials on various things that
              will help your career, with mentors who are experienced in their
              fields.
            </p>

            {/* button and social media */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
              {/* btn */}
              <div className="relative">
                <a
                  href="#"
                  className="text-basic-text text-[16px] lg:text-[20px] font-bold pl-6 pr-8 py-2 bg-secondary-color rounded-[4px] inline-block"
                >
                  Start Journey
                </a>
                <img
                  className="absolute right-3 top-4 w-[10px]"
                  src={arrow}
                  alt="arrow"
                />
              </div>

              {/* social media */}
              <div className="flex gap-4 mt-2 sm:mt-0">
                {SocialMedia.map((icon, i) => (
                  <img
                    key={i}
                    src={icon.path}
                    alt="social icon"
                    className="w-6 h-6 sm:w-7 sm:h-7"
                  />
                ))}
              </div>
            </div>

            {/* icons  */}
            <img
              className="lg:hidden  absolute -top-3 left-0 w-[35px]"
              src={editIcon}
              alt={editIcon}
            />
            <img
              className="lg:hidden absolute bottom-10 w-[35px]"
              src={calenderIcon}
              alt={calenderIcon}
            />
            <img
              className="lg:hidden absolute right-0 bottom-1 w-[35px]"
              src={playIcon}
              alt={playIcon}
            />
          </div>

          {/* right hero */}
          <div className="hidden lg:block lg:w-1/2 lg:justify-center lg:items-center relative">
            <img
              src={RightHeroImg}
              alt="Hero"
              className="lg:w-[490px] h-auto absolute right-0 top-9"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
