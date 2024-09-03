// "use client";

// import React, { useState } from 'react';

// interface PanelData {
//   id: number;
//   title: string;
//   description: string;
//   imageUrl: string;
// }

// interface ServicesSectionProps {
//   panelsData: PanelData[];
// }

// const ServicesSection: React.FC<ServicesSectionProps> = ({ panelsData }) => {
//   const [activeId, setActiveId] = useState<number | null>(null);

//   const handleMouseEnter = (id: number) => {
//     setActiveId(id);
//   };

//   const handleMouseLeave = () => {
//     setActiveId(null);
//   };

//   return (
//     <div className="h-screen flex justify-center items-center">
//       <div className="flex flex-wrap justify-center items-center w-[90vw] gap-2.5">
//         {panelsData.map(panel => (
//           <div
//             key={panel.id}
//             className={`relative bg-cover bg-center bg-no-repeat h-[80vh] rounded-2xl text-white cursor-pointer transition-all duration-700 ease-in-out 
//               ${activeId === panel.id ? 'flex-[5] w-full' : 'flex-[0.5] w-full'}
//             `}
//             style={{ backgroundImage: `url('${panel.imageUrl}')` }}
//             onMouseEnter={() => handleMouseEnter(panel.id)}
//             onMouseLeave={handleMouseLeave}
//           >
//             <h3
//               className={`absolute bottom-4 left-4 sm:text-[4px] lg:text-xl font-bold whitespace-nowrap overflow-hidden text-ellipsis transition-transform duration-700 ease-in-out
//                 ${activeId === panel.id ? 'opacity-100 rotate-0' : 'opacity-0 rotate-[-90deg]'}
//               `}
//             >
//               {panel.title}
//             </h3>
//             <p
//               className={`absolute top-1/2 left-5 text-center transform -translate-y-1/2 transition-opacity duration-300 
//                 ${activeId === panel.id ? 'opacity-100' : 'opacity-0'}
//               `}
//             >
//               {panel.description}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ServicesSection;





// "use client";

// import React, { useState } from 'react';

// interface PanelData {
//     id: number;
//     title: string;
//     description: string;
//     imageUrl: string;
// }

// interface ServicesSectionProps {
//     panelsData: PanelData[];
//     onCardClick?: (id: number) => void;
// }

// const ServicesSection: React.FC<ServicesSectionProps> = ({ panelsData, onCardClick }) => {
//     const [expandedId, setExpandedId] = useState<number | null>(1);

//     const handleMouseEnter = (id: number) => {
//         setExpandedId(id);
//     };

//     const handleMouseLeave = () => {
//         if (expandedId !== 1) {
//             setExpandedId(1);
//         }
//     };

//     const handleClick = (id: number) => {
//         if (onCardClick) {
//             onCardClick(id);
//         }
//         setExpandedId(id);
//     };

//     return (
//         <section className="bg-black text-white">
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
//                 {panelsData.map(panel => (
//                     <div
//                         key={panel.id}
//                         className={`relative bg-cover bg-center bg-no-repeat h-[50vh] rounded-lg transition-all duration-500 ease-in-out cursor-pointer ${expandedId === panel.id ? 'w-full md:w-3/4 lg:w-full' : 'w-full md:w-1/2 lg:w-1/4'}`}
//                         style={{ backgroundImage: `url('${panel.imageUrl}')` }}
//                         onMouseEnter={() => handleMouseEnter(panel.id)}
//                         onMouseLeave={handleMouseLeave}
//                         onClick={() => handleClick(panel.id)}
//                     >
//                         <div className={`absolute inset-0 flex flex-col justify-end p-4 text-center text-white bg-gradient-to-t from-black via-transparent to-transparent ${expandedId === panel.id ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
//                             <h3 className={`text-xl font-bold mb-2 ${expandedId === panel.id ? 'translate-y-0' : 'translate-y-4'} transition-transform duration-500 ease-in-out`}>
//                                 {panel.title}
//                             </h3>
//                             <p className={`text-sm ${expandedId === panel.id ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
//                                 {panel.description}
//                             </p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default ServicesSection;



"use client";

import React, { useState, useEffect } from 'react';

interface PanelData {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

interface ServicesSectionProps {
  panelsData: PanelData[];
  onCardClick?: (id: number) => void;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ panelsData, onCardClick }) => {
  const [expandedId, setExpandedId] = useState<number | null>(1);
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(true);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // Tailwind 'lg' breakpoint at 1024px
    };

    handleResize(); // Check size on initial load
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseEnter = (id: number) => {
    setExpandedId(id);
  };

  const handleMouseLeave = () => {
    if (expandedId !== 1) {
      setExpandedId(1);
    }
  };

  const handleClick = (id: number) => {
    if (onCardClick) {
      onCardClick(id);
    }
    setExpandedId(id);
  };

  return (
    <section className="bg-black text-white">
      {isLargeScreen ? (
        <div className="h-screen flex justify-center items-center">
          <div className="flex flex-wrap justify-center items-center w-[90vw] gap-2.5">
            {panelsData.map(panel => (
              <div
                key={panel.id}
                className={`relative bg-cover bg-center bg-no-repeat h-[80vh] rounded-2xl text-white cursor-pointer transition-all duration-700 ease-in-out 
                  ${expandedId === panel.id ? 'flex-[5] w-full' : 'flex-[0.5] w-full'}
                `}
                style={{ backgroundImage: `url('${panel.imageUrl}')` }}
                onMouseEnter={() => handleMouseEnter(panel.id)}
                onMouseLeave={handleMouseLeave}
              >
                <h3
                  className={`absolute bottom-4 left-4 sm:text-[4px] lg:text-xl font-bold whitespace-nowrap overflow-hidden text-ellipsis transition-transform duration-700 ease-in-out
                    ${expandedId === panel.id ? 'opacity-100 rotate-0' : 'opacity-0 rotate-[-90deg]'}
                  `}
                >
                  {panel.title}
                </h3>
                <p
                  className={`absolute top-1/2 left-5 text-center transform -translate-y-1/2 transition-opacity duration-300 
                    ${expandedId === panel.id ? 'opacity-100' : 'opacity-0'}
                  `}
                >
                  {panel.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
          {panelsData.map(panel => (
            <div
              key={panel.id}
              className={`relative bg-cover bg-center bg-no-repeat h-[50vh] rounded-lg transition-all duration-500 ease-in-out cursor-pointer ${expandedId === panel.id ? 'w-full md:w-3/4 lg:w-full' : 'w-full md:w-1/2 lg:w-1/4'}`}
              style={{ backgroundImage: `url('${panel.imageUrl}')` }}
              onMouseEnter={() => handleMouseEnter(panel.id)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(panel.id)}
            >
              <div className={`absolute inset-0 flex flex-col justify-end p-4 text-center text-white bg-gradient-to-t from-black via-transparent to-transparent ${expandedId === panel.id ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
                <h3 className={`text-xl font-bold mb-2 ${expandedId === panel.id ? 'translate-y-0' : 'translate-y-4'} transition-transform duration-500 ease-in-out`}>
                  {panel.title}
                </h3>
                <p className={`text-sm ${expandedId === panel.id ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
                  {panel.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ServicesSection;


