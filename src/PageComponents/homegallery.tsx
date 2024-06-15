import React from "react";
import { Link } from "react-router-dom";
import ImageGallery from "./imagegallery";

export default function HomeGallery() {
  return (
    <section className="bg-white dark:bg-gray-900 py-8">
      <div className="px-4 mx-auto max-w-screen-xl lg:pt-6 lg:px-6">
        <div className="max-w-screen-lg text-gray-800 sm:text-lg dark:text-white">
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
            Gallery
          </h2>
          <p>
            Take a look at some of our best work. Our gallery showcases the high-quality window cleaning services we provide. Whether it's residential or commercial properties, our team ensures that every window sparkles. See the difference for yourself and experience the clarity that only our professional cleaning can bring.
          </p>
        </div>
      </div>
      <div>
        <ImageGallery limit={3} />
      </div>
      <div className="flex justify-center mt-8">
        <Link
          to="/gallery"
          className="px-6 py-3 text-white bg-customBlue rounded-md hover:bg-customBlue-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-customBlue"
        >
          See Full Gallery
        </Link>
      </div>
    </section>
  );
}