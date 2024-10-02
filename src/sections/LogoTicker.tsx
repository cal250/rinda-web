'use client'

import React from 'react'
import acmeLogo from '@/assets/logo-acme.png'
import quantum from '@/assets/logo-quantum.png'
import echo from '@/assets/logo-echo.png'
import pulse from '@/assets/logo-pulse.png'
import celestial from '@/assets/logo-celestial.png'
import apex from '@/assets/logo-apex.png'
import Image from 'next/image'
import {motion} from 'framer-motion'

const LogoTicker = () => {
  return (
    <section>
      <div className="py-8 bg-white md:py-12">
        <div className="container">
          <div className="flex overflow-hidden logo-image">
            <motion.div className="flex gap-14 flex-none pr-14" animate={{translateX: "-50%"}} transition={{duration: 20, repeat: Infinity, ease: "linear", repeatType: "loop"}} >
              <Image src={acmeLogo} alt="acme" className="logo-ticker" />
              <Image src={quantum} alt="quantum" className="logo-ticker" />
              <Image src={echo} alt="echo" className="logo-ticker" />
              <Image src={pulse} alt="pulse" className="logo-ticker" />
              <Image src={celestial} alt="celestial" className="logo-ticker" />
              <Image src={apex} alt="apex" className="logo-ticker" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LogoTicker
