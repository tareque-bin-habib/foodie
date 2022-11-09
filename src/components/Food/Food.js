import React from 'react';
import './Food.css'
const Food = (props) => {
    console.log(props)
    const { strMealThumb, strMeal, strCategory, strInstructions, addToCart } = props.food
    return (
        <div className='food'>
            <img src={strMealThumb} alt="" />
            <div className='details'>
                <h4>{strMeal}</h4>
                <h5>{strCategory}</h5>
                <p>{strInstructions.slice(0, 100)}...</p>
            </div>
            <button onClick={() => addToCart()} className='add-to-cart-btn'>
                <p>Add To Cart</p>
            </button>
        </div>
    );
};

export default Food;