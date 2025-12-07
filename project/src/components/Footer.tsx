import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              SHREE VINAYAK
            </h3>
            <p className="text-neutral-300 mb-4 sm:mb-6 text-sm sm:text-base md:text-lg">
              Premium velvet and fancy fabrics for wholesale buyers. Quality and elegance in every thread.
            </p>
            <div className="flex space-x-4 sm:space-x-5">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-primary-400 transition-colors">
                <FaFacebook className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-primary-400 transition-colors">
                <FaTwitter className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-primary-400 transition-colors">
                <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-primary-400 transition-colors">
                <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <Link to="/" className="text-neutral-300 hover:text-primary-400 transition-colors inline-block text-sm sm:text-base md:text-lg">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-neutral-300 hover:text-primary-400 transition-colors inline-block text-sm sm:text-base md:text-lg">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-300 hover:text-primary-400 transition-colors inline-block text-sm sm:text-base md:text-lg">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-300 hover:text-primary-400 transition-colors inline-block text-sm sm:text-base md:text-lg">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-6 text-white">Contact Info</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start space-x-2 sm:space-x-3 text-neutral-300">
                <FaMapMarkerAlt className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary-400 flex-shrink-0 mt-1" />
                <span className="text-xs sm:text-sm md:text-base">Bhimwadi Rahiwasi Sangh, Lal Dongar Rd, near Sindhi Society, Suman Nagar, Chembur, Mumbai, Maharashtra 400071, India</span>
              </li>
              <li className="flex items-center space-x-2 sm:space-x-3 text-neutral-300">
                <FaPhone className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm md:text-base">+91 9076699515</span>
              </li>
              <li className="flex items-center space-x-2 sm:space-x-3 text-neutral-300">
                <FaEnvelope className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm md:text-base break-all">shreevinayak515@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-neutral-800 text-center">
          <p className="text-neutral-400 text-xs sm:text-sm md:text-base">
            &copy; {new Date().getFullYear()} SHREE VINAYAK. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}