import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Food from '../Food/Food';
import './Restraunt.css'
const Restraunt = () => {
    const [foods, setFoods] = useState([])
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setFoods(data.meals))
    }, [])
    const [heading, setHeading] = useState('')
    const addToCart = (name) => {

        const newCart = [...heading, name]
        // console.log(newCart)
        setHeading(newCart)
    }
    return (
        <div className='restraunt-container'>
            <div className='food-container'>
                {
                    foods.map(food => <Food food={food} key={food.idMeal} addToCart={addToCart}></Food>)
                }
            </div>
            <div className='cart-container'>
                <Cart name={heading}></Cart>
            </div>
        </div >
    );
};

export default Restraunt;