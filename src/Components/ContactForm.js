import React from "react";

const ContactForm = () => {
  return (
    <div
      className="bg-cover bg-center py-12"
      style={{ backgroundImage: 'url("/longimage.png")' }}
    >
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left side text */}
        <div className="flex flex-col justify-center">
          <h2 className="text-white text-3xl font-bold mb-6">
            Wilt u advies of een offerte? Neem dan contact met ons op!
          </h2>
          <p className="text-white mb-8">
            Kies voor een kwaliteit installatie van Krachtdak
          </p>
        </div>

        {/* Right side form */}
        <div>
          <form className="bg-[#FFFFFF33] p-8 rounded-lg shadow-lg grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Voornaam"
              className="p-4 bg-[#FFFFFF33] text-[#FFFFFF] rounded-lg w-full focus:outline-none"
            />
            <input
              type="text"
              placeholder="Achternaam"
              className="p-4 bg-[#FFFFFF33] text-[#FFFFFF] rounded-lg w-full focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-4 bg-[#FFFFFF33] text-[#FFFFFF] rounded-lg w-full focus:outline-none"
            />
            <input
              type="text"
              placeholder="Telefoonnummer"
              className="p-4 bg-[#FFFFFF33] text-[#FFFFFF] rounded-lg w-full focus:outline-none"
            />
            <input
              type="text"
              placeholder="Postcode"
              className="p-4 bg-[#FFFFFF33] text-[#FFFFFF] rounded-lg w-full focus:outline-none sm:col-span-2"
            />
            <p className="text-white sm:col-span-2">
              Waarvoor wilt u advies ontvangen?
            </p>
            <div className="sm:col-span-2 flex items-center space-x-4">
              <label className="text-white">
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
              className="p-4 bg-[#FFFFFF33] text-black rounded-lg w-full focus:outline-none sm:col-span-2"
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
