import React from 'react';
import "../styles/Carousel.css"
import Slider from 'react-slick';
import home from "../images/home6.png"
import back from '../images/Identif.png';

function MyCarousel(){
    const settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
  
    };
  
    const scrollToFeatures = () => {
      const featuresSection = document.getElementById('features');
      if (featuresSection) {
        featuresSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
  
    const slides = [
  
      { imageUrl: home, caption: '', target: scrollToFeatures },
      { imageUrl: back, caption: '', target: scrollToFeatures },
  
    ];
  
    return (
  
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="carousel-slide">
            <div className="carousel-image-container">
              <img src={slide.imageUrl} alt={`Slide ${index + 1}`} className='carousel-image' />
            </div>
  
          </div>
        ))}
      </Slider>
  
    );
  };
export default function Carousel() {
    return (
      <div className='apps1'>
        <div className='carou'>
          <div className='text'>
            <h1 className="heading">Nvision AI</h1>
            <p className='description'>A Tool for <span className='description1'>Automatic Identification of Products and Defects using Computer Vision </span> to enhance <span className='description3'>Process Efficiency and Productivity</span>.</p>
            <a href="https://neuzenai.com/contact" target="_blank" rel="noopener noreferrer" ><button className="contact">
              Contact Us</button>
            </a>
          </div>
          <div className='home'>
            <MyCarousel />
          </div>
        </div>
  
      </div>
    )
  }




