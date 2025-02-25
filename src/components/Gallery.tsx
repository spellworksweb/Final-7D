import React from 'react';
import { Camera } from 'lucide-react';

function Gallery() {
  const galleryImages = [
    'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    'https://img.freepik.com/premium-photo/advertising-style-photo-professional-car-wash_521733-5867.jpg',
    'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1605515298946-d062f2e9da53?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
  ];

  return (
    <section id="gallery" className="py-20 bg-dark-lighter">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Our <span className="text-gold">Gallery</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden group rounded-lg shadow-lg transform hover:scale-105 transition-all duration-500"
            >
              <img 
                src={image}
                alt="Car detailing"
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-darker to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Camera className="text-gold w-8 h-8" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;