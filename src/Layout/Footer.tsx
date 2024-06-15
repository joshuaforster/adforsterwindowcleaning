import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../CustomComponents/darkmode';
import { FaFacebook, FaEnvelope, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  const navigation = {
    navigationLinks: [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
      { name: "FAQ's", path: '/faq' },
      { name: 'Gallery', path: '/gallery' },
      { name: 'Services', path: '/services' },
      { name: 'Contact', path: '/contact' }
    ],
    services: [
      { name: "Window Cleaning", path: "/services/windows" },
      { name: "Frames and Sills", path: "/services/frames-sills" },
      { name: "Conservatories", path: "/services/conservatories" },
      { name: "Gutters and Fascias", path: "/services/gutters-fascias" },
      { name: "Solar Panels", path: "/services/solar-panels" },
      { name: "Caravan Cleaning", path: "/services/caravan-cleaning" },
      { name: "Domestic and Commercial", path: "/services/domestic-commercial" },
      { name: "Patio and Regular Cleans", path: "/services/patio-regular-cleans" },
      { name: "Mini Digger", path: "/services/mini-digger" }
    ],
    legalLinks: [
      { name: "Privacy Policy", path: "/privacy-policy" },
      { name: "Terms & Conditions", path: "/terms-conditions" }
    ],
    social: [
      { name: 'Facebook', href: 'https://www.facebook.com', icon: FaFacebook },
      { name: 'Email', href: 'mailto:info@example.com', icon: FaEnvelope },
      { name: 'YouTube', href: 'https://www.youtube.com', icon: FaYoutube }
    ],
  };

  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-200 dark:bg-gray-800" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-8 sm:pt-16 lg:px-8 lg:pt-20">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link to="/">
              <img
                className="h-12 sm:h-14"
                src={theme === 'dark' ? 'images/AD Forster Logo Dark.png' : 'images/AD Forster Logo.png'}
                alt="Company Logo"
              />
            </Link>
         
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-400 dark:text-white hover:text-gray-500">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Navigation</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.navigationLinks.map((item) => (
                    <li key={item.name}>
                      <Link to={item.path} className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Services</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <Link to={item.path} className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legalLinks.map((item) => (
                    <li key={item.name}>
                      <Link to={item.path} className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Contact</h3>
                <ul role="list" className="mt-6 space-y-4">
                <li className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-white">
                  <a href="tel:+447342367824">Phone: 07342 367824</a>
                </li>
                <li className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-white">
                  <a href="mailto:enquiries@adforsterwindowcleaning.co.uk">Email: enquiries@adforsterwindowcleaning.co.uk</a>
                </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t dark:border-white border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-500 dark:text-white">
            &copy; {currentYear} AD Forster™. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}