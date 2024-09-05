import React from 'react';
import HeroSection from '@/components/hero_section';

const page = () => {
  return (
    <div className="contact-us">
      <HeroSection title="Contact Us" />

      {/* Main Section */}
      <div className="flex justify-center items-center min-h-screen bg-gray-900">
        <div className="max-w-7xl w-full mx-auto px-4 py-12 lg:flex lg:items-center lg:justify-between">
          {/* Form Section */}
          <div className="lg:w-1/2 flex flex-col items-center text-center lg:text-left lg:items-start">
            <h2 className="text-3xl font-bold text-[#761FE3] lg:text-4xl">Get in touch</h2>
            <p className="mt-4 text-lg text-white">Our friendly team would love to hear from you.</p>

            <form  className="mt-8 space-y-4 w-full max-w-md">
              <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:gap-x-4">
                {/* First Name */}
                <div className="flex flex-col">
                  <label htmlFor="first_name" className="text-sm font-medium text-white">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    className="mt-1 px-3 py-2 border border-gray-300 rounded-md bg-transparent text-white"
                    placeholder="First Name"
                  />
                </div>

                {/* Last Name */}
                <div className="flex flex-col">
                  <label htmlFor="last_name" className="text-sm font-medium text-white">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    className="mt-1 px-3 py-2 border border-gray-300 rounded-md bg-transparent text-white"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-medium text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 px-3 py-2 border border-gray-300 rounded-md bg-transparent text-white"
                  placeholder="Email"
                />
              </div>

              {/* Phone Number */}
              <div className="flex flex-col">
                <label htmlFor="phone_number" className="text-sm font-medium text-white">
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phone_number"
                  className="mt-1 px-3 py-2 border border-gray-300 rounded-md bg-transparent text-white"
                  placeholder="Phone number"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col">
                <label htmlFor="message" className="text-sm font-medium text-white">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 px-3 py-2 border border-gray-300 rounded-md bg-transparent text-white"
                  placeholder="Leave us a message"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-2 px-4 bg-[#761FE3] text-white font-semibold rounded-md hover:bg-purple-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Image Section */}
          <div className="hidden lg:block lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?ixlib=rb-4.0.3ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGhhcHB5JTIwcGVvcGxlfGVufDB8fDB8fA%3D%3Dauto=formatfit=cropw=800q=60"
              alt="Contact us"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-4xl font-bold text-gray-900">Our Offices</h3>
              <p className="mt-4 text-lg text-gray-600">Find us at these locations.</p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3527.8792084317342!2d-82.6408456246035!3d27.844250319440093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2e6a2b7855c1f%3A0x4e3e0f613f7708f7!2s7901%204th%20St%20N%2C%20St.%20Petersburg%2C%20FL%2033702%2C%20USA!5e0!3m2!1sen!2s!4v1725272478369!5m2!1sen!2s"
                height='200'
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-900">Florida office</h4>
              <p className="mt-2 text-base text-gray-600">Mon-Sat 9am to 5pm.</p>
              <p className="mt-1 text-sm text-gray-600">7901 4th St. N # 16578 St. Petersburg FL 33702</p>
              <h4 className="text-xl mt-4 font-semibold text-gray-900">Office Contact</h4>
              <p className="mt-2 text-base text-gray-600">rankcove@rankcovedigitalsolutions.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
