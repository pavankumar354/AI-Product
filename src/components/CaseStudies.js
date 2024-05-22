import React, { useRef,useEffect } from 'react';
import '../styles/CaseStudies.css';
import insurance from "../images/insurance1.jpg"
import manu from "../images/Crack (4).png"
import semiconductor from "../images/Etching error (1).png"
import imgdamage from "../images/defect cate.png"
 
const lists = [
    [
        'Automation in defect detection speeds up production lines.',
        'Machine learning models predict equipment failures.'
    ],
    [
        'Automated analysis of accident images for faster claims processing.',
        'Data-driven risk assessment models enhance policy personalization.'
    ],
    [
        'Quality control systems check vehicle components for defects in real-time.',
        'Autonomous driving algorithms improve through continuous machine learning.'
    ],
    [
        'Microscopic defect detection in silicon wafers reduces production waste.',
        'AI-driven process optimization increases yield and lowers fabrication costs.'
    ],
    [
        'Microscopic defect detection in silicon wafers reduces production waste.',
        'AI-driven process optimization increases yield and lowers fabrication costs.'
    ]
];
const cardData = [
    {
        image: manu,
        name: 'Manufacturing Quality Control',
        description: 'Automation in defect detection speeds up production lines. Machine learning models predict equipment failures.'
    },
    {
        image: insurance,
        name: 'Hassle-free claim process',
        description: 'Automated analysis of accident images for faster claims processing. Data-driven risk assessment models enhance policy personalization.'
    },
    {
        image: imgdamage,
        name: 'Automotive Defect Intelligence',
        description: 'Quality control systems check vehicle components for defects in real-time. Autonomous driving algorithms improve through continuous machine learning.'
    },
    {
        image: semiconductor,
        name: 'Semiconductor Fault Analysis',
        description: 'Microscopic defect detection in silicon wafers reduces production waste. AI-driven process optimization increases yield and lowers fabrication costs.'
    },
    {
        image: semiconductor,
        name: 'Semiconductor Fault Analysis',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
    },
];
 
function Card({ id, image, name, description }) {
    console.log(id);
    return (
        <div className="case-studies2-item">
            <img src={image} className='case-studies2-img'></img>
            <div className="case-studies2-content">
                <div className="case-studies2-name">{name}</div>
                <ul className='case-studies2-des'>
                    {lists[id].map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
 
function CaseStudies2() {
    const slideRef = useRef(null);
 
    const handleNextClick = () => {
        const items = slideRef.current.querySelectorAll('.case-studies2-item');
        slideRef.current.appendChild(items[0]);
    };
 
    const handlePrevClick = () => {
        const items = slideRef.current.querySelectorAll('.case-studies2-item');
        slideRef.current.prepend(items[items.length - 1]);
    };
    useEffect(() => {
        const interval = setInterval(() => {
          handleNextClick();
        }, 3000);
        return () => clearInterval(interval);
      }, []);
 
    return (
        <div className='case-studies2-container'>
            <div className="case-studies2-heading">
                <h1>Our <span className='nvision'>Case Studies</span></h1>
                <p>While to err is human, sometimes the cost of a mistake might be just too high. Our cutting-edge algorithms came to the rescue in these circumstances, performing admirably across a range of domains. Introducing a few use cases...</p>
            </div>
            <div className="case-studies2-box">
                <div className="case-studies2-slide" ref={slideRef}>
                    {cardData.map((card, index) => (
                        <Card id={index} {...card} />
                    ))}
                </div>
                <div className="case-studies2-button">
                    <button className="case-studies2-prev" onClick={handlePrevClick}><span className="material-symbols-outlined">
                        arrow_back
                    </span></button>
                    <button className="case-studies2-next" onClick={handleNextClick}><span className="material-symbols-outlined">
                        arrow_forward
                    </span></button>
                </div>
            </div>
        </div>
    );
}
 
export default CaseStudies2;