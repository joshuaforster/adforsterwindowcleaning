import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import ImageGallery from "./imagegallery";

const HomeGallery: React.FC = () => {
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

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check visibility on initial render

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative">
      <div className="fixed inset-0 bg-white dark:bg-gray-900 -z-10" />
      <div
        className={`transition-all duration-1000 transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="px-4 mx-auto max-w-screen-xl lg:pt-6 lg:px-6">
          <div className="max-w-screen-lg text-gray-800 sm:text-lg dark:text-white">
            <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
              Gallery
            </h2>
            <p>
              Take a look at some of our best work. Our gallery showcases the
              high-quality window cleaning services we provide. Whether it's
              residential or commercial properties, our team ensures that every
              window sparkles. See the difference for yourself and experience the
              clarity that only our professional cleaning can bring.
            </p>
          </div>
        </div>
        <div>
          <ImageGallery limit={3} />
        </div>
        <div className="flex justify-center mt-8">
          <Link
            to="/gallery"
            className="px-6 py-3 mb-8 text-white bg-customBlue rounded-md hover:bg-customBlue-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-customBlue"
          >
            See Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeGallery;
