import React from 'react';
import './Banner.css';
import Coffee from './coffee.jpg';
const Banner = props => {

    return(
        <div className="banner-class">
            <div className="banner-img">
                <img src={Coffee} alt="coffee"/>            
            </div>
            {/* <div className="banner-img">
                <img src={Coffee} alt="coffee"/>            
            </div> */}
            {/* <h1 className="centered">Polar Bear Coffee is founded by our <br></br>CEO Ms. Chea Nita</h1> */}
            <h1 className="centered">30% OFF YOUR FIRST MONTH</h1>
            <button className="centered-btn">SIGN UP</button>

        </div>
    );
}           


export default Banner;