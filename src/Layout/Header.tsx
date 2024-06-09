import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiSun, FiMoon } from 'react-icons/fi';
import ServiceDropdown from '../CustomComponents/servicesDropdown';
import { useTheme } from '../CustomComponents/darkmode';

export default function Header() {
  const navigationLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: "FAQ's", path: '/faq' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Services', type: 'dropdown' },
    { name: 'Contact', path: '/contact' }
  ];

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const { pathname } = useLocation(); // Get the current path

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const { theme, toggleTheme } = useTheme();

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    closeDropdown();
  };

  return (
    <header className="sticky top-0 bg-white shadow-lg z-50 dark:bg-gray-800">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex items-center justify-between mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center" onClick={handleLinkClick}>
            <img
              src={theme === 'dark' ? 'images/AD Forster Logo Dark.png' : 'images/AD Forster Logo.png'}
              className="h-10 sm:h-10"
              alt="Company Logo"
            />
          </Link>
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <ul className="flex items-center space-x-8">
              {navigationLinks.map((link, index) => (
                link.type === 'dropdown' ? (
                  <li
                    key={index}
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={closeDropdown}
                  >
                    <button
                      className={`block py-2 pr-4 pl-3 ${
                        pathname.startsWith('/services')
                          ? 'text-[#2EA8E0]'
                          : 'text-gray-700 dark:text-white'
                      } lg:hover:text-primary-700 lg:dark:hover:text-primary-400 hover:bg-gray-200 dark:hover:bg-gray-900 rounded-lg`}
                      onClick={toggleDropdown}
                    >
                      {link.name}
                    </button>
                    {isDropdownOpen && (
                      <ServiceDropdown
                        isDropdownOpen={isDropdownOpen}
                        toggleDropdown={toggleDropdown}
                        closeDropdown={closeDropdown}
                        handleLinkClick={handleLinkClick} // Pass the function to ServiceDropdown
                      />
                    )}
                  </li>
                ) : (
                  <li key={index}>
                    <Link
                      to={link.path!}
                      className={`block py-2 pr-4 pl-3 ${
                        pathname === link.path
                          ? 'text-[#2EA8E0]'
                          : 'text-gray-700 dark:text-white'
                      } hover:bg-gray-200 dark:hover:bg-gray-900 rounded-lg`}
                      aria-current={link.path === pathname ? 'page' : undefined}
                      onClick={handleLinkClick}
                    >
                      {link.name}
                    </Link>
                  </li>
                )
              ))}
            </ul>
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-800 bg-gray-200 rounded dark:text-white dark:bg-gray-700"
            >
              {theme === 'dark' ? <FiSun size={24} /> : <FiMoon size={24} />}
            </button>
          </div>
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              )}
            </button>
            {/* Dark mode toggle for mobile view */}
            <button
              onClick={toggleTheme}
              className="ml-2 p-2 text-gray-800 bg-gray-200 rounded dark:text-white dark:bg-gray-700"
            >
              {theme === 'dark' ? <FiSun size={24} /> : <FiMoon size={24} />}
            </button>
          </div>
        </div>
        {/* Mobile menu dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <ul className="flex flex-col mt-4 space-y-2">
              {navigationLinks.map((link, index) => (
                link.type === 'dropdown' ? (
                  <li
                    key={index}
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={closeDropdown}
                  >
                    <button
                      className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-700 dark:border-gray-700"
                      onClick={toggleDropdown}
                    >
                      {link.name}
                    </button>
                    {isDropdownOpen && (
                      <ServiceDropdown
                        isDropdownOpen={isDropdownOpen}
                        toggleDropdown={toggleDropdown}
                        closeDropdown={closeDropdown}
                        handleLinkClick={handleLinkClick} // Pass the function to ServiceDropdown
                      />
                    )}
                  </li>
                ) : (
                  <li key={index}>
                    <Link
                      to={link.path!}
                      className={`block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-700 dark:border-gray-700 ${
                        pathname === link.path ? 'text-[#2EA8E0]' : ''
                      } hover:bg-gray-200 dark:hover:bg-gray-900 rounded-lg`}
                      aria-current={link.path === pathname ? 'page' : undefined}
                      onClick={handleLinkClick}
                    >
                      {link.name}
                    </Link>
                  </li>
                )
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}


