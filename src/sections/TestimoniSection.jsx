import React from 'react';
import TestimoniSlider from '../components/TestimoniSlider';

const TestimoniSection = () => {
    return (
        <section>
            <div className='bg-testimoni-bg py-16 lg:pt-22 lg:pb-35'>
                <div className='lg:max-w-[1281px] mx-auto'>

                    {/* heading & subheading */}
                    <div className='text-center space-y-5 lg:space-y-3'>

                        {/* heading  */}
                        <h3 className='text-[18px] lg:text-[36px] font-semibold'>What do they <span className='text-secondary-color'>say?</span></h3>

                        {/* sub-heading  */}
                        <p className='w-65 text-[12px] lg:text-[16px] mx-auto lg:w-fit text-secondary-text font-light leading-[30px] lg:leading-[35px]'>This is an honest review from members who have joined us</p>
                    </div>

                    {/* slider section  */}
                    <div>
                        <TestimoniSlider/>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default TestimoniSection;