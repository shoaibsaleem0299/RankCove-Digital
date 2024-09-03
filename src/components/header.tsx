"use client";

import Link from 'next/link';
import { useState, MouseEvent } from 'react';
import Image from 'next/image';
import logo from '../../public/assets/images/logo.png';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleCloseMenu(): void {
    setMenuOpen(false);
  }

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" passHref legacyBehavior>
            <div className="-m-1.5 p-1.5">
              <Image className="h-10 w-auto lg:h-14" src={logo} alt="RANKCOVE" />
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
            id="menu-button"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 backdrop-blur-md bg-white bg-opacity-10 p-4 rounded-lg">
          <Link href="/" passHref legacyBehavior>
            <a className="text-sm font-semibold leading-6 text-white">Home</a>
          </Link>
          <Link href="/aboutus" passHref legacyBehavior>
            <a className="text-sm font-semibold leading-6 text-white">About</a>
          </Link>
          <div className="relative">
            <button className="text-sm font-semibold leading-6 text-white flex items-center" id="services-menu-button">
              <Link href="/services" passHref legacyBehavior>Services</Link>
              <svg className="ml-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div id="services-menu" className="absolute right-0 hidden mt-2 w-48 origin-top-right bg-white bg-opacity-50 backdrop-blur-md text-black shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Link href="/services/web-development" passHref legacyBehavior>
                <a className="block px-4 py-2 text-sm hover:bg-gray-100">Web Development</a>
              </Link>
              <Link href="/services/seo-services" passHref legacyBehavior>
                <a className="block px-4 py-2 text-sm hover:bg-gray-100">SEO Services</a>
              </Link>
              <Link href="/services/mobile-app-development" passHref legacyBehavior>
                <a className="block px-4 py-2 text-sm hover:bg-gray-100">Mobile App Development</a>
              </Link>
              <Link href="/services/digital-marketing" passHref legacyBehavior>
                <a className="block px-4 py-2 text-sm hover:bg-gray-100">Digital Marketing</a>
              </Link>
            </div>
          </div>
          <Link href="/ourwork" passHref legacyBehavior>
            <a className="text-sm font-semibold leading-6 text-white">Our Work</a>
          </Link>
          <Link href="/blogs" passHref legacyBehavior>
            <a className="text-sm font-semibold leading-6 text-white">Blog</a>
          </Link>
          <Link href="/clients" passHref legacyBehavior>
            <a className="text-sm font-semibold leading-6 text-white">Clients</a>
          </Link>
          <Link href="/contactus" passHref legacyBehavior>
            <a className="text-sm font-semibold leading-6 text-white">Contact Us</a>
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end space-x-2">
          <Link href="https://www.facebook.com/share/bLB2KuRq3fZvd6im/?mibextid=LQQJ4d" passHref legacyBehavior>
            <i className="w-10 fa-brands fa-facebook-f fa-xl text-white"></i>
          </Link>
          <Link href="https://www.instagram.com/rankcove_digital?igsh=MTIxMnJqYjhubmpkOQ==" passHref legacyBehavior>
            <i className="w-10 fa-brands fa-instagram fa-xl text-white"></i>
          </Link>
          <Link href="https://api.whatsapp.com/message/4I2ABRYIYFTWK1?autoload=1&app_absent=0" passHref legacyBehavior>
            <i className="w-10 fa-brands fa-whatsapp fa-xl text-white"></i>
          </Link>
        </div>
      </nav>

      {/* Mobile menu, show/hide based on menu open state */}
      {menuOpen && (
        <div className="lg:hidden" id="mobile-menu" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-40 bg-black bg-opacity-50"></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white px-6 py-6 sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between bg-black p-3">
              <Link href="/" passHref legacyBehavior>
                <div className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <Image className="h-8 w-auto" src={logo} alt="Logo" />
                </div>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white"
                onClick={() => setMenuOpen(false)}
                id="close-menu-button"
              >
                <span className="sr-only">Close menu</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Link href="/" passHref legacyBehavior>
                    <a onClick={handleCloseMenu} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Home</a>
                  </Link>
                  <Link href="/aboutus" passHref legacyBehavior>
                    <a onClick={handleCloseMenu} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">About</a>
                  </Link>
                  <Link href="/ourwork" passHref legacyBehavior>
                    <a onClick={handleCloseMenu} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Our Work</a>
                  </Link>
                  <Link href="/blogs" passHref legacyBehavior>
                    <a onClick={handleCloseMenu} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Blog</a>
                  </Link>
                  <Link href="/clients" passHref legacyBehavior>
                    <a onClick={handleCloseMenu} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Clients</a>
                  </Link>
                  <Link href="/contactus" passHref legacyBehavior>
                    <a onClick={handleCloseMenu} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Contact Us</a>
                  </Link>
                </div>
                <div className="py-6">
                  <Link href="https://www.facebook.com/people/Rank-Cove/pfbid02zZrwSm47HarHsBmgkWVX2Cd2xYLermBoRLddcDXHNwmd8QzeR7LqxUFFARHFdeM5l/?mibextid=qi2Omg&rdid=m9c8icpcyam6y0ae&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FRJVRwVU9Nban1xQc%2F%3Fmibextid%3Dqi2Omg" passHref legacyBehavior>
                    <i className="fa-brands fa-facebook fa-xl text-gray-900 mr-4"></i>
                  </Link>
                  <Link href="https://www.instagram.com/rankcove/?igsh=MXIxemw4MDJnZHlocw%3D%3D" passHref legacyBehavior>
                    <i className="fa-brands fa-instagram fa-xl text-gray-900 mr-4"></i>
                  </Link>
                  <Link href="#!" passHref legacyBehavior>
                    <i className="fa-brands fa-x-twitter fa-xl text-gray-900 mr-4"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
