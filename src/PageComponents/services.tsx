import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useServices } from '../CustomComponents/ServicesContext';

const Services: React.FC = () => {
  const { services } = useServices();
  const [showAll, setShowAll] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const servicesToShow = showAll ? services : services.slice(0, 3);

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
    <div ref={sectionRef} className={`bg-white dark:bg-gray-900 py-16 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-customBlue dark:text-customBlue">Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Perfect for Homes and Businesses
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-500 dark:text-gray-300">
            At AD Forster Window Cleaning, we provide top-quality cleaning services to enhance your living and working environments.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {servicesToShow.map((service) => (
              <ServiceItem key={service.id} service={service} />
            ))}
          </dl>
          <div className="mt-16 flex justify-center">
            <button
              onClick={toggleShowAll}
              className="px-4 py-2 text-sm font-semibold text-white bg-customBlue rounded-md hover:bg-customBlue-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-customBlue"
            >
              {showAll ? 'Show Less' : 'Show All Services'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface Service {
  id: string;
  title: string;
  description: string;
  path: string;
}

interface ServiceItemProps {
  service: Service;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ service }) => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (itemRef.current) {
        const { top } = itemRef.current.getBoundingClientRect();
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
    <div 
      ref={itemRef}
      className={`flex flex-col p-6 transition-transform duration-700 transform bg-white rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
    >
      <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
        {service.title}
      </dt>
      <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-500 dark:text-gray-300">
        <p className="flex-auto">{service.description}</p>
        <p className="mt-6">
          <a 
            href={service.path} 
            className="text-sm font-semibold leading-6 text-customBlue dark:text-customBlue"
            onClick={(e) => {
              e.preventDefault();
              navigate(service.path);
            }}
          >
            Learn more <span aria-hidden="true">→</span>
          </a>
        </p>
      </dd>
    </div>
  );
};

export default Services;
