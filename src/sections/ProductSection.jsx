import React from 'react';
import CourseSlider from './CourseSlider';

const ProductSection = () => {
    return (
        <section id='course' className='bg-primary-color'>
            <div className='lg:max-w-[1357px] mx-auto'>
                <CourseSlider />
            </div>
            
        </section>
    );
};

export default ProductSection;