"use client";

import React, { useEffect } from 'react';

const animateNumber = (element: HTMLElement, duration: number) => {
    const start = 0; // Start from 0 for animation
    const end = parseInt(element.getAttribute('data-number')!.replace(/,/g, ''), 10);
    const stepTime = Math.abs(Math.floor(duration / end));
    let current = start;

    const step = () => {
        current += 1;
        element.textContent = current.toLocaleString();
        if (current < end) {
            setTimeout(step, stepTime);
        } else {
            element.textContent = end.toLocaleString(); // Ensure the final value is correct
        }
    };

    step();
};

const AboutSection = () => {
    useEffect(() => {
        // Animate each number
        document.querySelectorAll('.funfact-number').forEach(el => {
            // Type assertion to HTMLElement
            animateNumber(el as HTMLElement, 2000); // Duration in milliseconds
        });
    }, []);

    return (
        <section className="bg-black my-6">
            <div 
                data-aos="fade-right" 
                className="mt-4 mb-6 gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6 lg:h-screen"
            >
                <div className="font-light text-white sm:text-lg dark:text-white">
                    <h1 className="mb-6 text-4xl font-extrabold tracking-tight leading-none md:text-2xl lg:text-4xl text-[#761FE3]">
                        About Us
                    </h1>
                    <h2 className="mb-4 text-5xl tracking-tight font-extrabold text-white dark:text-white">
                        Activating Digital Success For Business
                    </h2>
                    <p className="text-lg font-normal text-white lg:text-xl">
                        At RankCove, we understand the ever-evolving digital landscape presents both challenges and opportunities.
                        Our goal is to become your strategic partner by assisting you in navigating these challenges and realizing
                        the complete potential of digital marketing. By utilizing data-driven insights, creative solutions, and
                        a constant commitment to quality, we enable companies to break new ground and see impressive development.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8" data-aos="fade-left">
                    <img
                        className="w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
                        alt="office content 1"
                        width={500}
                        height={300}
                    />
                    <img
                        className="mt-4 w-full lg:mt-10 rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
                        alt="office content 2"
                        width={500}
                        height={300}
                    />
                </div>
            </div>

            {/* Fun Fact Section */}
            <div className="fun-fact-container bg-gray-900 p-5 mb-12 flex flex-wrap justify-around text-white">
                <div className="fun-fact-item flex-1 text-center mx-2 my-4" style={{ minWidth: '200px' }}>
                    <div className="funfact-wrap p-5">
                        <div className="funfact flex flex-col items-center">
                            <span className="funfact-number text-[#ffd] text-6xl font-bold" data-number="10">10<sup>Th</sup></span>
                            <h5 className="funfact-number-title text-[#ffd] text-xl font-bold mt-2">Years of Experience</h5>
                        </div>
                    </div>
                </div>
                <div className="fun-fact-item flex-1 text-center mx-2 my-4" style={{ minWidth: '200px' }}>
                    <div className="funfact-wrap p-5">
                        <div className="funfact flex flex-col items-center">
                            <span className="funfact-number text-[#ffd] text-6xl font-bold" data-number="1250">1,250</span>
                            <h5 className="funfact-number-title text-[#ffd] text-xl font-bold mt-2">Projects Completed</h5>
                        </div>
                    </div>
                </div>
                <div className="fun-fact-item flex-1 text-center mx-2 my-4" style={{ minWidth: '200px' }}>
                    <div className="funfact-wrap p-5">
                        <div className="funfact flex flex-col items-center">
                            <span className="funfact-number text-[#ffd] text-6xl font-bold" data-number="1500">1.5 K</span>
                            <h5 className="funfact-number-title text-[#ffd] text-xl font-bold mt-2">Happy Clients</h5>
                        </div>
                    </div>
                </div>
                <div className="fun-fact-item flex-1 text-center mx-2 my-4" style={{ minWidth: '200px' }}>
                    <div className="funfact-wrap p-5">
                        <div className="funfact flex flex-col items-center">
                            <span className="funfact-number text-[#ffd] text-6xl font-bold" data-number="10">10</span>
                            <h5 className="funfact-number-title text-[#ffd] text-xl font-bold mt-2">Awards Won</h5>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Fun Fact Section */}
        </section>
    );
};

export default AboutSection;
