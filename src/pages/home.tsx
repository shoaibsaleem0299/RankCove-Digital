import Header from '@/components/header';
import React from 'react';
import heroText from '../../public/assets/images/text.png';
import AboutSection from '@/components/about_section';
import ServicesSection from '@/components/serivce_section';
import ChooseUs from '@/components/choose_us_section';
import ReviewCarousel from '@/components/review_section';
import BlogSection from '@/components/blog_section';
import CallToAction from '@/components/action_section';

const blogs = [
  {
    title: "Mastering Keyword Research: The Ultimate Guide for Businesses ",
    description: "Keyword research is the foundation of any successful digital marketing strategy. It’s the process of identifying the words and phrases that your target audience is",
    date: "14 days ago",
    category: "Tutorial",
    author: "Jese Leos",
    authorImage: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
    blog: "In today's digital age, a strong online presence is no longer a luxury but a necessity for businesses, individuals, and organizations alike. It's a platform to connect with audiences, build brand awareness, and drive growth. To effectively establish and maintain a robust online presence, several key strategies must be implemented.  " +
      "A well-optimized website is the cornerstone of a strong online presence. This involves ensuring it is user-friendly, mobile-responsive, and search engine optimized (SEO). SEO techniques, such as keyword research and on-page optimization, help your website rank higher in search engine results pages (SERPs). Additionally, a fast-loading website improves user experience and can positively impact your search engine rankings.  " +
      "Consistent production of valuable and engaging content is essential for attracting and retaining an audience. This content can take various forms, including blog posts, articles, videos, infographics, and social media updates. " +
         "The key is to create content that is relevant, informative, and shares your unique value proposition.  " +
      "Social media platforms offer a powerful way to connect with your target audience and build relationships. By actively engaging with your followers, sharing valuable content, and participating in relevant conversations, you can increase your brand visibility and drive traffic to your website. It's important to select the right platforms for your audience and develop a consistent social media strategy.  " +
      "Networking is crucial for building a strong online presence. Connect with other businesses, influencers, and industry experts through online communities, forums, and events. Collaborate on projects, share content, and offer support to build mutually beneficial relationships.  " +
      "Email marketing remains a highly effective tool for reaching and engaging with your audience. Build an email list of subscribers and send regular, personalized newsletters with valuable content, updates, and promotions. Segment your email list to target specific audience segments with tailored messages.  " +
      "For businesses with a local focus, local SEO is essential. Optimize your Google My Business listing with accurate information, photos, and reviews. Encourage customers to leave positive reviews and claim your business on other local directories.  " +
      "To measure the effectiveness of your online presence, use analytics tools to track website traffic, user behavior, and social media engagement. Analyze the data to identify areas for improvement and make data-driven decisions to optimize your strategies.  " +
      "High-quality visuals, such as images and videos, can enhance your content and make it more engaging. Use visually appealing elements to break up text and capture attention.  " +
      "The digital landscape is constantly evolving. Stay informed about the latest trends, technologies, and best practices to ensure your online presence remains relevant and effective.  " +
      "By implementing these strategies, you can build a strong online presence that helps you achieve your business goals and connect with your target audience. Remember, building a successful online presence is an ongoing process that requires consistent effort and adaptation."
  },
  {
    title: "How to Boost Your Website Traffic with These Simple SEO Tips ",
    description: "Nowadays, having a website is essential for businesses and individuals alike. However, simply having a website isn’t enough – you need to ensure that it",
    date: "14 days ago",
    category: "Article",
    author: "Bonnie Green",
    authorImage: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png",
    blog: "In today's digital age, a strong online presence is no longer a luxury but a necessity for businesses, individuals, and organizations alike. It's a platform to connect with audiences, build brand awareness, and drive growth. To effectively establish and maintain a robust online presence, several key strategies must be implemented.  " +
      "A well-optimized website is the cornerstone of a strong online presence. This involves ensuring it is user-friendly, mobile-responsive, and search engine optimized (SEO). SEO techniques, such as keyword research and on-page optimization, help your website rank higher in search engine results pages (SERPs). Additionally, a fast-loading website improves user experience and can positively impact your search engine rankings.  " +
      "Consistent production of valuable and engaging content is essential for attracting and retaining an audience. This content can take various forms, including blog posts, articles, videos, infographics, and social media updates. " +
         "The key is to create content that is relevant, informative, and shares your unique value proposition.  " +
      "Social media platforms offer a powerful way to connect with your target audience and build relationships. By actively engaging with your followers, sharing valuable content, and participating in relevant conversations, you can increase your brand visibility and drive traffic to your website. It's important to select the right platforms for your audience and develop a consistent social media strategy.  " +
      "Networking is crucial for building a strong online presence. Connect with other businesses, influencers, and industry experts through online communities, forums, and events. Collaborate on projects, share content, and offer support to build mutually beneficial relationships.  " +
      "Email marketing remains a highly effective tool for reaching and engaging with your audience. Build an email list of subscribers and send regular, personalized newsletters with valuable content, updates, and promotions. Segment your email list to target specific audience segments with tailored messages.  " +
      "For businesses with a local focus, local SEO is essential. Optimize your Google My Business listing with accurate information, photos, and reviews. Encourage customers to leave positive reviews and claim your business on other local directories.  " +
      "To measure the effectiveness of your online presence, use analytics tools to track website traffic, user behavior, and social media engagement. Analyze the data to identify areas for improvement and make data-driven decisions to optimize your strategies.  " +
      "High-quality visuals, such as images and videos, can enhance your content and make it more engaging. Use visually appealing elements to break up text and capture attention.  " +
      "The digital landscape is constantly evolving. Stay informed about the latest trends, technologies, and best practices to ensure your online presence remains relevant and effective.  " +
      "By implementing these strategies, you can build a strong online presence that helps you achieve your business goals and connect with your target audience. Remember, building a successful online presence is an ongoing process that requires consistent effort and adaptation."
  },]


