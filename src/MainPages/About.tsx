import React, { useState, useEffect } from 'react';
import { createClient, EntryCollection } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import AboutContact from '../PageComponents/aboutContact';

const client = createClient({
  space: '7y2nhmah12fi',
  accessToken: 'VPNyQgxB1pWAka3k7hdMjZyWTPNuBmdWTmVnF1UydtQ',
});

interface AboutPageFields {
  heading: string;
  information: any; // Using 'any' for now, you can define a more specific type later
  image: {
    fields: {
      file: {
        url: string;
      };
    };
  };
}

const About: React.FC = () => {
  const [heading, setHeading] = useState<string | null>(null);
  const [information, setInformation] = useState<any>(null);
  const [image, setImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        // @ts-ignore
        const response: EntryCollection<AboutPageFields> = await client.getEntries<AboutPageFields>({
          content_type: 'aboutPage',
          limit: 1,
        });

        if (response.items.length > 0) {
          const fields = response.items[0].fields;
          // @ts-ignore
          setHeading(fields.heading);
          // @ts-ignore
          setInformation(fields.information);
          // @ts-ignore
          setImage(fields.image.fields.file.url);
        } else {
          setError('No content found.');
        }
      } catch (error) {
        console.error('Error fetching content:', error);
        setError('Error fetching content.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchContent();
  }, []);

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text: React.ReactNode) => <span className="font-bold">{text}</span>,
      [MARKS.ITALIC]: (text: React.ReactNode) => <span className="italic">{text}</span>,
      [MARKS.UNDERLINE]: (text: React.ReactNode) => <span className="underline">{text}</span>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => <p className="mb-4 font-light">{children}</p>,
      [BLOCKS.HEADING_1]: (node: any, children: React.ReactNode) => <h1 className="text-3xl font-bold">{children}</h1>,
      [BLOCKS.HEADING_2]: (node: any, children: React.ReactNode) => <h2 className="text-2xl font-bold">{children}</h2>,
      [BLOCKS.HEADING_3]: (node: any, children: React.ReactNode) => <h3 className="text-xl font-bold">{children}</h3>,
      [BLOCKS.UL_LIST]: (node: any, children: React.ReactNode) => <ul className="list-disc list-inside mb-4">{children}</ul>,
      [BLOCKS.OL_LIST]: (node: any, children: React.ReactNode) => <ol className="list-decimal list-inside mb-4">{children}</ol>,
      [BLOCKS.QUOTE]: (node: any, children: React.ReactNode) => <blockquote className="pl-4 border-l-4 border-gray-500 italic mb-4">{children}</blockquote>,
    },
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="lg:flex lg:space-x-16">
          <div className="lg:w-2/3">
            <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-white">
              <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
                {heading}
              </h2>
              {information && documentToReactComponents(information, options)}
              <div className="flex mt-4">
                {image && <img className='w-full max-w-screen-md' alt="About AD Forster Window Cleaning" src={image} />}
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
};

export default About;