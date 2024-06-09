import React, { useEffect, useState } from 'react';
import Button from "../CustomComponents/buttons";

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl md:grid md:grid-cols-2 lg:py-16 lg:px-6 dark:text-white">
        <div className="font-light text-gray-500 sm:text-lg dark:text-white lg:order-1">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            {content?.bookingProcess || 'Easy Booking Process'}
          </h2>
          <div className="mb-4">
            {documentToReactComponents(content?.bookingProcessInfo)}
          </div>
          <div className="mt-4">
            <Button className="mr-4" to='/contact' variant='primary'>Get A Quote</Button>
          </div>
        </div>
        <div className="hidden md:flex justify-center md:order-2">
          <img className="w-full rounded-lg mt-4 md:mt-0" src="images/beforeafter/patio2.jpeg" alt="office content 1" />
        </div>
      </div>
    </section>
  );
};

export default Steps;