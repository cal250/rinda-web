import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-black text-sm py-16">
      <div className="container mx-auto px-6 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and CTA Button */}
          <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <span className="text-blue-700 text-xl font-bold ml-2">Rinda</span>
            </div>
            <a
              href="#"
              className="bg-blue-700 text-white py-2 px-6 rounded-full text-center text-sm shadow hover:bg-blue-800"
            >
              Start Free 30-days Trial
            </a>
          </div>

          {/* Navigation Links */}
          <nav className="mt-8 md:mt-0 mb-8 md:mb-0">
            <ul className="flex flex-col md:flex-row gap-8 text-black/70">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Customers</a></li>
              <li><a href="#">Updates</a></li>
              <li><a href="#">Product</a></li>
            </ul>
          </nav>

          {/* Contact and Address */}
          <div className="mt-8 md:mt-0 text-center md:text-right">
            <p className="font-bold">Office Address</p>
            <p className="mb-4">Nyamirambo, Kigali - Maison Tresor, 2nd Floor</p>

            <p className="font-bold">Contact</p>
            <p className="mb-1">info@Laziz Innovations.com</p>
            <p>+250 788 619 790</p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mt-8">
          <a href="#" className="text-blue-700 hover:text-blue-800">
            <FaFacebookF size={24} />
          </a>
          <a href="#" className="text-blue-700 hover:text-blue-800">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-blue-700 hover:text-blue-800">
            <FaLinkedinIn size={24} />
          </a>
          <a href="#" className="text-blue-700 hover:text-blue-800">
            <FaInstagram size={24} />
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-300 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500">2024 &copy; All rights reserved by <span className="text-blue-700">Laziz Innovations</span></p>
          <div className="flex gap-4 text-gray-500 mt-4 md:mt-0">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:underline">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
