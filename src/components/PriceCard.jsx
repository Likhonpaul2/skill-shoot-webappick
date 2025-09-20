import React from 'react';
import RightIcon from "../assets/price-section-elements/check-circle-1.png"

const PriceCard = ({price,month,plan}) => {
    const PlansData = [
        {id:1, icon:RightIcon, text:"Access all videos"},
        {id:2, icon:RightIcon, text:"Get Certificate"},
        {id:3, icon:RightIcon, text:"Chat support"},
        {id:4, icon:RightIcon, text:"Update Notification"},
        {id:5, icon:RightIcon, text:"Download material"},
    ]
    return (
        <div className='w-55 h-auto'>
            <div className='space-y-1'>
                <h3 className='text-[18px] lg:text-[36px] font-semibold'>${price} <span className='text-[12px] lg:text-[16px] text-secondary-text font-light'>/ {month} month</span> </h3>
                <h2 className='text-[20px] lg:text-[28px] font-semibold'>{plan}</h2>
                <p className='text-secondary-text font-light text-[12px] lg:text-[16px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>

            {/* plans  */}
            <div className='space-y-2 my-5'>
                {
                    PlansData.map(data=>(
                        <div key={data.id} className='flex gap-2'>
                            <img src={data.icon} alt="icon" className="w-4 h-4 lg:w-5 lg:h-5" />
                            <p className='text-[12px] lg:text-[16px]'>{data.text}</p>
                        </div>
                    ))
                }
            </div>

            {/* btn  */}
            <div>
                <button className='text-[12px] lg:text-[16px] bg-secondary-color/20 w-51 h-10 rounded-full'>Choose plan</button>
            </div>
        </div>
    );
};

export default PriceCard;