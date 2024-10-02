import React from 'react'
import logo from '@/assets/logosaas.png'
import Image from 'next/image'
import SocialX from '@/assets/social-x.svg'
import Insta from '@/assets/social-insta.svg'
import LinkedIn from '@/assets/social-linkedin.svg'
import Pin from '@/assets/social-pin.svg'
import Youtube from '@/assets/social-youtube.svg'

const Footer = () => {
  return (
    <footer className='bg-black text-[#BCBCBC] text-sm py-10 text-center'>
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:blur before:h-full before:w-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FDBFE)] before:absolute">
          <Image src={logo} height={40} alt="SaaS logo" className='relative' />
        </div>
        <nav className='flex flex-col md:flex-row md:justify-center gap-6 mt-6'>
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Customers</a>
          <a href="#">Pricing</a>
          <a href="#">Help</a>
          <a href="#">Careers</a>
        </nav>

        <div className='flex justify-center gap-6 mt-6'>
          <SocialX/> 
          <Insta/>          
          <LinkedIn/>
          <Pin />        
          <Youtube/>
          </div>

          <p className='mt-6'>&copy; 2024, Lotus Company Inc.</p>
      </div>
    </footer>
  );
}

export default Footer
