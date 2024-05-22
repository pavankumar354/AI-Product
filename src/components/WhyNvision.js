









import React, { useState, useEffect } from 'react';
import "../styles/WhyNvision.css";

import control from "../images/11.png";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { MdOutlineInventory } from "react-icons/md";

import { AiOutlineScan, AiOutlineSolution, AiFillCheckCircle} from 'react-icons/ai'; // Adjusted icons


const features = [
    {
        id: 1,
        title: 'Automated Inspection',
        description: 'Nvision AI streamlines quality control with swift, precise automatic inspection, setting new standards for efficiency and accuracy in diverse industries.',
        bgColor: '#4CAF50',
        icon: <AiOutlineScan />
    },
    {
        id: 2,
        title: 'Inventory Management Optimization',
        description: 'Streamline your stock levels, reduce waste, and improve order accuracy with our cutting-edge inventory management system',
        bgColor: '#2196F3',
        icon: <MdOutlineInventory />
    },
    {
        id: 3,
        title: 'Better and Faster Quality Assurance',
        description: 'Nvision AI guarantees reliable detection of damages while maintaining high-quality outcomes, ensuring confidence in the accuracy of results.',
        bgColor: '#FFC107',
        icon: <AiFillCheckCircle />
    },
    {
        id: 4,
        title: 'Decision-making and Faster solution',
        description: 'Nvision AI accelerates inspection processes, optimizing lead time and real-time inventory monitoring enables timely decision-making, reducing delays in reorder processes.',
        bgColor: '#9C27B0',
        icon: <AiOutlineSolution />
    },
    {
        id: 5,
        title: 'Cost Optimization',
        description: 'Nvision AI reduces the need for manual inspection, saving labor costs and automates risk evaluation processes',
        bgColor:'#FF5722' ,
        icon: <FaMoneyCheckDollar />
    }
];



export default function WhyNvision() {
    const [activeIndex, setActiveIndex] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(current => (current + 1) % features.length);
        }, 2000);

        return () => clearInterval(interval); 
    }, []);

    

    return (
        <div className='feature-cont1'>
            <h1 className='feature-head1'>Why <span className='nvision'>Nvision AI</span></h1>
            <div className="feature-container1">
                <div className='left-side'>
                <div className="center-image">
                    <img src={control} alt="Control System" className="center-feature-image" />
                </div></div>
                <div className="features-list">
                    {features.map((feature, index) => (
                        <div key={feature.id} className={`feature-item feature-item-${index + 1} ${index === activeIndex ? 'highlight' : ''}`}
                        style={{
                            animationDelay: `${index * 2}s`
                         }}>
                            {/* <div className="feature-number">{index + 1}</div> */}
                            {/* <div className="feature-number">{feature.icon}</div> */}
                            <h2>{feature.title}</h2>
                            <p>{feature.description}</p>
                            <div className="animated-line" style={{
                                opacity: index === activeIndex ? 1 : 0, 
                                animation: 'moveColor 2s linear both' 
                            }}></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}






































// import React, { useState, useEffect } from 'react';
// import "../styles/WhyNvision.css";

// import control from "../images/11.png";
// import { FaMoneyCheckDollar } from "react-icons/fa6";
// import { MdOutlineInventory } from "react-icons/md";

// import { AiOutlineScan, AiOutlineSolution, AiFillCheckCircle} from 'react-icons/ai'; // Adjusted icons


// const features = [
//     {
//         id: 1,
//         title: 'Automated Inspection',
//         description: 'Nvision AI streamlines quality control with swift, precise automatic inspection, setting new standards for efficiency and accuracy in diverse industries.',
//         bgColor: '#4CAF50',
//         icon: <AiOutlineScan />
//     },
//     {
//         id: 2,
//         title: 'Inventory Management Optimization',
//         description: 'Streamline your stock levels, reduce waste, and improve order accuracy with our cutting-edge inventory management system',
//         bgColor: '#2196F3',
//         icon: <MdOutlineInventory />
//     },
//     {
//         id: 3,
//         title: 'Better and Faster Quality Assurance',
//         description: 'Nvision AI guarantees reliable detection of damages while maintaining high-quality outcomes, ensuring confidence in the accuracy of results.',
//         bgColor: '#FFC107',
//         icon: <AiFillCheckCircle />
//     },
//     {
//         id: 4,
//         title: 'Decision-making and Faster solution',
//         description: 'Nvision AI accelerates inspection processes, optimizing lead time and real-time inventory monitoring enables timely decision-making, reducing delays in reorder processes.',
//         bgColor: '#9C27B0',
//         icon: <AiOutlineSolution />
//     },
//     {
//         id: 5,
//         title: 'Cost Optimization',
//         description: 'Nvision AI reduces the need for manual inspection, saving labor costs and automates risk evaluation processes',
//         bgColor:'#FF5722' ,
//         icon: <FaMoneyCheckDollar />
//     }
// ];



// export default function WhyNvision() {
//     const [activeIndex, setActiveIndex] = useState(0);
    
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setActiveIndex(current => (current + 1) % features.length);
//         }, 2000);

//         return () => clearInterval(interval); 
//     }, []);

    

//     return (
//         <div className='feature-cont1'>
//             <h1 className='feature-head1'>Why <span className='nvision'>Nvision AI</span></h1>
//             <div className="feature-container1">
                
//                 <div className="center-image">
//                     <img src={control} alt="Control System" className="center-feature-image" />
//                 </div>
//                 <div className="features-list">
//                     {features.map((feature, index) => (
//                         <div key={feature.id} className={`feature-item feature-item-${index + 1} ${index === activeIndex ? 'highlight' : ''}`}
//                         style={{
//                             animationDelay: `${index * 2}s`
//                          }}>
//                             {/* <div className="feature-number">{index + 1}</div> */}
//                             {/* <div className="feature-number">{feature.icon}</div> */}
//                             <h2>{feature.title}</h2>
//                             <p>{feature.description}</p>
//                             <div className="animated-line" style={{
//                                 opacity: index === activeIndex ? 1 : 0, 
//                                 animation: 'moveColor 2s linear both' 
//                             }}></div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }