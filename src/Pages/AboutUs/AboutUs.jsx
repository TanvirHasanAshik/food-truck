import React from 'react';
import about1 from '../../assets/images/about1.png';
import about2 from '../../assets/images/about2.png';
import about3 from '../../assets/images/about3.png';
const AboutUs = () => {
    return (
        <div id="about" className='py-32 flex flex-col-reverse lg:flex-row px-4 gap-4'>
            <div className='w-full lg:w-1/2'>
                <h1 className="font-great_vibes text-3xl text-red-500 py-5">About us</h1>
                <h1 className='text-4xl font-bold text-white'><span className='text-red-500'>We </span>Create the best foody product</h1>
                <p className='py-10 text-sm'>At <span className='text-red-500 font-bold'>food truck</span>, we believe in serving more than just food – we serve an experience. Our team is passionate about crafting fresh, flavorful dishes using the finest ingredients. Whether you're craving comfort food or something adventurous, we’re here to satisfy your taste buds and provide a warm, welcoming atmosphere for all our customers. Join us and taste the love we put into every meal!</p>

                <button className="btn btn-warning">Read more</button>
            </div>
            <div className='w-full lg:w-1/2 flex flex-col gap-4'>
                <img className='w-full' src={about1} alt="" />
                <div className='flex gap-4'>
                    <img className='w-1/2' src={about2} alt="" />
                    <img className='w-1/2 pr-4' src={about3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;