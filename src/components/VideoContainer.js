import React, { useState, useEffect, useRef } from 'react';
import "../styles/VideoContainer.css"
import { MdPause, MdPlayArrow } from "react-icons/md";
import nvision from "../nvision1.mp4"

export default function VideoContainer() {
    // const videoUrl = "https://d31h43o4y3ne0p.cloudfront.net/final%20video%20poc-1.mp4"
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

    return (
        <div className="video-container">
            <div className="video-container">
                <video
                    id="main-video"
                    src={nvision}
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
    )
}