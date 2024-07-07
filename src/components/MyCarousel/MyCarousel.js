"use client"
import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

const slides = [
  { id: 1, content: <div className='w-[100%] md:flex '>
    <div className=" lg:pt-[161.5px] pt-[130px] pb-[80px] lg:pb-[173px] w-[100%]">
            <h1 className="md:max-w-[657px] sm:max-w-[500px] max-w-[350px] md:text-[54px] sm:text-[40px] text-[30px] font-Inter font-semibold text-[#4D4D4D] md:leading-[76px] dark:text-white">Lessons and insights <span className="text-[#4CAF4F]">from 8 years</span></h1>
            <p className=" md:text-base sm:text-[12px] text-[10px] font-Inter font-normal text-[#717171] md:mt-[16px] md:mb-[32px] mb-[15px] dark:text-white ">Where to grow your business as a photographer: site or social media?</p>
            <a href="" className="md:py-[14px] sm:py-[10px] py-[8px] md:px-[32px] sm:px-[22px] px-[16px] bg-[#4CAF4F] text-white md:text-base text-[10px] font-Inter font-medium rounded hover:border-[#4CAF4F] hover:border-2 hover:rounded hover:bg-transparent hover:text-[#4D4D4D] duration-200">Register</a>
      </div>
        <div className="lg:pt-[96px] lg:pb-[100px] pb-[70px] flex justify-center">

        <img src="https://nexcent-react.vercel.app/assets/Illustration-0614af59.svg" alt="banner" />
        </div>
      
  </div>
    
   },
  { id: 2, content: <div>
    <img src="https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg" alt="" />
  </div> },
  { id: 3, content: <div>
    <img src="https://images.pexels.com/photos/101667/pexels-photo-101667.jpeg" alt="" />
  </div> },
];

export default function MyCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full sm:max-w-sm md:max-w-[100%] bg-gray-200 dark:bg-dark ">
      <div className="overflow-hidden relative">
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {slides.map((slide) => (
            <div key={slide.id} className="w-full flex-shrink-0">
              <div className="p-4 bg-gray-200 rounded-md dark:bg-dark">{slide.content}</div>
            </div>
          ))}
        </div>
      </div>

      <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full">
        <ChevronLeftIcon className="h-5 w-5" />
      </button>

      <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full">
        <ChevronRightIcon className="h-5 w-5" />
      </button>

      <div className="flex justify-center space-x-2 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full ${index === currentIndex ? 'bg-gray-700' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  );
}
