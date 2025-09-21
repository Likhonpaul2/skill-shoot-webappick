import React from "react";
import ovalIcon from "../assets/footer-section-elements/ring.png"
import vectorIcon from "../assets/footer-section-elements/Vector 15.png"
import FooterNav from "../components/FooterNav";

const FooterSeciton = () => {
  return (
    <section>
      <div className="bg-primary-color py-26 lg:pt-29 lg:pb-10">
        <div className="lg:max-w-[1280px] mx-auto lg:space-y-16 space-y-10 relative">
          {/* heading + sub-heading  */}
          <div className="space-y-5 lg:space-y-3">
            {/* heading  */}
            <h3 className="text-white text-[18px] lg:text-[36px] text-center w-56 lg:w-fit mx-auto">
              Subscribe to get notified about update
            </h3>

            <p className="text-white w-77 lg:w-fit mx-auto text-center text-[12px] lg:text-[16px] font-extralight">
              By subscribing with your mail, you will accept our privacy policy
            </p>
          </div>

          {/* input box and btn  */}
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 justify-center items-center">
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="bg-white/20 w-74 lg:w-95 h-11 lg:h-15 rounded-sm  text-white pl-8 text-[12px]
                lg:text-[16px]"
            />

            {/* right buttons */}

            <button className="bg-secondary-color text-white text-[14px] sm:text-[16px] lg:text-[16px]  lg:font-light px-6 py-3 lg:py-4 rounded-md hover:opacity-90">
              Subscribe us
            </button>

          </div>


          {/* style img  */}
          <img src={ovalIcon} alt="oval" className="absolute w-[45px] lg:w-[62px] -bottom-10 right-10 lg:top-[50%] lg:right-0"/>
          <img src={vectorIcon} alt="oval" className="absolute w-[50px] lg:w-[68px] left-10 -bottom-50 lg:left-[91px] lg:bottom-5"/>
        </div>


        {/* footer nav  */}
        <div>
            <FooterNav/>
        </div>

      </div>
    </section>
  );
};

export default FooterSeciton;
