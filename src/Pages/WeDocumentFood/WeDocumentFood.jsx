import React from 'react';
import documentImg from '../../assets/images/document.png';
const WeDocumentFood = () => {
    return (
        <div className="py-40">
            <div className='min-h-screen lg:min-h-96 flex items-center pr-10 lg:pr-20 justify-end' style={{
                backgroundImage: `url(${documentImg})`, backgroundSize: 'cover', backgroundPosition: 'center',
            }}>
                <div className='space-y-4 w-full lg:w-1/2 text-end '>
                    <h2 className='font-great_vibes text-2xl text-red-500'>Restaurant Active Process</h2>
                    <h2 className='text-4xl font-bold'><span className='text-red-500'>We</span> Document Every Food
                        Bean Process untile it is saved</h2>
                    <p className='text-sm'>Food is essential for life, providing energy, nutrients, and joy. It reflects culture and tradition, with diverse cuisines like Italian pasta or Indian curry showcasing creativity. Beyond taste, food brings people together and promotes health, emphasizing the importance of mindful eating.</p>
                </div>
            </div>
        </div>
    );
};

export default WeDocumentFood;