import React from "react";
import leftTopIcon from "../assets/discount-section-elements/left-top-icon.png";
import orangeRactangle from "../assets/discount-section-elements/Group 575.png"

const JoinSection = () => {
  return (
    <section>
      <div className="max-w-[1280px] mx-auto my-[50px] lg:my-[100px] relative px-6 lg:px-0">
        {/* background rectangle */}
        <div className="bg-secondary-bg h-78 lg:h-fit flex flex-col lg:flex-row lg:items-center lg:justify-between lg:px-16 lg:py-12 px-10 py-10 rounded-[10px] text-center lg:text-left gap-6">
          {/* Left text */}
          <div className="flex-1">
            <h2 className="text-[20px] sm:text-[24px] lg:text-[36px] font-semibold leading-relaxed lg:leading-[48px]">
              <span className="text-secondary-color">Improve</span>, your
              skills, and reach your career as soon as possible
            </h2>
          </div>

          {/* Right buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end flex-1 relative">
            <button className="bg-secondary-color text-white text-[14px] sm:text-[16px] lg:text-[20px] font-medium lg:font-bold px-6 py-3 rounded-md hover:opacity-90 w-fit mx-auto lg:m-0">
              Join Now
            </button>
            <button className="bg-primary-color text-white text-[14px] sm:text-[16px] lg:text-[20px] font-medium lg:font-bold px-6 py-3 rounded-md hover:opacity-90 w-fit mx-auto lg:m-0">
              Subscribe Course
            </button>

            <img src={orangeRactangle} alt="icon" className="absolute w-7 lg:w-fit -right-13 bottom-10 lg:left-0 lg:-bottom-30"/>
          </div>
        </div>

        {/* Style icon */}
        <img
          src={leftTopIcon}
          alt="leftTopIcon"
          className="absolute top-0 left-6 lg:top-0 lg:left-0  w-8 lg:w-12"
        />
      </div>
    </section>
  );
};

export default JoinSection;
