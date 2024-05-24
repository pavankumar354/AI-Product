import React, { useState, useEffect} from 'react';
import "../styles/IndustriesWeServe.css"
import { MdPrecisionManufacturing } from "react-icons/md";
import { BiCar } from "react-icons/bi";
import { LiaMicrochipSolid } from "react-icons/lia";
import { AiOutlineInsurance } from "react-icons/ai";

export default function IndustriesWeServe() {
    const [selectedRadio, setSelectedRadio] = useState(1);
    const [isHovered, setIsHovered] = useState(false);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        if (!isHovered) {
          setSelectedRadio(prev => (prev % 4) + 1);
        }
      }, 2000);
  
      return () => clearInterval(intervalId);
    }, [isHovered]);
  
    return (
      <div className="wrapper">
        <p className='headings'><span className='nvision'>Industries</span> we serve</p>
        <div className="application-container">
          <input type="radio" name="slide" id="c1" checked={selectedRadio === 1} />
          <label htmlFor="c1" className="card" onMouseEnter={() => { setIsHovered(true); setSelectedRadio(1) }} onMouseLeave={() => setIsHovered(false)}>
            <div className="row">
              <MdPrecisionManufacturing className='icon' />
              <div className="description">
                <h4>Manufacturing</h4>
                <p>Nvision AI automates inspections, cutting costs and enhancing quality control in manufacturing.</p>
  
              </div>
            </div>
          </label>
          <input type="radio" name="slide" id="c2" checked={selectedRadio === 2} />
          <label htmlFor="c2" className="card" onMouseEnter={() => { setIsHovered(true); setSelectedRadio(2) }} onMouseLeave={() => setIsHovered(false)}>
            <div className="row">
              <BiCar className="icon" />
              <div className="description">
                <h4>Automotive</h4>
                <p>Nvision AI speeds up inspections, reducing downtime and streamlining inventory management in the automotive industry.</p>
  
              </div>
            </div>
          </label>
          <input type="radio" name="slide" id="c3" checked={selectedRadio === 3} />
          <label htmlFor="c3" className="card" onMouseEnter={() => { setIsHovered(true); setSelectedRadio(3) }} onMouseLeave={() => setIsHovered(false)}>
            <div className="row">
              <LiaMicrochipSolid className="icon" />
              <div className="description">
                <h4>Semiconductors</h4>
                <p>Nvision AI ensures high-precision inspections, improving yield and cost-efficiency in semiconductor production.</p>
              </div>
            </div>
          </label>
          <input type="radio" name="slide" id="c4" checked={selectedRadio === 4} />
          <label htmlFor="c4" className="card" onMouseEnter={() => { setIsHovered(true); setSelectedRadio(4) }} onMouseLeave={() => setIsHovered(false)}>
            <div className="row">
              <AiOutlineInsurance className="icon" />
              <div className="description">
                <h4>Insurance</h4>
                <p>Nvision AI enhances risk assessment accuracy, streamlining claims and reducing rework in the insurance sector.</p>
              </div>
            </div>
          </label>
        </div>
  
      </div>
    )
  }