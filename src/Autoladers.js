import React from 'react';
import NavBar from './Components/NavBar';
import ZonnepanelenBanner from './Components/ZonnepanelenBanner';
import Footer from './Components/Footer';
import CustomSystemSection from './Components/CustomSystemSection';
import SlimPlanSection from './Components/SlimPlanSection';
import ExperienceSection from './Components/ExperienceSection';
import SolarPanelSection from './Components/SolarPanelSection';
import SolarPanelOptions from './Components/SolarPanelOptions';
import EnergyManagementSystem from './Components/EnergyManagementSystem';
import QuestionsGrid from './Components/QuestionsGrid';
import TestimonialsSlider from './Components/TestimonialsSlider';
import ContactForm from './Components/ContactForm';
import AutoladersBanner from './Components/AutoladersBanner';
import ChargerInfo from './Components/ChargerInfo';
import ControlWithApp from './Components/ControlWithApp';

const Autoladers = () => {
  return (
    <div>
      <NavBar />
      <AutoladersBanner />
      <ChargerInfo />
      <ControlWithApp/>
      <ExperienceSection/>
      <SolarPanelSection/>
      <SolarPanelOptions/>
      <EnergyManagementSystem/>
      <QuestionsGrid/>
      <TestimonialsSlider />
      <ContactForm />
      {/* Add more content specific to this page below */}
     

      <Footer />
    </div>
  );
};

export default Autoladers;
