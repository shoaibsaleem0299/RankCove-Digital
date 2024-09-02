"use client";

import React, { useState } from 'react';

interface PanelData {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

interface ServicesSectionProps {
  panelsData: PanelData[];
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ panelsData }) => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const handleMouseEnter = (id: number) => {
    setActiveId(id);
  };

  const handleMouseLeave = () => {
    setActiveId(null);
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-wrap justify-center items-center w-[90vw] gap-2.5">
        {panelsData.map(panel => (
          <div
            key={panel.id}
            className={`relative bg-cover bg-center bg-no-repeat h-[80vh] rounded-2xl text-white cursor-pointer transition-all duration-700 ease-in-out 
              ${activeId === panel.id ? 'flex-[5] w-full' : 'flex-[0.5] w-full'}
            `}
            style={{ backgroundImage: `url('${panel.imageUrl}')` }}
            onMouseEnter={() => handleMouseEnter(panel.id)}
            onMouseLeave={handleMouseLeave}
          >
            <h3
              className={`absolute bottom-4 left-4 text-xl font-bold whitespace-nowrap overflow-hidden text-ellipsis transition-transform duration-700 ease-in-out
                ${activeId === panel.id ? 'opacity-100 rotate-0' : 'opacity-0 rotate-[-90deg]'}
              `}
            >
              {panel.title}
            </h3>
            <p
              className={`absolute top-1/2 left-5 text-center transform -translate-y-1/2 transition-opacity duration-300 
                ${activeId === panel.id ? 'opacity-100' : 'opacity-0'}
              `}
            >
              {panel.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
