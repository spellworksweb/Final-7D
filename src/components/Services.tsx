import React, { useState } from 'react';
import { FileText, Star, Quote, X, Download } from 'lucide-react';

function Services() {
  const [selectedPDF, setSelectedPDF] = useState<string | null>(null);
  
  const pdfUrls = {
    "Sedan & SUV": "/pdfs/SedanSUV.pdf",
    "Hatchback": "/pdfs/Hatchback.pdf",
    "XUV": "/pdfs/XUV.pdf"
  };

  const handleViewPDF = (vehicleType: string) => {
    const pdfUrl = pdfUrls[vehicleType as keyof typeof pdfUrls];
    window.location.href = pdfUrl;
  };

  const testimonials = [
    {
      name: "Karthikeyan",
      rating: 5,
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      review: "Exceptional service in Chennai! The ceramic coating they applied on my car is outstanding. Best car detailing service in Chennai!",
      date: "February 2025"
    },
    {
      name: "Lakshmi",
      rating: 5,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      review: "Got my SUV detailed at 7D. Their attention to detail is amazing. The interior looks and smells brand new. Highly recommend their premium package!",
      date: "January 2025"
    },
    {
      name: "Senthil Kumar",
      rating: 5,
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      review: "Best car detailing center in Chennai! Their graphene coating package is worth every rupee. My Sedan looks better than showroom condition.",
      date: "December 2024"
    }
  ];

  return (
    <>
      <section id="services" className="py-12 md:py-20 bg-dark-lighter">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16">
            Our <span className="text-gold">Services</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Sedan & SUV",
                image: "/images/gallery/sedan.jfif",
                price: "Rs.600/- onwards",
                features: [
                  "Basic Package",
                  "Standard Package",
                  "Premium Package",
                  "Graphene Coating",
                  "Ceramic Coating"
                ]
              },
              {
                title: "Hatchback",
                image: "/images/gallery/hatchback.jfif",
                price: "Rs.500/- onwards",
                features: [
                  "Basic Package",
                  "Standard Package",
                  "Premium Package",
                  "Graphene Coating",
                  "Ceramic Coating"
                ]
              },
              {
                title: "XUV",
                image: "/images/gallery/xuv.jfif",
                price: "Rs.800/- onwards",
                features: [
                  "Basic Package",
                  "Standard Package",
                  "Premium Package",
                  "Graphene Coating",
                  "Ceramic Coating"
                ]
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className="group relative bg-gradient-card rounded-lg overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl"
              >
                <div className="relative h-48 md:h-64 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-darker via-dark-darker/50 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                      <p className="text-white text-sm leading-relaxed"></p>
                    </div>
                  </div>
                </div>

                <div className="p-4 md:p-6">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-gold">{service.title}</h3>
                  <p className="text-lg md:text-xl font-semibold mb-4 text-white/80">{service.price}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-gold rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => handleViewPDF(service.title)}
                      className="flex-1 bg-gold text-dark-darker px-4 md:px-6 py-3 rounded-full font-bold hover:bg-gold-light transition-all duration-300 shadow-lg transform hover:scale-105 flex items-center justify-center"
                    >
                      <FileText className="w-5 h-5 mr-2" />
                      View Details
                    </button>
                    <a 
                      href={pdfUrls[service.title as keyof typeof pdfUrls]}
                      download
                      className="bg-gold text-dark-darker px-4 py-3 rounded-full font-bold hover:bg-gold-light transition-all duration-300 shadow-lg transform hover:scale-105 flex items-center justify-center"
                      aria-label="Download PDF"
                    >
                      <Download size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-dark-lighter to-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Google Reviews Summary */}
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center justify-center space-x-2 mb-4">
                <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-8 md:h-8">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                <span className="text-xl md:text-2xl font-bold">Google Reviews</span>
              </div>
              <div className="flex items-center justify-center space-x-4 mb-6">
                <span className="text-4xl md:text-5xl font-bold text-gold">4.9</span>
                <div>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((_, index) => (
                      <Star key={index} className="w-5 h-5 md:w-6 md:h-6 text-gold fill-current" />
                    ))}
                  </div>
                  <p className="text-sm md:text-base text-gray-400 mt-1">Based on 100+ reviews</p>
                </div>
              </div>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-gradient-card p-4 md:p-6 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-start mb-4">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover mr-3 md:mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gold text-sm md:text-base">{testimonial.name}</h4>
                      <div className="flex items-center mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 md:w-4 md:h-4 text-gold fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <Quote className="w-6 h-6 md:w-8 md:h-8 text-gold/20 absolute -top-2 -left-2" />
                    <p className="text-sm md:text-base text-gray-300 relative z-10 pl-4">{testimonial.review}</p>
                  </div>
                  <p className="text-xs md:text-sm text-gray-400 mt-4">{testimonial.date}</p>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-12 md:mt-16 grid grid-cols-3 gap-4 md:gap-8">
              <div className="text-center transform hover:scale-110 transition-transform duration-300">
                <div className="text-3xl md:text-5xl font-bold text-gold mb-1 md:mb-2">5000+</div>
                <div className="text-sm md:text-lg text-gray-400">Cars Detailed</div>
              </div>
              <div className="text-center transform hover:scale-110 transition-transform duration-300">
                <div className="text-3xl md:text-5xl font-bold text-gold mb-1 md:mb-2">100%</div>
                <div className="text-sm md:text-lg text-gray-400">Satisfaction Rate</div>
              </div>
              <div className="text-center transform hover:scale-110 transition-transform duration-300">
                <div className="text-3xl md:text-5xl font-bold text-gold mb-1 md:mb-2">10+</div>
                <div className="text-sm md:text-lg text-gray-400">Years Experience</div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12 md:mt-16">
              <a 
                href="https://maps.app.goo.gl/5E6ENQqkYaeMpFAv5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-dark-darker px-6 md:px-8 py-2 md:py-3 rounded-full font-bold hover:bg-gold transition-all duration-300 transform hover:scale-105 shadow-lg text-sm md:text-base"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 md:w-5 md:h-5 mr-2">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Write a Review
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;