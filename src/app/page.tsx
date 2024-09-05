import Header from '@/components/header';
import React from 'react';
import heroText from '../../public/assets/images/text.png';
import AboutSection from '@/components/about_section';
import ServicesSection from '@/components/serivce_section';
import ChooseUs from '@/components/choose_us_section';
import ReviewCarousel from '@/components/review_section';
import BlogSection from '@/components/blog_section';
import CallToAction from '@/components/action_section';
import Footer from '@/components/footer';


const panelsData1 = [
  {
    id: 1,
    title: "Web Design & Development",
    description:
      "Our team of skilled designers and developers collaborate to craft visually stunning and functionally superior websites tailored to your unique business needs. We offer digital experiences that attract your audience and encourage conversions by fusing our expertise in technology with creativity.",
    imageUrl: "/assets/images/website_development.jpg",
    link: "/web-design-development",
  },
  {
    id: 2,
    title: "(UX) & (UI) Design",
    description:
      "Ensuring seamless navigation and visually appealing interfaces is paramount in today’s digital landscape. Our UX/UI experts carefully create logical and captivating user interfaces that connect with your target market, encouraging adherence and improving brand image.",
    imageUrl: "/assets/images/UIUX.jpg",
    link: "/ux-ui-design",
  },
  {
    id: 3,
    title: "Mobile App Development",
    description:
      "Our team ensures seamless navigation and visually appealing interfaces with our mobile app development services, creating user-friendly experiences that engage your target audience.",
    imageUrl: "/assets/images/mobile app.jpg",
    link: "/mobile-app-development",
  },
  {
    id: 4,
    title: "Search Engine Optimization",
    description:
      "Boost your online presence with our SEO services. We optimize your website to improve search engine rankings and attract more organic traffic.",
    imageUrl: "/assets/images/seo.jpg",
    link: "/search-engine-optimization",
  },
  {
    id: 5,
    title: "Graphic Designing",
    description:
      "Create visually appealing designs with our graphic designing services. We help enhance your brand image through stunning visuals and creative designs.",
    imageUrl: "/assets/images/grapic design.jpg",
    link: "/graphic-designing",
  },

];
const panelsData2 = [
  {
    id: 6,
    title: "E-Commerce Solution",
    description:
      "We build effective e-commerce platforms tailored to your business needs, designed to drive sales and provide a seamless shopping experience.",
    imageUrl: "/assets/images/ecommerce.jpg",
    link: "/e-commerce-solution",
  },
  {
    id: 7,
    title: "Branding And Strategic",
    description:
      "Develop a strong brand identity with our branding and strategic services. We help you create a compelling brand narrative and strategic marketing plan.",
    imageUrl: "/assets/images/branding.jpg",
    link: "/branding-and-strategic",
  },
  {
    id: 8,
    title: "Social Media Marketing",
    description:
      "Enhance your social media presence with our marketing services. We create engaging content and strategies to grow your audience and improve brand visibility.",
    imageUrl: "/assets/images/social-media.jpg",
    link: "/social-media-marketing",
  },
  {
    id: 9,
    title: "Content Marketing",
    description:
      "Drive engagement and conversions with our content marketing services. We craft content strategies that resonate with your audience and support your business goals.",
    imageUrl: "/assets/images/content marketing.jpg",
    link: "/content-marketing",
  },
  {
    id: 10,
    title: "Digital Marketing",
    description:
      "Maximize your online reach with our comprehensive digital marketing services. We integrate various digital strategies to enhance your online presence and drive results.",
    imageUrl: "/assets/images/digital-marketing.jpg",
    link: "/digital-marketing",
  },

];

const blogs = [
  {
    title: "Mastering Keyword Research: The Ultimate Guide for Businesses ",
    description: "Keyword research is the foundation of any successful digital marketing strategy. It’s the process of identifying the words and phrases that your target audience is",
    date: "14 days ago",
    category: "Tutorial",
    author: "Jese Leos",
    authorImage: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
  },
  {
    title: "How to Boost Your Website Traffic with These Simple SEO Tips ",
    description: "Nowadays, having a website is essential for businesses and individuals alike. However, simply having a website isn’t enough – you need to ensure that it",
    date: "14 days ago",
    category: "Article",
    author: "Bonnie Green",
    authorImage: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png",
  },]

function Home() {
  return (
    <div className='home'>
      <div className="relative w-full h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/assets/videos/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative top-1/3 w-3/5 m-auto text-white" data-aos="fade-up">
          <img src={heroText.src} alt="Strengthen Your Business Performance To The Next Level" />
        </div>
      </div>
      <AboutSection />
      <div className="bg-black flex flex-col items-center justify-center p-5 my-10">
        <h1 data-aos="fade-up" className="text-[#761FE3] mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-2xl lg:text-4xl ">
          What We Do
        </h1>
        <h2 data-aos="fade-left" className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl ">
          Our Suite of Digital Solutions
        </h2>
        <p data-aos="fade-up" className="mb-8 text-lg font-normal text-center text-white lg:text-xl sm:px-16 lg:px-48 ">
          At Rankcove, we are confident in leveraging years of experience, a wealth of knowledge, and a proven track record of delivering exceptional digital solutions that drive businesses forward.
        </p>
      </div>
      <ServicesSection panelsData={panelsData1} />
      <ServicesSection panelsData={panelsData2} />
      <ChooseUs />
      <ReviewCarousel />
      <BlogSection blogs={blogs} />
      <CallToAction />
    </div>
  );
}

export default Home;