const panelsData1 = [
    {
      id: 1,
      title: "Web Design & Development",
      description:
        "Our team of skilled designers and developers collaborate to craft visually stunning and functionally superior websites tailored to your unique business needs. We offer digital experiences that attract your audience and encourage conversions by fusing our expertise in technology with creativity.",
      imageUrl: "/assets/images/website_development.jpg",
      link: "/web-design-development", // Example link
    },
    {
      id: 2,
      title: "(UX) & (UI) Design",
      description:
        "Ensuring seamless navigation and visually appealing interfaces is paramount in today’s digital landscape. Our UX/UI experts carefully create logical and captivating user interfaces that connect with your target market, encouraging adherence and improving brand image.",
      imageUrl: "/assets/images/UIUX.jpg",
      link: "/ux-ui-design", // Example link
    },
    {
      id: 3,
      title: "Mobile App Development",
      description:
        "Our team ensures seamless navigation and visually appealing interfaces with our mobile app development services, creating user-friendly experiences that engage your target audience.",
      imageUrl: "/assets/images/mobile app.jpg",
      link: "/mobile-app-development", // Example link
    },
    {
      id: 4,
      title: "Search Engine Optimization",
      description:
        "Boost your online presence with our SEO services. We optimize your website to improve search engine rankings and attract more organic traffic.",
      imageUrl: "/assets/images/seo.jpg",
      link: "/search-engine-optimization", // Example link
    },
    {
      id: 5,
      title: "Graphic Designing",
      description:
        "Create visually appealing designs with our graphic designing services. We help enhance your brand image through stunning visuals and creative designs.",
      imageUrl: "/assets/images/grapic design.jpg",
      link: "/graphic-designing", // Example link
    },
    
  ];
const panelsData2 = [
    {
        id: 6,
        title: "E-Commerce Solution",
        description:
          "We build effective e-commerce platforms tailored to your business needs, designed to drive sales and provide a seamless shopping experience.",
        imageUrl: "/assets/images/ecommerce.jpg",
        link: "/e-commerce-solution", // Example link
      },
      {
        id: 7,
        title: "Branding And Strategic",
        description:
          "Develop a strong brand identity with our branding and strategic services. We help you create a compelling brand narrative and strategic marketing plan.",
        imageUrl: "/assets/images/branding.jpg",
        link: "/branding-and-strategic", // Example link
      },
      {
        id: 8,
        title: "Social Media Marketing",
        description:
          "Enhance your social media presence with our marketing services. We create engaging content and strategies to grow your audience and improve brand visibility.",
        imageUrl: "/assets/images/social-media.jpg",
        link: "/social-media-marketing", // Example link
      },
      {
        id: 9,
        title: "Content Marketing",
        description:
          "Drive engagement and conversions with our content marketing services. We craft content strategies that resonate with your audience and support your business goals.",
        imageUrl: "/assets/images/content marketing.jpg",
        link: "/content-marketing", // Example link
      },
      {
        id: 10,
        title: "Digital Marketing",
        description:
          "Maximize your online reach with our comprehensive digital marketing services. We integrate various digital strategies to enhance your online presence and drive results.",
        imageUrl: "/assets/images/digital-marketing.jpg",
        link: "/digital-marketing", // Example link
      },
    
  ];
  

function Home() {
    return (
        <div className='home'>
            <div className="relative w-full h-screen overflow-hidden">
                <video autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover">
                    <source src="/assets/videos/video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute top-1/2 left-1/2 w-3/5 -translate-x-1/2 -translate-y-1/2 text-white" data-aos="fade-up">
                    <img src={heroText.src} alt="Strengthen Your Business Performance To The Next Level" />
                </div>
            </div>
            <AboutSection />
            <div className="flex flex-col items-center justify-center p-5 my-10">
                <h1 className="text-[#761FE3] mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-2xl lg:text-4xl ">
                    What We Do
                </h1>
                <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white">
                    Our Suite of Digital Solutions
                </h2>
                <p className="mb-8 text-lg font-normal text-center text-white lg:text-xl sm:px-16 lg:px-48 ">
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
