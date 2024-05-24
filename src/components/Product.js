import React, { useState, useEffect} from 'react';
import "../styles/Product.css"
import axios from 'axios';
import {MdOutlineCloudUpload} from "react-icons/md";
import log1 from "../images/sample1.jpg";
import log2 from "../images/sample2.jpg";
import log3 from "../images/sample3.jpg";
import log4 from "../images/sample4.jpg";
import log5 from "../images/sample5.jpg";
import log6 from "../images/sample6.jpg";
import log7 from "../images/sample7.jpg";
import log8 from "../images/sample8.jpg";
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
  }, {
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

export default function Product() {
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
      <div className='demo-container'>
        <div className='test-heading-container1'>
          <h2 className='video-head'>Experience <span className='nvision'>Nvision AI</span></h2>
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
            <span class="loader-text"></span>
            <span class="load"></span>
          </div>}
          <div id="result-container" className={`result-container ${typingAnimation ? 'typing-animation' : ''}`}>
            {!apiImage && (
              <div className='result-container1 ' >
                <h3>Explore <span className='nvision'>Our Featured Samples</span></h3>
                <hr className='hr-line' />
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
                <hr className='hr-line' />
                <div >
                  <div className='output-content'>
                    {selectedTab === "product" && (
                      <><div className='result'><div className='result-out'>
                        {apiImage && apiImage.length > 0 && (
                          <img src={apiImage[0].url} alt={apiImage[0].alt} className="result-image" />
                        )}</div><div className="vertical-line"></div><hr className='hr-line1' /><div className='result-out'>
                          <p className={`result-description ${typingAnimation ? 'typing-animation' : ''}`}>
                            {apiImage[1].description}
                          </p></div></div>
                      </>
                    )}</div>
  
                  {selectedTab === "imageDetection" && (
                    <><div className='result'><div className='result-out'>
                      {apiImage && apiImage.length > 0 && (
                        <img src={apiImage[0].url} alt={apiImage[0].alt} className="result-image" />
                      )}</div><div className="vertical-line"></div><hr className='hr-line1' /><div className='result-out'>
                        <img src={apiImage[1].url} alt={apiImage[1].alt} className="result-image" /></div></div>
                    </>
                  )}
                  {selectedTab === "defectDetection" && (
                    <><div className='result'><div className='result-out'>
                      <img src={apiImage[1].url} alt={apiImage[1].alt} className="result-image" /></div><div className="vertical-line"></div><hr className='hr-line1' /><div className='result-out1'>
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
                        <img src={apiImage[1].url} alt={apiImage[1].alt} className="result-image" /></div><div className="vertical-line"></div><hr className='hr-line1' /><div className='result-out1'>
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
    )
}
  