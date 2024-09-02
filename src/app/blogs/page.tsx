import CallToAction from '@/components/action_section'
import BlogSection from '@/components/blog_section';
import HeroSection from '@/components/hero_section'
import React from 'react'


const blogs = [
  {
    title: "How to quickly deploy a static website",
    description: "Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.",
    date: "14 days ago",
    category: "Tutorial",
    author: "Jese Leos",
    authorImage: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
  },
  {
    title: "Our first project with React",
    description: "Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.",
    date: "14 days ago",
    category: "Article",
    author: "Bonnie Green",
    authorImage: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png",
  },
  {
    title: "Our first project with React",
    description: "Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.",
    date: "14 days ago",
    category: "Article",
    author: "Bonnie Green",
    authorImage: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png",
  },
  {
    title: "Our first project with React",
    description: "Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.",
    date: "14 days ago",
    category: "Article",
    author: "Bonnie Green",
    authorImage: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png",
  },
  {
    title: "Our first project with React",
    description: "Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.",
    date: "14 days ago",
    category: "Article",
    author: "Bonnie Green",
    authorImage: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png",
  },
  // Add more blog data as needed
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