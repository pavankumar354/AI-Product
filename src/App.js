// MyCarousel.js
import React, { useState,useEffect,useRef } from 'react';
import axios from 'axios';
import { MdOutlineCloudUpload,MdPause, MdPlayArrow } from "react-icons/md";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';
import back from './images/Identif.png';
import back1 from './images/prod id.png';
import back2 from './images/defect id.png';
import back3 from './images/defect cate.png';
import back4 from './images/price est.png';
import adv1 from "./images/product1.png";
import adv2 from "./images/product2.png";
import adv4 from "./images/product3.png";
import adv3 from "./images/product4.png";
import icon1 from "./images/step1.gif";
import icon2 from "./images/step2.gif";
import icon3 from "./images/step3.gif";
import log1 from "./images/sample1.jpg";
import log2 from "./images/sample2.jpg";
import log3 from "./images/sample3.jpg";
import log4 from "./images/sample4.jpg";
import log5 from "./images/sample4.jpg";
import log6 from "./images/sample6.jpg";
import log7 from "./images/sample7.jpg";
import log8 from "./images/sample8.jpg";
import gif2 from "./images/gif2.gif"
import gif3 from "./images/Price-Hero-Animation.gif"
import gif5 from "./images/gif3.gif"



const MAX_FILE_SIZE_MB = 200;
const ALLOWED_FILE_TYPES = ['image/jpeg', 'image/jpg', 'image/png'];

const sampleImages = [
  {
    url: log1,
    type: 'image/jpeg',
    size: 100000,
    alt: 'image1',
  },
  {
    url: log2,
    type: 'image/png',
    size: 150000,
    alt: 'image2',
  },
  {
    url: log3,
    type: 'image/jpeg',
    size: 180000,
    alt: 'image3',
  },
  {
    url: log4,
    type: 'image/jpeg',
    size: 120000,
    alt: 'image4',
  }, {
    url: log5,
    type: 'image/jpeg',
    size: 180000,
    alt: 'image3',
  },
  {
    url: log6,
    type: 'image/jpeg',
    size: 120000,
    alt: 'image4',
  },{
    url: log7,
    type: 'image/jpeg',
    size: 180000,
    alt: 'image3',
  },
  {
    url: log8,
    type: 'image/jpeg',
    size: 120000,
    alt: 'image4',
  },
];


function CenterMode() {
  const [slideSettings, setSlideSettings] = useState({
    className: "center",
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 3,
    speed: 500,
    autoplay: true,        
  autoplaySpeed: 3000,
  pauseOnHover: false,
  
  });

  useEffect(() => {
    const updateSettings = () => {
      
      const isMobile = window.innerWidth < 768;
      const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
      
      if (isMobile) {
        setSlideSettings(prevSettings => ({
          ...prevSettings,
          slidesToShow: 1
        }));
      } else if (isTablet) {
        setSlideSettings(prevSettings => ({
          ...prevSettings,
          slidesToShow: 1
        }));
      } else {
        setSlideSettings(prevSettings => ({
          ...prevSettings,
          slidesToShow: 3
        }));
      }
    };

    updateSettings();
    window.addEventListener('resize', updateSettings);

    return () => {
      window.removeEventListener('resize', updateSettings);
    };
  }, []);

  return (
    <div className="slider-container">
      <Slider {...slideSettings}>
        <div className='adv1'>
          <div className='adv-img'>
            <img src={adv1} alt="adv" className='adv-images' />
          </div>
          <h3>Product Identification</h3>
          <p className='paragraph'>Automatic identification of the product using Computer Vision.</p>
        </div>
        <div className='adv1'>
          <div className='adv-img'>
            <img src={adv2} alt="adv" className='adv-images' />
          </div>
          <h3>Defects Identification</h3>
          <p className='paragraph'>Efficiently identifies defects found across products.</p>
        </div>
        <div className='adv1'>
          <div className='adv-img'>
            <img src={adv4} alt="adv" className='adv-images' />
          </div>
          <h3>Defects Categorization</h3>
          <p className='paragraph'>Efficiently Categorizes defects found across products.</p>
        </div>
        <div className='adv1'>
          <div className='adv-img'>
            <img src={adv3} alt="adv" className='adv-images' />
          </div>
          <h3>Price Estimation</h3>
          <p className='paragraph'>Estimates the costs for the defects detected in the product.</p>
        </div>
      </Slider>
    </div>
  );
}




