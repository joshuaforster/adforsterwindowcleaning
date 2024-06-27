import React, { useState, useEffect, useRef } from 'react';
import { createClient, EntryCollection } from 'contentful';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const client = createClient({
  space: '7y2nhmah12fi',
  accessToken: 'VPNyQgxB1pWAka3k7hdMjZyWTPNuBmdWTmVnF1UydtQ',
});

interface FAQFields {
  title: string;
  answer: any;
}

interface FAQPageFields {
  title: string;
  questionsAndAnswers: Array<{
    sys: {
      id: string;
    };
  }>;
}

const FAQ: React.FC = () => {
  const [faqs, setFaqs] = useState<FAQFields[]>([]);
  const [activeIndices, setActiveIndices] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndices((prevActiveIndices) => {
      if (prevActiveIndices.includes(index)) {
        return prevActiveIndices.filter((i) => i !== index);
      } else {
        return [...prevActiveIndices, index];
      }
    });
  };

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        // @ts-ignore
        const faqPageResponse: EntryCollection<FAQPageFields> = await client.getEntries<FAQPageFields>({
          content_type: 'faqPage',
          limit: 1,
        });

        if (faqPageResponse.items.length > 0) {
          const faqPageFields = faqPageResponse.items[0].fields as FAQPageFields;
          const faqIds = faqPageFields.questionsAndAnswers.map((qa) => qa.sys.id);
          // @ts-ignore
          const faqResponse: EntryCollection<FAQFields> = await client.getEntries<FAQFields>({
            content_type: 'frequentlyAskedQuestions',
            'sys.id[in]': faqIds.join(','),
          });

          const fetchedFaqs: FAQFields[] = faqResponse.items.map((item) => item.fields as FAQFields);
          setFaqs(fetchedFaqs);
        } else {
          setError('No FAQ page content found.');
        }
      } catch (error) {
        console.error('Error fetching FAQs:', error);
        setError('Error fetching FAQs.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchFAQs();
  }, []);

  useEffect(() => {
    const handleVisibility = () => {
      setTimeout(() => {
        setIsVisible(true);
      }, 100); // Delay to make the animation noticeable
    };

    handleVisibility();
  }, []);

  if (isLoading) {
    return <div className="bg-white dark:bg-gray-900 h-screen flex items-center justify-center">Loading...</div>;
  }

  if (error) {
    return <div className="bg-white dark:bg-gray-900 h-screen flex items-center justify-center">Error: {error}</div>;
  }

  return (
    <section className="relative bg-customGray dark:bg-gray-900">
      <div
        ref={sectionRef}
        className={`transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-800 capitalize dark:text-white">Frequently asked questions</h2>
          <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-10">
                <h3
                  className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  {activeIndices.includes(index) ? (
                    <FaMinus className="mr-2 w-5 h-5 text-gray-500 dark:text-white" />
                  ) : (
                    <FaPlus className="mr-2 w-5 h-5 text-gray-500 dark:text-white" />
                  )}
                  {faq.title}
                </h3>
                <div
                  className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                    activeIndices.includes(index) ? 'max-h-screen' : 'max-h-0'
                  }`}
                >
                  <div className="text-gray-500 dark:text-white">{documentToReactComponents(faq.answer)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
