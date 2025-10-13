import React, { useState, useEffect } from 'react';
import { Guitar, Mic, Music, Drum, Piano, ChevronLeft, ChevronRight } from 'lucide-react';

const bandMembers = [
  {
    name: "Utkarsh Srivastava",
    role: "Lead Singer",
    bio: "At the heart of Naacheez is their lead singer - Utkarsh Srivastava —a voice that cuts through the noise and grabs you by the soul. With a raw, emotional edge and the stage presence of a lightning strike, our frontman doesn't just sing the lyrics, he lives them. Every scream, whisper, and melody tells a story, channeling life's chaos into something brutally honest and beautifully loud. Fueled by a mix of rebellion, passion, and grit, Utkarsh brings both vulnerability and power to the mic, commanding attention the second they step on stage. Whether it's a full-throttle anthem or a stripped-down moment of truth, Srivastava delivers every word like it could be their last. This isn't just a singer. This is the heartbeat of the band.",
    icon: Mic,
    image: "/utkarsh.jpg",
  },
  {
    name: "Arpit Juneja",
    role: "Lead Guitarist",
    bio: "Every band needs a flame—and Arpit is the spark that sets Naacheez on fire. With riffs that rip through the noise and solos that stop time, he doesn't just play guitar— he makes it scream, cry, and everything in between. Raised on distortion and raised hell, Arpit brings a mix of precision and chaos to the fretboard, channeling the spirit of rock's greats while forging a sound of his own. Whether it's a face-melting lead or a soulful breakdown, every note is played with intention, intensity, and just the right amount of danger. On stage, Arpit is all energy—lost in the moment, locked into the music, and driving the band forward like a sonic force of nature. This is more than shredding—it's storytelling through six strings.",
    icon: Guitar,
    image: "/arpit.jpg",
  },
  {
    name: "Parishkrit Pant aka Perry",
    role: "Bassist",
    bio: "You might not always see it coming—but you'll feel it. Perry holds down the low end of Naacheez with groove, grit, and a steady hand that keeps everything locked in and loaded. The glue between rhythm and melody, he brings the kind of bass lines that don't just support the song—they give it spine. Cool under pressure and loud when it counts, Perry knows when to sit in the pocket and when to break out with a dirty, growling riff that shakes the walls. It's not about showing off—it's about making the whole band hit harder, deeper, and dirtier. On stage, he brings a quiet confidence and a thundering presence. The foundation. The groove. The calm in the storm—and sometimes, the storm itself.",
    icon: Music,
    image: "/Parishkrit.jpg",
  },
  {
    name: "Amit Mathews",
    role: "Drummer",
    bio: "Behind every earthquake of a song is Amit, the pulse and power of Naacheez. With sticks flying and rhythms pounding like war drums, he is the driving force that keeps the chaos in check—and sometimes lets it loose. More than just keeping time, Amit builds the backbone of the band's sound: tight when it needs to be, wild when it has to be. From thunderous fills to groove-heavy breakdowns, every beat hits with intention and attitude. It's not just rhythm—it's raw energy, sweat, and instinct. On stage, he is a blur of motion, locked in and unshakable. No spotlight needed—just a kick, a snare, and a fire that doesn't quit.",
    icon: Drum,
    image: "/amit.jpg",
  },
  {
    name: "Prateek Gupta",
    role: "Keyboardist",
    bio: "While the guitars scream and the drums thunder, it's the keyboard that adds the fire, the flair, and the unexpected twist. Prateek Gupta is the sonic architect behind Naacheez's atmosphere—blending moody textures, gritty synths, and vintage tones into a sound that cuts deeper than just rock. Whether it's laying down haunting melodies, building walls of sound, or tearing through solos with wild intensity, he brings a cinematic edge that makes every track hit harder and linger longer. Classically trained? Maybe. Self-taught? Probably. Either way, Prateek turns keys into chaos—and calm—whenever the song demands it. In a world of distortion and feedback, the keys are the secret weapon. And Prateek knows exactly how to use them. He also produces the songs for the band and is a mastermind behind their song 'Ritu Aawe'.",
    icon: Piano,
    image: "/prateek.jpg",
  }
];

