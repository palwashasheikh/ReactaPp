import React from 'react';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import ContactForm from './Components/ContactForm';
import Info6 from './Components/Info6';
import WetZonnepanelenVerminderBanner from './Components/WetZonnepanelenVerminderBanner';

const Verminderan = () => {
  return (
    <div>
      
      <NavBar />
      <WetZonnepanelenVerminderBanner />
      <Info6/>
      <ContactForm />     
      <Footer />
    </div>
  );
};

export default Verminderan;
