import React from 'react';

const TransitionSection = () => {
  return (
    <div className="flex flex-col md:flex-row bg-slate-300 justify-between items-start py-6 md:py-14 pr-4 pl-4 md:pr-0 md:pl-24">
      {/* Left Section with Teal Background */}
      <div className="md:w-[670px] mb-6 md:mb-0">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-black-300">
          Krachtdak Neemt Je Mee <br /> In De <span className="text-orangeish-500">Energietransitie</span>
        </h2>
        <p className="text-black-300 mb-2 md:mb-4 text-xl">Lörem ipsum vilyligt tigöngen och krolär i sar. Kan nide. Gera vatiska. Ben tegöngen, ys kans. Exojässade mor. Äling blåljusyrke. Funktionell dumhet e-sport. Nåll vuning.</p>
        <p className="text-black-300 mb-2 md:mb-4 text-xl">Sar. Kan nide. Gera vatiska. Ben tegöngen, ys kans. Exojässade mor. Äling blåljusyrke. Funktionell dumhet e-sport. Nåll vuning.</p>
        <p className="text-black-300 text-xl">Sar. Kan nide. Gera vatiska. Ben tegöngen, ys kans. Exojässade mor. Äling blåljusyrke. Funktionell dumhet e-sport. Nåll vuning.</p>
      </div>

      {/* Right Section with Light Gray Background */}
      <div className="flex items-center justify-center md:justify-end">
        <img src="/Rectangle.png" alt="Energy Transition" className="w-full md:w-auto max-w-full h-auto" /> {/* Replace with your actual image path */}
      </div>
    </div>
  );
};

export default TransitionSection;
