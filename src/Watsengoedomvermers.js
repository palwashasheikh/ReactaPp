import React from 'react';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import ContactForm from './Components/ContactForm';
import SolarPanelInfo from './Components/SolarPanel';
import WatiseengoedeomvormerPageBanner from './Components/WatiseengoedeomvormerPageBanner';
import Info3 from './Components/Info3';

const Watsengoedomvermers = () => {
  return (
    <div>
      
      <NavBar />
      <WatiseengoedeomvormerPageBanner />
      <Info3/>
      <ContactForm />     
      <Footer />
    </div>
  );
};

export default Watsengoedomvermers;
