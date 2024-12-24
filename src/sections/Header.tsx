import React from 'react';
import ArrowRight from '@/assets/arrow-right.svg';
import Image from 'next/image';
import Logo from '../../public/logo1.png';
import Menu from '@/assets/menu.svg';
import { VscGoToSearch } from 'react-icons/vsc'; // Importing the VscGoToSearch icon

const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      {/* Top Bar */}
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          Protect your devices and streamline security management
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Get started</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>

      {/* Main Header */}
      <div className="py-5">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Image src={Logo} alt="Saas Logo" height={60} width={60} />
            
            {/* Menu Icon (Mobile) */}
            <Menu className="h-5 w-5 md:hidden" />

             {/* Search Bar */}
             <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="px-4 py-2 w-64 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <button
                  className="absolute right-1 top-1 px-3 py-1 text-white bg-blue-400 rounded-md hover:bg-blue-500"
                >
                  <VscGoToSearch size={20} />
                </button>
              </div>
            
            {/* Navigation Links */}
            <nav className="hidden md:flex gap-10 text-black/600 items-center">
              <a href="">About</a>
              <a href="">Features</a>
              <a href="">Customers</a>
              <a href="">Updates</a>
              <a href="">Product</a>
              
             

              {/* Get Started Button */}
              <button className="bg-blue-400 text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking">
                <a href="https://play.google.com/store/apps/details?id=rw.rinda.rinda_mobile_app&hl=en">
                  Get Started
                </a>
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
