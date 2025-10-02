
import React from "react";
const Footer = () => {
  return <footer className="w-full bg-white py-0">
      <div className="section-container">
        <div className="text-center">
          <p className="text-gray-600 text-sm mb-2">
            © Mozilla JUET Club 2025. All rights reserved.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-pulse-500 hover:underline text-sm">
              GitHub
            </a>
            <span className="text-gray-400">•</span>
            <a href="https://www.linkedin.com/company/mozilla-phoenix-club/" target="_blank" rel="noopener noreferrer" className="text-pulse-500 hover:underline text-sm">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
