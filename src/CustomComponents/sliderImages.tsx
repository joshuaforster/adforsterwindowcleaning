import React from 'react';
import { FaTimes, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

interface ImageType {
  imageUrl: string;
}

interface SliderProps {
  firstImage: ImageType;
  secondImage: ImageType;
  onPrevious: () => void;
  onNext: () => void;
  isFullscreen: boolean;
  setIsFullscreen: (value: boolean) => void;
}

export default function Slider({ firstImage, secondImage, onPrevious, onNext, isFullscreen, setIsFullscreen }: SliderProps) {
  const openFullscreen = () => {
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  return (
    <div>
      <div
        className="relative w-full h-full overflow-hidden cursor-pointer transition-transform duration-300 transform hover:scale-105"
        onClick={openFullscreen}
      >
        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
        <ReactBeforeSliderComponent
          firstImage={firstImage}
          secondImage={secondImage}
        />
      </div>

      {isFullscreen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={closeFullscreen}    >
          <button
            className="absolute top-4 right-4 text-white text-3xl z-50"
            onClick={(e) => { e.stopPropagation(); closeFullscreen(); }}
          >
            <FaTimes />
          </button>
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl z-50"
            onClick={(e) => { e.stopPropagation(); onPrevious(); }}
          >
            <FaArrowLeft />
          </button>
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl z-50"
            onClick={(e) => { e.stopPropagation(); onNext(); }}
          >
            <FaArrowRight />
          </button>
          <div
            className="relative w-4/5 h-4/5"
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking on the image
          >
            <ReactBeforeSliderComponent
              firstImage={firstImage}
              secondImage={secondImage}
            />
          </div>
        </div>
      )}
    </div>
    );
}