import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BandMembers from './components/BandMembers';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero />
      <BandMembers />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;