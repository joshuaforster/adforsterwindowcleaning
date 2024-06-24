import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Button from '../CustomComponents/buttons';

const images = [
  'images/about.jpg',
  'images/about1.png',
  'images/about2.png',
  'images/about3.png',
  'images/about4.png',
  'images/booking.jpg',
  'images/broom.jpg',
  'images/caravan.jpg',
  'images/cleanhouse.jpeg',
  'images/conservatories.jpg',
  'images/conservatoryroofs.png',
  'images/digger.png',
  'images/fasciaceaning.png',
  'images/gutter.jpg',
  'images/gutterclearing.png',
  'images/gutters.jpg',
  'images/gutterwash.jpg',
  'images/hero.jpg',
  'images/HeroDesktop.png',
  'images/hoover.jpg',
  'images/house.jpg',
  'images/patio.jpeg',
  'images/patiocleaning.png',
  'images/roof.jpg',
  'images/terrace.jpg',
  'images/van.png',
  'images/van1.jpg',
  'images/WhatsApp Image 2024-05-18 at 17.19.13.jpeg',
  'images/windowclean.jpg',
  'images/windowcleaning.png',
  'images/windowcleaningservices.png',
  'images/yachtclub.jpg',
];

interface HeroFields {
  headline: string;
  subHeadline: string;
}

interface FetchResponse {
  items: Array<{
    fields: HeroFields;
  }>;
}

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [content, setContent] = useState<HeroFields | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const url = `https://cdn.contentful.com/spaces/7y2nhmah12fi/environments/master/entries?access_token=VPNyQgxB1pWAka3k7hdMjZyWTPNuBmdWTmVnF1UydtQ&content_type=home`;

    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data: FetchResponse) => {
        if (data.items.length > 0) {
          const fields = data.items[0].fields;
          setContent(fields);
        } else {
          setError('Content not found');
        }
        setIsLoading(false);
      })
      .catch(err => {
        console.error('Error fetching content:', err);
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  const { ref: headerRef, inView: headerInView } = useInView({ triggerOnce: true });
  const { ref: paragraphRef, inView: paragraphInView } = useInView({ triggerOnce: true });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-200 dark:bg-gray-800 text-black dark:text-white">
        Loading...
      </div>
    );
  }
  

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="relative isolate overflow-hidden h-/4 flex items-center justify-center pt-14">
      <div className="absolute inset-0 -z-10 w-full h-full">
        {images.map((image, index) => (
          <div
            key={image}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: index === currentImageIndex ? 1 : 0,
              transition: 'opacity 2s ease-in-out',
            }}
            className="absolute inset-0 w-full h-full"
          />
        ))}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="mx-auto max-w-2xl py-20 sm:py-24 lg:py-28 text-center">
        <h1
          ref={headerRef}
          className={`text-4xl font-bold tracking-tight text-white sm:text-6xl ${
            headerInView ? 'animate-slideInRight' : 'opacity-0'
          }`}
          style={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 1)', // Adjust the shadow to your preference
            lineHeight: '1.5', // Set the line height to 1.5 times the font size
          }}
        >
          {content?.headline || 'Professional Window Cleaners in Norwich'}
        </h1>
        <p
          ref={paragraphRef}
          className={`mt-6 text-lg leading-8 text-white ${
            paragraphInView ? 'animate-slideInLeft' : 'opacity-0'
          }`}
        >
          {content?.subHeadline || 'We offer top-notch window cleaning services for residential and commercial properties in Norwich. Let us help you keep your windows sparkling clean.'}
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button className="mr-4" variant="primary" to="/contact">Contact</Button>
          <Button variant="secondary" to="/about">Find Out More</Button>
        </div>
      </div>

      <style>
        {`
          @keyframes slideInRight {
            0% {
              transform: translateX(100%);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }

          @keyframes slideInLeft {
            0% {
              transform: translateX(-100%);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }

          .animate-slideInRight {
            animation: slideInRight 2s ease-in-out forwards;
          }

          .animate-slideInLeft {
            animation: slideInLeft 2s ease-in-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default Hero;
