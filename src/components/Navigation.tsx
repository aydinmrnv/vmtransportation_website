import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Truck, Phone, Mail } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-brand-navy p-2 rounded-lg">
                <Truck className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-brand-navy">
                  VM Transportation
                </div>
                <div className="text-xs text-brand-gray-dark">LLC</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-brand-navy bg-blue-50"
                    : "text-gray-700 hover:text-brand-navy hover:bg-gray-50"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact Info & Mobile Menu Button */}
          <div className="flex items-center space-x-2">
            {/* Phone */}
            <a
              href="tel:+19162269909"
              className="inline-flex items-center space-x-1 bg-brand-navy hover:bg-brand-navy-dark text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden lg:inline">(916) 226-9909</span>
            </a>

            {/* Email */}
            <a
              href="mailto:vmtrans@gmail.com"
              className="inline-flex items-center space-x-1 bg-brand-blue hover:bg-brand-navy text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span className="hidden lg:inline">vmtrans@gmail.com</span>
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-brand-navy hover:bg-gray-100"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200 bg-white">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-brand-navy bg-blue-50"
                      : "text-gray-700 hover:text-brand-navy hover:bg-gray-50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2 space-y-2">
                <a
                  href="tel:+19162269909"
                  className="w-full inline-flex items-center justify-center space-x-2 bg-brand-navy hover:bg-brand-navy-dark text-white px-4 py-2 rounded-md text-base font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Phone className="h-4 w-4" />
                  <span>(916) 226-9909</span>
                </a>
                <a
                  href="mailto:vmtrans@gmail.com"
                  className="w-full inline-flex items-center justify-center space-x-2 bg-brand-blue hover:bg-brand-navy text-white px-4 py-2 rounded-md text-base font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Mail className="h-4 w-4" />
                  <span>vmtrans@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
