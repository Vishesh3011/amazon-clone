import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import './css/Product.css';
import { useStateValue } from './stateProvider';

function Product({ id, title, image, price, rating }) {
    const [{ basket } , dispatch] = useStateValue();
    const addToBasket = () => {
        //dispatch the item into the Data Layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            },
        });
    };
  return (
    <div className='product'>
        <div className='productInfo'>
            <p>{title}</p>
            <p className='productPrice'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='productRating'>
                {Array(rating).fill().map((_, i) => (
                    <p>⭐</p> 
                ))}
            </div>
        </div>
        <img src = {image}/>
        <button onClick = {addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product