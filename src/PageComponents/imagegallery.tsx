// // src/PageComponents/imagegallery.tsx
// import React, { useState, useEffect } from 'react';
// import Slider from '../CustomComponents/sliderImages';
// import SingleImage from '../CustomComponents/singleImage';
// import { createClient, Entry, Asset, EntrySkeletonType } from 'contentful';

// interface ImageItem {
//   type: 'image';
//   imageUrl: string;
// }

// interface SliderItem {
//   type: 'slider';
//   firstImage: string;
//   secondImage: string;
// }

// type GalleryItem = ImageItem | SliderItem;

// const spaceId = '7y2nhmah12fi';
// const accessToken = 'VPNyQgxB1pWAka3k7hdMjZyWTPNuBmdWTmVnF1UydtQ';

// const client = createClient({
//   space: spaceId,
//   accessToken: accessToken,
// });

// interface SingleGalleryImageFields {
//   image: Asset;
// }

// interface SliderGalleryImageFields {
//   beforeImage: Asset;
//   afterImage: Asset;
// }

// interface SingleGalleryImageEntry extends EntrySkeletonType<SingleGalleryImageFields, 'singleGalleryImage'> {
//   fields: SingleGalleryImageFields;
// }

// interface SliderGalleryImageEntry extends EntrySkeletonType<SliderGalleryImageFields, 'sliderGalleryImage'> {
//   fields: SliderGalleryImageFields;
// }

// const ImageGallery: React.FC = () => {
//   const [items, setItems] = useState<GalleryItem[]>([]);
//   const [currentIndex, setCurrentIndex] = useState<number | null>(null);
//   const [error, setError] = useState<string | null>(null);
//   const [isLoading, setIsLoading] = useState<boolean>(true);

//   useEffect(() => {
//     const fetchContentfulData = async () => {
//       try {
//         const singleImageEntries = await client.getEntries<SingleGalleryImageEntry>({
//           content_type: 'singleGalleryImage',
//         });

//         const singleImages: ImageItem[] = singleImageEntries.items.map((item) => ({
//           type: 'image' as const,
//           imageUrl: item.fields.image?.fields.file.url || '',
//         })).filter(item => item.imageUrl);

//         const sliderImageEntries = await client.getEntries<SliderGalleryImageEntry>({
//           content_type: 'sliderGalleryImage',
//         });

//         const sliderImages: SliderItem[] = sliderImageEntries.items.map((item) => ({
//           type: 'slider' as const,
//           firstImage: item.fields.beforeImage?.fields.file.url || '',
//           secondImage: item.fields.afterImage?.fields.file.url || '',
//         })).filter(item => item.firstImage && item.secondImage);

//         setItems([...singleImages, ...sliderImages]);
//         setIsLoading(false);
//       } catch (error) {
//         console.error('Error fetching content:', error);
//         setError('Error fetching content');
//         setIsLoading(false);
//       }
//     };

//     fetchContentfulData();
//   }, []);

//   const handlePrevious = () => {
//     if (currentIndex !== null) {
//       setCurrentIndex((currentIndex - 1 + items.length) % items.length);
//     }
//   };

//   const handleNext = () => {
//     if (currentIndex !== null) {
//       setCurrentIndex((currentIndex + 1) % items.length);
//     }
//   };

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <section className="bg-white dark:bg-gray-900">
//       <div className="px-4 py-8 mx-auto max-w-screen-xl lg:px-6 lg:py-16">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//           {items.map((item, index) => (
//             <div key={index} className="relative w-full h-60 overflow-hidden">
//               {item.type === 'image' ? (
//                 <div className="w-full h-full">
//                   <SingleImage
//                     imageUrl={item.imageUrl}
//                     onPrevious={handlePrevious}
//                     onNext={handleNext}
//                     isFullscreen={currentIndex === index}
//                     setIsFullscreen={(value) => setCurrentIndex(value ? index : null)}
//                   />
//                 </div>
//               ) : (
//                 <div className="w-full h-full">
//                   <Slider
//                     firstImage={{ imageUrl: item.firstImage }}
//                     secondImage={{ imageUrl: item.secondImage }}
//                     onPrevious={handlePrevious}
//                     onNext={handleNext}
//                     isFullscreen={currentIndex === index}
//                     setIsFullscreen={(value) => setCurrentIndex(value ? index : null)}
//                   />
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ImageGallery;