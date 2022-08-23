import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

import './css/Header.css';

import { Link } from 'react-router-dom';
import { useStateValue } from './stateProvider';
import { auth } from './firebase';
import { Carousel } from 'react-responsive-carousel';

function Header() {
  const [{ basket, user } , dispatch] = useStateValue();

  const handleAuthentication = () => {
    if(user) {
      auth.signOut();
    }
  }
  
  return (
    <div className='header'>
        <Link to = "/">
          <img className='headerLogo' src='https://cdn.neow.in/news/images/uploaded/2021/06/1622736066_amazon-logo_story.jpg'/>
        </Link>

        <div className='headerSearch'>
          <input className='headerSearchInput' type='text'/>
          <SearchIcon className='headerSearchIcon'/>
          {/* Logo */}
        </div>

        <div className='headerNav'>
          <Link to = {!user && '/login'}>
            <div onClick = {handleAuthentication} className='headerOption'>
              <span className='headerOptionLineOne'>
                Hello {!user ? 'Guest' : user.email}
              </span>
              <span className='headerOptionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
            </div>
          </Link>

          <Link to = '/orders'>
            <div className='headerOption'>
                <span className='headerOptionLineOne'>Returns</span>
                <span className='headerOptionLineTwo'>& Orders</span>
            </div>
          </Link>

          <div className='headerOption'>
            <span className='headerOptionLineOne'>Your</span>
            <span className='headerOptionLineTwo'>Prime</span>
          </div>
        </div>

        <Link to = "/checkout">
          <div className='headerOptionBasket'>
            <ShoppingBasketIcon/>
            <span className='headerBasketCount'>{basket?.length}</span>
          </div>
        </Link>
    </div>
  )
}

export default Header