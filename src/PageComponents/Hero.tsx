import React, { useEffect, useState } from 'react';
import Button from '../CustomComponents/buttons';

const images = [
  'images/about4.png',
  'images/about.jpg',
  'images/patio.jpeg',
  'images/hero.jpg', // Add as many images as you want
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
    }, 4000); 

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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="bg-blue-50 dark:bg-gray-950">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 md:grid-cols-12">
        <div className="mr-auto place-self-center md:col-span-7">
          <h1
            className="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-5xl dark:text-white text-center md:text-left"
            style={{ lineHeight: '1.25' }}
          >
            {content?.headline || 'Professional Window Cleaners in Norwich'}
          </h1>
          <p
            className="font-sans max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-white text-center md:text-left"
            style={{ lineHeight: '2' }}
          >
            {content?.subHeadline || 'We offer top-notch window cleaning services for residential and commercial properties in Norwich. Let us help you keep your windows sparkling clean.'}
          </p>
          <div className="flex justify-center md:justify-start">
            <Button className="mr-4" variant="primary" to="/contact">Contact</Button>
            <Button variant="secondary" to="/about">Find Out More</Button>
          </div>
        </div>
        <div className="md:col-span-5 flex items-center justify-center md:justify-end">
          <div className="relative w-full h-64 md:w-full md:h-96">
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Slide ${index}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                style={{ transition: 'opacity 1s ease-in-out' }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;