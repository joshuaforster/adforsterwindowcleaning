import React from 'react';
import { FaTimes, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface SingleImageProps {
  imageUrl: string;
  onPrevious: () => void;
  onNext: () => void;
  isFullscreen: boolean;
  setIsFullscreen: (value: boolean) => void;
}

export default function SingleImage({ imageUrl, onPrevious, onNext, isFullscreen, setIsFullscreen }: SingleImageProps) {
  const openFullscreen = () => {
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  return (
    <div>
      <img
        src={imageUrl}
        alt="placeholder"
        className="object-cover w-full h-full cursor-pointer hover:opacity-90"
        onClick={openFullscreen}
      />

      {isFullscreen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={closeFullscreen}
        >
          <div className="absolute top-4 right-4 text-white text-3xl">
            <FaTimes onClick={closeFullscreen} className="cursor-pointer" />
          </div>
          <div
            className="absolute left-4 text-white text-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <FaArrowLeft onClick={onPrevious} className="cursor-pointer" />
          </div>
          <div
            className="absolute right-4 text-white text-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <FaArrowRight onClick={onNext} className="cursor-pointer" />
          </div>
          <img
            src={imageUrl}
            alt="placeholder"
            className="max-h-full object-contain"
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking on the image
          />
        </div>
      )}
    </div>
  );
}