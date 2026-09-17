import React from 'react';
import { motion } from 'framer-motion';
import { useTypewriter } from '../hooks/useTypewriter';
import { ServiceSelector } from './ServiceSelector';

export const HeroSection: React.FC = () => {
  const { displayed, done } = useTypewriter("we'd love to\nhear from you!", 38, 600);

  return (
    <div className="relative z-10 flex flex-col order-first lg:order-none w-full bg-white lg:bg-transparent pb-12 lg:pb-0 lg:min-h-screen">
      <main
        id="spade-hero"
        className="w-full max-w-7xl mx-auto px-6 sm:px-10 py-16 sm:py-20 flex-1 flex flex-col justify-center"
      >
        {/* Headline with Typewriter Drop-in in High-End Display Serif */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <h1 className="font-serif text-5xl sm:text-7xl lg:text-[86px] font-normal tracking-[-0.025em] text-neutral-950 leading-[1.04] mb-7 select-none w-full whitespace-pre-wrap">
            {displayed}
            {!done && (
              <span className="inline-block w-[2.5px] h-[0.9em] bg-neutral-950 align-baseline ml-1 animate-blink" />
            )}
          </h1>
        </motion.div>

        {/* Secondary Description Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-lg sm:text-[20px] text-[#525E52] leading-[1.65] font-normal mb-12 max-w-xl tracking-[-0.01em]">
            Whether you have questions, feedback, <br className="hidden sm:inline" /> drop us a message and we'll get back to you as soon as possible.
          </p>
        </motion.div>

        {/* Interactive Multi-Select Service Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          <ServiceSelector />
        </motion.div>
      </main>
    </div>
  );
};
