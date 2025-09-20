import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import product1 from "../assets/product-section-elements/img-1.png";
import product2 from "../assets/product-section-elements/img-2.png";
import product3 from "../assets/product-section-elements/img-3.png";

import avatar1 from "../assets/product-section-elements/user1.png";
import avatar2 from "../assets/product-section-elements/user2.png";
import avatar3 from "../assets/product-section-elements/user3.png";

import icon from "../assets/product-section-elements/bx-user 1.png";
import orangOval from "../assets/discount-section-elements/oval-ring-icon.png";
import orangRactangle from "../assets/discount-section-elements/Group 575.png";

// custom arrows
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-[20px] sm:left-[-35px] lg:left-[-40px] 
               top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full shadow-md 
               p-2 z-10 w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] lg:w-[67px] lg:h-[67px] flex items-center justify-center"
  >
    <FaArrowLeft className="text-primary-color" size={20} />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-[20px] sm:right-[-35px] lg:right-[-40px] 
               top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full shadow-md 
               p-2 z-10 w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] lg:w-[67px] lg:h-[67px] flex items-center justify-center"
  >
    <FaArrowRight className="text-primary-color" size={20} />
  </button>
);

// card details 
const courses = [
  {
    id: 1,
    title: "Basics of learning team management",
    instructor: "Jone Owel",
    role: "IT Manager",
    participants: 120,
    price: 120,
    img: product1,
    avatar: avatar1,
    icon: icon,
  },
  {
    id: 2,
    title: "Learn basic database structure",
    instructor: "Roynaldo Jr",
    role: "Data Science",
    participants: 55,
    price: 180,
    img: product2,
    avatar: avatar2,
    icon: icon,
  },
  {
    id: 3,
    title: "Create dynamic website with basic php",
    instructor: "David Kim",
    role: "Programmer",
    participants: 98,
    price: 135,
    img: product3,
    avatar: avatar3,
    icon: icon,
  },
  {
    id: 4,
    title: "Effective Communication in Teams",
    instructor: "David Kim",
    role: "Team Lead",
    participants: 200,
    price: 100,
    img: product3,
    icon: icon,
  },
];

const CourseSlider = () => {
  // slider details 
  const settings = {

    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: { slidesToShow: 2, arrows: true, dots: false },
      },
      {
        breakpoint: 768, // Mobile
        settings: { slidesToShow: 1, arrows: true, dots: false },
      },
    ],
  };

  return (
    // main div 
    <div className="bg-primary-color py-20 px-4 sm:px-6 relative">
      {/* Background icons */}
      <img
        src={orangOval}
        alt="icon"
        className="absolute right-5 top-[50px] w-[17px] lg:w-fit  lg:block"
      />
      <img
        src={orangRactangle}
        alt="icon"
        className="absolute top-[35px] left-8 w-[39px] lg:w-fit lg:block"
      />

      {/* heading */}
      <div className="text-center mb-8">
        <h2 className="text-white text-xl sm:text-2xl lg:text-[36px] font-semibold">
          Popular courses of the week
        </h2>
        <p className="text-gray-300 mt-2 text-sm  sm:text-base lg:text-[16px] font-light lg:w-[347px] mx-auto leading-[25px] lg:leading-[35px]">
          List of the most popular lists that are often studied by our members
        </p>
      </div>

      {/* slider */}
      <Slider {...settings} className="!gap-6">
        {/* card details map   */}
        {courses.map((course) => (
          <div key={course.id} className="px-2 sm:px-4">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden 
                            w-[276px] h-auto sm:w-[300px] md:w-[350px] lg:w-[413px] lg:h-[527px] mx-auto">
              
              {/* img div  */}
              <div className="relative">
                <img
                  src={course.img}
                  alt={course.title}
                  className="w-full h-[160px] sm:h-[200px] md:h-[220px] lg:h-[249px] object-cover"
                />
                <button className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white rounded-full p-4 shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary-color"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </button>
              </div>

              {/* card bode  */}
              <div className="p-4 sm:p-6 space-y-6">
                <h3 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-semibold">
                  {course.title}
                </h3>

                {/* instructor and participants */}
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex gap-2 items-center">
                    <img
                      src={course.avatar}
                      alt={course.instructor}
                      className="w-8 h-8 rounded-full"
                    />
                    <div className="flex flex-col">
                      <span className="text-[12px] sm:text-[14px] font-semibold text-[#2C2C2C]">
                        {course.instructor}
                      </span>
                      <span className="text-gray-400 text-[10px] sm:text-[12px]">
                        {course.role}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <img
                      src={course.icon}
                      alt="icon"
                      className="w-[30px] h-[30px] sm:w-[35px] sm:h-[35px]"
                    />
                    <div className="flex flex-col leading-tight">
                      <h6 className="text-[14px] sm:text-[16px] font-semibold">
                        {course.participants}
                      </h6>
                      <p className="text-[9px] sm:text-[10px] text-gray-500">
                        Participant
                      </p>
                    </div>
                  </div>
                </div>

                {/* price and button */}
                <div className="flex justify-between items-center mt-4">
                  <button className="bg-primary-color text-white px-3 sm:px-4 py-2 rounded-lg font-medium hover:bg-primary-color text-sm sm:text-base">
                    Buy Now
                  </button>
                  <span className="text-[14px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-semibold">
                    ${course.price}{" "}
                    <span className="text-[10px] sm:text-[12px]">/25 Video</span>
                  </span>
                </div>


              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CourseSlider;
