import React, { useEffect, useState } from 'react';
import FoodItemSingle from '../FoodItemSingle/FoodItemSingle';

const FoodItems = () => {
    const [foodItems, setFoodItems] = useState([]);
    const [seeMoreFood, setSeeMoreFood] = useState(4);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(res => res.json())
            .then(data => setFoodItems(data?.categories));
    }, []);
    return (
        <div className='text-center space-y-4 pb-32'>
            <h1 className="text-red-500 text-2xl font-great_vibes">Food Category</h1>
            <h1 className='text-4xl font-bold'><span className="text-red-500">Ch</span>oose Food Items</h1>

            <div className='py-20 grid grid-cols-4 gap-4 '>
                {
                    foodItems.slice(0, seeMoreFood).map((food, idx) => <FoodItemSingle key={idx}
                        food={food}
                    />)
                }

            </div>
            {seeMoreFood <= foodItems.length && <button onClick={() => setSeeMoreFood(seeMoreFood + 4)} className="btn btn-warning">See more</button>}
        </div>
    );
};

export default FoodItems;