export default function BandMembers() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [expandedCards, setExpandedCards] = useState({});
  const [autoCloseTimers, setAutoCloseTimers] = useState({});

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === bandMembers.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Clean up timers on unmount
  useEffect(() => {
    return () => {
      Object.values(autoCloseTimers).forEach((timer) => clearTimeout(timer));
    };
  }, [autoCloseTimers]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? bandMembers.length - 1 : currentIndex - 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === bandMembers.length - 1 ? 0 : currentIndex + 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const toggleReadMore = (index) => {
    setExpandedCards((prev) => {
      const newState = { ...prev, [index]: !prev[index] };
      if (newState[index]) {
        if (autoCloseTimers[index]) clearTimeout(autoCloseTimers[index]);
        const timer = setTimeout(() => {
          setExpandedCards((p) => ({ ...p, [index]: false }));
          setAutoCloseTimers((t) => {
            const nt = { ...t };
            delete nt[index];
            return nt;
          });
        }, 8000);
        setAutoCloseTimers((t) => ({ ...t, [index]: timer }));
      } else if (autoCloseTimers[index]) {
        clearTimeout(autoCloseTimers[index]);
      }
      return newState;
    });
  };

  const truncateText = (text, wordLimit = 30) => {
    const words = text.split(' ');
    return words.length <= wordLimit ? text : words.slice(0, wordLimit).join(' ') + '...';
  };

return (
    <section id="band" className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-red-500/5"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-orange-500 text-sm font-bold tracking-widest uppercase border border-orange-500 px-4 py-2 rounded-full">
              The Lineup
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Band</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Five souls, one sound. The voices behind Naacheez.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {bandMembers.map((member, index) => (
            <div
              key={member.name}
              className={`group relative rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 ${
                index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
              } ${expandedCards[index] ? 'lg:col-span-2 lg:row-span-2' : ''}`}
            >
              {/* Card */}
              <div className={`relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl overflow-hidden transition-all duration-500 ${
                expandedCards[index] ? 'h-auto' : 'h-96'
              }`}>
                {/* Image Container */}
                <div className={`relative overflow-hidden transition-all duration-500 ${
                  expandedCards[index] ? 'h-64' : 'h-full'
                }`}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=800';
                    }}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90"></div>
                  
                  {/* Icon */}
                  <div className="absolute top-4 right-4 bg-orange-500/20 backdrop-blur-md p-3 rounded-full border border-orange-500/30">
                    <member.icon className="w-6 h-6 text-orange-400" />
                  </div>

                  {/* Name & Role Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-orange-400 font-semibold">{member.role}</p>
                  </div>
                </div>

                {/* Bio Section */}
                {expandedCards[index] && (
                  <div className="p-6 space-y-4 animate-fadeIn">
                    <div className="text-gray-300 leading-relaxed">
                      {member.bio}
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                      <div className="text-xs text-gray-500">
                        Auto-closing in 8s
                      </div>
                      <div className="flex gap-1">
                        {[...Array(3)].map((_, i) => (
                          <div
                            key={i}
                            className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"
                            style={{ animationDelay: `${i * 0.2}s` }}
                          ></div>
                        ))}
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-800 rounded-full h-1 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-orange-500 to-red-500"
                        style={{ animation: 'shrink 8s linear forwards' }}
                      ></div>
                    </div>
                  </div>
                )}

                {/* Read More Button */}
                {!expandedCards[index] && (
                  <button
                    onClick={() => toggleReadMore(index)}
                    className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-orange-500/30 to-transparent"></div>
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                      Read Bio
                    </div>
                  </button>
                )}

                {/* Close Button */}
                {expandedCards[index] && (
                  <button
                    onClick={() => toggleReadMore(index)}
                    className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white p-2 rounded-full hover:bg-black/70 transition-all duration-300 z-20"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">Want to see us live?</p>
          <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105">
            Book a Show
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes shrink {
          from { width: 100%; }
          to { width: 0%; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </section>
  );
}
