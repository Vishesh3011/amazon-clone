import React from 'react';
import './css/CheckoutProduct.css';
import StarIcon from '@mui/icons-material/Star';
import { useStateValue } from './stateProvider';

function CheckoutProduct({id, image, title, price, rating, hideButton}) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        //remove the item from basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id          
        })
    }
  return (
    <div className='checkoutProduct'>
        <img className='checkoutProductImage' src = {image}/>
        <div className='checkoutProductInfo'>
            <p className='checkoutProductTitle'>{title}</p>
            <p className='checkoutProductPrice'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='checkoutProductRating'>
                {Array(rating)
                    .fill()
                    .map((_) => (
                        <p>⭐</p>
                    ))}
            </div>
            {!hideButton && (
                <button onClick={removeFromBasket}>Remove from Basket</button>
            )}
        </div>
    </div>
  )
}

export default CheckoutProduct