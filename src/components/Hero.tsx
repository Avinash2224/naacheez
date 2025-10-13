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
      className="relative min-h-screen px-10 md:px-24 py-20"
      style={{ backgroundColor: "#F7FEF9" }}
    >
      {/* Top Section - Naacheez Text and Spotify */}
      <div className="flex items-start justify-between mb-16">
        {/* Left Side - Naacheez Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-black leading-none font-sans"
        >
          <h1 className="text-[9rem] md:text-[14rem] font-bold tracking-tight">Naach</h1>
          <h1 className="text-[9rem] md:text-[14rem] font-bold tracking-tight -mt-8 md:-mt-12">eez</h1>
        </motion.div>

        {/* Right Side - Spotify Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="flex flex-col items-center gap-8 mt-12"
        >
          {/* Spotify logo and text */}
          <div className="flex items-center gap-4">
            <img
              src="/spotify-logo.png"
              alt="Spotify"
              className="w-12 h-12 md:w-14 md:h-14"
            />
            <span className="text-2xl md:text-3xl font-semibold text-black">
              Listen on <span className="text-green-600">Spotify</span>
            </span>
          </div>

          {/* Play Button */}
          <button
            onClick={handlePlay}
            className="flex items-center justify-center w-24 h-24 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <Play size={40} fill="white" />
          </button>
        </motion.div>
      </div>

      {/* Band Photo */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
        className="w-full rounded-2xl overflow-hidden shadow-2xl"
      >
        <img
          src="/band-bg.jpg"
          alt="Naacheez Band"
          className="w-full h-[60vh] md:h-[70vh] object-cover"
        />
      </motion.div>
    </section>
  );
}