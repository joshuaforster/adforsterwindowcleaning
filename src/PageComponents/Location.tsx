import React from 'react';

    export default function Location() {
        return (
            <section className="bg-white dark:bg-gray-900">
                <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Locations We Serve</h2>
                        <p className="mb-4 dark:text-white">
                            At AD Forster Window Cleaning, we focus mainly on Spixworth, Norwich, and the surrounding areas, covering postcodes NR1 to NR28. We are dedicated to providing top-quality window cleaning services that enhance your home or business, ensuring cleanliness and clarity.
                        </p>
                        <p className=' dark:text-white'>
                            We are committed to delivering efficient and thorough cleaning services to keep your windows spotless and your spaces bright.
                        </p>
                    </div>
                    <div className="grid gap-4 mt-8">
                        <iframe  title="Descriptive title" className="mt-4 w-full lg:mt-10 rounded-lg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d77473.6621257311!2d1.203922287514778!3d52.640974602367564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d0aad55133f513%3A0x684ca5e00e12452f!2sNorwich!5e0!3m2!1sen!2suk!4v1716115566626!5m2!1sen!2suk" loading="lazy"></iframe>
                    </div>
                </div>
            </section>
        );
}