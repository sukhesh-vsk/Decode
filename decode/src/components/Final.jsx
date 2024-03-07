import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Final.css';

const Final = () => {
  const containerRef = useRef();

  useEffect(() => {
    gsap.from(containerRef.current.children, {
        y: -60,
        duration: 0.5,
        stagger: {
            each: 0.2,
            repeat: -1,
            yoyo: true
        },
        ease: "power1.in"
    });

    gsap.from(".container2 .dot", {
        y: 60,
        duration: 0.5,
        stagger: {
        each: 0.2,
        repeat: -1,
        yoyo: true
        },
        ease: "power1.in",
        opacity: 0
    });

    loadComplete(5000)

    let loaded = gsap.to(".container", {
      yPercent: -100,
      stagger: {
        each: 0.15
      },
      ease: "power4.out",
      duration: 0.5,
      paused : true
    });

    function loadComplete(duree) {
      setTimeout(function () {
        loaded.restart()
      }, duree);
    }

  }, []);

  return (
    <div>
      <div className="container">
            <div className="container1" ref={containerRef}>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
            <div className="container2">
                <div className="dot shadow"></div>
                <div className="dot shadow"></div>
                <div className="dot shadow"></div>
            </div>
        </div>
      <div className="container cyan"></div>
      <div className="container darkblue"></div>
      <div className="container cyan"></div>
      <span className='here'>
        <h1 className='res'>Run to your treasure!!!</h1>
        <h1 className='loc'>Library</h1>
      </span>
    </div>
  );
}

export default Final;