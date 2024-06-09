import React from 'react';
import { Link } from 'react-router-dom';
import { useServices } from '../CustomComponents/ServicesContext';

interface ServiceDropdownProps {
  isDropdownOpen: boolean;
  toggleDropdown: () => void;
  closeDropdown: () => void;
  handleLinkClick: () => void;
}

const ServiceDropdown: React.FC<ServiceDropdownProps> = ({ isDropdownOpen, toggleDropdown, closeDropdown, handleLinkClick }) => {
  const { services } = useServices();

  return (
    <div className="relative">
      <div
        className={`${
          isDropdownOpen ? 'block' : 'hidden'
        } absolute left-1/2 transform -translate-x-1/2 lg:block w-full lg:w-auto bg-white dark:bg-gray-800 text-base z-10 divide-y divide-gray-100 dark:divide-gray-600 rounded shadow-lg`}
      >
        <ul className="py-1 text-center">
          {services.map((service) => (
            <li key={service.id}>
              <Link
                to={service.path}
                onClick={() => {
                  handleLinkClick(); // Ensure mobile menu closes
                  closeDropdown();
                }}
                className="text-gray-700 dark:text-white block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {service.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceDropdown;