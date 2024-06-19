import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const client = createClient({
  space: '7y2nhmah12fi',
  accessToken: 'VPNyQgxB1pWAka3k7hdMjZyWTPNuBmdWTmVnF1UydtQ',
});

const About: React.FC = () => {
  const [aboutData, setAboutData] = useState<any>(null);
  const [credentials, setCredentials] = useState<any[]>([]);
  const [values, setValues] = useState<any[]>([]);

  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.75 });
  const { ref: contentRef, inView: contentInView } = useInView({ triggerOnce: true, threshold: 0.75 });
  const { ref: imageRef, inView: imageInView } = useInView({ triggerOnce: true, threshold: 0.75 });
  const { ref: valuesRef, inView: valuesInView } = useInView({ triggerOnce: true, threshold: 0.75 });

  useEffect(() => {
    const fetchAboutPageData = async () => {
      const aboutPageData = await client.getEntries({
        content_type: 'aboutPage',
      });

      const credentialsData = await client.getEntries({
        content_type: 'features',
      });

      const valuesData = await client.getEntries({
        content_type: 'values',
      });

      setAboutData(aboutPageData.items[0].fields);
      setCredentials(credentialsData.items.map(item => item.fields));
      setValues(valuesData.items.map(item => item.fields));
    };

    fetchAboutPageData();
  }, []);

  if (!aboutData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white dark:bg-gray-900">
      <main className="isolate">
        {/* Hero section */}
        <div
          ref={heroRef}
          className={`relative isolate -z-10 transition-all duration-1000 transform ${
            heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <svg
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full dark:stroke-gray-800 stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50 dark:hidden">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect width="100%" height="100%" strokeWidth={0} fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
          </svg>
          <div
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
            aria-hidden="true"
          >
            <div
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#19A6DF] to-[#19A6DF] dark:opacity-20 opacity-20"
              style={{
                clipPath:
                  'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
              }}
            />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-12 sm:pt-60 lg:px-8 lg:pt-4">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-4xl font-bold tracking-tight dark:text-white text-gray-900 sm:text-6xl">
                    {aboutData.heading}
                  </h1>
                  <p className="relative mt-6 text-lg leading-8 dark:text-white text-gray-600 sm:max-w-md lg:max-w-none">
                    {documentToReactComponents(aboutData.information)}
                  </p>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <img
                        src="images/gutterwash.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg border border-black dark:border-white"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img
                        src="images/broom.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg border border-black dark:border-white"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src="images/about/patio.png"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg border border-black dark:border-white"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <img
                        src="images/about/patio2.png"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg border border-black dark:border-white"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src="images/about/about3.png"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg border border-black dark:border-white"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Content section */}
        <div
          ref={contentRef}
          className={`mx-auto mt-6 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8 transition-all duration-1000 transform ${
            contentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none lg:flex-col  lg:items-start">
            <h2 className="text-3xl font-bold tracking-tight dark:text-white text-gray-900 sm:text-4xl text-left">
              {aboutData.whyUs}
            </h2>
            <div className="mt-6 flex flex-col lg:flex-row lg:gap-8 lg:items-start">
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto dark:text-white text-gray-700 text-left">
                {documentToReactComponents(aboutData.whyUsSubtext)}
              </div>
              <div className="w-full lg:w-auto lg:flex pt-16 lg:pt-0 lg:justify-start lg:ml-8">
                <dl className="space-y-8 xl:w-80">
                  {credentials.map((credential) => (
                    <div key={credential.featureHeading} className="flex flex-col-reverse gap-y-4">
                      <dt className="text-base leading-7 dark:text-white text-gray-600">
                        {documentToReactComponents(credential.featureSubtext)}
                      </dt>
                      <dd className="text-3xl font-semibold tracking-tight dark:text-white text-gray-900">
                        {credential.featureHeading}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
        {/* Image section */}
        <div
          ref={imageRef}
          className={`mt-32 sm:mt-20 xl:mx-auto xl:max-w-7xl xl:px-8 transition-all duration-1000 transform ${
            imageInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <img
            src="images/yachtclub.jpg"
            alt=""
            className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
          />
        </div>

        {/* Values section */}
        <div
          ref={valuesRef}
          className={`mx-auto mt-32 max-w-7xl px-6 sm:mt-10 pb-20 lg:px-8 transition-all duration-1000 transform ${
            valuesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight dark:text-white text-gray-900 sm:text-4xl">Our values</h2>
            <p className="mt-6 text-lg leading-8 dark:text-white text-gray-600">
              We believe in providing excellent service with integrity, honesty, and professionalism. Our values drive everything we do.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.valueTitle}>
                <dt className="font-semibold dark:text-white text-gray-900">{value.valueTitle}</dt>
                <dd className="mt-1 dark:text-white text-gray-600">
                  {documentToReactComponents(value.valueSubtext)}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </main>
    </div>
  );
};

export default About;
