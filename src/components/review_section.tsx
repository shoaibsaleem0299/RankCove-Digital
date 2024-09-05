'use client';

import React, { useState, useEffect } from 'react';

const reviews = [
  {
    text: "“This company transformed our online presence. Highly recommended!”",
    name: "John Doe",
    position: "CEO, ExampleCorp",
    rating: 4
  },
  {
    text: "“Excellent service and support. The team went above and beyond!”",
    name: "Jane Smith",
    position: "Marketing Director, Acme Inc.",
    rating: 4
  },
  {
    text: "“A game-changer for our business. Professional and reliable!”",
    name: "Alice Johnson",
    position: "Product Manager, TechSolutions",
    rating: 4
  },
  {
    text: "“Incredible results and fantastic customer service. We couldn't be happier!”",
    name: "Michael Brown",
    position: "Founder, Startup XYZ",
    rating: 4
  }
];

const stars = Array(5).fill(0).map((_, i) => i + 1);

const ReviewCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically switch reviews every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    // Cleanup the interval when component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="review-carousel" className="relative w-full">
      {/* Carousel wrapper */}
      <div className="relative h-56 md:h-96 overflow-hidden rounded-lg bg-gray-800">
        {reviews.map((review, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex items-center justify-center transition-opacity transform duration-700 ease-in-out ${
              index === currentIndex ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
            }`}
          >
            <div className="flex flex-col items-center justify-center p-6 bg-gray-900 text-white rounded-lg shadow-lg">
              <p className="text-lg font-medium text-center">{review.text}</p>
              <div className="mt-4 text-gray-400 text-center">
                <p className="font-bold">{review.name}</p>
                <p className="text-sm">{review.position}</p>
              </div>
              <div className="my-6 flex items-center">
                {stars.map((star) => (
                  <svg
                    key={star}
                    className={`w-4 h-4 ms-1 ${
                      star <= review.rating ? 'text-yellow-300' : 'text-gray-300'
                    }`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path
                      d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                    />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewCarousel;
