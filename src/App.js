import React from 'react';
import NavBar from './Components/NavBar';
import Banner from './Components/Banner';
import TransitionSection from './Components/TransitionSection';
import BannerSecond from './Components/BannerSecond';
import TransitionSectionSecond from './Components/TransitionSectionSecond';
import KrachtdakSection from './Components/KrachtdakSection';

function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <TransitionSection/>
      <BannerSecond/>
      <TransitionSectionSecond/>
      <KrachtdakSection/>
    </div>
  );
}

export default App;
