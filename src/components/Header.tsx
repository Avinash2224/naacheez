// import { useEffect, useState } from 'react';
// import { Menu, X } from 'lucide-react';

// interface HeaderProps {
//   isMenuOpen: boolean;
//   setIsMenuOpen: (open: boolean) => void;
// }

// export default function Header({ isMenuOpen, setIsMenuOpen }: HeaderProps) {
//   const [showHeader, setShowHeader] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > lastScrollY) {
//         // scrolling down → hide
//         setShowHeader(false);
//       } else {
//         // scrolling up → show
//         setShowHeader(true);
//       }
//       setLastScrollY(window.scrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   // Function to handle smooth scrolling and close mobile menu
//   const handleNavClick = (targetId: string) => {
//     setIsMenuOpen(false);
//     const targetElement = document.getElementById(targetId);
//     if (targetElement) {
//       targetElement.scrollIntoView({
//         behavior: 'smooth',
//         block: 'start'
//       });
//     }
//   };

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm transform transition-transform duration-300 ${
//         showHeader ? "translate-y-0" : "-translate-y-full"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo Image */}
//           <div className="flex items-center">
//             <img 
//               src="/logo-center.png" 
//               alt="Naacheez Logo" 
//               className="h-10 md:h-12 w-auto transition-all duration-300 hover:scale-105"
//               onError={(e) => {
//                 // Fallback to text if image doesn't load
//                 e.target.style.display = 'none';
//                 e.target.nextSibling.style.display = 'block';
//               }}
//             />
//             {/* Fallback text (hidden by default) */}
//             <h1 className="hidden text-white text-xl md:text-2xl font-bold tracking-wider">
//               NAACHEEZ
//             </h1>
//           </div>
          
//           {/* Desktop Navigation */}
//           <nav className="hidden md:block">
//             <div className="ml-10 flex items-baseline space-x-8">
//               {["home", "about", "band", "contact"].map((item) => (
//                 <a
//                   key={item}
//                   href={`#${item}`}
//                   onClick={(e) => {
//                     e.preventDefault();
//                     handleNavClick(item);
//                   }}
//                   className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors cursor-pointer"
//                 >
//                   {item.charAt(0).toUpperCase() + item.slice(1)}
//                 </a>
//               ))}
//             </div>
//           </nav>

//           {/* Mobile Menu Toggle */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="text-gray-300 hover:text-white p-2"
//             >
//               {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-black/95 backdrop-blur-sm">
//           <div className="px-2 pt-2 pb-3 space-y-1">
//             {["home", "about", "band", "contact"].map((item) => (
//               <a
//                 key={item}
//                 href={`#${item}`}
//                 onClick={(e) => {
//                   e.preventDefault();
//                   handleNavClick(item);
//                 }}
//                 className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium cursor-pointer"
//               >
//                 {item.charAt(0).toUpperCase() + item.slice(1)}
//               </a>
//             ))}
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }


import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export default function Header({ isMenuOpen, setIsMenuOpen }: HeaderProps) {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling down → hide
        setShowHeader(false);
      } else {
        // scrolling up → show
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Function to handle smooth scrolling and close mobile menu
  const handleNavClick = (targetId: string) => {
    setIsMenuOpen(false);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm transform transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Image - Enhanced Mobile Responsiveness */}
          <div className="flex items-center">
            <img 
              src="/logo-center.png" 
              alt="Naacheez Logo" 
              className="h-8 sm:h-9 md:h-10 lg:h-12 w-auto max-w-[120px] sm:max-w-[140px] md:max-w-[160px] lg:max-w-none transition-all duration-300 hover:scale-105 object-contain"
              onError={(e) => {
                // Fallback to text if image doesn't load
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            {/* Fallback text with responsive sizing */}
            <h1 className="hidden text-white text-lg sm:text-xl md:text-2xl font-bold tracking-wider">
              NAACHEEZ
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {["home", "about", "band", "contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item);
                  }}
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors cursor-pointer"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              ))}
            </div>
          </nav>

          {/* Mobile Menu Toggle - Enhanced */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-md transition-all duration-200 hover:bg-white/10"
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Enhanced */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {["home", "about", "band", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item);
                }}
                className="text-gray-300 hover:text-white hover:bg-white/10 block px-4 py-3 text-base font-medium cursor-pointer rounded-md transition-all duration-200"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
