import React from 'react';
import banner from '../../assets/images/banner.png';

const Header = () => {
    return (
        <div className='flex flex-col lg:flex-row gap-4 mx-4 justify-between items-center text-white py-10'>
            <div data-aos="zoom-out-right" data-aos-duration="3000" className='space-y-3 w-full lg:w-1/2'>
                <h1 className='font-great_vibes text-3xl text-red-600'>Its Quick & Amusing!</h1>
                <h2 className='text-5xl font-bold'><span className='text-red-600'>Th
                </span>e Art of speed food Quality</h2>
                <p className='py-10 text-sm'>Welcome to <span className='text-red-600 font-bold'>Food truck</span>, where every meal is a story and every bite is an experience! Explore our carefully curated menu featuring fresh ingredients, bold flavors, and a passion for culinary perfection. Whether you're craving classic dishes or modern twists, we've got something for everyone.</p>
                <button className="btn btn-warning ">See menu</button>
            </div>
            <div data-aos="fade-up" data-aos-duration="3000" className=" w-full lg:w-1/2">
                <img src={banner} alt="" />
            </div>
        </div>
    );
};

export default Header;