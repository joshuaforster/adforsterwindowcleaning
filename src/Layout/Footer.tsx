import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../CustomComponents/darkmode';

export default function Footer() {
  type NavLinks = {
    name: string;
    path?: string;
    type?: string;
  };

  const navigationLinks: NavLinks[] = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: "FAQ's", path: '/faq' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Services', type: 'dropdown' },
    { name: 'Contact', path: '/contact' }
  ];

  const services = [
    { name: "Window Cleaning", path: "/services/windows" },
    { name: "Frames and Sills", path: "/services/frames-sills" },
    { name: "Conservatories", path: "/services/conservatories" },
    { name: "Gutters and Fascias", path: "/services/gutters-fascias" },
    { name: "Solar Panels", path: "/services/solar-panels" },
    { name: "Caravan Cleaning", path: "/services/caravan-cleaning" },
    { name: "Domestic and Commercial", path: "/services/domestic-commercial" },
    { name: "Patio and Regular Cleans", path: "/services/patio-regular-cleans" },
    { name: "Mini Digger", path: "/services/mini-digger" }
  ];

  const legalLinks = [
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms & Conditions", path: "/terms-conditions" }
  ];

  const { theme } = useTheme();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="p-4 bg-gray-100 sm:p-6 dark:bg-gray-800">
       <div className="border-t border-gray-200 dark:border-white sm:pt-8"></div>
      <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between">
          <div className="flex flex-col items-center mb-6 md:mb-0 md:items-start md:w-1/4">
            <Link to="/" className="flex items-center mb-4 md:mb-0">
              <img
                src={theme === 'dark' ? 'images/AD Forster Logo Dark.png' : 'images/AD Forster Logo.png'}
                className="h-12 sm:h-14"
                alt="Company Logo"
              />
            </Link>
          </div>
          <div className="flex flex-wrap justify-between md:w-3/4">
            {/* Navigation Section */}
            <div className="w-full sm:w-1/3 mb-6 md:mb-0 text-center md:text-left">
            <div className=" md:hidden border-t border-gray-200 dark:border-gray-400 pt-8 my-4"></div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Navigation</h2>
              <ul className="text-gray-600 dark:text-white">
                {navigationLinks.map((link, index) => (
                  link.path ? (
                    <li key={index} className="mb-4">
                      <Link to={link.path} className="hover:underline">{link.name}</Link>
                    </li>
                  ) : null
                ))}
              </ul>
            </div>

            {/* Services Section */}
            <div className="w-full sm:w-1/3 mb-6 md:mb-0 text-center md:text-left">
            <div className=" md:hidden border-t border-gray-200 dark:border-gray-400 pt-8 my-4"></div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Services</h2>
              <ul className="text-gray-600 dark:text-white">
                {services.map((service, index) => (
                  <li key={index} className="mb-4">
                    <Link to={service.path} className="hover:underline">{service.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Section */}
            <div className="w-full sm:w-1/3 text-center md:text-left">
            <div className=" md:hidden border-t border-gray-200 dark:border-gray-400 pt-8 my-4"></div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
              <ul className="text-gray-600 dark:text-white">
                {legalLinks.map((link, index) => (
                  <li key={index} className="mb-4">
                    <Link to={link.path} className="hover:underline">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between text-center">
          <span className="text-sm text-gray-500 sm:text-center dark:text-white">© {currentYear} <Link to="/" className="hover:underline">AD Forster™</Link>. All Rights Reserved.</span>
        </div>
      </div>
    
    
    </footer>
  );
}