import React from 'react';
import "../styles/WhatNvisionOffers.css"
// import gif2 from "../images/gif2.gif"
// import gif3 from "../images/Price-Hero-Animation.gif"
// import gif5 from "../images/gif3.gif"
// import gif from "../images/progif.gif"
import gif from "../images/progif2.gif"
import gif2 from "../images/adv8.gif"
import gif5 from "../images/adv9.gif"
import gif3 from "../images/adv7.gif"

export default function WhatNvisonOffers() {
    return (
        <div className='advantages-container section' id="features">
            <h2>What <span className='nvision'>Nvision AI</span> offers?</h2>
            <div className="slider-container">

                <div className='adv1'>
                    <div className='adv-img'>
                        <img src={gif} alt="adv" className='adv-images2' />
                    </div>
                    <h3>Product Identification</h3>
                    <p className='paragraph'>Automatic identification of the product using Computer Vision.</p>
                </div>
                <div className='adv1'>
                    <div className='adv-img'>
                        <img src={gif5} alt="adv" className='adv-images2' />
                    </div>
                    <h3>Defects Identification</h3>
                    <p className='paragraph'>Efficiently identifies defects found across the products.</p>
                </div>
                <div className='adv1'>
                    <div className='adv-img'>
                        <img src={gif2} alt="adv" className='adv-images2' />
                    </div>
                    <h3>Defects Categorization</h3>
                    <p className='paragraph'>Efficiently Categorizes defects found across products.</p>
                </div>
                <div className='adv1'>
                    <div className='adv-img'>
                        <img src={gif3} alt="adv" className='adv-images2' />
                    </div>
                    <h3>Price Estimation</h3>
                    <p className='paragraph'>Estimates the costs for the defects detected in the product.</p>
                </div>

            </div>
        </div>
    )
}