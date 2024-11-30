import React from 'react';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import ContactForm from './Components/ContactForm';
import WetZonnepanelenBanner from './Components/WetZonnepanelenBanner';
import SolarPanelInfo from './Components/SolarPanel';

const WetZonnepanelenPage = () => {
  return (
    <div>
      <NavBar />
      <WetZonnepanelenBanner />    
      <SolarPanelInfo/>
      <ContactForm />
      <Footer />
    </div>
  );}

export default WetZonnepanelenPage;
