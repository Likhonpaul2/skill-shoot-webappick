import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import orangOval from "../assets/testimoniS-section-elements/ornamen oval.png";
import orangRactangle from "../assets/testimoniS-section-elements/ornamen.png";


import person1 from "../assets/testimoniS-section-elements/person1.png"
import person2 from "../assets/testimoniS-section-elements/person2.png"
import person3 from "../assets/testimoniS-section-elements/person3.png"

import starIcon from '../assets/testimoniS-section-elements/Star.png'

// custom arrows
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-[35%] sm:left-[-35px] lg:left-[42%] 
               -bottom-20 lg:-bottom-40 transform -translate-y-1/2 bg-white/80 rounded-full shadow-md 
               p-2 z-10 w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] lg:w-[67px] lg:h-[67px] flex items-center justify-center hover:bg-secondary-color group"
  >
    <FaArrowLeft className="text-primary-color group-hover:text-white" size={20} />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-[35%] sm:right-[-35px] lg:right-[42%] 
               -bottom-20 lg:-bottom-40 transform -translate-y-1/2 bg-white/80 rounded-full shadow-md 
               p-2 z-10 w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] lg:w-[67px] lg:h-[67px] flex items-center justify-center hover:bg-secondary-color group"
  >
    <FaArrowRight className="text-primary-color group-hover:text-white" size={20} />
  </button>
);

// card details
const courses = [
  {
    id: 1,
    title: "I am quite satisfied, because the skills I want or dream of can really be mastered",
    instructor: "Jason Bay",
    img: person1,
  },
  {
    id: 2,
    title: "I am quite satisfied, because the skills I want or dream of can really be mastered",
    instructor: "Nany Brugman",
    img: person2,
  },
  {
    id: 3,
    title: "CI am quite satisfied, because the skills I want or dream of can really be mastered",
    instructor: "Alexa Nowan",
    img: person3,
  },
  {
    id: 4,
    title: "I am quite satisfied, because the skills I want or dream of can really be mastered",
    instructor: "Jason Bay",
    img: person1,
  },
];

const TestimoniSlider = () => {
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
    <div className=" py-20 px-4 sm:px-6 relative">
      {/* Background icons */}
      <img
        src={orangOval}
        alt="icon"
        className="absolute lg:hidden right-10 -top-20 w-[17px] lg:w-fit"
      />
      <img
        src={orangRactangle}
        alt="icon"
        className="absolute -top-30 left-8 w-[39px] lg:w-fit lg:hidden"
      />

      {/* slider */}
      <Slider {...settings} className="!gap-6">
        {/* card details map   */}
        {courses.map((course) => (
          <div key={course.id} className="px-2 sm:px-4">


            <div
              className="bg-white lg:bg-white/0 lg:hover:bg-white hover:shadow-md 
                            w-[276px] h-auto sm:w-[300px] md:w-[350px] lg:w-[413px] lg:h-[346px] mx-auto border-b-6 lg:border-b-0 lg:hover:border-b-6 border-primary-color lg:hover:border-primary-color transition duration-200"
            >
                {/* inner div  */}
              <div className="w-64 lg:w-79 pt-9 lg:pt-12 flex flex-col justify-center mx-auto">

                {/* img div  */}
              <div className="flex justify-center items-center">
                <img
                  src={course.img}
                  alt={course.title}
                  className="w-15 h-15 lg:w-18 lg:h-18"
                />
              </div>

              {/* rating div  */}
              <div className="flex gap-2 justify-center mt-4 w-24 lg:w-fit mx-auto">
                {
                    [1,2,3,4,5].map(index=>(
                        <img key={index} src={starIcon} className=" lg:w-fit"/>
                    ))
                }
              </div>

              {/* card body  */}
              <div className="p-4 sm:p-6 space-y-2 text-center">

                <h3 className="text-[18px] lg:text-[24px] ">{course.instructor}</h3>
                <p className="text-[12px] lg:text-[16px] font-light text-secondary-text leading-[30px] lg:leading-[35px]">{course.title}</p>

              </div>
              </div>
            </div>


          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimoniSlider;
