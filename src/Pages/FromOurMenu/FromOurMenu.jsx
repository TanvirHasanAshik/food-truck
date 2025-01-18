import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const FromOurMenu = () => {
    const countries = ['Italian', 'Chinese', 'British', 'Indian', 'Malaysian', 'Thai', 'Turkish', 'Spanish'];

    const [countryFood, setCountryFood] = useState('Italian');
    const [foodMenu, setFoodMenu] = useState([]);
    const [foodPrice, setFoodPrice] = useState(20);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${countryFood}`)
            .then(response => response.json())
            .then(data => setFoodMenu(data?.meals?.slice(0, 8)));
    }, [countryFood]);


    return (
        <div className='py-20 space-y-4 text-center'>
            <h2 className='text-2xl text-red-500 font-great_vibes'>Choose & pick</h2>
            <h2 className="text-4xl font-bold pb-10"><span className="text-red-500">Fr</span>om Our Menu</h2>
            <div className="py-10 bg-[url('https://img.freepik.com/free-photo/tropical-plant-with-green-leaves-color-tone-black-background_24972-455.jpg')] bg-cover bg-center ">
                <div className='flex gap-4 justify-center flex-wrap'>
                    {
                        countries.map((country, idx) => <button
                            key={idx}
                            className={`${countryFood === country && 'text-red-500'}`}
                            onClick={() => setCountryFood(country)}
                        >{country}</button>)
                    }
                </div>

                {/* food menu */}
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 py-10'>
                    <div className='overflow-hidden'>
                        <img
                            className=' transform transition duration-500 hover:scale-110 w-full p-8'
                            src={foodMenu[0]?.strMealThumb} alt="" />
                    </div>
                    <div className=' lg:col-span-2 p-4'>
                        <div className='grid grid-cols-2 gap-4'>
                            {
                                foodMenu && foodMenu.map((menu, idx) => <div
                                    className=' overflow-hidden flex gap-4 text-start text-sm font-bold'
                                    key={idx}>
                                    <img className='w-1/3 transform transition duration-500 hover:scale-110' src={menu?.strMealThumb} alt="" />
                                    <div className='space-y-1'>
                                        <p>{menu.strMeal}</p>
                                        <p><span className='text-red-500'>Dishes:</span> {countryFood}</p>
                                        <p><span className='text-red-500'>Price:</span>
                                            $ {foodPrice}</p>
                                        <Link
                                            to={`/food/order/${menu.idMeal}`}
                                            className="btn btn-warning"
                                        >
                                            order now
                                        </Link>

                                    </div>

                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FromOurMenu;