// src/App.jsx
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { Navbar, Footer } from './components/layout';
import { 
  Hero, 
  BookingForm, 
  About, 
  Rooms, 
  Services, 
  Banner, 
  Explore 
} from './components/sections';
import 'remixicon/fonts/remixicon.css';

function App() {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '60px',
      duration: 2500,
      delay: 400
    });

    sr.reveal('.section__container');
  }, []);

  return (
    <>
      <Navbar/>
      <Hero/>
      <BookingForm/>
      <About/>
      <Rooms/>
      <Services/>
      <Banner/>
      <Explore/>
      <Footer/>
    </>
  );
}

export default App;