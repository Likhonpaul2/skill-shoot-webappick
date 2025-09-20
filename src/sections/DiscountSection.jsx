import React from "react";
import boyImg from "../assets/discount-section-elements/boy.png";
import orangeRectangle from "../assets/discount-section-elements/Group 575.png";
import orangeOval from "../assets/discount-section-elements/oval-ring-icon.png";
import leftGreenRectangle from "../assets/discount-section-elements/left-green-icon.png";
import rightGreenRectangle from "../assets/discount-section-elements/right-green-icon.png";
import leftTopIcon from "../assets/discount-section-elements/left-top-icon.png";
import rightBottomIcon from "../assets/discount-section-elements/right-bottom-icon.png";

const DiscountSection = () => {
  return (
    <section>
      <div className="max-w-[1280px] mx-auto lg:my-[100px] lg:relative relative px-11 lg:px-0">
        {/* background rectangle  */}
        <div className="bg-secondary-bg lg:px-16 lg:py-13 lg:flex lg:rounded-[10px] pt-[77px] px-5 pb-[98px] rounded-[10px]">
        {/* left discount section  */}
        <div className="lg:w-[50%] space-y-5 lg:space-y-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="text-[18px] lg:text-[36px] lg:font-semibold">
                Happy{" "}
                <span className="text-secondary-color">Chinese New Year</span>,
                20% discount for you today
            </h2>

            {/* subscribe btn  */}
            <button className="bg-primary-color text-white text-[14px] lg:text-[20px] lg:font-bold px-[25px] py-[15px] rounded-[4px]">
                Subscribe Course
            </button>
        </div>

        {/* right discount section  */}
          <div className="hidden lg:block lg:w-1/2 lg:justify-center lg:items-center relative">
            {/* boy img  */}
            <img
              src={boyImg}
              alt={`discount boyImage`}
              className="absolute -top-46 right-[143px]"
            />

            {/* left-green-rectangle-icon  */}
            <img
              src={leftGreenRectangle}
              alt={`discount boyImage`}
              className="absolute top-[0px] right-[404px]"
            />

            {/* right-orange-rectangle-icon  */}
            <img
              src={orangeRectangle}
              alt={`discount boyImage`}
              className="absolute top-[0px] right-[80px]"
            />

            {/* left-orange-oval-icon  */}
            <img
              src={orangeOval}
              alt={`discount boyImage`}
              className="absolute bottom-[0px] right-[387px]"
            />

            {/* right-green-rectangle-icon   */}
            <img
              src={rightGreenRectangle}
              alt={`discount boyImage`}
              className="absolute -bottom-5 right-[123px]"
            />
          </div>
        </div>

        {/* style img's  */}
        <img
          src={leftTopIcon}
          alt="leftTopIcon"
          className="absolute top-0 w-[41px] lg:w-fit lg:absolute lg:top-0 "
        />
        <img
          src={rightBottomIcon}
          alt="leftTopIcon"
          className="absolute right-11 w-[41px] lg:w-fit bottom-0 lg:absolute lg:right-0 lg:bottom-0 "
        />
        <img src={orangeOval} alt="orangeOval" className="absolute lg:hidden bottom-[27px] left-20 "/>
      </div>
    </section> 
  );
};

export default DiscountSection;
