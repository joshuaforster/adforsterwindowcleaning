import React from 'react';
import { Swiper as SwiperType } from 'swiper/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import Button from '../CustomComponents/buttons';

const reviewsData = [
  {
    name: 'Tessa Patterson',
    review: 'Cleaned my parents windows today who are not on Facebook but asked me to leave a review on their behalf. Came today to clean very dirty windows, but done a really good job at a very reasonable price. Would highly recommend. Thank you.',
    stars: '⭐️⭐️⭐️⭐️⭐️',
    date: '14 March 2023',
    id: 1,
  },
  {
    name: 'Emma Platt',
    review: 'Windows look fab thank you so much.',
    stars: '⭐️⭐️⭐️⭐️⭐️',
    id: 2,
  },
  {
    name: 'Lewis Attwood',
    review: 'I messaged Adam as I was looking for a new window cleaner. Adam was prompt and responded to me efficiently. He has been once and my windows/sills are sparkling. Would definitely recommend. Thank you.',
    stars: '⭐️⭐️⭐️⭐️⭐️',
    id: 3,
  },
  {
    name: 'Suzanne Hastings',
    review: 'Just had Adam clean my Gutters and Windows. Really pleased and highly recommend.',
    stars: '⭐️⭐️⭐️⭐️⭐️',
    id: 4,
  },
  {
    name: 'Irene Mcdowall',
    review: 'Had my windows done a few times and have been very pleased. Good job every time. I highly recommend A.D. Forster Window Cleaning.',
    stars: '⭐️⭐️⭐️⭐️⭐️',
    id: 5,
  },
  {
    name: 'Lauren Jade',
    review: 'We have just done a house renovation, so understandably the windows and doors were very dusty. Couldn’t be happier our windows were sparkly after. Very thorough job. Highly recommend!',
    stars: '⭐️⭐️⭐️⭐️⭐️',
    id: 6,
  },
  {
    name: 'Shân Evbota',
    review: 'Cannot recommend enough - moved into a very dirty house which included windows and fascias that I didn’t think possible to get clean. I now have bright white windows and fascia boards that sparkle and look like new. Very professional, very friendly, and very reasonably priced. Thanks so much, good luck to you and your business, and I hope to use you again soon!',
    stars: '⭐️⭐️⭐️⭐️⭐️',
    id: 7,
  },
  {
    name: 'Lynn Bean',
    review: 'I had all my windows, doors, gutters, and fascias all cleaned by A.D. Forster Window Cleaning and they were very professional and cleaned them brilliantly. They are very reasonably priced, friendly, and I definitely recommend them. Thank you for doing a brilliant job.',
    stars: '⭐️⭐️⭐️⭐️⭐️',
    id: 8,
  },
  {
    name: 'Jo Pointer',
    review: 'Quoted and cleaned on the same day. Professional service and my windows really sparkle now. Thanks, Adam!',
    stars: '⭐️⭐️⭐️⭐️⭐️',
    id: 9,
  },
  {
    name: 'Tom Yallop',
    review: '10/10 service from Adam. Came to quote and cleaned on the same day. Quick, friendly, and left my windows and doors gleaming! Very fairly priced too.',
    stars: '⭐️⭐️⭐️⭐️⭐️',
    id: 10,
  },
  {
    name: 'Stuart Lynes',
    review: 'Adam gave me a quote Friday and cleaned my windows and conservatory Monday. Very prompt professional service. Would highly recommend.',
    stars: '⭐️⭐️⭐️⭐️⭐️',
    id: 11,
  },
];

const TestimonialSlider: React.FC = () => {
  return (
    <div className="py-16 mx-auto bg-white dark:bg-gray-800">
      <div className='container mx-auto'>
        <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">Testimonials</h2>
        <p className="text-center mb-8 text-gray-600 dark:text-gray-300">
          Here are some of the reviews from our satisfied customers. Click the button below to see more reviews on our Facebook page.
        </p>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          onSwiper={(swiper: SwiperType) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {reviewsData.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="p-4 text-center">
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg w-full lg:w-3/4 mx-auto">
                  <p className="text-gray-800 dark:text-white mb-4">{review.review}</p>
                  <div className="flex flex-col items-center">
                    <div>
                      <p className="text-lg font-semibold dark:text-white">{review.name}</p>
                      <p className="dark:text-gray-400">{review.stars}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination"></div>
        </Swiper>
        <div className="text-center mt-8">
          <Button variant="primary" to="https://www.facebook.com/profile.php?id=100069334146139&sk=reviews">
            See More Reviews on Facebook
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
