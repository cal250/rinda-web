'use client'

import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";
import React from 'react'
import {motion} from 'framer-motion'

const testimonials = [
  {
    text: "SecureDevice Registry is a game-changer! It made registering and protecting my devices incredibly easy. Highly recommended for anyone who values their digital assets.",
    imageSrc: avatar1.src,
    name: "Alex Johnson",
    username: "@alextechsavvy",
  },
  {
    text: "The GPS tracking and remote wipe features are lifesavers. I recovered my misplaced laptop within hours thanks to this app.",
    imageSrc: avatar2.src,
    name: "Maria Gonzalez",
    username: "@mariag_secure",
  },
  {
    text: "I love how all my device details are securely stored in one place. The encryption gives me peace of mind.",
    imageSrc: avatar3.src,
    name: "Ethan Brown",
    username: "@ethanb_safe",
  },
  {
    text: "The stolen device reporting system is seamless and efficient. I felt supported during a stressful time when my phone was stolen.",
    imageSrc: avatar4.src,
    name: "Sophia Davis",
    username: "@sophiad_safety",
  },
  {
    text: "This app is perfect for families. I registered all our devices and feel secure knowing they are protected.",
    imageSrc: avatar5.src,
    name: "Liam Wilson",
    username: "@liamfamilytech",
  },
  {
    text: "The cloud backup feature saved me when I lost my tablet. I restored my data within minutes. Absolutely fantastic!",
    imageSrc: avatar6.src,
    name: "Olivia Martin",
    username: "@oliviam_restore",
  },
  {
    text: "The security tips provided are incredibly insightful. I’ve learned so much about safeguarding my devices.",
    imageSrc: avatar7.src,
    name: "Noah Thompson",
    username: "@noahtechsecure",
  },
  {
    text: "As a business owner, the ability to manage multiple devices securely is invaluable. Highly recommend for professionals!",
    imageSrc: avatar8.src,
    name: "Emma Walker",
    username: "@emmaprotects",
  },
  {
    text: "I appreciate the community support feature. It’s great to learn from others and share security best practices.",
    imageSrc: avatar9.src,
    name: "Mason Roberts",
    username: "@masonsecuretech",
  },
];




const firstColumn = testimonials.slice(0,3)
const secondColumn = testimonials.slice(3,6)
const thirdColumn = testimonials.slice(6,9)

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number
}) => (
  <div className={props.className}>
    <motion.div animate={{
      translateY: "-50%"
    }}
    transition={{
      repeat: Infinity,
      ease: "linear",
      repeatType: "loop",
      duration: props.duration || 10,
      
    }}
     className="flex flex-col gap-6 pb-6 ">
      {[...new Array(2)].fill(0).map((_, index) => (
        <React.Fragment key={index}>
          {props.testimonials.map((index) => (
            <div key={index.text} className="card">
              <div>{index.text}</div>
              <div className="flex items-center gap-2 mt-5">
                <Image
                  src={index.imageSrc}
                  alt={index.name}
                  className="h-10 w-10 rounded-full"
                  width={40}
                  height={40}
                />
              </div>
              <div className="flex flex-col">
                <div className="font-medium tracking-tight leading-5">
                  {index.name}
                </div>
                <div className="leading-5 tracking-tight">{index.username}</div>
              </div>
            </div>
          ))}
        </React.Fragment>
      ))}
    </motion.div>
  </div>
);

const Testimonials = () => {
  return (
    <section className="bg-white">
      <div className="container">
        <div className="title">
          <div className="flex justify-center">
            <div className="tag">Testimonials</div>
          </div>
          <h2 className="title mt-5">What our users say</h2>
          <p className="paragraph mt-5">
            From intuitive design to powerful features, our app has become an
            essential tool for users around the world.
          </p>
        </div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_75%,transparent)] max-h-[738px] overflow-hidden mt-10">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
}

export default Testimonials
