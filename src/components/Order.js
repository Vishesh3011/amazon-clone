import React from 'react';
import './css/Order.css';

import CheckoutProduct from './CheckoutProduct';

import moment from 'moment';
import CurrencyFormat from 'react-currency-format';

function Order({ order }) {
  return (
    <div className='order'>
        <h2>Order <small className='smolOrderId'>#{order.id}</small>|</h2>
        <p>
            {moment.unix(order.data.created).format('MM/DD/YYYY, hh:mm')}
        </p>
        <div className='forBorder'/>
        {order.data.basket?.map(item => (
            <CheckoutProduct
                id = {item.id}
                image = {item.image}
                title = {item.title}
                price = {item.price}
                rating = {item.rating}
                hideButton
            />
        ))}
        <CurrencyFormat
            renderText = {(value) => (
                <h3 className='orderTotal'>Order Total: {value}</h3>
            )}x
            decimalScale = {2}
            value = {order.data.amount / 100}
            displayType = {"text"}
            thousandSeperator = {true}
            prefix = {"$"}
        />
    </div>
  )
}

export default Order