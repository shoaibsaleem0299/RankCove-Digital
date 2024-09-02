import React from 'react';

interface Blog {
  title: string;
  description: string;
  date: string;
  category: string;
  author: string;
  authorImage: string;
}

interface BlogSectionProps {
  blogs: Blog[];
}

const BlogSection: React.FC<BlogSectionProps> = ({ blogs }) => {
  return (
    <section
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      className="bg-black"
    >
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="flex flex-col items-center justify-center p-5 my-10">
          <h1 className="text-[#761FE3] mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-2xl lg:text-4xl">
            Explore Our Blogs
          </h1>
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white">
            Discover Tips, Trends, & Strategies
          </h2>
          <p className="mb-8 text-lg font-normal text-center text-white lg:text-xl sm:px-16 lg:px-48">
            At Rankcove, we are confident in leveraging years of experience, a wealth of knowledge, and a proven track record of delivering exceptional digital solutions that drive businesses forward.
          </p>
        </div>
        {/* Responsive Grid Layout */}
        <div className="grid gap-8 md:grid-cols-2">
          {blogs.map((blog, index) => (
            <article
              key={index}
              className="p-6 mb-10 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
            >
              <div className="flex justify-between items-center mb-5 text-gray-500">
                <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                  <svg
                    className="mr-1 w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                  </svg>
                  {blog.category}
                </span>
                <span className="text-sm">{blog.date}</span>
              </div>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">{blog.title}</a>
              </h2>
              <p className="mb-5 font-light text-gray-500 dark:text-gray-400">{blog.description}</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <img
                    className="w-7 h-7 rounded-full"
                    src={blog.authorImage}
                    alt={`${blog.author} avatar`}
                  />
                  <span className="font-medium dark:text-white">{blog.author}</span>
                </div>
                <a href="https://www.geeksforgeeks.org/web-development/" className="inline-flex items-center font-medium text-[#761FE3] hover:underline">
                  Read more
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
