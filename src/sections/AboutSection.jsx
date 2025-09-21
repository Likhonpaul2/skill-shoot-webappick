import React from "react";
import image from "../assets/about-section-elements/Image.png";
import playIcon from "../assets/about-section-elements/play.png";
import userIcon from "../assets/about-section-elements/user.png";
import videoIcon from "../assets/about-section-elements/video.png";
import varifyIcon from "../assets/about-section-elements/varify.png";
import vectorLine from "../assets/hero-section-elements/Vector 1.png";

const AboutSection = () => {
  const youGetDetails = [
    { id: 1, title: "15K People Join", icon: userIcon },
    { id: 2, title: "Trusted Mentor", icon: varifyIcon },
    { id: 3, title: "30+ Free Videos", icon: videoIcon },
    { id: 4, title: "100+ Premium Videos", icon: playIcon },
  ];

  return (
    <section id="about">
      <div className="lg:max-w-[1142px] mx-auto my-[50px] lg:my-[100px] flex flex-col lg:flex-row items-center lg:space-x-[110px] px-8 lg:px-0">
        {/* Left image */}
        <div className="hidden lg:block w-full lg:w-[50%]  justify-center mb-8 lg:mb-0">
          <img src={image} alt="about" className="w-[80%] lg:w-[457px]" />
        </div>

        {/* Right content */}
        <div className="w-full lg:w-[50%]">
          {/* Heading */}
          <div className="relative mb-8">
            <h3 className="text-[20px] lg:text-[48px] font-semibold  lg:text-left">
              Let us <span className="text-primary-color">Skill Shoot</span>
            </h3>

            {/* bg img  */}
            <img
              src={vectorLine}
              alt="line"
              className="absolute   w-25 sm:w-25 lg:w-64 sm:left-16 lg:top-14 right-50 lg:left-35"
            />
          </div>

          {/* sub-heading */}
          <div className="space-y-4 mb-8">
            <p className="text-[14px] lg:text-[16px] text-secondary-text leading-[28px] lg:leading-[35px] font-light  lg:text-left">
              We are a company engaged in education with the aim of improving
              the skills of many people and so that younger people can reach the
              career paths they want.
            </p>
            <p className="text-[14px] lg:text-[16px] text-secondary-text leading-[28px] lg:leading-[35px] font-light  lg:text-left">
              We have been around since 2019 with currently 100+ updated
              materials and 15K members who have joined.
            </p>
          </div>

          {/* you get section */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-6">
            {youGetDetails.map((details) => (
              <div key={details.id} className="flex items-center gap-4">
                {/* circle icon background */}
                <div className="flex items-center justify-center">
                  <img
                    src={details.icon}
                    alt={details.title}
                    className="w-8 lg:w-fit"
                  />
                </div>
                {/* title */}
                <h3 className="text-[12px] sm:text-[16px] font-medium text-gray-800">
                  {details.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
