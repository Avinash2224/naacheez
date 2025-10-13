import React from 'react';

export default function VideoSection() {
  return (
    <section
      id="video"
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: '#F7FEF9' }}
    >
      {/* Light theme animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/30 via-transparent to-pink-100/30"></div>
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Spacer to maintain consistency */}
        <div className="h-10 md:h-16"></div>

        {/* Header - No fade effects */}
        <div className="text-center mb-16">  
          <div className="mb-8 relative">
            <h2 className="text-5xl md:text-6xl font-black text-black mb-6 tracking-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Music</span>
            </h2>
            {/* Line removed completely */}
          </div>
          
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Experience the raw energy of Naacheez live at Knocksense Lucknow
          </p>
        </div>

        {/* Video Container - No fade effects */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border border-gray-200">
            {/* YouTube Embed - Video ID: fdINfdedlmA */}
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-2xl"
                src="https://www.youtube.com/embed/fdINfdedlmA?rel=0&showinfo=0&modestbranding=1&start=0"
                title="Naacheez - Pichle Saat Dino Mein (Live at Knocksense Lucknow)"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            
            {/* Light theme decorative border effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-100/30 via-transparent to-pink-100/30 pointer-events-none"></div>
          </div>
          
          {/* Light theme floating decorative elements */}
          <div className="absolute -top-4 -right-4 w-32 h-32 bg-purple-300/20 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-300/20 rounded-full blur-2xl"></div>
        </div>

        {/* Call to Action - Black buttons with white text */}
        <div className="text-center mt-12">
          <p className="text-gray-700 mb-6 text-lg">Want to see more of our performances?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.youtube.com/@naacheezmusic"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 hover:shadow-xl hover:shadow-gray-400/50 transition-all duration-300 hover:scale-105"
            >
              Subscribe to Our Channel
            </a>
            <a
              href="https://instagram.com/naacheezofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 hover:shadow-xl hover:shadow-gray-400/50 transition-all duration-300 hover:scale-105"
            >
              Follow on Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
