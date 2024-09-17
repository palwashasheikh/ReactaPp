import React from 'react';

const TransitionSection = () => {
  return (
    <div className="flex flex-col md:flex-row bg-slate-300 justify-end items-start py-14">
      {/* Left Section with Teal Background */}
      <div className="md:w-[670px]">
        <h2 className="text-5xl font-bold mb-6 text-black-300">
          Krachtdak Neemt Je Mee <br /> In De <span className="text-orangeish-500">Energietransitie</span>
        </h2>
        <p className="text-black-300 mb-4">Lörem ipsum vilyligt tigöngen och krolär i sar. Kan nide. Gera vatiska. Ben tegöngen, ys kans. Exojässade mor. Äling blåljusyrke. Funktionell dumhet e-sport. Nåll vuning.</p>
        <p className="text-black-300 mb-4">Sar. Kan nide. Gera vatiska. Ben tegöngen, ys kans. Exojässade mor. Äling blåljusyrke. Funktionell dumhet e-sport. Nåll vuning.</p>
        <p className="text-black-300">Sar. Kan nide. Gera vatiska. Ben tegöngen, ys kans. Exojässade mor. Äling blåljusyrke. Funktionell dumhet e-sport. Nåll vuning.</p>
      </div>

      {/* Right Section with Light Gray Background */}
      <div className="flex items-center justify-end">
        <img src="/Rectangle.png" alt="Energy Transition" className="" /> {/* Replace with your actual image path */}
      </div>
    </div>
  );
};

export default TransitionSection;
