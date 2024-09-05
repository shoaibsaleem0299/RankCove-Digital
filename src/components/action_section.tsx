import React from 'react';

const CallToAction = () => {
  return (
    <div style={{ height: '100vh', display: 'flex', alignItems: 'center' }} className="bg-black">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 data-aos="fade-up" className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl ">
          Ready to Dominate The Digital Landscape?
        </h1>
        <h2 data-aos="fade-left" className="my-6 mb-4 text-3xl font-extrabold tracking-tight leading-none text-white md:text-3xl lg:text-4xl ">
          Let&apos;s create a winning strategy together
        </h2>
        <p data-aos="fade-right" className="mb-8 my-6 text-lg font-normal text-white lg:text-xl sm:px-16 lg:px-48 ">
          At Rankcove we are confident in leveraging years of experience, a wealth of knowledge, and a proven track record of delivering exceptional digital solutions that drive businesses forward.
        </p>
        <div data-aos="fade-up" className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <a href="/contactus"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
            Get started
            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
