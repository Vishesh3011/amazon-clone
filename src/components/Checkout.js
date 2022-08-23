import React from 'react';
import './css/Checkout.css';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './stateProvider';

function Checkout() {
  const [{basket, user}, dispatch] = useStateValue() ;
  return (
    <div className='checkout'>
        <div className='checkoutLeft'>
            <img className='checkoutAd' src = "https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonBusiness/AB_EventMLP/ACQ_1500_100_0407.jpg"/>
            <div>
                <h3>Hello, {user?.email}</h3>
                <h2 className='checkoutTitle'>Your Shopping Basket</h2>
                {basket.map(item => (
                  <CheckoutProduct
                    id = {item.id}
                    image = {item.image}
                    title = {item.title}
                    price = {item.price}
                    rating = {item.rating}
                  />
                ))}
            </div>
        </div>
        <div className='checkoutRight'>
            <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout