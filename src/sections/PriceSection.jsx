import React from "react";
import PriceCard from "../components/PriceCard";
import MostPopularPriceCard from "../components/MostPopularPriceCard";

const PriceSection = () => {
  return (
    <section id="subscribe">
      <div className="lg:max-w-[850px] mx-auto px-8 sm:px-8 lg:px-0">
        <div>
          {/* heading and sub-heading */}
          <div className="space-y-3">
            <h3 className="text-[18px] lg:text-[36px] font-semibold text-center">
              <span className="text-secondary-color">Subscribe</span> with us
              now
            </h3>

            <p className="text-secondary-text font-light text-[12px] lg:text-[16px] lg:w-136 text-center mx-auto">
              by subscribing now you will be able to access the material easily
              and cheaply, so you will be very efficient and benefit
            </p>
          </div>
        </div>

        {/* card section for mobile */}
        <div className="lg:hidden my-30 flex flex-col sm:grid sm:grid-col-2 md:flex-row gap-15 items-center justify-center">
          <MostPopularPriceCard />
          <PriceCard price={50} month={1} plan={"Base"} />
          <PriceCard price={200} month={12} plan={"Enterprise"} />
        </div>


        {/* card section for desktop */}
        <div className="hidden lg:grid grid-cols-1 sm:grid-col-2 md:grid-cols-2 lg:grid-cols-3  my-30 items-center justify-center">
          <div>
            <PriceCard price={50} month={1} plan={"Base"} />
          </div>
          <div>
            <MostPopularPriceCard />
          </div>
          <div className="lg:mx-auto lg:ml-20">
            <PriceCard price={200} month={12} plan={"Enterprise"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceSection;
