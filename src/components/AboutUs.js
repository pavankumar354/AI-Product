import React from 'react';
import "../styles/AboutUs.css"
import Drive from '../images/drive.png'
import logo from "../logo.png"
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

export default function AboutUs(){
    return (
      <div>
        <h1 className='abouthead'>About US</h1>
        <div className="driver">
  
          <div >
            <img src={Drive} alt="/" />
          </div>
          <div className='driver1'>
            <div>
              <img src={logo} alt="logo" className='logo' /></div>
  
            <p>At NeuzenAI we harness the synergy of Data, Analytics, and Artificial Intelligence to elevate our clients’ digital transformation journeys. Our approach transcends traditional boundaries, leveraging AI to not only realize but also amplify the value of digital initiatives, thereby catalyzing significant and positive business transformations..</p>
            <div>
              <a href="https://www.facebook.com/profile.php?id=61554736760102&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                <FaFacebookSquare className='social' />
              </a>
              <a href="https://x.com/Neuzenai23?t=GAb-GXaCmbOkKAlUWV3jCg&s=08" target="_blank" rel="noopener noreferrer">
                <FaSquareXTwitter className='social' />
              </a>
              <a href="https://www.instagram.com/neuzenai?igsh=NXB3dDY2OWVzemIw" target="_blank" rel="noopener noreferrer">
                <FaInstagramSquare className='social' />
              </a>
              <a href="https://www.linkedin.com/company/neuzenai/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className='social' />
              </a>
            </div>
            <a href="https://neuzenai.com/contact" target="_blank" rel="noopener noreferrer" className="button"><button>
              Contact Us</button>
            </a>
          </div>
        </div></div>
    )
}