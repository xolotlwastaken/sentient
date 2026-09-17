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
      <h3 className="text-2xl font-medium tracking-tight mb-2 text-black">
        What sort of service?
      </h3>
      <p className="opacity-85 text-[#738273] mb-8">Select all that apply</p>

      {/* Service Pills flex wrap container */}
      <div className="flex flex-wrap gap-3 mb-6">
        {SERVICE_OPTIONS.map((option) => {
          const isSelected = services.includes(option);
          return (
            <motion.button
              key={option}
              type="button"
              onClick={() => toggleService(option)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-base font-medium transition-all duration-200 cursor-pointer select-none ${
                isSelected
                  ? 'bg-[#1C2E1E] text-white shadow-md shadow-emerald-950/5 transform'
                  : 'bg-white text-[#1C2E1E] border border-[#F1F3F1] hover:bg-[#F1F3F1]/55'
              }`}
            >
              <AnimatePresence>
                {isSelected && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.3, y: -6 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.3 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="inline-flex items-center justify-center"
                  >
                    <Check className="w-4 h-4 stroke-[2.5]" />
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
            animate={{ opacity: 0.5, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            className="opacity-50 italic text-xs text-[#738273]"
          >
            Please click to select services above.
          </motion.div>
        ) : (
          <motion.div
            key="active-state"
            initial={{ opacity: 0, height: 0, y: 8 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="overflow-hidden"
          >
            <div className="bg-[#FAFBF9] border border-[#EAECE9] rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 max-w-xl">
              <div className="text-sm sm:text-base text-[#1C2E1E] font-normal leading-snug">
                Ready to inquire about:{' '}
                <span className="font-semibold text-black">
                  {services.join(', ')}
                </span>
              </div>
              <button
                type="button"
                className="inline-flex items-center gap-2 text-[#4D6D47] uppercase text-xs font-semibold tracking-wider hover:opacity-80 transition-opacity whitespace-nowrap cursor-pointer"
              >
                <span>Let's Go</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
