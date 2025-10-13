import React, { useEffect, useState, useRef } from 'react';

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before element is fully in view
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div 
      id="about"  // Added this ID
      ref={sectionRef}
      className="min-h-screen px-6 py-16 md:px-12 lg:px-24" 
      style={{backgroundColor: '#F7FEF9'}}
    >
      {/* Rest of your component remains the same */}
      <div className="max-w-7xl mx-auto">
        {/* Spacer to push content down */}
        <div className="h-20 md:h-32"></div>
        
        {/* Header */}
        <div className="mb-16 relative">
          <h1 className={`text-6xl md:text-8xl font-bold mb-4 text-black transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Us</span>
          </h1>
          
          {/* Full-width black line */}
          <div className={`absolute left-1/2 transform -translate-x-1/2 h-1 bg-black transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'} origin-center`}
               style={{
                 width: '100vw',
                 left: '50%',
                 marginLeft: '-50vw'
               }}>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="text-lg md:text-xl leading-relaxed space-y-6 text-gray-800">
              {/* First paragraph - fade up animation like "About" */}
              <p className={`transition-all duration-1000 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
              }`}>
                Hailing from the heart of{' '}
                <span className="text-purple-400 font-semibold">Lucknow</span>,{' '}
                <span className="text-purple-400 font-semibold">Naacheez</span>{' '}
                is a rock band driven by thunderous riffs, gritty vocals, and a passion for pure, unfiltered heavy sound.
              </p>
              
              {/* Second paragraph - fade up animation with more delay */}
              <p className={`transition-all duration-1000 delay-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
              }`}>
                Fusing influences from classic rock to modern alt, the band delivers a high energy experience that hits hard and stays with you.
              </p>
              
              {/* Third paragraph - fade up animation with more delay */}
              <p className={`transition-all duration-1000 delay-900 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
              }`}>
                Their debut single,{' '}
                <span className="text-purple-400 font-semibold">"RITU AAWE"</span>, 
                dropped in June, 2025 making waves with its raw power and anthemic chorus.
              </p>
              
              {/* Final paragraph - fade up animation with final delay */}
              <p className={`text-xl md:text-2xl font-bold text-purple-400 transition-all duration-1000 delay-1100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
              }`}>
                Whether you catch them live or on repeat, Naacheez is here to remind you—rock isn't dead, It just got louder!!!
              </p>
            </div>
          </div>

          {/* Image Section - Filter Removed */}
          <div className={`relative transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              {/* Your Band Image from public folder - No filter overlay */}
              <img 
                src="/about.jpg" 
                alt="Naacheez Band" 
                className="w-full h-auto aspect-square object-cover"
                onError={(e) => {
                  // Fallback to placeholder if image doesn't load
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              
              {/* Fallback Placeholder (hidden by default) */}
              <div className="hidden relative aspect-square bg-gradient-to-br from-purple-900 via-black to-pink-900 items-center justify-center">
                <div className="text-center p-8">
                  <svg className="w-32 h-32 mx-auto mb-4 text-purple-400 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                  <p className="text-white text-lg font-semibold">Your Band Image Here</p>
                  <p className="text-purple-300 text-sm mt-2">Replace with actual image</p>
                </div>
              </div>

              {/* Gradient Overlay Effect - REMOVED */}
              {/* <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-500/20 to-red-500/20"></div> */}
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-600 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-pink-600 rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
