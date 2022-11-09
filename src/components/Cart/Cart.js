import React from 'react';

const Cart = (props) => {
    const { name } = props

    return (
        <div>
            <h3>Cart Overview</h3>

            {
                name.length > 0 && name.map((data, index) => <h4 key={index}>{data}</h4>)
            }
        </div>
    );
};

export default Cart;