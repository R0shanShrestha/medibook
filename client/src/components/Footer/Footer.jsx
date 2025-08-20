import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  Home,
  Users,
  User,
  Shield,
  PhoneCall,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-10 bg-emerald-50 text-emerald-800 py-8 w-full">
      <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row justify-between gap-8">
        {/* Logo Section */}
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold">MediBook</h2>
          <p className="text-sm text-gray-600 max-w-xs">
            Providing the best services for your health. Stay connected with us!
          </p>
          <p className="text-xs text-gray-500 mt-1">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>

        {/* Navigation Section */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold mb-2">Explore Our Website</h3>
          <nav className="flex flex-col gap-1 text-sm">
            <Link
              to="/"
              className="flex items-center gap-2 hover:text-emerald-600 transition-colors"
            >
              <Home className="w-4 h-4" /> Home
            </Link>
            <Link
              to="/about"
              className="flex items-center gap-2 hover:text-emerald-600 transition-colors"
            >
              <Users className="w-4 h-4" /> About Us
            </Link>
            <Link
              to="/doctors"
              className="flex items-center gap-2 hover:text-emerald-600 transition-colors"
            >
              <User className="w-4 h-4" /> Doctors
            </Link>
            <Link
              to="/privacy"
              className="flex items-center gap-2 hover:text-emerald-600 transition-colors"
            >
              <Shield className="w-4 h-4" /> Privacy Policy
            </Link>
            <Link
              to="/contact"
              className="flex items-center gap-2 hover:text-emerald-600 transition-colors"
            >
              <PhoneCall className="w-4 h-4" /> Contact Us
            </Link>
          </nav>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col gap-2 text-sm">
          <h3 className="text-lg font-semibold mb-2">Reach Out to Us</h3>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 hover:text-emerald-600 transition-colors">
              <Phone className="w-4 h-4" /> +977-9703299634
            </div>
            <div className="flex items-center gap-2 hover:text-emerald-600 transition-colors">
              <Mail className="w-4 h-4" /> fakemail@gmail.com
            </div>
          </div>
        </div>
      </div>

      {/* Bottom note */}
      <div className="mt-6 text-center text-gray-500 text-xs">
        Designed & Developed by Roshan Shrestha
      </div>
    </footer>
  );
};

export default Footer;
