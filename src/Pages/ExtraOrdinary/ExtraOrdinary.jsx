import React from 'react';
import img1 from '../../assets/images/extra-ordanary/img1.png';
import img2 from '../../assets/images/extra-ordanary/img2.png';
import img3 from '../../assets/images/extra-ordanary/img3.png';
import img4 from '../../assets/images/extra-ordanary/img4.png';

import r_img1 from '../../assets/images/rectangle/img1.png';
import r_img2 from '../../assets/images/rectangle/img2.png';
import r_img3 from '../../assets/images/rectangle/img3.png';

const ExtraOrdinary = () => {
    const imagesZoom = {
        zoom: 'object-cover transition-transform duration-300 ease-in-out transform hover:scale-110'
    };
    return (
        <div className="flex flex-col-reverse lg:flex-row py-20 gap-8 px-4">
            <div className=" w-full lg:w-1/2 space-y-4">
                <div className='flex gap-4 '>
                    <div className='overflow-hidden flex-grow'>
                        <img className={`w-full h-60 ${imagesZoom.zoom}`} src={img1} alt="" />
                    </div>
                    <div className='overflow-hidden w-1/3'>
                        <img className={`h-60 ${imagesZoom.zoom}`} src={img2} alt="" />
                    </div>

                </div>
                <div className='flex gap-4 overflow-hidden'>
                    <div className='overflow-hidden w-1/3'>
                        <img className={`h-60 ${imagesZoom.zoom}`} src={img3} alt="" />
                    </div>
                    <div className='overflow-hidden flex-grow'>
                        <img className={`w-full h-60 ${imagesZoom.zoom}`} src={img4} alt="" />
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-4">
                <h2 className="font-great_vibes text-red-500 text-2xl">Why Choose us</h2>
                <h2 className='text-4xl font-bold'><span className='text-red-500'>Ex</span>tra ordinary taste
                    And Experienced </h2>
                <p className="text-sm pt-4">At our food establishment, we pride ourselves on delivering an extraordinary taste that leaves a lasting impression. Our chefs, with years of experience and a passion for culinary excellence, carefully craft every dish to perfection. Each bite is a blend of unique flavors, fresh ingredients, and innovative techniques, ensuring that every meal is an unforgettable experience. Whether you're here for a quick bite or a special occasion, our expert team is dedicated to providing you with a dining experience that's both exceptional and memorable.</p>

                <div className='py-4'>
                    <div className='flex gap-4 animate__animated animate__fadeInUp'>
                        <span className='text-center'>
                            <img className='bg-orange-500 p-7 rounded-md' src={r_img1} alt="" />
                            Fast food
                        </span>
                        <span className='text-center'>
                            <img className='bg-orange-500 p-7 rounded-md' src={r_img2} alt="" />
                            Lunch
                        </span>
                        <span className='text-center'>
                            <img className='bg-orange-500 p-7 rounded-md' src={r_img3} alt="" />
                            Dinner
                        </span>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default ExtraOrdinary;