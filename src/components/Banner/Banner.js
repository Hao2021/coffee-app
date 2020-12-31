import React from 'react';
import './Banner.css';
import Coffee from './coffee.jpg';
const Banner = props => {

    return(
        <div className="banner-class">
            <div className="banner-img">
                <img src={Coffee} alt="coffee"/>            
            </div>
            <div className="banner-img">
                <img src={Coffee} alt="coffee"/>            
            </div>
        </div>
    );
}           


export default Banner;