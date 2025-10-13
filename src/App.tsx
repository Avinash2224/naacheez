import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import VideoSection from './components/VideoSection'; // Add this
import Band from './components/Band';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Scroll to home section on page load/refresh
    const scrollToHome = () => {
      const homeSection = document.getElementById('home');
      if (homeSection) {
        homeSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Fallback: scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    // Clear any existing hash from URL
    if (window.location.hash) {
      window.history.replaceState('', document.title, window.location.pathname);
    }

    // Small delay to ensure DOM is loaded
    setTimeout(scrollToHome, 100);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero />
      <AboutUs />
      <Band />
      <VideoSection /> {/* Add this between About and Gallery */}
      <Footer />
    </div>
  );
}

export default App;
