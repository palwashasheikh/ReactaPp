import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#295983] py-12 text-white">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-4 gap-8">
        {/* Krachtdak section with logo */}
        <div>
          <div className="flex items-center">
            <h3 className="text-2xl font-bold mb-1">Krachtdak</h3>
            <img
              src="/Vector.png"
              alt="Krachtdak Logo"
              className="ml-1 w-7 h-7 bg-white p-1"
            />
          </div>
          <p className="mt-2">help@krachtak.com</p>
          <p >+1234 456 678 89</p>
        </div>

        {/* Links section */}
        <div>
          <h3 className="font-semibold mb-4">Links</h3>
          <ul>
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
          <h3 className="font-semibold mb-4">Legal</h3>
          <ul>
            <li><a href="/" className="hover:underline">Terms Of Use</a></li>
            <li><a href="/" className="hover:underline">Privacy Policy</a></li>
            <li><a href="/" className="hover:underline">Cookie Policy</a></li>
          </ul>
        </div>

        {/* Knowledge Base section */}
        <div>
          <h3 className="font-semibold mb-4">Knowledge Base</h3>
          <ul>
            <li><a href="/" className="hover:underline">What Is A Good Solar Panel?</a></li>
            <li><a href="/" className="hover:underline">What Is A Good Brand Of Solar Panels?</a></li>
            <li><a href="/" className="hover:underline">Type Of Inverters</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-sm">
        <p>Copyright © 2024 Krachtdak. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
