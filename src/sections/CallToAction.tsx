'use client'

import React, { useRef } from 'react'
import Arrow from '@/assets/arrow-right.svg'
import star from '@/assets/star.png'
import spring from '@/assets/spring.png'
import {motion, useScroll, useTransform} from 'framer-motion'

const CallToAction = () => {

  const sectionRef = useRef(null)

  const {scrollYProgress} = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })

  const translateY = useTransform(scrollYProgress, [0,1], [150, -150])
  return (
    <section ref={sectionRef} className='bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip'>
      <div className='container'>
        <div className='heading relative'>
          <h2 className='title'>Sign up for free today</h2>
          <p className='paragraph mt-5'>Celebrate the joy of accomplishment with an app designed to track your Devices and Teach you The Proper Usage 
            Of The Equipment.</p>

          <motion.img src={star.src} alt='star' width={360} className='absolute -left-[350px] -top-[137px]' style={{translateY}} />
          <motion.img src={spring.src} alt='spring' width={360} className='absolute -right-[331px] -top-[19px]' style={{translateY}} />
        </div>

        <div className='flex gap-2 mt-10 justify-center'>
          <button className='btn btn-primary'>Get Started</button>
          <button className='btn btn-text gap-1'>
            <span>Learn more</span>
            <Arrow className='h-5 w-5'/>
            </button>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
