'use client';
import { SetStateAction, useEffect, useState } from 'react';

const ChooseUs = () => {
  const [websiteProgress, setWebsiteProgress] = useState(0);
  const [appProgress, setAppProgress] = useState(0);
  const [seoProgress, setSeoProgress] = useState(0);
  const [graphicProgress, setGraphicProgress] = useState(0);

  // Simulate the progress animation using setTimeout
  useEffect(() => {
    const incrementProgress = (setter: { (value: SetStateAction<number>): void; (value: SetStateAction<number>): void; (value: SetStateAction<number>): void; (value: SetStateAction<number>): void; (arg0: number): void; }, targetValue: number) => {
      let currentValue = 0;
      const interval = setInterval(() => {
        currentValue += 1;
        setter(currentValue);
        if (currentValue >= targetValue) {
          clearInterval(interval);
        }
      }, 20); // Adjust speed of number increment
    };

    incrementProgress(setWebsiteProgress, 95);
    incrementProgress(setAppProgress, 90);
    incrementProgress(setSeoProgress, 95);
    incrementProgress(setGraphicProgress, 98);
  }, []);

  return (
    <section className="min-h-screen flex items-center bg-black">
      <div className="mt-4 mb-6 gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-white sm:text-lg dark:text-white">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight leading-none md:text-xl lg:text-4xl text-[#761FE3]">
            Why Choose Us
          </h1>
          <h2 className="mb-6 text-5xl tracking-tight font-extrabold text-white dark:text-white">
            Achieving Success Through Proven Digital Expertise
          </h2>
          <p className="text-lg font-normal text-white lg:text-xl ">
            At Rankcove Digital Solutions, we are a leading Meta Ads agency committed to helping your business succeed. Here’s why you should choose us:
          </p>
          <ul className="text-lg font-normal text-white lg:text-xl  ps-5 mt-2 space-y-1 list-disc list-inside">
            <li>
              <span className="font-semibold ">Experienced Team:</span> Our team includes skilled professionals with years of experience in Facebook ads, Instagram ads, and Meta ads.
            </li>
            <li>
              <span className="font-semibold">Customized Solutions:</span> We provide tailored pay-per-click services to meet your unique needs.
            </li>
            <li>
              <span className="font-semibold">Proven Success:</span> Our strategies have helped numerous clients achieve their marketing goals.
            </li>
            <li>
              <span className="font-semibold">Client-Focused Approach:</span> We prioritize your vision and feedback to ensure the final product exceeds your expectations.
            </li>
          </ul>
        </div>

        <div>
          {/* Website Development Progress */}
          <div className="flex justify-between mb-1">
            <span className="text-base font-bold md:text-xl lg:text-2xl text-white dark:text-white">Website Development</span>
            <span className="text-sm font-bold md:text-xl lg:text-2xl text-white dark:text-white">{websiteProgress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className="bg-purple-600 h-2.5 rounded-full transition-all duration-1000 ease-in-out"
              style={{ width: `${websiteProgress}%` }}
            ></div>
          </div>
          <div className="p-4"></div>

          {/* Mobile App Development Progress */}
          <div className="flex justify-between mb-1">
            <span className="text-base font-bold md:text-xl lg:text-2xl text-white dark:text-white">Mobile App Development</span>
            <span className="text-sm font-bold md:text-xl lg:text-2xl text-white dark:text-white">{appProgress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className="bg-purple-600 h-2.5 rounded-full transition-all duration-1000 ease-in-out"
              style={{ width: `${appProgress}%` }}
            ></div>
          </div>
          <div className="p-4"></div>

          {/* SEO Progress */}
          <div className="flex justify-between mb-1">
            <span className="text-base font-bold md:text-xl lg:text-2xl text-white dark:text-white">Search Engine Optimization (SEO)</span>
            <span className="text-sm font-bold md:text-xl lg:text-2xl text-white dark:text-white">{seoProgress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className="bg-purple-600 h-2.5 rounded-full transition-all duration-1000 ease-in-out"
              style={{ width: `${seoProgress}%` }}
            ></div>
          </div>
          <div className="p-4"></div>

          {/* Graphic Designing Progress */}
          <div className="flex justify-between mb-1">
            <span className="text-base font-bold md:text-xl lg:text-2xl text-white dark:text-white">Graphic Designing</span>
            <span className="text-sm font-bold md:text-xl lg:text-2xl text-white dark:text-white">{graphicProgress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className="bg-purple-600 h-2.5 rounded-full transition-all duration-1000 ease-in-out"
              style={{ width: `${graphicProgress}%` }}
            ></div>
          </div>
          <div className="p-4"></div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
