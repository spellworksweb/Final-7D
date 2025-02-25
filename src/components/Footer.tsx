import React from 'react';
import { Phone, MapPin, Clock, Youtube, Instagram } from 'lucide-react';

function Footer() {
  return (
    <footer className="relative bg-dark-darker border-t border-white/10 py-12 md:py-16 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <svg width="120" height="60" viewBox="0 0 160 80" className="w-auto h-8 md:h-12">
                <rect width="160" height="80" fill="transparent" rx="8" />
                {/* Crown */}
                <path
                  d="M65 20 L80 10 L95 20 L90 30 L70 30 L65 20Z"
                  fill="Yellow"
                  className="transform-origin-center"
                />
                {/* 7D Text */}
                <text
                  x="20"
                  y="50"
                  fontFamily="Inter"
                  fontSize="24"
                  fontWeight="900"
                  fill="Yellow"
                >
                  7D
                </text>
                {/* DETAILING Text */}
                <text
                  x="50"
                  y="50"
                  fontFamily="Inter"
                  fontSize="16"
                  fontWeight="700"
                  fill="Yellow"
                >
                  DETAILING
                </text>
                {/* Blue Stroke */}
                <path
                  d="M40 60 Q80 55 120 60"
                  stroke="#0066cc"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
                {/* Red Stroke */}
                <path
                  d="M40 65 Q80 70 120 65"
                  stroke="#cc0000"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <p className="text-gray-400 text-sm">
              Your trusted partner in automotive care and detailing excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div className="hidden md:block">
            <h4 className="text-lg font-semibold text-gold mb-4 text-center md:text-left">Quick Links</h4>
            <ul className="space-y-2 text-center md:text-left">
              <li>
                <a href="#home" className="text-gray-400 hover:text-gold transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-gold transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-gold transition-colors">Services</a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-gold transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-gold transition-colors">Book Appointment</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="hidden md:block">
            <h4 className="text-lg font-semibold text-gold mb-4 text-center md:text-left">Our Services</h4>
            <ul className="space-y-2 text-center md:text-left">
              <li>
                <a href="#services" className="text-gray-400 hover:text-gold transition-colors">Sedan & SUV Detailing</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-gold transition-colors">Hatchback Detailing</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-gold transition-colors">XUV Detailing</a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-lg font-semibold text-gold mb-4 text-center md:text-left">Contact Us</h4>
            <ul className="space-y-4 text-center md:text-left">
              <li className="flex items-center justify-center md:justify-start text-gray-400">
                <MapPin className="w-5 h-5 text-gold mr-2 flex-shrink-0" />
                <a 
                  href="https://maps.app.goo.gl/5E6ENQqkYaeMpFAv5" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-gold transition-colors"
                >
                  Locate Us
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start text-gray-400">
                <Phone className="w-5 h-5 text-gold mr-2 flex-shrink-0" />
                <a href="tel:+918122104339" className="hover:text-gold transition-colors">+91 81221 04339</a>
              </li>
              <li className="flex items-center justify-center md:justify-start text-gray-400">
                <Youtube className="w-5 h-5 text-gold mr-2 flex-shrink-0" />
                <a 
                  href="https://youtube.com/@7ddetailing-m2x?si=o0hy0SDUs_4BMBcP" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  7D Detailing
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start text-gray-400">
                <Instagram className="w-5 h-5 text-gold mr-2 flex-shrink-0" />
                <a 
                  href="https://www.instagram.com/7ddetailing/?utm_source=qr&igsh=MXJ3YTAwd3R1bjFncw%3D%3D#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  @7ddetailing
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start text-gray-400">
                <Clock className="w-5 h-5 text-gold mr-2 flex-shrink-0" />
                <span>Working Hours: 10:00 AM - 7:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 md:mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400">© 2025 7D Detailing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;