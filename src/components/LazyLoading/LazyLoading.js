"use client"
import React, { useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const LazyLoading = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const imageRef = useRef();

  const onLoad = () => {
    setLoaded(true);
  };

  return (
    <div ref={ref} className="relative">
      {inView && (
        <img
          ref={imageRef}
          src={src}
          alt={alt}
          className={`transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={onLoad}
        />
      )}
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      )}
    </div>
  );
};

export default LazyLoading;
