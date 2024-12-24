'use client'

import React, { useRef } from 'react'
import ArrowIcon from '@/assets/arrow-right.svg'
import cog from '@/assets/cog.png'
import cylinder from '@/assets/cylinder.png'
import noodle from '@/assets/noodle.png'
import {motion, useScroll, useTransform,} from 'framer-motion'

const Hero = () => {

  const heroRef = useRef(null)
  const {scrollYProgress} = useScroll({
    target: heroRef,
    offset: ['start end', 'end start']
  })
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])

  // useMotionValueEvent(scrollYProgress, 'change', (latestValue) => console.log(latestValue)) to give the parallax effect

  return (
    <section ref={heroRef} className="pt-8 pb-20 gradient md:pt-5 md:pb-10 overflow-x-clip">
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="tag">Beta version</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E50] text-transparent bg-clip-text mt-6">
            Secure Your Devices Now
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
            Protect, track, and recover your devices with a cutting-edge solution. 
          Register your gadgets, secure your data, and minimize the risk of theft 
          through advanced technology and community support.{" "}
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary"><a target='blank' href='https://play.google.com/store/apps/details?id=rw.rinda.rinda_mobile_app&hl=en'>Get Started</a></button>
              <button className="btn btn-text gap-1">
                <a target='blank' href='https://play.google.com/store/apps/details?id=rw.rinda.rinda_mobile_app&hl=en'>View Demo</a>
                <span>
                  <ArrowIcon className="h-5 w-5" />
                </span>
              </button>
            </div>
          </div>

          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <motion.img
              src={cog.src}
              alt="cog image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:left-6"
              animate={{ translateY: [-30, 30] }}
              transition={{ repeat: Infinity, repeatType: "mirror", duration: 3, ease: 'easeInOut' }}
            />
            <motion.img
              src={cylinder.src}
              width={220}
              height={220}
              alt="cylinder"
              className="hidden md:block -top-8 -left-32 md:absolute"
              style={{
                translateY: translateY,
              }}
            />
            <motion.img
              src={noodle.src}
              alt="noodle"
              width={220}
              className=" hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]"
              style={{
                rotate: 30,
                translateY: translateY,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero
