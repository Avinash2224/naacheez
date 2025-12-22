import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function Hero() {
  const handlePlay = () => {
    window.open(
      "https://open.spotify.com/track/5WvssQNrbPJFry4W6QQwwC?si=5kDE2lq-TLmEMe43PI-Iuw&context=spotify%3Asearch%3Aritu",
      "_blank"
    );
  };

  return (
    <section
      id="home"
      className="relative min-h-screen px-4 sm:px-6 md:px-10 lg:px-24 py-16 sm:py-20"
      style={{ backgroundColor: "#F7FEF9" }}
    >
      {/* Top Section - Naacheez Text and Spotify */}
      <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-0 mb-12 sm:mb-16">
        {/* Left Side - Naacheez Text with Mobile Optimization */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-black leading-none font-sans w-full lg:w-auto"
        >
          <h1 className="text-[4rem] xs:text-[5rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[14rem] font-bold tracking-tight">
            Naacheez
          </h1>
          {/* <h1 className="text-[4rem] xs:text-[5rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[14rem] font-bold tracking-tight -mt-4 sm:-mt-6 md:-mt-8 lg:-mt-12">
            eez
          </h1> */}
        </motion.div>

        {/* Right Side - Spotify Section with Mobile Optimization */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="flex flex-col items-center lg:items-center gap-4 sm:gap-6 lg:gap-8 mt-4 lg:mt-12 w-full lg:w-auto"
        >
          {/* Spotify logo and text - Mobile Responsive */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <img
              src="/spotify-logo.png"
              alt="Spotify"
              className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
              onError={(e) => {
                // Fallback if Spotify logo doesn't load
                e.target.style.display = 'none';
              }}
            />
            <span className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-semibold text-black text-center sm:text-left">
              Listen on <span className="text-green-600">Spotify</span>
            </span>
          </div>

          {/* Play Button - Mobile Optimized */}
          <button
            onClick={handlePlay}
            className="flex items-center justify-center w-16 h-16 xs:w-18 xs:h-18 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 touch-manipulation"
            aria-label="Play on Spotify"
          >
            <Play 
              size={window.innerWidth < 640 ? 24 : window.innerWidth < 768 ? 32 : 40} 
              fill="white" 
              className="ml-1" // Slight offset for visual centering
            />
          </button>
        </motion.div>
      </div>

      {/* Band Photo - Mobile Responsive */}
      {/* <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
        className="w-full rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl"
      >
        <img
          src="/band-bg.jpg"
          alt="Naacheez Band"
          className="w-full h-[40vh] xs:h-[45vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] object-cover object-center"
          onError={(e) => {
            // Fallback for band image
            e.target.src = 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1200';
          }}
        />
      </motion.div> */}


      {/* Band Photo - Mobile Responsive */}
<motion.div
  initial={{ opacity: 0, y: 60 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
  className="w-full rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl"
>
  <img
    src="/band-bg.jpg"
    alt="Naacheez Band"
    className="
      w-full 
      h-auto 
      max-h-[70vh]
      object-contain 
      sm:object-cover 
      object-center
      transition-all duration-500
    "
    onError={(e) => {
      // Fallback for band image
      e.target.src =
        'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1200';
    }}
  />
</motion.div>

      {/* Mobile-specific bottom spacing */}
      <div className="h-8 sm:h-12 lg:h-0"></div>
    </section>
  );
}
