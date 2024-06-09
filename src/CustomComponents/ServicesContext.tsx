import React, { createContext, useContext, ReactNode, useEffect, useState } from 'react';
import { FaWindows, FaBorderStyle, FaHome, FaTint, FaSolarPanel, FaCaravan, FaBuilding, FaThLarge, FaTractor } from 'react-icons/fa';
import { Document } from '@contentful/rich-text-types';

type Service = {
  id: string;
  title: string;
  description: string;
  path: string;
  icon: React.ElementType;
  image: string;
  details: Document; // Change to Document type
  createdAt: string;
};

type ServicesContextType = {
  services: Service[];
  getServiceById: (id: string) => Service | undefined;
};

const ServicesContext = createContext<ServicesContextType | undefined>(undefined);

const generateIdFromTitle = (title: string): string => {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
};

const iconMap: { [key: string]: React.ElementType } = {
  windows: FaWindows,
  'frames-sills': FaBorderStyle,
  conservatories: FaHome,
  'gutters-fascias': FaTint,
  'solar-panels': FaSolarPanel,
  'caravan-cleaning': FaCaravan,
  'domestic-commercial': FaBuilding,
  patios: FaThLarge,
  'mini-digger': FaTractor,
  'roof-cleaning': FaHome,
};

export const ServicesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    const fetchServices = async () => {
      const url = `https://cdn.contentful.com/spaces/7y2nhmah12fi/environments/master/entries?access_token=VPNyQgxB1pWAka3k7hdMjZyWTPNuBmdWTmVnF1UydtQ&content_type=service&include=1&order=-sys.createdAt`;

      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();

        console.log('Fetched data:', data); // Log the fetched data for debugging

        const fetchedServices = data.items.map((item: any) => {
          const fields = item.fields;
          const id = generateIdFromTitle(fields.title);
          let imageUrl = '';

          if (fields.image && fields.image.sys && data.includes && data.includes.Asset) {
            const imageAsset = data.includes.Asset.find((asset: any) => asset.sys.id === fields.image.sys.id);
            imageUrl = imageAsset ? `https:${imageAsset.fields.file.url}` : '';
            console.log('Image asset found for', fields.title, ':', imageUrl);
          } else {
            console.log('No image asset found for', fields.title);
          }

          return {
            id,
            title: fields.title,
            description: fields.description,
            path: `/services/${id}`,
            icon: iconMap[id] || FaWindows, // Default to FaWindows if no match
            image: imageUrl,
            details: fields.details, // Ensure this is a Document type
            createdAt: item.sys.createdAt,
          };
        });

        console.log('Fetched services:', fetchedServices); // Log the fetched services for debugging

        // Sort services by creation date in descending order
        const sortedServices = fetchedServices.sort((a: Service, b: Service) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

        // Move "Window Cleaning" to the top
        const windowCleaningServiceIndex = sortedServices.findIndex((service: Service) => service.title.toLowerCase() === 'window cleaning');
        if (windowCleaningServiceIndex !== -1) {
          const windowCleaningService = sortedServices.splice(windowCleaningServiceIndex, 1)[0];
          sortedServices.unshift(windowCleaningService);
        }

        setServices(sortedServices);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServices();
  }, []);

  const getServiceById = (id: string): Service | undefined => services.find(service => service.id === id);

  return (
    <ServicesContext.Provider value={{ services, getServiceById }}>
      {children}
    </ServicesContext.Provider>
  );
};

export const useServices = (): ServicesContextType => {
  const context = useContext(ServicesContext);
  if (!context) {
    throw new Error('useServices must be used within a ServicesProvider');
  }
  return context;
};