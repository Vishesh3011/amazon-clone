import React, { useEffect, useState } from 'react';
import CurrencyFormat from 'react-currency-format';

import './css/Payment.css';
import CheckoutProduct from './CheckoutProduct';
import axios from './axios';

import { useStateValue } from './stateProvider';
import { Link, useNavigate } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { getBasketTotal } from "./reducer";
import { db } from './firebase';

function Payment() {
    const [{ basket, user } , dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();
    
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [clientSecret, setClientSecret] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [basket])

    console.log('The Secret is: ', clientSecret);

    const handleSubmit = async (event)  => {
        // works for stripe
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            // payment intent is basically payment confirmation
            db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            })

            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: 'EMPTY_BASKET'
            })

            navigate('/orders', {replace: true});
        })
    }

    const handleChange = event => {
        // listen for changes in CardElement
        // and display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

  return (
    <div className='payment'>
        <div className='paymentContainer'>
            <h1>
                Checkout (<Link to = "/checkout">{basket?.length} items</Link>)
            </h1>
            <div className='paymentSection'>
                <div className='paymentTitle'>
                    <h3>Delivery Address</h3>
                </div>
                <div className='paymentAddress'>
                    <p>{!user ? 'Guest' : user.email}</p>
                    <p>Shree Jagdish Vihar,</p>
                    <p> Khatri Pole, B/H Jubilee Baugh</p>
                    <p>Vadodara, Gujarat</p>
                </div>
            </div>
            <div className='paymentSection'>
                <div className='paymentTitle'>
                    <h3>Review items and Delivery</h3>
                </div>
                <div className='paymentItems'>
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
            <div className='paymentSection'>
                <div className='paymentTitle'>
                    <h3>Payment Method</h3>
                </div>
                <div className='paymentDetails'>
                    <form onSubmit={handleSubmit}>                            
                        <CardElement className='paymentCard' onChange={handleChange}/>
                        <div className='paymentPriceContainer'>
                            <CurrencyFormat
                                renderText = {(value) => (
                                    <h3>Order Total: {value} </h3>
                                )}
                                decimalScale = {2}
                                value = {getBasketTotal(basket)}
                                displayType = {"text"}
                                thousandSeperator = {true}
                                prefix = {"$"}
                            />
                            <button disabled = {processing || disabled || succeeded}>
                                <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                            </button>
                        </div>
                        {error && <div>{error}</div>}
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment;