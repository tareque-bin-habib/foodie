import React from 'react';
import './Header.css'
import img from '../../image/Good-food-logo-design-on-transparent-background-PNG.png'
const Header = () => {
    return (
        <nav className='header'>
            <img src={img} alt="" />
            <div>
                <a href="/home">Home</a>
                <a href="/food">Food</a>
                <a href="/order">Order</a>
                <a href="/about us">About us</a>
            </div>
        </nav>
    );
};

export default Header;