
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-lavender-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="text-2xl font-bold text-lavender-700 block mb-4">
              <span className="bg-gradient-to-r from-lavender-600 to-rose-400 bg-clip-text text-transparent">
                EMPOWER HER
              </span>
            </Link>
            <p className="text-gray-600 mb-4">
              Empowering girls through mentorship, education, and safety resources.
            </p>
            <div className="flex space-x-4 text-lavender-600">
              <a href="#" className="hover:text-lavender-800 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-lavender-800 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-lavender-800 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-lavender-800">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-lavender-700 transition-colors">Home</Link></li>
              <li><Link to="/solutions" className="text-gray-600 hover:text-lavender-700 transition-colors">Solutions</Link></li>
              <li><Link to="/login" className="text-gray-600 hover:text-lavender-700 transition-colors">Login</Link></li>
              <li><Link to="/signup" className="text-gray-600 hover:text-lavender-700 transition-colors">Sign Up</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-lavender-800">Our Solutions</h3>
            <ul className="space-y-2">
              <li><Link to="/mentor-connect" className="text-gray-600 hover:text-lavender-700 transition-colors">MentorConnect</Link></li>
              <li><Link to="/edu-girls" className="text-gray-600 hover:text-lavender-700 transition-colors">EduGirls</Link></li>
              <li><Link to="/safe-her" className="text-gray-600 hover:text-lavender-700 transition-colors">SafeHer</Link></li>
              <li><Link to="/inspiration-hub" className="text-gray-600 hover:text-lavender-700 transition-colors">Inspiration Hub</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-lavender-800">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-lavender-600" />
                <a href="mailto:hello@empowerher.com" className="text-gray-600 hover:text-lavender-700 transition-colors">
                  hello@empowerher.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-lavender-600" />
                <a href="tel:+1234567890" className="text-gray-600 hover:text-lavender-700 transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-lavender-100 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} EMPOWER HER. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
