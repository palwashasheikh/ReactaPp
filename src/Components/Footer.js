import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blueish-80 py-8 text-white">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-4 gap-8">

        {/* Krachtdak section with larger logo and text aligned left */}
        <div className="sm:col-span-1 flex flex-col items-start">
          <div className="flex items-center mb-4">
            <img src="/logo.svg" alt="Krachtdak Logo" className="w-24" />
          </div>
          <p className="flex items-center text-lg mb-2">
            <img src="/help.png" alt="Help" className="mr-2 w-5 h-5" /> help@krachtak.com
          </p>
          <p className="flex items-center text-lg">
            <img src="/phone.png" alt="Phone" className="mr-2 w-5 h-5" /> +1234 456 678 89
          </p>
        </div>

        {/* Links and Legal sections in the same row */}
        <div className="sm:col-span-3 flex flex-wrap justify-between">
          <div className="text-left mb-4 sm:mb-0">
            <h3 className="font-semibold text-2xl">Links</h3>
            <ul className="space-y-2 mt-3">
              <li><a href="/" className="hover:underline">Over Krachtdak</a></li>
              <li><a href="/" className="hover:underline">Algemene Voorwaarden</a></li>
              <li><a href="/" className="hover:underline">Ziektek</a></li>
              <li><a href="/" className="hover:underline">Projecten</a></li>
              <li><a href="/" className="hover:underline">Zonnepanelen</a></li>
              <li><a href="/" className="hover:underline">Autoladers</a></li>
              <li><a href="/" className="hover:underline">Thuisbatterij</a></li>
            </ul>
          </div>

          <div className="text-left">
            <h3 className="font-semibold text-2xl">Legal</h3>
            <ul className="space-y-2 mt-3">
              <li><a href="/" className="hover:underline">Terms Of Use</a></li>
              <li><a href="/" className="hover:underline">Privacy Policy</a></li>
              <li><a href="/" className="hover:underline">Cookie Policy</a></li>
            </ul>
          </div>

          {/* Knowledge Base section */}
          <div className="text-left mt-4 sm:mt-0">
            <h3 className="font-semibold text-2xl">Knowledge Base</h3>
            <ul className="space-y-2 mt-3">
              <li><a href="/" className="hover:underline">What Is A Good Solar Panel?</a></li>
              <li><a href="/" className="hover:underline">What Is A Good Brand Of Solar Panels?</a></li>
              <li><a href="/" className="hover:underline">Type Of Inverters</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 text-center text-sm border-t border-white/30 pt-8">
        <p>Copyright © 2024 Krachtdak. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
