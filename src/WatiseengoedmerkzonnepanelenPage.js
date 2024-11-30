import React from 'react';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import ContactForm from './Components/ContactForm';
import Info from './Components/Info';
import WatiseengoedeomvormermerkPageBanner from './Components/WatiseengoedeomvormermerkPageBanner';

const WatiseengoedmerkzonnepanelenPage = () => {
  return (
    <div>
      <NavBar />
      <WatiseengoedeomvormermerkPageBanner />
      <Info/>
      <ContactForm />
      <Footer />
    </div>
  );
};

export default WatiseengoedmerkzonnepanelenPage;
