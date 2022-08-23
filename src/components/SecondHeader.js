import React from 'react';
import './css/SecondHeader.css';

import MenuIcon from '@mui/icons-material/Menu';

function SecondHeader() {
  return (
    <div className='secondHeader'>
        <div className='secondHeaderNav'>
            <div className='headerOption'>
                <div className='headerOptionOne'>
                    <MenuIcon/>
                    <span className='secondHeaderNavOption'>All</span>
                </div>
            </div>
            <div className='headerOption'>
                <span className='secondHeaderNavOption'>Today's Deal</span>
            </div>
            <div className='headerOption'>
                <span className='secondHeaderNavOption'>Customer Service</span>
            </div>
            <div className='headerOption'>
                <span className='secondHeaderNavOption'>Registry</span>
            </div>
            <div className='headerOption'>
                <span className='secondHeaderNavOption'>Gift Cards</span>
            </div>
            <div className='headerOption'>
                <span className='secondHeaderNavOption'>Sell</span>
            </div>
        </div>
    </div>
  )
}

export default SecondHeader