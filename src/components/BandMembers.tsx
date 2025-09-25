import React from 'react';
import { Guitar, Mic, Music, Drum, Piano } from 'lucide-react';

const bandMembers = [
  {
    name: "Alex Rivera",
    role: "Lead Vocalist & Rhythm Guitar",
    bio: "With a voice that can move mountains and lyrics that touch souls, Alex has been the driving force behind Echoes for over 8 years. His songwriting captures the essence of human emotion.",
    icon: Mic,
    image: "https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
  },
  {
    name: "Maya Chen",
    role: "Lead Guitar",
    bio: "Maya's guitar work is nothing short of magical. Her intricate solos and innovative techniques have earned her recognition as one of the most talented guitarists of her generation.",
    icon: Guitar,
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
  },
  {
    name: "Jordan Blake",
    role: "Bass Guitar",
    bio: "The heartbeat of Echoes, Jordan's bass lines provide the foundation that allows the band's sound to soar. His rhythmic precision and melodic sensibility are unmatched.",
    icon: Music,
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
  },
  {
    name: "Sam Torres",
    role: "Drums & Percussion",
    bio: "Sam brings explosive energy and dynamic rhythms that drive every Echoes performance. His versatility spans from thunderous rock beats to subtle jazz influences.",
    icon: Drum,
    image: "https://images.pexels.com/photos/1464375/pexels-photo-1464375.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
  },
  {
    name: "Riley Park",
    role: "Keyboards & Synth",
    bio: "Riley adds layers of atmospheric textures and melodic complexity to Echoes' sound. Their keyboard work ranges from haunting piano melodies to cutting-edge electronic sounds.",
    icon: Piano,
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
  }
];

export default function BandMembers() {
  return (
    <section id="band" className="relative py-20 bg-black overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: 'url(https://drive.google.com/uc?export=view&id=1EOJ4dLq6WcrZjL5E8Orru5Vqx1SzIO3e)'
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meet the Band
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Five unique voices, one powerful sound. Get to know the talented musicians 
            who bring Echoes to life on stage and in the studio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bandMembers.map((member, index) => (
            <div 
              key={member.name}
              className="group bg-gray-800 rounded-2xl overflow-hidden hover:bg-gray-750 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <member.icon className="w-8 h-8 text-orange-400" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-orange-400 font-semibold mb-4">
                  {member.role}
                </p>
                <p className="text-gray-300 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}