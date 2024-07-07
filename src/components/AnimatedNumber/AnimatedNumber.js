"use client"
import { useEffect, useRef } from 'react';

const AnimatedNumber = ({ number, duration }) => {
  const spanRef = useRef();

  useEffect(() => {
    let start = null;
    const initial = 0;
    const target = number;
    const increment = target / (duration / 16); // 60 FPS

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const current = Math.min(initial + increment * (progress / (duration / 1000)), target);
      spanRef.current.innerText = Math.floor(current).toLocaleString();
      if (progress < duration) {
        requestAnimationFrame(step);
      } else {
        spanRef.current.innerText = target.toLocaleString();
      }
    };

    requestAnimationFrame(step);
  }, [number, duration]);

  return <span ref={spanRef}>0</span>;
};

export default AnimatedNumber;
