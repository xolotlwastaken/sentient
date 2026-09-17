import React, { useState } from 'react';

const NAV_LINKS = ['Labs', 'Studio', 'Openings', 'Shop'];

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-20 px-6 sm:px-10 py-5 sm:py-6 flex flex-row justify-between items-center bg-transparent">
        {/* Logo (Left side) - Elegant Serif Wordmark */}
        <a href="#" className="flex flex-row items-center gap-2.5 cursor-pointer group">
          <span className="font-serif text-[24px] sm:text-[28px] tracking-[-0.01em] text-neutral-950 font-normal select-none group-hover:opacity-80 transition-opacity">
            Sentient&reg;
          </span>
          <span className="text-[20px] sm:text-[24px] text-neutral-950 select-none font-normal leading-none mb-0.5 group-hover:rotate-45 transition-transform duration-300">
            &#10022;
          </span>
        </a>

        {/* Desktop Nav Links (Center) */}
        <nav className="hidden md:flex flex-row items-center text-[20px] sm:text-[22px] font-normal tracking-[-0.015em] text-neutral-900">
          {NAV_LINKS.map((link, index) => (
            <React.Fragment key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="hover:opacity-60 transition-opacity duration-200"
              >
                {link}
              </a>
              {index < NAV_LINKS.length - 1 && (
                <span className="text-neutral-400/80 font-serif select-none">,&nbsp;</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Desktop CTA (Right) */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="text-[20px] sm:text-[22px] font-normal tracking-[-0.015em] text-neutral-900 underline underline-offset-4 decoration-neutral-300 hover:decoration-black hover:opacity-60 transition-all duration-200"
          >
            Get in touch
          </a>
        </div>

        {/* Hamburger Button (Visible below md) */}
        <button
          type="button"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] z-30 focus:outline-none"
        >
          <span
            className={`w-6 h-[2px] bg-neutral-950 transition-all duration-300 origin-center ${
              isMobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-neutral-950 transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-neutral-950 transition-all duration-300 origin-center ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          />
        </button>
      </header>

      {/* Full screen Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 z-[15] bg-white/95 backdrop-blur-md transition-opacity duration-300 md:hidden flex flex-col justify-center items-center px-8 ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center gap-7 text-2xl sm:text-3xl text-neutral-950 font-normal tracking-tight">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:opacity-60 transition-opacity py-2 font-serif text-3xl"
            >
              {link}
            </a>
          ))}
          <div className="w-12 h-[1px] bg-neutral-200 my-2" />
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="underline underline-offset-6 hover:opacity-60 transition-opacity py-2 text-[#1C2E1E] text-xl"
          >
            Get in touch
          </a>
        </div>
      </div>
    </>
  );
};
