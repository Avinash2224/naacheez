import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const concertPhotos = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    alt: "Live performance at Madison Square Garden",
    title: "Madison Square Garden 2024"
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    alt: "Intimate acoustic set",
    title: "Acoustic Sessions"
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    alt: "Festival main stage performance",
    title: "Summer Festival 2024"
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    alt: "Behind the scenes studio session",
    title: "Studio Sessions"
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/1677710/pexels-photo-1677710.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    alt: "Crowd singing along",
    title: "Fan Connection"
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    alt: "Guitar solo spotlight",
    title: "Guitar Spotlight"
  },
  {
    id: 7,
    src: "https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    alt: "Drum performance",
    title: "Rhythm Section"
  },
  {
    id: 8,
    src: "https://images.pexels.com/photos/1644888/pexels-photo-1644888.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    alt: "Band group shot on stage",
    title: "Together on Stage"
  }
];

export default function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const openLightbox = (photoId: number) => {
    setSelectedPhoto(photoId);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const navigatePhoto = (direction: 'prev' | 'next') => {
    if (selectedPhoto === null) return;
    
    const currentIndex = concertPhotos.findIndex(photo => photo.id === selectedPhoto);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : concertPhotos.length - 1;
    } else {
      newIndex = currentIndex < concertPhotos.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedPhoto(concertPhotos[newIndex].id);
  };

  const selectedPhotoData = concertPhotos.find(photo => photo.id === selectedPhoto);

  return (
    <section id="gallery" className="relative py-20 bg-black overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{
          backgroundImage: 'url(https://drive.google.com/uc?export=view&id=15krOB40YGlNqClJ-KYrZdQcb5nbQzDfe)'
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Concert Gallery
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Relive the energy and passion of our live performances. 
            These moments capture the connection between our music and our fans.
          </p>
        </div>

        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {concertPhotos.map((photo) => (
            <div 
              key={photo.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-105"
              onClick={() => openLightbox(photo.id)}
            >
              <img 
                src={photo.src}
                alt={photo.alt}
                className="w-full h-64 object-cover group-hover:brightness-110 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">{photo.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedPhoto && selectedPhotoData && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
          >
            <X size={32} />
          </button>
          
          <button
            onClick={() => navigatePhoto('prev')}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
          >
            <ChevronLeft size={48} />
          </button>
          
          <button
            onClick={() => navigatePhoto('next')}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
          >
            <ChevronRight size={48} />
          </button>

          <div className="max-w-4xl max-h-full">
            <img 
              src={selectedPhotoData.src}
              alt={selectedPhotoData.alt}
              className="max-w-full max-h-full object-contain"
            />
            <div className="text-center mt-4">
              <h3 className="text-white text-xl font-semibold">{selectedPhotoData.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}