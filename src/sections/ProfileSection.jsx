import React from "react";
import avatar from "../assets/profile-section-elememts/avtar.png";
import rectangle from "../assets/profile-section-elememts/ractangle.png";
import triangle from "../assets/profile-section-elememts/triangle.png";
import oval from "../assets/profile-section-elememts/oval.png";
import tri_ractangle from "../assets/profile-section-elememts/tri-ractangle.png";

const ProfileSection = () => {
  const profileSectionCardDetails = [
    {
      id: 1,
      icon: rectangle,
      heading: "Material Limitations",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 2,
      icon: triangle,
      heading: "Unprofessional Mentor",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 3,
      icon: oval,
      heading: "Video Quality",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 4,
      icon: tri_ractangle,
      heading: "High Price",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];
  return (
    <section>
      <div className="lg:max-w-[1250px] mx-auto mb-[50px] lg:mb-[91px]">
        {/* inner div  */}
        <div className="grid lg:grid-cols-2 mx-[44px] my-[50px] lg:m-0">
          {/* left profile section  */}
          <div className="lg:space-y-5">
            {/* heading and sub-heading  */}
            <div>
              <h3 className="text-[18px] lg:text-[36px] text-center lg:text-left font-semibold">
                Why do we <span className="text-secondary-color">exist?</span>{" "}
              </h3>
              <p className="text-secondary-text text-[12px] lg:text-[16px] leading-7 lg:leading-[35px] lg:w-[424px] text-center lg:text-left my-5">
                Because we know that many people or companies have the same
                problem when it comes to how difficult it is to improve their
                skills
              </p>
            </div>

            {/* avtar  */}
            <div className="flex items-center gap-5 border-b border-secondary-text/20 w-[207px] lg:w-[413px] pb-5  lg:py-7 mx-auto lg:m-0 lg:text-left">
              <div>
                <img
                  src={avatar}
                  alt="avtar"
                  className="w-[50px] lg:w-[71px]"
                />
              </div>
              <div>
                <h5 className="text-[12px] font-semibold lg:text-[18px]">
                  Jerony Pulquosta
                </h5>
                <p className="text-secondary-text font-extralight text-[12px]">
                  CEO Skill Shoot
                </p>
              </div>
            </div>

            {/* others   */}
            <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-[67px] text-center py-4   gap-5 lg:gap-0 ">
              <div>
                <h3 className="text-[24px] lg:text-[36px] font-semibold">
                  100+
                </h3>
                <p className="text-[10px] lg:text-[12px] text-secondary-text">
                  Updated Material
                </p>
              </div>
              <div>
                <h3 className="text-[24px] lg:text-[36px] font-semibold">
                  15K
                </h3>
                <p className="text-[10px] lg:text-[12px] text-secondary-text">
                  Member Join
                </p>
              </div>
            </div>
          </div>

          {/* right profile section  */}
          <div className="pt-[50px] px-[35px] lg:p-0 ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] lg:gap-[55px]  flex-col items-center lg:items-start text-center lg:text-left">
              {profileSectionCardDetails.map((card) => (
                <div key={card.id} className="space-y-7">
                  {/* icon  */}
                  <div className="flex justify-center lg:justify-start">
                    <img src={card.icon} alt="icon" />
                  </div>

                  {/* heading and subheading  */}
                  <div className="space-y-3">
                    <h3 className="text-primary-color text-[18px] lg:text-[24px] font-semibold">
                      {card.heading}
                    </h3>
                    <p className="text-secondary-text font-light text-[12px] lg:text-[16px] leading-[35px]">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
