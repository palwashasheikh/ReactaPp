import React from "react";

const ContactForm = () => {
  return (
    <div
      className="bg-cover bg-center py-20"
      style={{ backgroundImage: 'url("/longimage.png")' }}
    >
      <div className="md:px-24 px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left side text */}
        <div className="flex flex-col justify-start">
          <h2 className="text-white text-3xl md:text-6xl font-medium mb-7 !leading-[68px]">
            Wilt u advies<br/> of een offerte? <br/> Neem dan <br/> contact met <br /> ons op!
          </h2>
          <p className="text-white mb-8 text-lg">
            Kies voor een kwaliteit installatie van <br/> Krachtdak
          </p>
        </div>

        {/* Right side form */}
        <div>
          <form className="bg-[#FFFFFF33] p-8 rounded-lg shadow-lg grid grid-cols-1 sm:grid-cols-2 gap-6 border border-[rgba(255,255,255,0.2)]">
            <input
              type="text"
              placeholder="Voornaam"
              className="p-4 bg-[#FFFFFF33] text-[#FFFFFF] placeholder-white/50 rounded-lg w-full focus:outline-none border border-white"
            />
            <input
              type="text"
              placeholder="Achternaam"
              className="p-4 bg-[#FFFFFF33] text-[#FFFFFF] placeholder-white/50 rounded-lg w-full focus:outline-none border border-white"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-4 bg-[#FFFFFF33] text-[#FFFFFF] placeholder-white/50 rounded-lg w-full focus:outline-none border border-white"
            />
            <input
              type="text"
              placeholder="Telefoonnummer"
              className="p-4 bg-[#FFFFFF33] text-[#FFFFFF] placeholder-white/50 rounded-lg w-full focus:outline-none border border-white"
            />
            <input
              type="text"
              placeholder="Postcode"
              className="p-4 bg-[#FFFFFF33] text-[#FFFFFF] placeholder-white/50 rounded-lg w-full focus:outline-none sm:col-span-2 border border-white"
            />
            <p className="text-white sm:col-span-2">
              Waarvoor wilt u advies ontvangen?
            </p>
            <div className="sm:col-span-2 flex items-center space-x-4">
              <label className="text-white text-lg">
                <input type="checkbox" className="mr-2" />
                Zonnepanelen
              </label>
              <label className="text-white">
                <input type="checkbox" className="mr-2" />
                Laadpalen
              </label>
              <label className="text-white">
                <input type="checkbox" className="mr-2" />
                Thuisbatterij
              </label>
            </div>
            <textarea
              placeholder="Opmerkingen"
              className="p-4 bg-[#FFFFFF33] text-white placeholder-white/50 rounded-lg w-full focus:outline-none sm:col-span-2 border border-white"
            />
            <button
              type="submit"
              className="bg-[#FFAB10] text-white font-semibold rounded-lg py-3 px-6 w-full sm:col-span-2"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
