import React from 'react';
import '../styles/CaseStudies.css';
import slide_image_1 from "../images/Manufacturing.png"
import slide_image_2 from "../images/download.png"
import slide_image_3 from "../images/automotive.png"
import slide_image_4 from "../images/semiconductor.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';

export default function CaseStudies4() {
  return (
    <div className="Case-studies4-container">
       <div className="case-studies3-heading">
                <h1>Our <span className='nvision'>Case Studies</span></h1>
                <p>While to err is human, sometimes the cost of a mistake might be just too high. Our cutting-edge algorithms came to the rescue in these circumstances, performing admirably across a range of domains. Introducing a few use cases...</p>
          </div>
      <Swiper
        effect={'coverflow'}
        // initialSlide={1}
        grabCursor={true}
        centeredSlides={true}
        autoplay= {{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation,Autoplay]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image" />
          <h3>Manufacturing Quality Control</h3>
          <ul>
            <li>Automation in defect detection speeds up production lines.</li>
            <li>Machine learning models shall predict equipment failures.</li>
          </ul>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt="slide_image" />
          <h3>Semiconductor Fault Analysis</h3>
          <ul>
            <li>Microscopic defect detection in silicon wafers reduces production waste.</li>
            <li>AI-driven process optimization increases yield and lowers fabrication costs.</li>
          </ul>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="slide_image" />
          <h3>Automotive Defect Intelligence</h3>
          <ul>
            <li>Quality control systems check vehicle components for defects in real-time.</li>
            <li>Autonomous driving algorithms improve through continuous machine learning.</li>
          </ul>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="slide_image" />
          <h3>Hassle-free claim process</h3>
          <ul>
            <li>Automated analysis of accident images for faster claims processing.</li>
            <li>Data-driven risk assessment models enhance policy personalization.</li>
          </ul>
        </SwiperSlide>
        
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image" />
          <h3>Manufacturing Quality Control</h3>
          <ul>
            <li>Automation in defect detection speeds up production lines.</li>
            <li>Machine learning models shall predict equipment failures.</li>
          </ul>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt="slide_image" />
          <h3>Semiconductor Fault Analysis</h3>
          <ul>
            <li>Microscopic defect detection in silicon wafers reduces production waste.</li>
            <li>AI-driven process optimization increases yield and lowers fabrication costs.</li>
          </ul>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="slide_image" />
          <h3>Automotive Defect Intelligence</h3>
          <ul>
            <li>Quality control systems check vehicle components for defects in real-time.</li>
            <li>Autonomous driving algorithms improve through continuous machine learning.</li>
          </ul>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="slide_image" />
          <h3>Hassle-free claim process</h3>
          <ul>
            <li>Automated analysis of accident images for faster claims processing.</li>
            <li>Data-driven risk assessment models enhance policy personalization.</li>
          </ul>
        </SwiperSlide>
        
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
          <span className=" material-symbols-outlined">
                        arrow_back
                    </span>
          </div>
          <div className="swiper-button-next slider-arrow">
          <span className="material-symbols-outlined">
                        arrow_forward
                    </span>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}