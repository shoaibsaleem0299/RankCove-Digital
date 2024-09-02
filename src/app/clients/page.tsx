import CallToAction from '@/components/action_section'
import HeroSection from '@/components/hero_section'
import ReviewCarousel from '@/components/review_section'
import React from 'react'

const page = () => {
  return (
    <div className='clients'>
      <HeroSection title='Our Clients'/>
      <div className="flex flex-col items-center justify-center p-5 my-10">
          <h1 className="text-[#761FE3] mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-2xl lg:text-4xl">
          OUR DIVERSE CLIENT PORTFOLIO
          </h1>
          <h2 className="mb-4 text-center text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white">
          From Budding <br />  <span>Startup To Multinational Corporations</span>
          </h2>
          <p className="mb-8 text-lg font-normal text-center text-white lg:text-xl sm:px-16 lg:px-48">
          At Rankcove we are confident in leveraging years of experience, a wealth of knowledge, and a proven track record of delivering exceptional digital solutions that drive businesses forward.          </p>
        </div>
        <ReviewCarousel />
        <CallToAction />
    </div>
  )
}

export default page