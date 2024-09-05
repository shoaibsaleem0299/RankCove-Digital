import React from 'react';
import Link from 'next/link'; // Import Link component from next/link

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-6 py-6 lg:py-8 md:grid-cols-3">
          <div>
            <h2 className="mb-6 text-sm font-bold text-white uppercase ">Company</h2>
            <ul className="text-white  font-medium">
              <li className="mb-4">
                <Link href="/aboutus" className="hover:underline">
                  About
                </Link>
              </li>
            
             
              <li className="mb-4">
                <Link href="/blogs" className="hover:underline">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-bold text-white uppercase ">Help Center</h2>
            <ul className="text-white  font-medium">
              
              <li className="mb-4">
                <Link href="https://api.whatsapp.com/message/4I2ABRYIYFTWK1?autoload=1&app_absent=0" className="hover:underline">
                  WhatsApp
                </Link>
              </li>
              <li className="mb-4">
                <Link href="https://www.facebook.com/share/bLB2KuRq3fZvd6im/?mibextid=LQQJ4d" className="hover:underline">
                  Facebook
                </Link>
              </li>
              <li className="mb-4">
                <Link href="https://www.instagram.com/rankcove_digital?igsh=MTIxMnJqYjhubmpkOQ==" className="hover:underline">
                  Instagram
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/contactus" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <img style={{ width: '150px' }} src="/assets/images/logo.png" alt="logo" />
          </div>
        </div>
        <div className="px-4 py-6 bg-gray-800  md:flex md:items-center md:justify-between">
          <span className="text-sm text-white  sm:text-center">
            © 2024 <Link href="https://flowbite.com/">RankCove™</Link>. All Rights Reserved.
          </span>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
