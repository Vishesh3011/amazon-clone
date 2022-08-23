import React from 'react'
import './css/Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './stateProvider';
import { getBasketTotal } from './reducer';
import { useNavigate } from 'react-router-dom';

function Subtotal() {
    const navigate = useNavigate();
    const [{ basket } , dispatch] = useStateValue();
  return (
    <div className='subtotal'>
        <CurrencyFormat
            renderText = {(value) => (
                <>
                    <p>
                        Subtotal ({basket.length} items): 
                        <strong>{value}</strong> 
                    </p>
                    <small className='subtotalGift'>
                        <input type = "checkbox"/>This order contains a Gift
                    </small>
                </>
            )}
            decimalScale = {2}
            value = {getBasketTotal(basket)}
            displayType = {"text"}
            thousandSeperator = {true}
            prefix = {"$"}
        />
        <button onClick={e => navigate('/payment')}>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal