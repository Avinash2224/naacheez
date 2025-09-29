import React, { useState, useEffect } from 'react';
import { Guitar, Mic, Music, Drum, Piano, ChevronLeft, ChevronRight } from 'lucide-react';

const bandMembers = [
  {
    name: "Utkarsh Srivastava",
    role: "Lead Singer",
    bio: "At the heart of Naacheez is their lead singer - Utkarsh Srivastava —a voice that cuts through the noise and grabs you by the soul. With a raw, emotional edge and the stage presence of a lightning strike, our frontman doesn't just sing the lyrics, he lives them. Every scream, whisper, and melody tells a story, channeling life's chaos into something brutally honest and beautifully loud. Fueled by a mix of rebellion, passion, and grit, Utkarsh brings both vulnerability and power to the mic, commanding attention the second they step on stage. Whether it's a full-throttle anthem or a stripped-down moment of truth, Srivastava delivers every word like it could be their last. This isn't just a singer. This is the heartbeat of the band.",
    icon: Mic,
    image: "https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    color: "from-purple-600 to-pink-600"
  },
  {
    name: "Arpit Juneja",
    role: "Lead Guitarist",
    bio: "Every band needs a flame—and Arpit is the spark that sets Naacheez on fire. With riffs that rip through the noise and solos that stop time, he doesn't just play guitar— he makes it scream, cry, and everything in between. Raised on distortion and raised hell, Arpit brings a mix of precision and chaos to the fretboard, channeling the spirit of rock's greats while forging a sound of his own. Whether it's a face-melting lead or a soulful breakdown, every note is played with intention, intensity, and just the right amount of danger. On stage, Arpit is all energy—lost in the moment, locked into the music, and driving the band forward like a sonic force of nature. This is more than shredding—it's storytelling through six strings.",
    icon: Guitar,
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    color: "from-orange-500 to-red-600"
  },
  {
    name: "Parishkrit Pant aka Perry",
    role: "Bassist",
    bio: "You might not always see it coming—but you'll feel it. Perry holds down the low end of Naacheez with groove, grit, and a steady hand that keeps everything locked in and loaded. The glue between rhythm and melody, he brings the kind of bass lines that don't just support the song—they give it spine. Cool under pressure and loud when it counts, Perry knows when to sit in the pocket and when to break out with a dirty, growling riff that shakes the walls. It's not about showing off—it's about making the whole band hit harder, deeper, and dirtier. On stage, he brings a quiet confidence and a thundering presence. The foundation. The groove. The calm in the storm—and sometimes, the storm itself.",
    icon: Music,
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    color: "from-green-500 to-blue-600"
  },
  {
    name: "Amit Mathews",
    role: "Drummer",
    bio: "Behind every earthquake of a song is Amit, the pulse and power of Naacheez. With sticks flying and rhythms pounding like war drums, he is the driving force that keeps the chaos in check—and sometimes lets it loose. More than just keeping time, Amit builds the backbone of the band's sound: tight when it needs to be, wild when it has to be. From thunderous fills to groove-heavy breakdowns, every beat hits with intention and attitude. It's not just rhythm—it's raw energy, sweat, and instinct. On stage, he is a blur of motion, locked in and unshakable. No spotlight needed—just a kick, a snare, and a fire that doesn't quit.",
    icon: Drum,
    image: "https://images.pexels.com/photos/1464375/pexels-photo-1464375.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    color: "from-yellow-500 to-orange-600"
  },
  {
    name: "Prateek Gupta",
    role: "Keyboardist",
    bio: "While the guitars scream and the drums thunder, it's the keyboard that adds the fire, the flair, and the unexpected twist. Prateek Gupta is the sonic architect behind Naacheez's atmosphere—blending moody textures, gritty synths, and vintage tones into a sound that cuts deeper than just rock. Whether it's laying down haunting melodies, building walls of sound, or tearing through solos with wild intensity, he brings a cinematic edge that makes every track hit harder and linger longer. Classically trained? Maybe. Self-taught? Probably. Either way, Prateek turns keys into chaos—and calm—whenever the song demands it. In a world of distortion and feedback, the keys are the secret weapon. And Prateek knows exactly how to use them. He also produces the songs for the band and is a mastermind behind their song 'Ritu Aawe'.",
    icon: Piano,
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    color: "from-blue-500 to-purple-600"
  }
];

export default function BandMembers() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [expandedCards, setExpandedCards] = useState({});

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === bandMembers.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

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
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const truncateText = (text, wordLimit = 30) => {
    const words = text.split(' ');
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(' ') + '...';
  };

  return (
    <section id="band" className="relative py-20 bg-black overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat opacity-20"
        style={{
          backgroundImage: 'url(/band-bg.jpg)',
          backgroundPosition: 'center 30%'
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meet the Band
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Five unique voices, one powerful sound. Get to know the talented musicians 
            who bring Naacheez to life on stage and in the studio.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-orange-500/80 hover:bg-orange-500 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-orange-500/80 hover:bg-orange-500 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel Track */}
          <div className="relative overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {bandMembers.map((member, index) => (
                <div key={member.name} className="w-full flex-shrink-0 px-8">
                  <div className={`bg-black rounded-3xl overflow-hidden shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 ${
                    expandedCards[index] ? 'min-h-[700px]' : 'min-h-[450px]'
                  }`}>
                    <div className="md:flex md:h-full">
                      {/* Image Section */}
                      <div className="md:w-1/2 relative overflow-hidden">
                        <img 
                          src={member.image}
                          alt={member.name}
                          className="w-full h-80 md:h-96 object-cover"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${member.color} opacity-40`}></div>
                        <div className="absolute top-6 left-6">
                          <member.icon className="w-12 h-12 text-white drop-shadow-lg" />
                        </div>
                        <div className="absolute bottom-6 left-6">
                          <div className="text-white">
                            <h3 className="text-3xl font-bold mb-2 drop-shadow-lg">
                              {member.name}
                            </h3>
                            <p className="text-orange-300 font-semibold text-lg drop-shadow-md">
                              {member.role}
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Content Section */}
                      <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-between">
                        <div>
                          <div className="hidden md:block mb-6">
                            <h3 className="text-3xl font-bold text-white mb-3">
                              {member.name}
                            </h3>
                            <p className="text-orange-400 font-semibold text-xl">
                              {member.role}
                            </p>
                          </div>
                          <div className="text-gray-300 leading-relaxed text-lg">
                            <p>
                              {expandedCards[index] 
                                ? member.bio 
                                : truncateText(member.bio)
                              }
                            </p>
                            {member.bio.split(' ').length > 30 && (
                              <button
                                onClick={() => toggleReadMore(index)}
                                className="text-orange-400 hover:text-orange-300 font-semibold mt-2 transition-colors duration-200 focus:outline-none"
                              >
                                {expandedCards[index] ? 'Read Less' : 'Read More'}
                              </button>
                            )}
                          </div>
                        </div>
                        
                        {/* Musical Note Animation */}
                        <div className="mt-8 flex space-x-2">
                          {[...Array(3)].map((_, i) => (
                            <div
                              key={i}
                              className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"
                              style={{ animationDelay: `${i * 0.2}s` }}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Individual Card Progress Bar - Only shows when expanded */}
                    {expandedCards[index] && (
                      <div className="px-8 pb-4">
                        <div className="w-full bg-gray-700 rounded-full h-1 overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-orange-400 to-orange-600 w-full transition-all duration-500"></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {bandMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-orange-500 w-8' 
                    : 'bg-gray-600 hover:bg-gray-400'
                }`}
              ></button>
            ))}
          </div>

          {/* Global Progress Bar - Shows carousel progress */}
          <div className="mt-4 w-full bg-gray-700 rounded-full h-1 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-orange-400 to-orange-600 transition-all duration-700 ease-out"
              style={{ width: `${((currentIndex + 1) / bandMembers.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
