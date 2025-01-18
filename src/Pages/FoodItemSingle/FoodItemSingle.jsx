import React from 'react';

const FoodItemSingle = ({ food }) => {
    const { strCategoryThumb, strCategory } = food;

    return (

        <div className="card bg-yellow-100 rounded-md relative animate__animated animate__fadeInUp">
            <div className="card-body overflow-hidden">
                <img className="transition-transform duration-300 ease-in-out transform hover:scale-110" src={strCategoryThumb} alt="" />
            </div>
            <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
                <h1 className="text-white">{strCategory}</h1>
            </div>
        </div>
    );
};

export default FoodItemSingle;