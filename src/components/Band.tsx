import React, { useState, useRef, useEffect } from 'react';
import { X } from 'lucide-react';

const bandMembers = [
  {
    id: 'utkarsh',
    name: 'Utkarsh Srivastava',
    role: 'Lead Singer',
    image: '/utkarsh.jpg',
    bio: "At the heart of Naacheez is their lead singer - Utkarsh Srivastava —a voice that cuts through the noise and grabs you by the soul. With a raw, emotional edge and the stage presence of a lightning strike, our frontman doesn't just sing the lyrics, he lives them. Every scream, whisper, and melody tells a story, channeling life's chaos into something brutally honest and beautifully loud. Fueled by a mix of rebellion, passion, and grit, Utkarsh brings both vulnerability and power to the mic, commanding attention the second they step on stage. Whether it's a full-throttle anthem or a stripped-down moment of truth, Srivastava delivers every word like it could be their last. This isn't just a singer. This is the heartbeat of the band."
  },
  {
    id: 'arpit',
    name: 'Arpit Juneja',
    role: 'Lead Guitarist',
    image: '/arpit.jpg',
    bio: "Every band needs a flame—and Arpit is the spark that sets Naacheez on fire. With riffs that rip through the noise and solos that stop time, he doesn't just play guitar— he makes it scream, cry, and everything in between. Raised on distortion and raised hell, Arpit brings a mix of precision and chaos to the fretboard, channeling the spirit of rock's greats while forging a sound of his own. Whether it's a face-melting lead or a soulful breakdown, every note is played with intention, intensity, and just the right amount of danger. On stage, Arpit is all energy—lost in the moment, locked into the music, and driving the band forward like a sonic force of nature. This is more than shredding—it's storytelling through six strings."
  },
  {
    id: 'parishkrit',
    name: 'Parishkrit Pant aka Perry',
    role: 'Bassist',
    image: '/Parishkrit.jpg',
    bio: "You might not always see it coming—but you'll feel it. Perry holds down the low end of Naacheez with groove, grit, and a steady hand that keeps everything locked in and loaded. The glue between rhythm and melody, he brings the kind of bass lines that don't just support the song—they give it spine. Cool under pressure and loud when it counts, Perry knows when to sit in the pocket and when to break out with a dirty, growling riff that shakes the walls. It's not about showing off—it's about making the whole band hit harder, deeper, and dirtier. On stage, he brings a quiet confidence and a thundering presence. The foundation. The groove. The calm in the storm—and sometimes, the storm itself."
  },
  {
    id: 'amit',
    name: 'Amit Mathews',
    role: 'Drummer',
    image: '/amit.jpg',
    bio: "Behind every earthquake of a song is Amit, the pulse and power of Naacheez. With sticks flying and rhythms pounding like war drums, he is the driving force that keeps the chaos in check—and sometimes lets it loose. More than just keeping time, Amit builds the backbone of the band's sound: tight when it needs to be, wild when it has to be. From thunderous fills to groove-heavy breakdowns, every beat hits with intention and attitude. It's not just rhythm—it's raw energy, sweat, and instinct. On stage, he is a blur of motion, locked in and unshakable. No spotlight needed—just a kick, a snare, and a fire that doesn't quit."
  },
  {
    id: 'prateek',
    name: 'Prateek Gupta',
    role: 'Keyboardist',
    image: '/prateek.jpg',
    bio: "While the guitars scream and the drums thunder, it's the keyboard that adds the fire, the flair, and the unexpected twist. Prateek Gupta is the sonic architect behind Naacheez's atmosphere—blending moody textures, gritty synths, and vintage tones into a sound that cuts deeper than just rock. Whether it's laying down haunting melodies, building walls of sound, or tearing through solos with wild intensity, he brings a cinematic edge that makes every track hit harder and linger longer. Classically trained? Maybe. Self-taught? Probably. Either way, Prateek turns keys into chaos—and calm—whenever the song demands it. In a world of distortion and feedback, the keys are the secret weapon. And Prateek knows exactly how to use them. He also produces the songs for the band and is a mastermind behind their song 'Ritu Aawe'."
  }
];

