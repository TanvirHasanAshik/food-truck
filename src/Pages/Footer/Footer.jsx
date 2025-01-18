import React from 'react';

const Footer = () => {
    return (
        <footer >
            <div className='flex flex-col lg:flex-row justify-between items-center max-w-6xl mx-8 lg:mx-auto border-b border-warning pb-10 gap-8 '>
                <div className="space-y-4">
                    <h1 className='text-4xl font-bold'><span className='text-red-500'>St</span>ill You Need Our Support ?</h1>
                    <p className='text-sm'>Don’t wait make a smart & logical quote here. Its pretty easy.</p>
                </div>
                <div className='flex'>
                    <input type="text" placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs" />
                    <button className="btn btn-warning ml-4">subscribe</button>
                </div>
            </div>
            <div className="footer bg-black text-neutral-content p-10">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </div>

        </footer >
    );
};

export default Footer;