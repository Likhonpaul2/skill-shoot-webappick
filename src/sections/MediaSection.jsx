import React from "react";
import uber from "../assets/media-section-elements/uber.png";
import google from "../assets/media-section-elements/google.png";
import paypal from "../assets/media-section-elements/paypal.png";
import microsoft from "../assets/media-section-elements/microsoft.png";
import dribble from "../assets/media-section-elements/dribble.png";

const MediaSection = () => {
  const companys = [
    { id: 1, path: uber },
    { id: 2, path: google },
    { id: 3, path: paypal },
    { id: 4, path: microsoft },
    { id: 5, path: dribble },
  ];
  return (
    <section>
      <div className="m-[50px] lg:m-0 lg:max-w-[1040px] lg:mx-auto lg:py-25 text-center">
        {/* heading   */}
        <div className="space-y-5">
          <h3 className="text-black text-[18px] lg:text-[36px] lg:font-semibold">
            Trusted more than <span className="text-secondary-color">100+</span>{" "}
            in the world
          </h3>

          {/* sub-heading  */}
          <p className="font-extralight text-secondary-text lg:text-[16px] leading-7 lg:w-[545px] mx-auto">
            they have asked us more than 3 times to teach their employees about
            various things. to improve their skills
          </p>
        </div>

        {/* company logo  */}
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 items-center justify-items-center mt-8">
            {companys.map((company) => (
              <img
                key={company.id}
                src={company.path}
                alt={`Company ${company.id}`}
                className="w-24 h-12 object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