export default function Band() {
  const [selectedMember, setSelectedMember] = useState(null);
  const hoverTimeoutRef = useRef(null);
  const modalRef = useRef(null);

  // Detect click outside modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setSelectedMember(null);
      }
    };

    if (selectedMember) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedMember]);

  const handleMouseEnter = (member) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);

    hoverTimeoutRef.current = setTimeout(() => {
      setSelectedMember(member);
      hoverTimeoutRef.current = null;
    }, 1200);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };

  const closeModal = () => {
    setSelectedMember(null);
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };

  const handleModalMouseLeave = () => {
    closeModal();
  };

  return (
    <section
      id="band"
      className="min-h-screen px-6 py-16 md:px-12 lg:px-24 relative overflow-hidden"
      style={{ backgroundColor: '#F7FEF9' }}
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/30 via-transparent to-pink-100/30"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="h-20 md:h-32"></div>
        <div className="mb-16 relative">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 text-black">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Band</span>
          </h1>
          <div
            className="absolute left-1/2 transform -translate-x-1/2 h-1 bg-black origin-center"
            style={{
              width: '100vw',
              left: '50%',
              marginLeft: '-50vw'
            }}
          ></div>
        </div>

        {/* Band Members Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {bandMembers.slice(0, 3).map((member) => (
              <div
                key={member.id}
                className="relative group cursor-pointer"
                onMouseEnter={() => handleMouseEnter(member)}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className="relative bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden
                  transition-all duration-300 ease-out transform
                  hover:scale-105 hover:shadow-2xl hover:border-purple-300 w-full h-96"
                >
                  <div className="relative h-full overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      onError={(e) => {
                        e.target.src =
                          'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=400';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white text-xl font-bold">{member.name}</h3>
                      <p className="text-purple-300 text-base font-semibold">{member.role}</p>
                    </div>
                    <div className="absolute top-6 right-6 bg-black/50 backdrop-blur-sm text-white px-3 py-2 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Hold to view bio
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl">
              {bandMembers.slice(3, 5).map((member) => (
                <div
                  key={member.id}
                  className="relative group cursor-pointer"
                  onMouseEnter={() => handleMouseEnter(member)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div
                    className="relative bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden
                    transition-all duration-300 ease-out transform
                    hover:scale-105 hover:shadow-2xl hover:border-purple-300 w-full h-96"
                  >
                    <div className="relative h-full overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        onError={(e) => {
                          e.target.src =
                            'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=400';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-white text-xl font-bold">{member.name}</h3>
                        <p className="text-purple-300 text-base font-semibold">{member.role}</p>
                      </div>
                      <div className="absolute top-6 right-6 bg-black/50 backdrop-blur-sm text-white px-3 py-2 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Hold to view bio
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="text-center mt-16">
          <p className="text-gray-700 mb-6 text-lg">Ready to experience Naacheez live?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105">
              Book a Show
            </button>
            <button className="bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedMember && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onMouseLeave={handleModalMouseLeave}
        >
          <div
            ref={modalRef}
            className="relative max-w-6xl w-full max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in duration-500"
            style={{ backgroundColor: '#F7FEF9' }}
            onMouseEnter={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 z-10 bg-black/50 backdrop-blur-sm text-white p-3 rounded-full hover:bg-black/70 transition-all duration-300 hover:scale-110"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="grid md:grid-cols-2 h-full">
              <div className="relative h-64 md:h-full">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=800';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h2 className="text-white text-4xl md:text-5xl font-black mb-2">
                    {selectedMember.name}
                  </h2>
                  <p className="text-purple-300 text-xl font-bold">{selectedMember.role}</p>
                </div>
              </div>

              <div className="p-8 md:p-12 overflow-y-auto">
                {/* Mobile header */}
                <div className="mb-8 md:hidden">
                  <h3 className="text-3xl font-black text-black mb-2">{selectedMember.name}</h3>
                  <p className="text-purple-600 text-lg font-semibold mb-4">{selectedMember.role}</p>
                </div>

                <div className="space-y-6">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {selectedMember.bio}
                  </p>
                </div>

                {/* Decorative element */}
                <div className="absolute bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full opacity-10 blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
