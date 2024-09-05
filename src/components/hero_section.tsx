import React from 'react';
import imageSrc from '../../public/assets/images/Landing-BG.jpg'
import Link from 'next/link';

interface HeroSectionProps {
    title: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title }) => {
    return (
        <div className="relative text-center">
            <img
                className="w-full h-[40vh] object-cover opacity-50 lg:h-[60vh]"
                src={imageSrc.src}
                alt="Landing Background"
            />
            <div className="absolute inset-0 flex flex-col  justify-center items-center lg:items-start lg:ml-8 lg:pl-8 text-white">
                <h1 className="mb-4 text-5xl font-extrabold tracking-tight">{title}</h1>
                <p className="text-lg font-normal lg:text-xl  ">
                    <span className="font-bold text-[#761FE3]">
                        <Link href="/">Home</Link>
                    </span>{' '}
                    / {title}
                </p>
            </div>
            
        </div>
    );
};

export default HeroSection;
