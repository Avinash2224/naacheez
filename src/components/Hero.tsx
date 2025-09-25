import React from 'react';
import { Play } from 'lucide-react';

export default function Hero() {
  const handleListenNow = () => {
    window.open('https://youtu.be/fdINfdedlmA?si=3n2BEKiCLD21xEND', '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/home-bg.jpg)'
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
        {/* Grunge texture overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
        {/* Band Name - Large Typography */}
        <div className="mb-8">
          <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-black mb-4 tracking-tighter text-white drop-shadow-2xl">
            NAACHEEZ
          </h1>
          <div className="w-32 h-1 bg-orange-500 mx-auto mb-6"></div>
        </div>

        {/* Band Description with Latest Release */}
        <p className="text-lg md:text-xl mb-12 text-gray-200 max-w-4xl mx-auto leading-relaxed font-light">
          Hailing from the heart of <span className="text-orange-400 font-semibold">Lucknow</span>, 
          Naacheez is a rock band driven by thunderous riffs, gritty vocals, and a passion for pure, 
          unfiltered heavy sound. Fusing influences from classic rock to modern alt, the band delivers 
          a high energy experience that hits hard and stays with you. 
          Their debut single, <span className="text-orange-400 font-bold">"RITU AAWE"</span>, 
          dropped in <span className="text-orange-400 font-semibold">June 2025</span> making waves 
          with its raw power and anthemic chorus. Whether you catch them live or on repeat, 
          Naacheez is here to remind you—rock isn't dead, It just got louder!!!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button 
            onClick={handleListenNow}
            className="group bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-3 shadow-2xl"
          >
            <Play className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            Listen Now
          </button>
          
          <button className="border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 backdrop-blur-sm">
            View Gallery
          </button>
        </div>

        {/* Rock Motto */}
        <div className="text-xl md:text-2xl font-bold text-orange-400 tracking-wide">
          Rock isn't dead, It just got <span className="text-white">LOUDER!!!</span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-orange-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-orange-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-8 w-2 h-32 bg-gradient-to-b from-orange-500 to-transparent opacity-60"></div>
      <div className="absolute bottom-1/4 right-8 w-2 h-32 bg-gradient-to-t from-orange-500 to-transparent opacity-60"></div>
    </section>
  );
}
