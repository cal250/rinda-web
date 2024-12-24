'use client'

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Register up to 3 devices",
      "Encrypted storage for device details",
      "Basic theft prevention tools",
      "Access to community resources",
      "Limited security tips",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 10,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Register up to 10 devices",
      "Enhanced encrypted storage",
      "Real-time GPS tracking",
      "Remote lock and wipe functionality",
      "Priority customer support",
      "Secure data backup (up to 50GB)",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 20,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Unlimited device registration",
      "Comprehensive encrypted storage",
      "Advanced theft prevention measures",
      "Dedicated account manager",
      "Secure data backup (up to 200GB)",
      "Custom analytics for device insights",
      "API access for integration",
      "24/7 advanced support",
    ],
  },
];


import Check from "@/assets/check.svg";
import React from 'react'
import { twMerge } from 'tailwind-merge';
import {motion} from 'framer-motion'

const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="heading">
          <h2 className="title">Pricing</h2>
          <p className="paragraph mt-5">
            Free forever. Upgrade for unlimited tasks, better security, and exclusive features.
          </p>
        </div>

        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map((menu) => (
            <div
              key={menu.title}
              className={twMerge(
                "card",
                menu.inverse === true && " bg-blue-600 text-white"
              )}
            >
              <div className="flex justify-between">
                <h3 className={twMerge("text-lg font-bold text-black/50", menu.inverse == true && 'text-white/60')}>
                  {menu.title}
                </h3>
                {menu.popular === true && (
                  <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                    <motion.span 
                    animate={{backgroundPositionX: '-100%'}} 
                    transition={{
                      repeat: Infinity, 
                      ease: "linear", 
                      repeatType: "loop", 
                      duration: 1
                      }}  
                    className="span [background-size:200%] text-transparent bg-clip-text font-medium ">
                      Popular
                    </motion.span>
                  </div>
                )}
              </div>
              <div className="flex items-baseline gap-1 mt-[30px]">
                <span className="text-4xl font-bold tracking-tighter leading-none">
                  ${menu.monthlyPrice}
                </span>
                <span className="tracking-tight font-bold text-black/50">
                  /month
                </span>
              </div>
              <button className={twMerge("btn btn-primary w-full mt-[30px]", menu.inverse === true && 'text-black bg-white')}>
                {menu.buttonText}
              </button>
              <ul className="flex flex-col gap-5 mt-8">
                {menu.features.map((feature, index) => (
                  <li key={index} className="text-sm flex items-center gap-4">
                    <Check className="h-6 w-6" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing
