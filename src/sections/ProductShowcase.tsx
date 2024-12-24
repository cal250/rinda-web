'use client'

import React, { useRef } from 'react'
import product from '@/assets/product-image.png'
import pyramid from '@/assets/pyramid.png'
import tube from '@/assets/tube.png'
import Image from 'next/image'
import {motion, useScroll, useTransform} from 'framer-motion'

const ProductShowcase = () => {

  const sectionRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

    const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);


  return (
    <section ref={sectionRef} className="product py-24 overflow-x-clip">
    <div className="container">
      <div className="heading">
        <div className="flex justify-center">
          <div className="tag">Protect Devices</div>
        </div>
        <h2 className="title mt-5">Empowering Device Security</h2>
        <p className="paragraph mt-5">
          Seamlessly register, secure, and recover your digital devices with advanced technology, ensuring safety and peace of mind.
        </p>
      </div>
  
      <div className="relative">
        <Image src={product} alt="product" className="mt-10" />
        <motion.img
          src={pyramid.src}
          className="hidden md:block absolute -right-36 -top-32"
          alt="pyramid"
          height={262}
          width={262}
          style={{ translateY }}
        />
        <motion.img
          src={tube.src}
          alt="tube"
          className="hidden md:block absolute bottom-24 -left-36"
          height={248}
          width={248}
          style={{ translateY }}
        />
      </div>
    </div>
  </section>
  
  )
}

export default ProductShowcase
