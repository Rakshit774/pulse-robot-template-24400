
import React from "react";

const SpecsSection = () => {
  return (
    <section className="w-full py-6 sm:py-10 bg-white" id="specifications">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Header with badge and line */}
        <div className="flex items-center gap-4 mb-8 sm:mb-16">
          <div className="flex items-center gap-4">
            <div className="pulse-chip">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">2</span>
              <span>Events</span>
            </div>
          </div>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>
        
        {/* Main content with text mask image - responsive text sizing */}
        <div className="max-w-5xl pl-4 sm:pl-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display leading-tight mb-6">
            <span className="block bg-clip-text text-transparent bg-[url('/text-mask-image.jpg')] bg-cover bg-center">
              Hacktoberfest 2025
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 mb-6 max-w-3xl">
            Join us for Hacktoberfest 2025! Contribute to open source projects, win exciting prizes, and connect with fellow developers. Whether you're a beginner or experienced, everyone is welcome.
          </p>
          <a 
            href="#get-access" 
            className="inline-flex items-center justify-center group" 
            style={{
              backgroundColor: '#FE5C02',
              borderRadius: '1440px',
              boxSizing: 'border-box',
              color: '#FFFFFF',
              cursor: 'pointer',
              fontSize: '14px',
              lineHeight: '20px',
              padding: '16px 24px',
              border: '1px solid white',
            }}
          >
            Participate Now
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;
