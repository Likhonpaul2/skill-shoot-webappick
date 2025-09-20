import React from "react";
import RightIconWhite from "../assets/price-section-elements/2.png";
import styleImg from "../assets/price-section-elements/bg.png";

const MostPopularPriceCard = ({ price }) => {
  const PlansData = [
    { id: 1, icon: RightIconWhite, text: "Access all videos" },
    { id: 2, icon: RightIconWhite, text: "Get Certificate" },
    { id: 3, icon: RightIconWhite, text: "Chat support" },
    { id: 4, icon: RightIconWhite, text: "Update Notification" },
    { id: 5, icon: RightIconWhite, text: "Download material" },
  ];

  return (
    <div className="w-[293px] lg:w-[292px] bg-primary-color p-7 rounded-[26px] text-white relative overflow-hidden shadow-2xl shadow-primary-color -mt-15">
      {/* popular tag */}
      <div className="flex justify-end">
        <div className="px-4 py-1 bg-secondary-color rounded-full flex items-center justify-center">
          <p className="text-[10px] font-semibold tracking-wide">MOST POPULAR</p>
        </div>
      </div>

      {/* heading */}
      <div className="space-y-1 mt-4">
        <h3 className="text-[18px] lg:text-[36px] font-semibold">
          ${price || 100}{" "}
          <span className="text-[12px] lg:text-[16px] font-light">/ 6 month</span>
        </h3>
        <h2 className="text-[20px] lg:text-[28px] font-semibold">Pro</h2>
        <p className="font-light text-[12px] lg:text-[16px] leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>

      {/* plans */}
      <div className="space-y-2 my-5">
        {PlansData.map((data) => (
          <div key={data.id} className="flex items-center gap-2">
            <img src={data.icon} alt="icon" className="w-4 h-4 lg:w-5 lg:h-5" />
            <p className="text-[12px] lg:text-[16px]">{data.text}</p>
          </div>
        ))}
      </div>

      {/* button */}
      <div>
        <button className="text-[12px] w-full lg:text-[16px] bg-secondary-color px-6 py-2 rounded-full hover:bg-secondary-color/80 hover:text-white transition">
          Choose plan
        </button>
      </div>

      {/* style img */}
      <img
        src={styleImg}
        alt="img"
        className="absolute top-0 -right-5 w-fit lg:w-28 z-[10]"
      />
    </div>
  );
};

export default MostPopularPriceCard;
