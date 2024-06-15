import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { FaStar } from 'react-icons/fa';
import Button from '../CustomComponents/buttons';

const spaceId = '7y2nhmah12fi';
const accessToken = 'VPNyQgxB1pWAka3k7hdMjZyWTPNuBmdWTmVnF1UydtQ';

const client = createClient({
  space: spaceId,
  accessToken: accessToken,
});

interface ReviewItem {
  name: string;
  review: any; // Using 'any' for now, you can define a more specific type later
}

const TestimonialSlider: React.FC = () => {
  const [reviews, setReviews] = useState<ReviewItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await client.getEntries({
          content_type: 'reviews',
          limit: 100,
        });

        if (response.items.length > 0) {
          const reviewData = response.items.map((item: any) => ({
            name: item.fields.name,
            review: item.fields.review,
          }));
          setReviews(reviewData);
        } else {
          setError('No reviews found.');
        }
      } catch (error) {
        console.error('Error fetching reviews:', error);
        setError('Error fetching reviews.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="py-16 mx-auto bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">Testimonials</h2>
        <p className="text-center mb-8 text-gray-600 dark:text-gray-300">
          Here are some of the reviews from our satisfied customers. Click the button below to see more reviews on our Facebook page.
        </p>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg mb-8 shadow-lg w-full lg:w-3/4 mx-auto">
                  <div className="flex gap-x-1 text-yellow-400 mb-4">
                    <FaStar className="h-5 w-5" aria-hidden="true" />
                    <FaStar className="h-5 w-5" aria-hidden="true" />
                    <FaStar className="h-5 w-5" aria-hidden="true" />
                    <FaStar className="h-5 w-5" aria-hidden="true" />
                    <FaStar className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <blockquote className="text-xl font-semibold leading-8 tracking-tight text-gray-900 dark:text-white">
                    <p className="text-left">{documentToReactComponents(review.review)}</p>
                  </blockquote>
                  <figcaption className="mt-10 text-sm leading-6 text-gray-900 dark:text-white">
                    <div className="font-semibold text-left">{review.name}</div>
                  </figcaption>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination"></div>
        </Swiper>
        <div className="flex justify-center mt-8">
          <Button variant="primary" to="https://www.facebook.com/profile.php?id=100069334146139&sk=reviews">
            See More Reviews on Facebook
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;