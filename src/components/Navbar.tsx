import React, { useState } from 'react';

const NAV_LINKS = ['Labs', 'Studio', 'Openings', 'Shop'];

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-10 px-5 sm:px-8 py-4 sm:py-5 flex flex-row justify-between items-center bg-transparent">
        {/* Logo (Left side) */}
        <a href="#" className="flex flex-row items-center gap-3 cursor-pointer group">
          <span className="text-[21px] sm:text-[26px] tracking-tight text-black font-medium select-none">
            Sentient&reg;
          </span>
          <span className="text-[25px] sm:text-[30px] text-black select-none tracking-[-0.02em] font-medium leading-none mb-1">
            &#10022;
          </span>
        </a>

        {/* Desktop Nav Links (Center) */}
        <nav className="hidden md:flex flex-row items-center text-[23px] text-black">
          {NAV_LINKS.map((link, index) => (
            <React.Fragment key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="hover:opacity-60 transition-opacity"
              >
                {link}
              </a>
              {index < NAV_LINKS.length - 1 && (
                <span className="opacity-40">,&nbsp;</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Desktop CTA (Right) */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="text-[23px] text-black underline underline-offset-2 hover:opacity-60 transition-opacity"
          >
            Get in touch
          </a>
        </div>

        {/* Hamburger Button (Visible below md) */}
        <button
          type="button"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px] z-30 focus:outline-none"
        >
          <span
            className={`w-6 h-[2px] bg-black transition-all duration-300 origin-center ${
              isMobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-black transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-black transition-all duration-300 origin-center ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          />
        </button>
      </header>

      {/* Full screen Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 z-[9] bg-white/95 backdrop-blur-sm transition-opacity duration-300 md:hidden flex flex-col justify-center items-center px-8 ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center gap-6 text-2xl sm:text-3xl text-black font-medium">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:opacity-60 transition-opacity py-2"
            >
              {link}
            </a>
          ))}
          <div className="w-12 h-[1px] bg-black/20 my-2" />
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="underline underline-offset-4 hover:opacity-60 transition-opacity py-2 text-[#1C2E1E]"
          >
            Get in touch
          </a>
        </div>
      </div>
    </>
  );
};
