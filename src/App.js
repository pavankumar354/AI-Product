// MyCarousel.js
import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';
import IndustriesWeServe from './components/IndustriesWeServe';
import Product from "./components/Product"
import Carousel from './components/Carousel';
import WhatNvisonOffers from './components/WhatNvisionOffers';
import VideoContainer from './components/VideoContainer';
import CaseStudies2 from './components/CaseStudies';
import Applications from './components/Applications';
import WhyNvision from './components/WhyNvision';
import AboutUs from './components/AboutUs';

// function CaseStudies1() {

//   const settings = {
//     className: "center",
//     centerMode: true,
//     centerPadding: "0",
//     slidesToShow: 3,
//     speed: 500,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     pauseOnHover: false,

//   };

//   return (
//     <div className="case-studies-container">
//       <div className="left-content">
//         <h1>Our <span className='nvision'>Case Studies</span></h1>
//         <p>While to err is human, sometimes the cost of a mistake might be just too high. Our cutting-edge algorithms came to the rescue in these circumstances, performing admirably across a range of domains. Introducing a few use cases...</p>
//       </div>
//       <div className="right-carousel">
//         <Slider {...settings}>
//           <div className='adv2'>
//             <div className='adv-img1'>
//               <img src={manu} alt="adv" className='adv-images' />
//             </div>
//             <h3>Manufacturing Quality Control</h3>
//             <ul>
//               <li>Automation in defect detection speeds up production lines.</li>
//               <li>Machine learning models predict equipment failures.</li>
//             </ul>
//           </div>
//           <div className='adv2'>
//             <div className='adv-img1'>
//               <img src={insurance} alt="adv" className='adv-images' />
//             </div>
//             <h3>Hassle-free claim process</h3>
//             <ul>
//               <li>Automated analysis of accident images for faster claims processing.</li>
//               <li>Data-driven risk assessment models enhance policy personalization.</li>
//             </ul>
//           </div>
//           <div className='adv2'>
//             <div className='adv-img1'>
//               <img src={damage} alt="adv" className='adv-images' />
//             </div>
//             <h3>Automotive Defect Intelligence</h3>
//             <ul>
//               <li>Quality control systems check vehicle components for defects in real-time.</li>
//               <li>Autonomous driving algorithms improve through continuous machine learning.</li>
//             </ul>
//           </div>
//           <div className='adv2'>
//             <div className='adv-img1'>
//               <img src={semiconductor} alt="adv" className='adv-images' />
//             </div>
//             <h3>Semiconductor Fault Analysis</h3>
//             <ul>
//               <li>Microscopic defect detection in silicon wafers reduces production waste.</li>
//               <li>AI-driven process optimization increases yield and lowers fabrication costs.</li>
//             </ul>
//           </div>

//         </Slider>
//       </div>
//     </div>
//   );
// };

function App() {
  return (
    <div className="App">
      <Carousel />
      <WhatNvisonOffers />
      <div className='features'>
        <WhyNvision />
      </div>
      <div className="appvid">
        <IndustriesWeServe />
        <VideoContainer/>
      </div>
      <Applications />
      <Product />
      <div className='case-studies'>
        <CaseStudies2 />
      </div>
      <AboutUs />
    </div>
  );
}
export default App;
