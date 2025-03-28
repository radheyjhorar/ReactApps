import React from 'react';
import './home.css';
import Header from '../header/Header';

const Home = (props) => {
  console.log("Home: ", props);
  return (
    <div style={{ height: '100vh' }}>
      {/* <Header props={props}/> */}
      <h1>Home Component</h1>
      {/* <div className='cart-image'>
        {
          props.cartData.length
            ? <span className='cart-item-len'>{props.cartData.length}</span>
            : false
        }
        <img
          src='https://cdn.pixabay.com/photo/2017/03/29/04/09/shopping-icon-2184065_640.png'
          alt='cart.png'
        />
      </div> */}
      <div className='main-container'>
        <div className='cart-wrapper'>
          <div className='image-wrapper item'>
            <img
              src='https://m.media-amazon.com/images/I/61bK6PMOC3L._AC_UF1000,1000_QL80_.jpg'
              alt='iPhone14.jpg'
            />
          </div>
          <div className='text-wrapper item'>
            <div>
              iPhone
            </div>
            <span>
              Price: $1000.00
            </span>
          </div>
          <div className='btn-wrapper'>
            <div className='add-btn item'>
              <button
                onClick={() => props.addToCartHandler({
                  price: 1000,
                  name: 'iPhone',
                })}
              >
                Add To Cart+
              </button>
            </div>
            <div className='remove-btn item'>
              <button
                onClick={() => props.removeToCartHandler({
                  price: 1000,
                  name: 'iPhone',
                })}
              >
                Remove To Cart+
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;