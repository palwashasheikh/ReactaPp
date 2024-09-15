import React from 'react';
import NavBar from './Components/NavBar';
import ZonnepanelenBanner from './Components/ZonnepanelenBanner';
import Footer from './Components/Footer';
import CustomSystemSection from './Components/CustomSystemSection';

const ZonnepanelenPage = () => {
  return (
    <div>
      <NavBar />
      <ZonnepanelenBanner />
      <CustomSystemSection />

      {/* Add more content specific to this page below */}
      <section className="py-16 px-4 text-center">
        <h2 className="text-3xl font-semibold">Waarom Kiezen voor Zonnepanelen?</h2>
        <p className="mt-4 text-lg">
          Zonnepanelen bieden duurzame energieoplossingen die niet alleen goed zijn voor het milieu,
          maar ook voor je portemonnee. Ontdek de voordelen van zonnepanelen installaties met Krachtdak.
        </p>
      </section>

      <Footer />
    </div>
  );
};

export default ZonnepanelenPage;
