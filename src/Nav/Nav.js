import React from 'react';
import './Nav.scss';
// import { Link } from 'react-router-dom';

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
            {/* <Link to='./products'>
                        <button  
                        className="house_card-btn" 
                        type="submit">View Products
                        </button>
                    </Link> */}
        </section>    
    )

};

export default Nav;