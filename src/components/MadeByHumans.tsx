
import React from "react";
const MadeByHumans = () => {
  return <section id="made-by-humans" className="w-full bg-white py-0">
      <div className="section-container opacity-0 animate-on-scroll pb-2">
        {/* Removed the pulse-chip button/element that was here */}
        
        <div className="w-full rounded-2xl sm:rounded-3xl overflow-hidden relative mt-6 sm:mt-8">
          <div className="bg-no-repeat bg-cover bg-center p-6 sm:p-8 min-h-[450px] sm:min-h-[500px] flex flex-col justify-between rounded-b-2xl sm:rounded-b-3xl" style={{
          backgroundImage: "url('/background-section3.png')"
        }}>
            <div className="flex items-center text-white">
              <img src="/mozilla.jpg" alt="Mozilla Logo" className="h-10 sm:h-8 w-auto mr-3 invert" />
              <span className="text-white text-xl font-medium">
            </span>
            </div>
            
            <div className="max-w-3xl mb-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-white font-bold mb-4">
                Join Our Community
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6">
                Be part of a vibrant community where students collaborate, contribute to real-world projects, and learn together. Share ideas, work on exciting projects, and grow your skills alongside passionate peers.
              </p>
              <a 
                href="https://www.instagram.com/mpcjuet/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center group" 
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '1440px',
                  boxSizing: 'border-box',
                  color: '#FE5C02',
                  cursor: 'pointer',
                  fontSize: '14px',
                  lineHeight: '20px',
                  padding: '16px 24px',
                  border: '1px solid white',
                }}
              >
                Be a Part of the Community
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default MadeByHumans;
