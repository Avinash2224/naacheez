import { Music, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-black text-white py-12 overflow-hi">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: 'url(https://drive.google.com/uc?export=view&id=1Ny2eDt7e3cPFUp3cAId-GVKs2_Hp_wW2)'
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Music className="w-8 h-8 text-orange-400 mr-3" />
              <h3 className="text-2xl font-bold">NAACHEEZ</h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Creating unforgettable musical experiences that resonate with souls 
              and bring people together through the power of sound.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/naacheezofficial?igsh=MTFlc2g4NWM5N3pkbg=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-400 transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://www.youtube.com/@naacheezmusic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-400 transition-colors"
                aria-label="Subscribe to our YouTube channel"
              >
                <Youtube size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#band" className="text-gray-300 hover:text-white transition-colors">Band</a></li>
              <li><a href="#gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <p>booking@naacheez-band.com</p>
              <p>+91 (XXX) XXX-XXXX</p>
              <p>India</p>
            </div>
          </div>
        </div>
        
        <div className="relative z-10 border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Naacheez. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
