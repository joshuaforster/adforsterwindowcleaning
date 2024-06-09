// src/pages/Gallery.tsx
import React from 'react';
import ImageGallery from '../PageComponents/imagegallery';

export default function Gallery() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="max-w-screen-lg text-gray-800 sm:text-lg dark:text-white">
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
            Gallery
          </h2>
          <p className="mb-1">
            Take a look at some of our best work. Our gallery showcases the high-quality window cleaning services we provide. From residential to commercial properties, our team ensures that every window sparkles. See the difference for yourself!
          </p>
        </div>
      </div>
      <ImageGallery />
    </section>
  );
}