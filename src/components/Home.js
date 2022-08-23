import React from 'react'

import './css/Home.css'
import Product from './Product'; 
import AmazonCarousel from './AmazonCarousel';

function Home() {
  return (
    <div className='home'>
        <div className='homeContainer'>
            <AmazonCarousel className = 'myCarousel'/>
            {/* <img src = 'https://m.media-amazon.com/images/S/sonata-images-prod/ACQ_HO_T1/89aa0cfb-43bf-4651-afd5-9ce43a831060._UR3000,600_.jpeg' className='homeImage'/> */}
            <div className='homeRow'>
              <Product id = "1" title = 'The Lean Startup' 
                price = {29.99} image = "https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg" 
                rating = {5}
                />               
              <Product id = "2" title = "Cambridge IELTS 15 Academic Student's Book with Answers with Audio with Resource Bank: Authentic Practice Tests (IELTS Practice Tests) NEW EDITION Paperback" 
                price = {19.99} image = "https://images-na.ssl-images-amazon.com/images/I/81OdYyECVvL.jpg" 
                rating = {4}
              />
            </div>
            <div className='homeRow'>
              <Product id = "3"  title = 'OnePlus 7T (Frosted Silver, 8GB RAM, Fluid AMOLED Display, 128GB Storage, 3800mAH Battery)'
                  price = {300} image = 'https://m.media-amazon.com/images/I/71CXzCmoZRL._AC_UY327_FMwebp_QL65_.jpg' 
                  rating = {2}
              />
              <Product id = "4"  title = 'Apple iPhone 13 (128GB) - Midnight'
                  price = {600} image = 'https://m.media-amazon.com/images/I/61VuVU94RnL._AC_UY327_FMwebp_QL65_.jpg' 
                  rating = {5}
              />
              <Product id = "5" title = 'Redmi K50i 5G (Stealth Black, 6GB RAM, 128GB Storage) | Flagship Mediatek Dimensity 8100 Processor | 144Hz Liquid FFS Display | Alexa Built-in'
                price = {250} image = 'https://m.media-amazon.com/images/I/71ZACtD0-oL._AC_UY327_FMwebp_QL65_.jpg' 
                rating = {4}
              />
            </div>
            <div className='homeRow'>
            <Product id = "6" title = '2020 Apple MacBook Air Laptop: Apple M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 512GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Gold 4.7 out of 5 stars'
              price = {2250} image = 'https://m.media-amazon.com/images/I/71vFKBpKakL._AC_UY327_FMwebp_QL65_.jpg' 
              rating = {4}
            />
            </div>
        </div>
    </div>
  )
}

export default Home;