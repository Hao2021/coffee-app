import React from 'react'
import './Banner.css';
import Coffee from './coffee.jpg';

export default function Banner1() {
    return (
        <div className="banner1-container">
            <div className="banner-img1">
                <img src={Coffee} alt=""/>     
            </div>
            <div className="banner-img1">
                <img src={Coffee} alt=""/>
            </div>
        </div>
      
    )
}
