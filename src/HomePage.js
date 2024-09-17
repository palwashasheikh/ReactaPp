
import Banner from './Components/Banner';
import TransitionSection from './Components/TransitionSection';
import BannerSecond from './Components/BannerSecond';
import KrachtdakSection from './Components/KrachtdakSection';
import ReadMoreSection from './Components/ReadMore';
import TestimonialsSlider from './Components/TestimonialsSlider';
import ContactForm from './Components/ContactForm';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';


const HomePage = () => (
    <>
      <NavBar/>
      <Banner />
      <TransitionSection />
      <BannerSecond />
      <KrachtdakSection />
      <ReadMoreSection />
      <TestimonialsSlider />
      <ContactForm />
      <Footer/>
    </>
  );

  export default HomePage;
