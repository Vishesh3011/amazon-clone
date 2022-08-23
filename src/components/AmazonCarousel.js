import React from 'react';

import './css/AmazonCarousel.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from 'react-responsive-carousel';



function AmazonCarousel() {
  return (
    <Carousel autoPlay showArrows = {true} interval = {5000} className='carousel' infiniteLoop>
      <div>
        <img alt="" className='amazonCarousel' src="https://m.media-amazon.com/images/I/717OO5QwJnL._SX3000_.jpg" />
      </div>
      <div>
        <img alt="" className='amazonCarousel' src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg" />
      </div>
      <div>
        <img alt="" className='amazonCarousel' src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg" />
      </div>
      <div>
        <img alt="" className='amazonCarousel' src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg" />
      </div>
      <div>
        <img alt="" className='amazonCarousel' src="https://m.media-amazon.com/images/S/sonata-images-prod/ACQ_HO_T1/89aa0cfb-43bf-4651-afd5-9ce43a831060._UR3000,600_.jpeg" />
      </div>
    </Carousel>
  )
}

export default AmazonCarousel;