import React from 'react';
import record_bg from '../../assets/images/record-bg.png';
import CountUp from 'react-countup';
import group1 from '../../assets/images/group/Group1.png';
import group2 from '../../assets/images/group/Group2.png';
import group3 from '../../assets/images/group/Group3.png';
import group4 from '../../assets/images/group/Group4.png';
const Record = () => {
    return (
        <div className="relative py-40">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${record_bg})`, opacity: 0.25 }}
            ></div>

            <div className="relative z-10">

                <div className='flex flex-col lg:flex-row justify-around gap-y-8'>
                    <div className="text-center space-y-4">
                        <img className='mx-auto w-20' src={group1} alt="" />
                        <p>Professional Chefs</p>
                        <CountUp className='text-5xl' start={0} end={100} duration={5} />
                    </div>
                    <div className="text-center space-y-4">
                        <img className='mx-auto w-20' src={group2} alt="" />
                        <p>Items Of Food</p>
                        <CountUp className='text-5xl' start={0} end={400} duration={5} />
                    </div>
                    <div className="text-center space-y-4">
                        <img className='mx-auto w-20' src={group3} alt="" />
                        <p>Years Of Experienced</p>
                        <CountUp className='text-5xl' start={0} end={30} duration={5} />
                    </div>
                    <div className="text-center space-y-4">
                        <img className='mx-auto w-20' src={group4} alt="" />
                        <p>Happy Customers</p>
                        <CountUp className='text-5xl' start={0} end={800} duration={5} />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Record;