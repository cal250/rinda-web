'use client'

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
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
                menu.inverse === true && "border-black bg-black text-white"
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
