import React, { useEffect, useState, useRef } from 'react';
import ImageGallery from '../PageComponents/imagegallery';

const Gallery: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const { top } = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on initial render

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`bg-white dark:bg-gray-900 transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:pt-16 lg:px-6">
        <div className="max-w-screen-lg text-gray-800 sm:text-lg dark:text-white">
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
            Gallery
          </h2>
          <p>
            Take a look at some of our best work. Our gallery showcases the high-quality window cleaning services we provide. From residential to commercial properties, our team ensures that every window sparkles. See the difference for yourself!
          </p>
        </div>
      </div>
      <ImageGallery />
    </section>
  );
}

export default Gallery;
