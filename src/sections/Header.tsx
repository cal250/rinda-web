import React from 'react'
import ArrowRight from '@/assets/arrow-right.svg'
import Image from 'next/image'
import Logo from '../../public/logo1.png'
import Menu from '@/assets/menu.svg'

const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block ">
        Protect your devices and streamline security management
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Get started </p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>

      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="Saas Logo" height={60} width={60} />
            <Menu className="h-5 w-5 md:hidden" />
            <nav className="hidden md:flex gap-6 text-black/600 items-center">
              <a href="">About</a>
              <a href="">Features</a>
              <a href="">Customers</a>
              <a href="">Updates</a>
              <a href="">Product</a>
              <button className="bg-blue-400 text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking">
               <a href='https://play.google.com/store/apps/details?id=rw.rinda.rinda_mobile_app&hl=en'>Get Started</a>
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header