import React from 'react';
import { Car } from 'lucide-react';

function About() {
  return (
    <section id="about" className="py-20 bg-dark-lighter">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          About <span className="text-gold">7D Detailing</span>
        </h2>
        
        {/* Centered Quote */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="quote-container bg-gradient-to-r from-dark-darker via-dark to-dark-darker p-6 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-500 hover:shadow-2xl">
            <p className="text-2xl md:text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-gold via-gold-light to-gold animate-shimmer">
              "Your Vehicle, Our Passion"
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          <div className="bg-gradient-card p-8 rounded-lg shadow-inner-light flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-8 text-gold">Welcome to 7D detailing – Your Car's Best Friend!</h3>
            <div className="space-y-6 text-lg leading-relaxed text-gray-200">
              <p className="font-light">
                At 7D detailing, we understand that your car is more than just a vehicle—it's a part of your daily life. 
                That's why we are dedicated to providing top-quality car wash, detailing, and maintenance services to keep 
                your ride looking spotless and running smoothly.
                
                With years of experience in the automotive care industry, we have built a reputation for excellence, 
                reliability, and customer satisfaction. Whether it's a routine wash, an interior deep clean, or a full 
                ceramic coating, we treat every car as if it were our own.
              </p>
            </div>
          </div>
          <div className="bg-gradient-card rounded-lg overflow-hidden shadow-2xl h-[600px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.646374449119!2d80.13204507503167!3d13.121574387207785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5263b5dc39a473%3A0xa855f8d15f0b5d10!2s7D%20Detailing!5e0!3m2!1sen!2sin!4v1740239053931!5m2!1sen!2sin"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;