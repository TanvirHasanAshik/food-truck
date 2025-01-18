import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Navbar/Navbar';
import 'animate.css';
import Footer from '../Pages/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

const Root = () => {
    AOS.init();
    return (
        <div className='bg-black text-white'>
            <div className='max-w-6xl mx-auto'>
                <h2 className='text-white font-bold text-center py-10'><span className='text-orange-700'>Food</span> truck</h2>
                <Navbar />
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;