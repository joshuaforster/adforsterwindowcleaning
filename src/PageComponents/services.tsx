import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useServices } from '../CustomComponents/ServicesContext';
import Button from '../CustomComponents/buttons';

const Services: React.FC = () => {
  const { services } = useServices();
  const navigate = useNavigate();

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Designed for Homes and Businesses Like Yours
          </h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400">
            Here at AD Forster Window Cleaning, we focus on providing top-quality cleaning services that enhance your living and working environments, ensuring cleanliness and comfort to help drive your daily success.
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.id} className="p-6 transition-transform duration-300 transform bg-white rounded-lg shadow-md hover:scale-105 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 hover:shadow-lg hover:border dark:border-gray-700">
                <div className="flex flex-col items-start mb-4">
                  <Icon className="w-10 h-10 text-primary-500 lg:h-12 lg:w-12 text-gray-800 dark:text-white mb-4" />
                  <h3 className="mb-2 text-xl font-bold text-gray-800 dark:text-white">{service.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">{service.description}</p>
                </div>
                <Button variant='primary' onClick={() => navigate(service.path)}>See More</Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;