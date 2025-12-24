// import React, { useEffect, useState, useRef } from 'react';
// import { Music, Instagram, Youtube } from 'lucide-react';

// export default function Footer() {
//   const [isVisible, setIsVisible] = useState(false);
//   const footerRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       {
//         threshold: 0.2, // Trigger when 20% of footer is visible
//         rootMargin: '0px 0px -50px 0px'
//       }
//     );

//     if (footerRef.current) {
//       observer.observe(footerRef.current);
//     }

//     return () => {
//       if (footerRef.current) {
//         observer.unobserve(footerRef.current);
//       }
//     };
//   }, []);

//   return (
//     <footer 
//       ref={footerRef}
//       id="contact" 
//       className="relative bg-black text-white py-20 overflow-hidden"
//     >
//       {/* Background Image */}
//       <div 
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
//         style={{
//           backgroundImage: 'url(https://drive.google.com/uc?export=view&id=1Ny2eDt7e3cPFUp3cAId-GVKs2_Hp_wW2)'
//         }}
//       ></div>
      
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="relative z-10">
          
//           {/* Main Content Grid */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            
//             {/* Left Side - Large Text */}
//             <div className="text-left">
//               <h2 className={`text-4xl md:text-6xl lg:text-7xl font-bold leading-tight transition-all duration-1200 transform ${
//                 isVisible 
//                   ? 'opacity-100 translate-y-0' 
//                   : 'opacity-0 translate-y-12'
//               }`}>
//                 <span className="text-white">Let's</span>
//                 <br />
//                 <span className="text-white">Collaborate</span>
//               </h2>
              
//               <p className={`text-gray-300 text-lg md:text-xl mt-6 max-w-md transition-all duration-1200 delay-300 transform ${
//                 isVisible 
//                   ? 'opacity-100 translate-y-0' 
//                   : 'opacity-0 translate-y-8'
//               }`}>
//                 Let's work together to create a mix that brings
//                 your music to life.
//               </p>
//             </div>

//             {/* Right Side - Reach Out Button */}
//             <div className={`flex justify-center lg:justify-end transition-all duration-1200 delay-500 transform ${
//               isVisible 
//                 ? 'opacity-100 translate-y-0' 
//                 : 'opacity-0 translate-y-8'
//             }`}>
//               <button className="border-2 border-white text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 hover:scale-105">
//                 REACH OUT
//               </button>
//             </div>
//           </div>

//           {/* Footer Info Section */}
//           <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1200 delay-700 transform ${
//             isVisible 
//               ? 'opacity-100 translate-y-0' 
//               : 'opacity-0 translate-y-12'
//           }`}>
            
//             {/* Brand Section */}
//             {/* <div className="col-span-1">
//               <div className="flex items-center mb-4">
//                 <Music className="w-8 h-8 text-orange-400 mr-3" />
//                 <h3 className="text-2xl font-bold">NAACHEEZ</h3>
//               </div>
//               <p className="text-gray-300 mb-6 max-w-md">
//                 Creating unforgettable musical experiences that resonate with souls 
//                 and bring people together through the power of sound.
//               </p>
//               <div className="flex space-x-4">
//                 <a 
//                   href="https://www.instagram.com/naacheezofficial?igsh=MTFlc2g4NWM5N3pkbg=="
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-gray-400 hover:text-orange-400 transition-colors transform hover:scale-110"
//                   aria-label="Follow us on Instagram"
//                 >
//                   <Instagram size={24} />
//                 </a>
//                 <a 
//                   href="https://www.youtube.com/@naacheezmusic"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-gray-400 hover:text-orange-400 transition-colors transform hover:scale-110"
//                   aria-label="Subscribe to our YouTube channel"
//                 >
//                   <Youtube size={24} />
//                 </a>
//               </div>
//             </div> */}
            
//             {/* Quick Links */}
//             {/* <div>
//               <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
//               <ul className="space-y-2">
//                 <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
//                 <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a></li>
//                 <li><a href="#band" className="text-gray-300 hover:text-white transition-colors">Band</a></li>
//                 <li><a href="#video" className="text-gray-300 hover:text-white transition-colors">Music</a></li>
//                 <li><a href="#gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</a></li>
//               </ul>
//             </div> */}
            
//             {/* Contact Info */}
//             <div>
//               {/* <h4 className="text-lg font-semibold mb-4">Contact</h4> */}
//               {/* <div className="space-y-2 text-gray-300">
//                 <p>booking@naacheez-band.com</p>
//                 <p>+91 (XXX) XXX-XXXX</p>
//                 <p>Lucknow, India</p>
//               </div> */}
//             </div>
//           </div>
//         </div>
        
//         {/* Copyright */}
//         {/* <div className={`relative z-10 border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 transition-all duration-1200 delay-900 transform ${
//           isVisible 
//             ? 'opacity-100 translate-y-0' 
//             : 'opacity-0 translate-y-8'
//         }`}>
//           <p>&copy; 2025 Naacheez. All rights reserved.</p>
//         </div> */}
//       </div>
//     </footer>
//   );
// }


import React, { useEffect, useState, useRef } from 'react';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <>
      <footer
        ref={footerRef}
        id="contact"
        className="relative bg-black text-white py-20 overflow-hidden"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage:
              'url(https://drive.google.com/uc?export=view&id=1Ny2eDt7e3cPFUp3cAId-GVKs2_Hp_wW2)'
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10">

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">

              {/* Left */}
              <div>
                <h2
                  className={`text-4xl md:text-6xl lg:text-7xl font-bold leading-tight transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                >
                  Let&apos;s
                  <br />
                  Collaborate
                </h2>

                <p
                  className={`text-gray-300 text-lg md:text-xl mt-6 max-w-md transition-all duration-1000 delay-300 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  Let&apos;s work together to create a mix that brings
                  your music to life.
                </p>
              </div>

              {/* Right */}
              <div
                className={`flex justify-center lg:justify-end transition-all duration-1000 delay-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <button
                  onClick={() => setOpen(true)}
                  className="border-2 border-white text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
                >
                  REACH OUT
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="bg-white text-black rounded-2xl w-full max-w-md p-6 relative">

            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-4 text-2xl font-bold"
            >
              ×
            </button>

            <h3 className="text-2xl font-bold mb-4">
              Message on WhatsApp
            </h3>

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
              className="w-full h-32 border rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            {/* Send */}
            <a
              href={`https://wa.me/918178144604?text=${encodeURIComponent(message)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 bg-green-500 text-white text-center py-3 rounded-full font-semibold hover:bg-green-600 transition"
            >
              Send Message
            </a>

            <div className="text-center text-gray-400 my-3">or</div>

            {/* Direct WhatsApp */}
            <a
              href="https://wa.me/918178144604"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-green-600 font-medium hover:underline"
            >
              Contact on WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  );
}
