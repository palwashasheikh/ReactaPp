import React from "react";

const ContactForm = () => {
  return (
    <div id="contactus"
      className="bg-cover bg-center py-10 md:py-20"
      style={{ backgroundImage: 'url("/longimage.png")' }}
    >
      <div className="md:px-24 px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left side text */}
        <div className="flex flex-col justify-center items-center text-center lg:items-start lg:text-left">
          <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-medium mb-5 md:mb-7 !leading-[40px] md:!leading-[54px] lg:!leading-[68px]">
            Wilt u advies<br/> of een offerte? <br/> Neem dan <br/> contact met <br /> ons op!
          </h2>
          <p className="text-white text-base md:text-lg mb-6 md:mb-8">
            Kies voor een kwaliteit installatie van <br/> Krachtdak
          </p>
        </div>

        {/* Right side form */}
        <div>
          <form className="bg-[#FFFFFF33] p-6 md:p-8 rounded-lg shadow-lg grid grid-cols-1 sm:grid-cols-2 gap-6 border border-[rgba(255,255,255,0.2)]">
            <input
              type="text"
              placeholder="Voornaam"
              className="p-3 md:p-4 bg-[#FFFFFF33] text-[#FFFFFF] placeholder-white/50 rounded-lg w-full focus:outline-none border border-white"
            />
            <input
              type="text"
              placeholder="Achternaam"
              className="p-3 md:p-4 bg-[#FFFFFF33] text-[#FFFFFF] placeholder-white/50 rounded-lg w-full focus:outline-none border border-white"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-3 md:p-4 bg-[#FFFFFF33] text-[#FFFFFF] placeholder-white/50 rounded-lg w-full focus:outline-none border border-white"
            />
            <input
              type="text"
              placeholder="Telefoonnummer"
              className="p-3 md:p-4 bg-[#FFFFFF33] text-[#FFFFFF] placeholder-white/50 rounded-lg w-full focus:outline-none border border-white"
            />
            <input
              type="text"
              placeholder="Postcode"
              className="p-3 md:p-4 bg-[#FFFFFF33] text-[#FFFFFF] placeholder-white/50 rounded-lg w-full focus:outline-none sm:col-span-2 border border-white"
            />

            <p className="text-white sm:col-span-2">Waarvoor wilt u advies ontvangen?</p>

            <div className="sm:col-span-2 flex md:flex-row flex-col justify-start items-start space-y-4 md:space-y-0 md:space-x-4">
              <label className="text-white flex items-center">
                <input type="radio" name="advice" value="Zonnepanelen" className="custom-radio" />
                <span className="ml-2">Zonnepanelen</span>
              </label>
              <label className="text-white flex items-center">
                <input type="radio" name="advice" value="Laadpalen" className="custom-radio" />
                <span className="ml-2">Laadpalen</span>
              </label>
              <label className="text-white flex items-center">
                <input type="radio" name="advice" value="Thuisbatterij" className="custom-radio" />
                <span className="ml-2">Thuisbatterij</span>
              </label>
            </div>

            <textarea
              placeholder="Opmerkingen"
              className="p-3 md:p-4 bg-[#FFFFFF33] text-white placeholder-white/50 rounded-lg w-full focus:outline-none sm:col-span-2 border border-white resize-none"
            />

            <button
              type="submit"
              className="bg-[#FFAB10] text-white font-semibold rounded-lg py-3 px-6 w-full sm:col-span-2"
            >
              Send
            </button>

            {/* Radio Button Styling */}
            <style jsx>{`
              .custom-radio {
                appearance: none;
                width: 20px;
                height: 20px;
                border: 2px solid #ffffff;
                border-radius: 50%;
                position: relative;
                cursor: pointer;
                transition: border 0.3s ease-in-out;
              }

              .custom-radio:checked {
                border-color: #FFAB10;
                background-color: #FFAB10;
              }

              .custom-radio:checked::before {
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 8px;
                height: 8px;
                background-color: white;
                border-radius: 50%;
              }
            `}</style>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
