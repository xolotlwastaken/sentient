import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

const SERVICE_OPTIONS = ['Brand', 'Digital', 'Campaign', 'Other'];

export const ServiceSelector: React.FC = () => {
  const [services, setServices] = useState<string[]>([]);

  const toggleService = (option: string) => {
    setServices((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  return (
    <div className="w-full max-w-2xl">
      <div className="mb-6">
        <h3 className="font-serif text-[26px] sm:text-[30px] font-normal tracking-[-0.02em] text-neutral-950 mb-1 leading-snug">
          What sort of service?
        </h3>
        <p className="text-sm sm:text-base text-[#6E7B6E] font-normal tracking-[-0.005em]">
          Select all that apply
        </p>
      </div>

      {/* Service Pills flex wrap container */}
      <div className="flex flex-wrap gap-2.5 sm:gap-3 mb-6">
        {SERVICE_OPTIONS.map((option) => {
          const isSelected = services.includes(option);
          return (
            <motion.button
              key={option}
              type="button"
              onClick={() => toggleService(option)}
              whileHover={{ scale: 1.025 }}
              whileTap={{ scale: 0.97 }}
              className={`flex items-center gap-2 px-6 py-2.5 sm:py-3 rounded-full text-[15px] sm:text-[16px] font-medium tracking-[-0.01em] transition-all duration-200 cursor-pointer select-none ${
                isSelected
                  ? 'bg-[#142316] text-white shadow-lg shadow-emerald-950/20 border border-[#142316]'
                  : 'bg-white/90 backdrop-blur-xs text-[#1C2E1E] border border-[#E3E6E3] hover:border-[#1C2E1E]/30 hover:bg-[#F2F5F2]'
              }`}
            >
              <AnimatePresence>
                {isSelected && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.3, y: -6 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.3 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 22 }}
                    className="inline-flex items-center justify-center -ml-0.5"
                  >
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </motion.span>
                )}
              </AnimatePresence>
              <span>{option}</span>
            </motion.button>
          );
        })}
      </div>

      {/* Contingent Feedback Status Banner */}
      <AnimatePresence mode="wait">
        {services.length === 0 ? (
          <motion.div
            key="empty-state"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 0.6, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            className="text-xs text-[#738273] italic tracking-wide"
          >
            Please click to select services above.
          </motion.div>
        ) : (
          <motion.div
            key="active-state"
            initial={{ opacity: 0, height: 0, y: 8 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -8 }}
            transition={{ type: 'spring', stiffness: 320, damping: 26 }}
            className="overflow-hidden"
          >
            <div className="bg-[#FAFBF9]/95 backdrop-blur-sm border border-[#E2E6E2] rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 max-w-xl shadow-xs">
              <div className="text-sm sm:text-[15px] text-[#1C2E1E] font-normal leading-relaxed">
                Ready to inquire about:{' '}
                <span className="font-semibold text-neutral-950 underline decoration-[#4D6D47]/40 underline-offset-4">
                  {services.join(', ')}
                </span>
              </div>
              <button
                type="button"
                className="inline-flex items-center gap-2 text-[#344E30] hover:text-black uppercase text-[11px] font-semibold tracking-[0.14em] px-3.5 py-1.5 rounded-full bg-[#EBF0EA] hover:bg-[#E1E8E0] transition-all duration-200 whitespace-nowrap cursor-pointer"
              >
                <span>Let's Go</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.2]" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
