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
    <div className=" mt-10 p-2 flex items-center justify-around">
      {/* Logo */}
      <div>
        <h2 className="text-4xl font-bold text-emerald-400">Logo</h2>
      </div>

      {/* Navigation */}
      <div>
        <h3 className="text-xl font-semibold text-green-800 mb-4">
          Explore Our Website
        </h3>
        <nav className="space-y-3">
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <Home className="w-4 h-4" />
            Home
          </Link>
          <Link
            href="/about"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <Users className="w-4 h-4" />
            About Us
          </Link>
          <Link
            href="/doctors"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <User className="w-4 h-4" />
            Doctors
          </Link>
          <Link
            href="/privacy"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <Shield className="w-4 h-4" />
            Privacy Policy
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <PhoneCall className="w-4 h-4" />
            Contact Us
          </Link>
        </nav>
      </div>

      {/* Contact Info */}
      <div>
        <h3 className="text-xl font-semibold text-green-800 mb-4">
          Reach Out to Us
        </h3>
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-gray-600">
            <Phone className="w-4 h-4" />
            +977-9703299634
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Mail className="w-4 h-4" />
            fakemail@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
