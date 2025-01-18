import React from 'react';
import img from '../../assets/images/unsplash_CLMpC9UhyTo.png'
const Order = () => {
    return (
        <div className='pb-28 flex flex-col lg:flex-row justify-center items-center gap-8 pt-20'>
            <div className='bg-gray-700 transparent p-10'>
                <form className='space-y-4 '>
                    <div>
                        <p className='font-bold'>Your Name:</p>
                        <input type="text" name="name" placeholder="Your name" className="input input-bordered rounded-none w-96 h-9 text-black" />
                    </div>
                    <div>
                        <p className='font-bold'>Your Number:</p>
                        <input type="text" placeholder="Your number" className="input input-bordered rounded-none w-96 h-9 text-black" />
                    </div>
                    <div>
                        <p className='font-bold'>Where are you form:</p>
                        <input type="text" placeholder="Your location" className="input input-bordered rounded-none w-96 h-9 text-black" />
                    </div>
                    <button className="btn btn-warning w-full">Confirm</button>
                </form>
            </div>
            <div>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default Order;