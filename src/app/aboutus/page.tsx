import AboutSection from '@/components/about_section'
import CallToAction from '@/components/action_section'
import ChooseUs from '@/components/choose_us_section'
import HeroSection from '@/components/hero_section'
import ReviewCarousel from '@/components/review_section'
import React from 'react'

const page = () => {
  return (
    <div className='about'>
        <HeroSection title='About Us' />
        <AboutSection />
        <ChooseUs />
        <ReviewCarousel />
        <CallToAction />
    </div>
  )
}

export default page