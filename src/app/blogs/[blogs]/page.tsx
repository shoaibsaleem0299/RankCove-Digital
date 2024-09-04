import React from 'react'
import { blob } from 'stream/consumers';

function page({ searchParams }: {
  searchParams: {
    title: string;
    description: string;
    date: string;
    category: string;
    author: string;
    authorImage: string;
    blog: string;
  }
}) {
  return (
    <section className="overflow-hidden py-28 bg-gray-900">
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <span className="mb-4 inline-block rounded-full bg-gray-50 px-3 py-1 text-xs font-semibold text-black">
          OUR BLOG
        </span>
      </div>
      <div className="mb-12  w-full px-4 lg:mb-0">
        <h4 className="mb-5 text-3xl font-semibold text-white">
          {searchParams.title}
        </h4>
        <img
          className="mb-5  block w-[90vh]   rounded-lg"
          src={searchParams.authorImage}
          alt=""
        />
        <span className="mb-5 block  text-white">
         By <strong>{searchParams.author}</strong> <br /> {searchParams.date}
        </span>

        <p className=" text-lg text-white">
          {searchParams.blog}
        </p>
      </div>

    </section>
  );
}

export default page