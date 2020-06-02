import React from 'react';
import './Nav.scss';
import { Link } from 'react-router-dom';

export const Nav = () => {
    return (
        <section className="nav_main">
            <h1>THE BEAUTY BAR</h1>
            <div className="nav_images-div">
                <img className="womans_face-img" alt="woman's face" src={require('../Images/face-2662919_640.png')}></img>
                <img className="counter_makeup-img" alt="makeup on counter" src={require('../Images/make-up-1209798_1280.png')}></img>
                <img className="makeups-img" alt="various makeups" src={require('../Images/more_makeup.png')}></img>
                <img className="lipstick-img" alt="lipstick" src={require('../Images/lipstick-791761_640.png')}></img>
            </div>
        <section className="category_type-section">
          <Link to={'products/foundation'}> 
            <button 
              className="category_btn"
              type="submit"
              name="foundation">
              FOUNDATION
            </button>
          </Link>
          <Link to="products/blush">
            <button 
              className="category_btn"
              type="submit"
              name="blush">
              BLUSH
            </button>
          </Link>
          <Link to="/products/mascara">
            <button 
              className="category_btn"
              type="submit"
              name="mascara">
              MASCARA
            </button>
          </Link>
          <Link to="/products/eyeShadow">
            <button 
              className="category_btn"
              type="submit"
              name="eyeshadow">
              EYESHADOW
            </button>
          </Link>
          <Link to="/products/lipstick">
            <button 
              className="category_btn"
              type="submit"
              name="lipstick">
              LIPSTICK
            </button>
          </Link>
          <Link to="/products/bronzer">
            <button 
              className="category_btn"
              type="submit"
              name="bronzer">
              BRONZER
            </button>
          </Link>
          <Link to="/shopall">
            <button 
              className="category_btn"
              type="submit"
              name="shopAll">
              SHOP ALL
            </button>
          </Link>
       </section>
       </section>    
    )
};

export default Nav;