const MyCarousel = () => {
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
    { imageUrl: back, caption: 'Nvision AI' , target: scrollToFeatures},
    { imageUrl: back1, caption: '1. Product Identification', target: scrollToFeatures},
    { imageUrl: back2, caption: '2. Defect Identification', target: scrollToFeatures },
    { imageUrl: back3, caption: '3. Defect Categorization',target: scrollToFeatures },
    { imageUrl: back4, caption: '4. Price Estimation',target: scrollToFeatures }
  ];

  return (
    
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index} className="carousel-slide">
          <div className="carousel-image-container">
            <img src={slide.imageUrl} alt={`Slide ${index + 1}`} />
          </div>
          <div className="carousel-caption" onClick={slide.target}>
            <p>{slide.caption} </p> 
          </div>
        </div>
      ))}
    </Slider>
  
  );
};






function App() {
  const videoUrl = "https://d31h43o4y3ne0p.cloudfront.net/final%20video%20poc-1.mp4"
  const [videoPlaying, setVideoPlaying] = useState(false);
  
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveStep(parseInt(entry.target.getAttribute('data-step')));
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.7  // Adjust the threshold based on when you want the step to become active
    });

    stepRefs.forEach((ref, index) => {
      if (ref.current) {
        ref.current.setAttribute('data-step', index);
        observer.observe(ref.current);
      }
    });

    return () => {
      stepRefs.forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);// eslint-disable-line react-hooks/exhaustive-deps


  const handlePauseResume = () => {
    const videoElement = document.getElementById('main-video');

    if (videoElement) {
      if (videoPlaying) {
        videoElement.pause();
      } else {
        videoElement.play();
      }

      setVideoPlaying(!videoPlaying);
    }
  };
  const [selectedImage, setSelectedImage] = useState(null);
  const [apiImage, setApiImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedTab, setSelectedTab] = useState("product");
  const [isDragging, setIsDragging] = useState(false);
  const [typingAnimation, setTypingAnimation] = useState(false);
  const [activeButton, setActiveButton] = useState("product");
  const [uploadStatus, setUploadStatus] = useState('Upload an image');

 
  
  
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (validateFile(file)) {
      setSelectedImage(file);
      setApiImage(null);
    } else {
      alert('Please choose a valid image file (jpg, jpeg, or png) under 200MB.');
    }
  };

  const validateFile = (file) => {
    if (!file) {
      return false;
    }
    const isFileTypeValid = ALLOWED_FILE_TYPES.includes(file.type);
    const isFileSizeValid = file.size / (1024 * 1024) <= MAX_FILE_SIZE_MB;

    return isFileTypeValid && isFileSizeValid;
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragEnd = (event) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);

    const file = event.dataTransfer.files[0];

    if (validateFile(file)) {
      setSelectedImage(file);
    } else {
      alert('Please choose a valid image file (jpg, jpeg, or png) under 200MB.');
    }
  };



  const baseUrl = "https://gtjjto77a3swmj2c5zvpxv2moq0uhdtu.lambda-url.ap-south-1.on.aws";

  const handleFetchImage = async () => {
    try {
      if (!selectedImage) {
        setError('Please select an image.');
        return;
      }

      setLoading(true);
      setError(null);
      setUploadStatus('Uploading an image...');
      const formData = new FormData();
      formData.append('image', selectedImage);
      const response = await axios.post(`${baseUrl}/upload-image`, formData);

      if (response.data.message === 'Upload relevant car image') {
        setApiImage(null);
        setUploadStatus('Please upload a relevant car image.');
        alert('Please upload a relevant car image.');
      } else {

        const { classification_result, detection_plot_url, labels_with_confidence } = response.data;

        const uploadedImageDetails = {
          id: 1,
          url: URL.createObjectURL(selectedImage),
          alt: 'Uploaded Image',
          description: 'Image uploaded successfully',
        };

        const outputImageDetails = {
          id: 2,
          url: `${baseUrl}${detection_plot_url}?timestamp=${new Date().getTime()}`,
          alt: 'AI Result',
          description: classification_result,
          labelsWithConfidence: labels_with_confidence,
        };

        setApiImage([uploadedImageDetails, outputImageDetails]);
        setUploadStatus('Image uploaded successfully');
      }
    } catch (error) {
      console.error('Error fetching image:', error);
      console.error('Error Details:', error.response);
      setError('Error uploading image. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setSelectedImage(null);
    setApiImage(null);
    setError(null);
    setUploadStatus('Upload an image');
  };




  useEffect(() => {
    if (apiImage && apiImage.length > 1) {
      setTypingAnimation(true);

      setTimeout(() => {
        document.getElementById('result-container').scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 1000);
    }

    return () => {
      document.body.classList.remove('typing-animation-active');
    };
  }, [apiImage]);



  return (
      
    <div  className="App">
      <div className='apps1'>
      <div className='carou'>
      <MyCarousel/>
      </div>
      <div className='head'>
      <div className='details'>
        
        <p className='description'>A Tool for <span className='description1'>Automatic Identification of Products and Defects using Computer Vision </span> to enhance <span className='description3'>Process Efficiency and Productivity</span>.</p>
      </div>
      
      <div className="video-container">
      <div className="video-container">
        <video
          id="main-video"
          src={videoUrl}
          type="video/mp4"
          className='videos'
          
          controls={false} 
          onClick={handlePauseResume} 
        />
        <div className="video-controls" >
          {videoPlaying ? (
            <MdPause onClick={handlePauseResume} className='control-icon1' />
          ) : (
            <MdPlayArrow onClick={handlePauseResume} className='control-icon1' />
          )}
        </div>
      </div>
      </div>
      </div>
      </div>
      <div className='advantages-container section' id="features">
        <h2>What <span className='nvision'>Nvision AI</span> offers?</h2>
        <CenterMode/>
      </div>

          <div className='container1'>
      <div className="container">
      <header className="header"> 
        <h1>Resolutions for challenges which could be  ENCOUNTERED!</h1>
      </header>
      <p className='overcome'>Overcome all these challenges with our AI software solution.</p>
    </div>


    {/* <div className="main-container">
      <div className="background-container">
      <div className="background-container">
        <img className={`process-image ${activeStep === 0 ? 'highlighted' : 'faded'}`} src={gif5} alt="Step 1 Images" />
        <img className={`process-image ${activeStep === 1 ? 'highlighted' : 'faded'}`} src={gif2} alt="Step 2 Images" />
        <img className={`process-image ${activeStep === 2 ? 'highlighted' : 'faded'}`} src={gif3} alt="Step 3 Images" />
        
      </div>
      </div>

      <div className="content-right">
        <div ref={stepRefs[0]} className="process-step" id="step1">
          <p className="step-number">01</p>
          <h3 className="step-title">Seamless inventory management</h3>
          <div className="criteria-list">
            <div className="criteria">
              <svg className="check-icon" viewBox="0 0 24 24">
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
              <p>Manufacturing Industries</p>
            </div>
            <div className="criteria">
              <svg className="check-icon" viewBox="0 0 24 24">
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
              <p>Insurance Sector</p>
            </div>
          </div>
          <p className="description2">
          Leverage our advanced AI to streamline your inventory management. Our system accurately recognizes and categorizes products, enhancing efficiency. Optimize your processes and boost productivity with precision and speed..</p>
        </div>
        
        <div ref={stepRefs[1]} className="process-step" id="step2">
          <p className="step-number">02</p>
          <h3 className="step-title">Comprehensive Defect Identification and Defect Categorization</h3>
          <div className="criteria-list">
            <div className="criteria">
              <svg className="check-icon" viewBox="0 0 24 24">
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
              <p>Manufacturing Industries</p>
            </div>
            <div className="criteria">
              <svg className="check-icon" viewBox="0 0 24 24">
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
              <p>Insurance Sector</p>
            </div>
          </div>
          <p className="description2">
          Comprehensive defect identification and categorization, facilitated by AI, enhance quality control in manufacturing and risk assessment in insurance, optimizing performance and reducing costs across both sectors. 
          </p>
        </div>
        
       
        <div ref={stepRefs[2]} className="process-step1" id="step3">
          <p className="step-number">03</p>
          <h3 className="step-title">Automated Cost Analysis</h3>
          <div className="criteria-list">
            <div className="criteria">
              <svg className="check-icon" viewBox="0 0 24 24">
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
              <p>Manufacturing Industries</p>
            </div>
            <div className="criteria">
              <svg className="check-icon" viewBox="0 0 24 24">
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
              <p>Insurance Sector</p>
            </div>
          </div>
          <p className="description2">
          Automated cost analysis uses advanced algorithms to assess repair costs for detected product damages, enhancing accuracy and efficiency in budgeting and claims processing. This automation streamlines financial planning and decision-making in sectors like manufacturing and insurance.
           </p>
        </div>
        </div>
      </div> */}
    </div>




    <div className="main-container">
  <div className="steps1" ref={stepRefs[0]}>
    <div className="background-container">
      <img className={`process-image ${activeStep === 0 ? 'highlighted' : 'faded'}`} src={gif5} alt="Step 1 Images" />
    </div>
    <div className="content-right">
    <div ref={stepRefs[0]} className="process-step" id="step1">
          <p className="step-number">01</p>
          <h3 className="step-title">Seamless inventory management</h3>
          <div className="criteria-list">
            <div className="criteria">
              <svg className="check-icon" viewBox="0 0 24 24">
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
              <p>Manufacturing Industries</p>
            </div>
            <div className="criteria">
              <svg className="check-icon" viewBox="0 0 24 24">
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
              <p>Insurance Sector</p>
            </div>
          </div>
          <p className="description2">
          Leverage our advanced AI to streamline your inventory management. Our system accurately recognizes and categorizes products, enhancing efficiency. Optimize your processes and boost productivity with precision and speed..</p>
        </div>
    </div>
  </div>
  <div className="steps1" ref={stepRefs[1]}>
    <div className="background-container">
      <img className={`process-image ${activeStep === 1 ? 'highlighted' : 'faded'}`} src={gif2} alt="Step 2 Images" />
    </div>
    <div className="content-right">
    <div ref={stepRefs[1]} className="process-step" id="step2">
          <p className="step-number">02</p>
          <h3 className="step-title">Comprehensive Defect Identification and Defect Categorization</h3>
          <div className="criteria-list">
            <div className="criteria">
              <svg className="check-icon" viewBox="0 0 24 24">
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
              <p>Manufacturing Industries</p>
            </div>
            <div className="criteria">
              <svg className="check-icon" viewBox="0 0 24 24">
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
              <p>Insurance Sector</p>
            </div>
          </div>
          <p className="description2">
          Comprehensive defect identification and categorization, facilitated by AI, enhance quality control in manufacturing and risk assessment in insurance, optimizing performance and reducing costs across both sectors. 
          </p>
        </div>
    </div>
  </div>
  <div className="steps1" ref={stepRefs[2]}>
    <div className="background-container">
      <img className={`process-image ${activeStep === 2 ? 'highlighted' : 'faded'}`} src={gif3} alt="Step 3 Images" />
    </div>
    <div className="content-right">
    <div ref={stepRefs[2]} className="process-step" id="step3">
          <p className="step-number">03</p>
          <h3 className="step-title">Automated Cost Analysis</h3>
          <div className="criteria-list">
            <div className="criteria">
              <svg className="check-icon" viewBox="0 0 24 24">
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
              <p>Manufacturing Industries</p>
            </div>
            <div className="criteria">
              <svg className="check-icon" viewBox="0 0 24 24">
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
              <p>Insurance Sector</p>
            </div>
          </div>
          <p className="description2">
          Automated cost analysis uses advanced algorithms to assess repair costs for detected product damages, enhancing accuracy and efficiency in budgeting and claims processing. This automation streamlines financial planning and decision-making in sectors like manufacturing and insurance.
           </p>
        </div>
    </div>
  </div>
</div>

      

      <div className='test-heading-container'>
      <h2 className='test-heading'>Let Nvision AI accelerate your business growth</h2>
      <p>Get to know the information at your fingertips using our powerful AI in just 3 steps</p>
      <div className='steps'>
        <div className='step'>
          <div className='image-icon'>
          <img src={icon1} alt="step-icon" className='step-icon'/></div>
          <h3>Upload the image</h3>
          <p>Upload the image of your damaged car or vehicle</p>
        </div>
        <div className='step'>
        <div className='image-icon'>
          <img src={icon2} alt="step-icon" className='step-icon'/></div>
          <h3>Run the Nvision AI check</h3>
          <p>Run the powerful and specialised Nvision AI Check </p>
        </div>
        <div className='step'>
        <div className='image-icon'>
          <img src={icon3} alt="step-icon" className='step-icon'/></div>
          <h3>Know the problems</h3>
          <p>Get the information at your fingertips in seconds.</p>
        </div>
      </div>
      </div>

     
      <div className='demo-container'>
      <div className='test-heading-container1'>
      <h2  className='video-head'>Experience Nvision AI</h2>
      </div>
      <div className='app'>
      
      
      
      <h3>{uploadStatus}</h3>
      <div className='image-upload-container'>
        <div
          className={`upload-container ${isDragging ? 'dragging' : ''}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragEnd}
          onDrop={handleDrop}
        >
        <div className='drop-zone'>
          <div className='upload-icon'>
          <MdOutlineCloudUpload />
          </div>
          <div className='drop-container'>
            <p className='pa'>{selectedImage ? selectedImage.name : 'Drag and drop image here '}</p>
            <p className='paragraph'>{selectedImage ? "" : 'Limit 200mb per file. JPG,PNG,JPEG'}</p>
          </div>
        </div>
      </div>
      <label className='browse-button'>
            Browse
          <input type="file" className='input' onChange={handleImageUpload} style={{ display: 'none' }} />
      </label>
       </div>
      
       <button onClick={handleFetchImage} disabled={loading}>
          {loading ? (
            <span>
              Processing... <div className="spinner" />
            </span>
          ) : (
            'Upload and Run'
          )}
        </button>
        <button onClick={handleClear}>Clear</button>  {loading && <div class="loader">
    <span class="loader-text">loading</span>
      <span class="load"></span>
  </div>}
        <div id="result-container" className={`result-container ${typingAnimation ? 'typing-animation' : ''}`}>
      {!apiImage && (
  <div className='result-container1 ' >
    <h3>Explore Our Featured Samples</h3>
    <hr className='hr-line'/>
    <div className='sample-image'>
      {sampleImages.map((sample, index) => (
        <div
          className='sample1'
          key={index} onClick={() => handleImageUpload(new File([{}], sample.name, { type: sample.type, size: sample.size }))}
          
        >
          <img src={sample.url} alt={sample.alt} className='sample' />
        </div>
      ))}
    </div>
  </div>
)}

        {apiImage && apiImage.length > 1 && (
          <div className='output-container'>
            
            <div className='output-buttons'>
        <button
          className={activeButton === "product" ? 'active' : ''}
          onClick={() => {
            setSelectedTab("product");
            setActiveButton("product");
          }}
        >
          Product Name
        </button>
        <button
          className={activeButton === "imageDetection" ? 'active' : ''}
          onClick={() => {
            setSelectedTab("imageDetection");
            setActiveButton("imageDetection");
          }}
        >
          Defects Identification
        </button>
        <button
          className={activeButton === "defectDetection" ? 'active' : ''}
          onClick={() => {
            setSelectedTab("defectDetection");
            setActiveButton("defectDetection");
          }}
        >
          Defects categorization
        </button>
        <button
          className={activeButton === "priceestimation" ? 'active' : ''}
          onClick={() => {
            setSelectedTab("priceestimation");
            setActiveButton("priceestimation");
          }}
        >
          Price Estimation
        </button>
      </div>
            <hr className='hr-line'/>
            <div >
              <div className='output-content'>
              {selectedTab === "product" && (
                <><div className='result'><div className='result-out'>
                  {apiImage && apiImage.length > 0 && (
              <img src={apiImage[0].url} alt={apiImage[0].alt} className="result-image" />
          )}</div><div className="vertical-line"></div><hr className='hr-line1'/><div className='result-out'>
                  <p className={`result-description ${typingAnimation ? 'typing-animation' : ''}`}>
                    {apiImage[1].description}
                  </p></div></div>
                </>
              )}</div>

              {selectedTab === "imageDetection" && (
                <><div className='result'><div className='result-out'>
                  {apiImage && apiImage.length > 0 && (
              <img src={apiImage[0].url} alt={apiImage[0].alt} className="result-image" />
          )}</div><div className="vertical-line"></div><hr className='hr-line1'/><div className='result-out'>
                  <img src={apiImage[1].url} alt={apiImage[1].alt} className="result-image" /></div></div>
                </>
              )}
              {selectedTab === "defectDetection" && (
  <><div className='result'><div className='result-out'>
    <img src={apiImage[1].url} alt={apiImage[1].alt} className="result-image" /></div><div className="vertical-line"></div><hr className='hr-line1'/><div className='result-out1'>
    {apiImage[1].labelsWithConfidence && apiImage[1].labelsWithConfidence.length > 0 ? (
      
      <ul className='labels'>
        
        {apiImage[1].labelsWithConfidence.map((label, index) => (
          <li key={index} className='label'>{label.charAt(0).toUpperCase() + label.slice(1)}</li>
        ))}
      </ul>
    ) : (
      <p className='result-description'>No defects found</p>
    )}</div></div>
  </>
)} {selectedTab === "priceestimation" && (
  <>
    <div className='result'><div className='result-out'>
    <img src={apiImage[1].url} alt={apiImage[1].alt} className="result-image" /></div><div className="vertical-line"></div><hr className='hr-line1'/><div className='result-out1'>
    {apiImage[1].labelsWithConfidence && apiImage[1].labelsWithConfidence.length > 0 ? (
      
      <ul className='labels'>
        
        {apiImage[1].labelsWithConfidence.map((label, index) => (
          <li key={index} className='label'>{label.charAt(0).toUpperCase() + label.slice(1)}</li>
        ))}
      </ul>
    ) : (
      <p className='result-description'>No defects found</p>
    )}</div>
    </div>
  </>
)}
            </div>
          </div>
        )}
</div></div> 
        
        
  {error && <p style={{ color: 'red' }}>{error}</p>}
      
</div>
    </div>
  );
}

export default App;
