"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const beautyImages = [
    {
      src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=600&fit=crop",
      alt: "Elegant beauty salon interior"
    },
    {
      src: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=800&h=600&fit=crop", 
      alt: "Professional nail art showcase"
    },
    {
      src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=600&fit=crop",
      alt: "Hair styling professional service"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % beautyImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [beautyImages.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      
      {/* Elegant Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-transparent to-rose-50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Hero Content - Left Side */}
            <div className="text-center lg:text-left space-y-8">
              {/* Main Headlines */}
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-medium">
                  <span className="w-2 h-2 bg-sky-500 rounded-full animate-pulse"></span>
                  <span>Premium Beauty Salon Since 2011</span>
                </div>
                
                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="text-gray-900">Your Beauty</span>
                  <span className="block bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                    Destination
                  </span>
                  <span className="block text-3xl md:text-4xl lg:text-5xl font-medium text-gray-600 mt-3">
                    in Bur Dubai
                  </span>
                </h1>
              </div>
              
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Experience luxury beauty services at <strong>Shobha Beauty Studio & Nails</strong> in Meena Bazaar. 
                Specializing in hair straightening, blow dry, mehendi, and press-on nails.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-4">
                <Link
                  href="#book"
                  className="group bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 text-white px-10 py-5 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <span className="flex items-center space-x-2">
                    <span>📅</span>
                    <span>Book Appointment</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                </Link>
                
                <a
                  href="tel:+97143591532"
                  className="group border-3 border-sky-500 text-sky-600 px-10 py-5 rounded-full font-semibold text-lg hover:bg-sky-500 hover:text-white hover:shadow-xl transition-all duration-300"
                >
                  <span className="flex items-center space-x-2">
                    <span>📞</span>
                    <span>Call Now</span>
                  </span>
                </a>
              </div>

              {/* Quick Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-sky-100 text-center hover:shadow-lg transition-all duration-300">
                  <div className="text-sky-500 text-2xl mb-2">🕒</div>
                  <div className="text-sm font-semibold text-gray-800">Daily 10AM-10PM</div>
                  <div className="text-xs text-gray-600">365 Days Open</div>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-sky-100 text-center hover:shadow-lg transition-all duration-300">
                  <div className="text-sky-500 text-2xl mb-2">📍</div>
                  <div className="text-sm font-semibold text-gray-800">Meena Bazaar</div>
                  <div className="text-xs text-gray-600">Bur Dubai, UAE</div>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-sky-100 text-center hover:shadow-lg transition-all duration-300">
                  <div className="text-sky-500 text-2xl mb-2">⭐</div>
                  <div className="text-sm font-semibold text-gray-800">Since 2011</div>
                  <div className="text-xs text-gray-600">13+ Years Experience</div>
                </div>
              </div>
            </div>

            {/* Hero Image Slider - Right Side */}
            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/5] relative">
                  {beautyImages.map((image, index) => (
                    <img
                      key={index}
                      src={image.src}
                      alt={image.alt}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0'
                      }`}
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.src = `https://placehold.co/800x1000/0EA5E9/FFFFFF?text=Shobha+Beauty+Studio`;
                      }}
                    />
                  ))}
                  
                  {/* Elegant overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  
                  {/* Slide indicators */}
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {beautyImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentSlide 
                            ? 'bg-white shadow-lg scale-125' 
                            : 'bg-white/60 hover:bg-white/80'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-sky-200 to-blue-300 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-rose-200 to-pink-300 rounded-full opacity-40 animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Services Section */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50/50 to-rose-50/30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-sky-100 text-sky-700 px-6 py-3 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-sky-500 rounded-full"></span>
              <span>Professional Beauty Services</span>
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Specialty <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our range of premium beauty treatments designed to enhance your natural beauty 
              and boost your confidence with expert care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Hair Straightening */}
            <div className="group relative bg-white p-8 rounded-3xl border border-gray-100 hover:border-sky-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-50/50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-sky-400 to-sky-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <span className="text-3xl text-white">✨</span>
                </div>
                
                <h3 className="font-serif font-bold text-2xl text-gray-900 mb-4 group-hover:text-sky-600 transition-colors">
                  Hair Straightening
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Professional keratin treatments and chemical straightening for silky, smooth hair that lasts months.
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sky-600 font-bold text-lg">From AED 200</span>
                  <Link
                    href="/services#hair-straightening"
                    className="text-sky-500 hover:text-sky-700 font-medium flex items-center space-x-1 group-hover:translate-x-1 transition-all"
                  >
                    <span>Learn More</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Blow Dry */}
            <div className="group relative bg-white p-8 rounded-3xl border border-gray-100 hover:border-sky-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-50/50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-sky-400 to-sky-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <span className="text-3xl text-white">💨</span>
                </div>
                
                <h3 className="font-serif font-bold text-2xl text-gray-900 mb-4 group-hover:text-sky-600 transition-colors">
                  Professional Blow Dry
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Expert styling with professional tools for perfect volume, bounce, and lasting hold.
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sky-600 font-bold text-lg">From AED 50</span>
                  <Link
                    href="/services#blow-dry"
                    className="text-sky-500 hover:text-sky-700 font-medium flex items-center space-x-1 group-hover:translate-x-1 transition-all"
                  >
                    <span>Learn More</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Mehendi */}
            <div className="group relative bg-white p-8 rounded-3xl border border-gray-100 hover:border-sky-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-50/50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-sky-400 to-sky-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <span className="text-3xl text-white">🎨</span>
                </div>
                
                <h3 className="font-serif font-bold text-2xl text-gray-900 mb-4 group-hover:text-sky-600 transition-colors">
                  Mehendi & Henna
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Beautiful traditional and contemporary henna designs for all occasions and celebrations.
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sky-600 font-bold text-lg">From AED 30</span>
                  <Link
                    href="/services#mehendi"
                    className="text-sky-500 hover:text-sky-700 font-medium flex items-center space-x-1 group-hover:translate-x-1 transition-all"
                  >
                    <span>Learn More</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Press-on Nails */}
            <div className="group relative bg-white p-8 rounded-3xl border border-gray-100 hover:border-sky-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-50/50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-sky-400 to-sky-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <span className="text-3xl text-white">💅</span>
                </div>
                
                <h3 className="font-serif font-bold text-2xl text-gray-900 mb-4 group-hover:text-sky-600 transition-colors">
                  Press-on Nails
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Instant glamorous nails with premium press-on application for perfect manicured look.
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sky-600 font-bold text-lg">From AED 80</span>
                  <Link
                    href="/services#press-on-nails"
                    className="text-sky-500 hover:text-sky-700 font-medium flex items-center space-x-1 group-hover:translate-x-1 transition-all"
                  >
                    <span>Learn More</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link
              href="/services"
              className="inline-flex items-center space-x-3 bg-sky-500 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-sky-600 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <span>View All Services</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Elegant Why Choose Us */}
      <section className="py-24 bg-gradient-to-br from-sky-600 via-sky-500 to-blue-600 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Shobha Beauty Studio?
            </h2>
            <p className="text-xl text-sky-100 max-w-3xl mx-auto leading-relaxed">
              Your trusted beauty partner in Bur Dubai with exceptional service, 
              premium products, and years of expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center group">
              <div className="w-28 h-28 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <span className="text-5xl">👑</span>
              </div>
              <h3 className="font-serif font-bold text-2xl text-white mb-4">
                Since 2011 - 13+ Years
              </h3>
              <p className="text-sky-100 text-lg leading-relaxed">
                Over 13 years of professional beauty services with thousands of satisfied clients 
                across Dubai and UAE.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-28 h-28 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <span className="text-5xl">🏆</span>
              </div>
              <h3 className="font-serif font-bold text-2xl text-white mb-4">
                Premium Products
              </h3>
              <p className="text-sky-100 text-lg leading-relaxed">
                We use only the finest quality products from trusted international brands 
                for exceptional results.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-28 h-28 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <span className="text-5xl">🕒</span>
              </div>
              <h3 className="font-serif font-bold text-2xl text-white mb-4">
                Always Open
              </h3>
              <p className="text-sky-100 text-lg leading-relaxed">
                Open daily from 10 AM to 10 PM, 365 days a year for your convenience 
                and beauty needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Elegant Call to Action */}
      <section id="book" className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-900/20 to-transparent"></div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/5 backdrop-blur-xl p-12 md:p-16 rounded-3xl border border-white/10">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Look?
            </h2>
            <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Book your appointment today and experience the luxury and professionalism 
              at Shobha Beauty Studio & Nails.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/book"
                className="group bg-gradient-to-r from-sky-500 to-blue-600 text-white px-12 py-5 rounded-full font-bold text-xl shadow-2xl hover:shadow-sky-500/50 transform hover:scale-105 transition-all duration-300"
              >
                <span className="flex items-center space-x-3">
                  <span>📅</span>
                  <span>Book Appointment</span>
                  <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
              </Link>
              
              <a
                href="https://wa.me/97143591532?text=Hello! मुझे appointment book करनी है Shobha Beauty Studio में। कृपया availability बताएं। धन्यवाद!"
                target="_blank"
                rel="noopener noreferrer"
                className="group border-3 border-white text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-white hover:text-gray-900 hover:shadow-2xl transition-all duration-300"
              >
                <span className="flex items-center space-x-3">
                  <span>💬</span>
                  <span>WhatsApp Us</span>
                </span>
              </a>
            </div>

            {/* Contact Info */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex items-center justify-center space-x-3">
                  <span className="text-sky-400 text-2xl">📞</span>
                  <a href="tel:+97143591532" className="text-white hover:text-sky-400 font-semibold text-lg">
                    +971 4 359 1532
                  </a>
                </div>
                
                <div className="flex items-center justify-center space-x-3">
                  <span className="text-sky-400 text-2xl">📍</span>
                  <span className="text-white font-semibold text-lg">Meena Bazaar, Bur Dubai</span>
                </div>
                
                <div className="flex items-center justify-center space-x-3">
                  <span className="text-sky-400 text-2xl">🕒</span>
                  <span className="text-white font-semibold text-lg">Daily 10AM-10PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}