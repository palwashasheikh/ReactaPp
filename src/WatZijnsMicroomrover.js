import React from 'react';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import ContactForm from './Components/ContactForm';
import Info1 from './Components/Info1';
import WatiseengoedemicroPageBanner from './Components/WatiseengoedemicroPageBanner';

const WatZijnsMicroomrover = () => {
  return (
    <div>
      
      <NavBar />
      <WatiseengoedemicroPageBanner />
      <Info1/>
      <ContactForm />     
      <Footer />
    </div>
  );
};

export default WatZijnsMicroomrover;
