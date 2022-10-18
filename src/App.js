import '././scss/main.scss';
import React from 'react';
import { Header } from './componets/Header';
import { AboutmeSection } from './componets/AboutmeSection';
import { Resume } from './componets/Resume';
import Testimonials from './componets/Testimonials';
import ContactMe from './componets/contactMe';
import Footer from './componets/Footer';

export default function App() {
  return (
    <div className='App'>
      <Header />
      <AboutmeSection />
      <Resume />
      <Testimonials />
      <ContactMe />
      <Footer />
    </div>
  );
}
