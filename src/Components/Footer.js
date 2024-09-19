import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blueish-80 py-12 text-white">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-4 sm:gap-1 gap-8">
        {/* Krachtdak section with logo */}
        <div>
          <div className="flex items-center mb-5">            
            <img
              src="/logo.svg"
              alt="Krachtdak Logo"
              className=""
            />
          </div>
          <p className="mt-2 flex justify-start items-center mb-3"><img src="/help.png" alt="Help" className="mr-1.5" /> help@krachtak.com</p>
          <p className="mt-2 flex justify-start items-center"><img src="/phone.png" alt="Phone" className="mr-1.5" /> +1234 456 678 89</p>
        </div>

        {/* Links section */}
        <div>
          <h3 className="font-semibold mb-4 text-2xl">Links</h3>
          <ul className="flex flex-col space-y-3">
            <li><a href="/" className="hover:underline">Over Krachtdak</a></li>
            <li><a href="/" className="hover:underline">Algemene Voorwaarden</a></li>
            <li><a href="/" className="hover:underline">Ziektek</a></li>
            <li><a href="/" className="hover:underline">Projecten</a></li>
            <li><a href="/" className="hover:underline">Zonnepanelen</a></li>
            <li><a href="/" className="hover:underline">Autoladers</a></li>
            <li><a href="/" className="hover:underline">Thuisbatterij</a></li>
          </ul>
        </div>

        {/* Legal section */}
        <div>
          <h3 className="font-semibold mb-4 text-2xl">Legal</h3>
          <ul className="flex flex-col space-y-3">
            <li><a href="/" className="hover:underline">Terms Of Use</a></li>
            <li><a href="/" className="hover:underline">Privacy Policy</a></li>
            <li><a href="/" className="hover:underline">Cookie Policy</a></li>
          </ul>
        </div>

        {/* Knowledge Base section */}
        <div>
          <h3 className="font-semibold mb-4 text-2xl">Knowledge Base</h3>
          <ul className="flex flex-col space-y-3">
            <li><a href="/" className="hover:underline">What Is A Good Solar Panel?</a></li>
            <li><a href="/" className="hover:underline">What Is A Good Brand Of Solar Panels?</a></li>
            <li><a href="/" className="hover:underline">Type Of Inverters</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-sm border-t border-white/30 pt-10 w-2/3 mx-auto">
        <p>Copyright © 2024 Krachtdak. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
