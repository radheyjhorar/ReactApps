import React from 'react'
import Carousel from 'react-material-ui-carousel';
import Item from './Item';
import slider from './slider.json';


const BannerSlider = () => {
  return (
    <div className='test'>
      <Carousel indicators={false}>
      {
        slider.map( item => <Item key={item.id} item={item} /> )
      }
    </Carousel>
    </div>
    
  )
}

export default BannerSlider;