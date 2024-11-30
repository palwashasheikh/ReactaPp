import React from 'react';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import ContactForm from './Components/ContactForm';
import Info5 from './Components/Info5';
import WetZonneInstalleBanner from './Components/WetZonneInstalleBanner';

const ZonalpannelIntalle = () => {
  return (
    <div>
      
      <NavBar />
      <WetZonneInstalleBanner />
      <Info5/>
      <ContactForm />     
      <Footer />
    </div>
  );
};

export default ZonalpannelIntalle;
