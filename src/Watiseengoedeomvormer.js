import React from 'react';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import ContactForm from './Components/ContactForm';
import SolarPanelInfo from './Components/SolarPanel';
import WatiseengoedeomvormerPageBanner from './Components/WatiseengoedeomvormerPageBanner';

const Watiseengoedeomvormer = () => {
  return (
    <div>
      
      <NavBar />
      <WatiseengoedeomvormerPageBanner />
      <SolarPanelInfo/>
      <ContactForm />     
      <Footer />
    </div>
  );
};

export default Watiseengoedeomvormer;
