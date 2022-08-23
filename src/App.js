import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Payment from './components/Payment';
import Orders from './components/Orders';
import SecondHeader from './components/SecondHeader';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { auth } from './components/firebase';
import { useStateValue } from './components/stateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe(
  "pk_test_51LTVdaSBbkwoYVA6ff9WgQHSITMzXDGdbEl1DnqOCQP3ggZqUVTIvSbR4s7ubxRH1C1rxzNVNYBUAjl1ITYMF8GV00biQsnRYJ"  
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when component loads
    auth.onAuthStateChanged(authUser => {
      console.log('USER IS ' + authUser);
      if(authUser){
        // user just logged in or was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else{
        // user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    // BEM
    <Router>
      <div className="App">
        <Routes>
          <Route path = "/orders" element = {<><Header/><SecondHeader/><Orders/></>}>
          </Route>
          <Route path = "/login" element = {<><Login/></>}>
          </Route>
          <Route path = "/checkout" element = {<><Header/><SecondHeader/><Checkout/></>}>
          </Route>
          <Route path = "/payment" element = {<><Header/><SecondHeader/><Elements stripe = {promise}><Payment/></Elements></>}>
          </Route>
          <Route path = "/" element = {<><Header/><SecondHeader/><Home/></>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
