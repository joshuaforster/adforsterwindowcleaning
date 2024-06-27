import React, { useEffect, useState, useRef } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const steps = [
  { id: 1, name: 'Book a Quote', description: 'Request a quote for our window cleaning services.' },
  { id: 2, name: 'We Visit', description: 'We come to your location to assess your needs.' },
  { id: 3, name: 'Receive a Quote', description: 'We send you a detailed quote for the services.' },
  { id: 4, name: 'Choose to Book', description: 'Choose to proceed with the booking based on the quote.' },
];

interface StepsFields {
  bookingProcess: string;
  bookingProcessInfo: any; // Change this to a more appropriate type if you have one
}

interface FetchResponse {
  items: Array<{
    fields: StepsFields;
  }>;
}

const Steps: React.FC = () => {
  const [content, setContent] = useState<StepsFields | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string>('');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const url = `https://cdn.contentful.com/spaces/7y2nhmah12fi/environments/master/entries?access_token=VPNyQgxB1pWAka3k7hdMjZyWTPNuBmdWTmVnF1UydtQ&content_type=home`;

    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data: FetchResponse) => {
        if (data.items.length > 0) {
          setContent(data.items[0].fields);
        } else {
          setError('Content not found');
        }
        setIsLoading(false);
      })
      .catch(err => {
        console.error('Error fetching content:', err);
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const { top } = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on initial render

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section
      ref={sectionRef}
      className={`relative bg-gray-50 dark:bg-gray-800 transition-none duration-1000 transform`}
    >
      <div className="fixed inset-0 bg-gray-50 dark:bg-gray-800 -z-10" />
      <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="max-w-2xl lg:mx-0 lg:max-w-xl">
              <h2 className="text-base font-semibold leading-8 text-customBlue dark:text-customBlue">Get A Quote</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                {content?.bookingProcess || 'Easy Booking Process'}
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-700 dark:text-gray-300">
                {documentToReactComponents(content?.bookingProcessInfo)}
              </p>
              <div className="mt-8">
                <button className="inline-flex items-center justify-center rounded-md border border-transparent bg-customBlue px-5 py-3 text-base font-medium text-white hover:bg-customBlue-dark">
                  Get a Quote
                </button>
              </div>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:mt-0 lg:ml-16 lg:max-w-xl lg:grid-cols-2">
              {steps.map((step) => (
                <Step key={step.id} step={step} isVisible={isVisible} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface StepProps {
  step: { id: number; name: string; description: string };
  isVisible: boolean;
}

const Step: React.FC<StepProps> = ({ step, isVisible }) => {
  return (
    <div
      className={`flex flex-col gap-y-3 border-l border-gray-900 dark:border-gray-300 pl-6 text-gray-900 dark:text-gray-300 transform transition-transform duration-700 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <dt className="text-sm leading-6">{step.description}</dt>
      <dd className="order-first text-3xl font-semibold tracking-tight">{step.name}</dd>
    </div>
  );
};

export default Steps;
