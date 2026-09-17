import React from 'react';
import { Navbar } from './components/Navbar';
import { BackgroundVideo } from './components/BackgroundVideo';
import { HeroSection } from './components/HeroSection';

export const App: React.FC = () => {
  return (
    <div className="relative bg-white text-neutral-900 font-sans selection:bg-[#EAECE9] selection:text-[#1C2E1E] antialiased overflow-x-hidden flex flex-col lg:block lg:min-h-screen">
      {/* Interactive Navigation */}
      <Navbar />

      {/* Background Video Component (with Native Scrubbing) */}
      <BackgroundVideo />

      {/* Content Layout Layer & Hero Section */}
      <HeroSection />
    </div>
  );
};

export default App;
