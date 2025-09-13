import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Studio Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="https://i.postimg.cc/YqtGN1NK/IMG-20250808-WA0128.jpg"
                alt="Shobha Beauty Studio Logo"
                className="h-12 w-12 object-contain rounded-lg bg-white/10 p-1"
              />
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl text-white">
                  Shobha Beauty Studio & Nails
                </span>
                <span className="font-sans text-sm text-sky-400 -mt-1">
                  Premium Beauty Salon in Bur Dubai
                </span>
                <span className="font-sans text-xs text-yellow-400 font-semibold mt-1">
                  Since 2011
                </span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Your trusted beauty destination in the heart of Meena Bazaar, Bur Dubai. 
              Specializing in hair straightening, blow dry, mehendi, and press-on nails 
              since 2011 with 13+ years of professional experience.
            </p>
            
            {/* Social Media */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Follow us:</span>
              <a
                href="https://www.instagram.com/shobhasaloon"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sky-400 hover:text-sky-300 transition-colors"
              >
                <span className="text-xl">📷</span>
                <span className="text-sm font-medium">@shobhasaloon</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/services" 
                  className="text-gray-300 hover:text-sky-400 transition-colors text-sm"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link 
                  href="/pricing" 
                  className="text-gray-300 hover:text-sky-400 transition-colors text-sm"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link 
                  href="/gallery" 
                  className="text-gray-300 hover:text-sky-400 transition-colors text-sm"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-gray-300 hover:text-sky-400 transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/book" 
                  className="text-sky-400 hover:text-sky-300 transition-colors text-sm font-medium"
                >
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <span className="text-sky-400 mt-0.5">📍</span>
                <div>
                  <p className="text-gray-300">Meena Bazaar</p>
                  <p className="text-gray-300">Bur Dubai, UAE</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="text-sky-400">📞</span>
                <a 
                  href="tel:+97143591532"
                  className="text-gray-300 hover:text-sky-400 transition-colors"
                >
                  +971 4 359 1532
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="text-sky-400">✉️</span>
                <a 
                  href="mailto:Shobhabeautysaloon@gmail.com"
                  className="text-gray-300 hover:text-sky-400 transition-colors break-all"
                >
                  Shobhabeautysaloon@gmail.com
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="text-sky-400">🕒</span>
                <div>
                  <p className="text-gray-300 font-medium">Daily: 10:00 AM - 10:00 PM</p>
                  <p className="text-sky-400 text-xs">Open 365 days a year</p>
                </div>
              </div>
            </div>

            {/* WhatsApp Quick Contact */}
            <div className="mt-6">
              <a
                href="https://wa.me/97143591532"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm transition-colors"
              >
                <span>💬</span>
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p>
              © {new Date().getFullYear()} Shobha Beauty Studio & Nails. All rights reserved.
            </p>
            <p className="flex items-center space-x-4">
              <span>🌐 www.shobhabeautystudio.com</span>
              <span className="hidden md:inline">|</span>
              <span className="text-yellow-400 font-semibold">Serving Since 2011</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}