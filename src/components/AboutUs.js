import React from 'react';
import "../styles/AboutUs.css"
import Drive from '../images/people-with-laptops-office.jpg'
import logo from "../logo.png"
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

export default function AboutUs2(){
    return (
      <div>
        <h1 className='about-us-2-abouthead'>About US</h1>
        <div className="about-us-2-driver">
          <div className='about-us-2-driver1'>
            <div>
              <img src={logo} alt="logo" className='about-us-2-logo' /></div>
  
            <p>At NeuzenAI we harness the synergy of Data, Analytics, and Artificial Intelligence to elevate our clients’ digital transformation journeys. Our approach transcends traditional boundaries, leveraging AI to not only realize but also amplify the value of digital initiatives, thereby catalyzing significant and positive business transformations..</p>
            <div>
              <a href="https://www.facebook.com/profile.php?id=61554736760102&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                <FaFacebookSquare className='about-us-2-social-fb about-us-2-social' />
              </a>
              <a href="https://x.com/Neuzenai23?t=GAb-GXaCmbOkKAlUWV3jCg&s=08" target="_blank" rel="noopener noreferrer">
                <FaSquareXTwitter className='about-us-2-social-x about-us-2-social' />
              </a>
              <a href="https://www.instagram.com/neuzenai?igsh=NXB3dDY2OWVzemIw" target="_blank" rel="noopener noreferrer">
                <FaInstagramSquare className='about-us-2-social-insta about-us-2-social' />
              </a>
              <a href="https://www.linkedin.com/company/neuzenai/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className='about-us-2-social-linkedin about-us-2-social' />
              </a>
            </div>
            <a href="https://neuzenai.com/contact" target="_blank" rel="noopener noreferrer" className="about-us-2-button"><button>
              Contact Us</button>
            </a>
          </div>
          <div >
            <img className='about-us-2-img' src={Drive} alt="/" />
          </div>
        </div></div>
    )
}
