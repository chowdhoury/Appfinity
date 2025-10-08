import React from 'react';
import banner from '../../assets/hero.png'

const Banner = () => {
    return (
        <div className='justify-items-center mt-10 px-2'>
            <img src={banner} alt="banner Image" />
        </div>
    );
};

export default Banner;