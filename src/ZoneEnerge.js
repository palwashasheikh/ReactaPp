import React from 'react';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import ContactForm from './Components/ContactForm';
import Info4 from './Components/Info4';
import WatisezoneenergeBanner from './Components/WatisezoneenergeBanner';

const ZoneEnerge = () => {
  return (
    <div>
      <NavBar />
      <WatisezoneenergeBanner />
      <Info4/>
      <ContactForm />     
      <Footer />
    </div>
  );
};

export default ZoneEnerge;
