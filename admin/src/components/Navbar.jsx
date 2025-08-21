import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // for hamburger icons
import { useContext } from "react";
import { AdminContextProvider } from "../context/AdminContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { adminToken } = useContext(AdminContextProvider);
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Doctors", href: "/doctors" },
    { name: "Appointments", href: "/appointments" },
    { name: "Profile", href: "/profile" },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-6 py-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex gap-3 items-center justify-center">
          <a href="/" className="text-3xl font-bold text-emerald-700">
            MediBook
          </a>
          <span className="text-sm bg-white border rounded-xl p-2 text-gray-500">
            {adminToken ? "Admin" : "Doctor"} Panel
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
