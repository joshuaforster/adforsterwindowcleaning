import React from 'react';
import AboutContact from '../PageComponents/aboutContact';

export default function About() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="lg:flex lg:space-x-16">
          <div className="lg:w-2/3">
            <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-white">
              <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
                About AD Forster Window Cleaning
              </h2>
              <p className="mb-4 font-light">
                At AD Forster Window Cleaning, we pride ourselves on delivering top-notch window cleaning services that stand out from the rest. What makes us special? Our commitment to excellence and our unique approach to window cleaning.
              </p>
              <p className="mb-4 font-light">
                We use a combination of pure water technology and traditional methods to ensure your windows are spotless and streak-free. Our pure water system filters out impurities, providing a superior clean that not only looks great but also helps to protect your windows from future dirt buildup.
              </p>
              <p className="mb-4 font-light">
                Our traditional methods, honed over years of experience, guarantee meticulous attention to detail. Whether it's a residential property or a commercial building, our team is dedicated to achieving the highest standards of cleanliness and customer satisfaction.
              </p>
              <p className="mb-4 font-medium">
                Choose AD Forster Window Cleaning for a service that combines innovation with time-tested techniques, ensuring your windows shine bright and clear.
              </p>
              <div className="flex mt-4">
                <img className='w-full max-w-screen-md' alt="Meaningful description" src='images/about.jpg' />
              </div>
            </div>
          </div>
          <div className="hidden lg:block lg:w-1/3">
            <div className="sticky top-8">
              <AboutContact />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
