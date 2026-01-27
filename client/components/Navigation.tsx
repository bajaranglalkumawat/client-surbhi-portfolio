import { Link, useLocation } from "react-router-dom";
import { Home, Mail, Award, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/contact", label: "Contact", icon: Mail },
    { path: "/certificates", label: "Certificates", icon: Award },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 shadow-lg hover:shadow-2xl transition-shadow duration-300 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="text-purple-600 font-bold text-lg">SP</span>
            </div>
            <span className="hidden sm:inline text-white font-bold text-lg">
              Surbhi
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    isActive(item.path)
                      ? "bg-white text-blue-600 shadow-lg"
                      : "text-white hover:bg-white/20"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:bg-white/20 p-2 rounded-lg transition-all"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    isActive(item.path)
                      ? "bg-white text-blue-600"
                      : "text-white hover:bg-white/20"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}
