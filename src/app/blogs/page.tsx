import CallToAction from '@/components/action_section'
import BlogSection from '@/components/blog_section';
import HeroSection from '@/components/hero_section'
import React from 'react'


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
  },
  {
    title: "Effective Strategies for Building a Strong Online Presence  ",
    description: "Nowadays, having a website is essential for businesses and individuals alike. However, simply having a website isn’t enough – you need to ensure that it",
    date: "14 days ago",
    category: "Tutorial",
    author: "Jese Leos",
    authorImage: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
  },
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
  },
  {
    title: "Effective Strategies for Building a Strong Online Presence  ",
    description: "Nowadays, having a website is essential for businesses and individuals alike. However, simply having a website isn’t enough – you need to ensure that it",
    date: "14 days ago",
    category: "Tutorial",
    author: "Jese Leos",
    authorImage: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
  },
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
  },
  
  
];

const page = () => {
  return (
    <div className='blogs'>
      <HeroSection title='Our Blogs' />
      
      <BlogSection blogs={blogs}/>
      <CallToAction />
    </div>
  )
}

export default page