import { Link } from "react-router-dom";
import { Truck, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-white p-2 rounded-lg">
                <Truck className="h-6 w-6 text-brand-navy" />
              </div>
              <div>
                <div className="text-xl font-bold">VM Transportation</div>
                <div className="text-sm text-blue-200">LLC</div>
              </div>
            </div>
            <p className="text-blue-100 mb-4 max-w-md">
              Safe, reliable, and efficient interstate freight transportation
              across the U.S. Your trusted partner for all your shipping needs.
            </p>
            <div className="space-y-2">
              <p className="text-sm text-blue-200">
                <span className="font-semibold">USDOT:</span> 972775
              </p>
              <p className="text-sm text-blue-200">
                <span className="font-semibold">MC Number:</span> MC-412286
              </p>
              <p className="text-sm text-blue-200">
                <span className="font-semibold">Operating Authority:</span>{" "}
                Authorized For Property
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="space-y-2">
              <Link
                to="/"
                className="block text-blue-100 hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block text-blue-100 hover:text-white transition-colors"
              >
                About Us
              </Link>
              <Link
                to="/services"
                className="block text-blue-100 hover:text-white transition-colors"
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="block text-blue-100 hover:text-white transition-colors"
              >
                Contact
              </Link>
              <Link
                to="/privacy"
                className="block text-blue-100 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-200 mt-0.5 flex-shrink-0" />
                <div className="text-blue-100 text-sm">
                  9129 Shire Oaks Lane
                  <br />
                  Elk Grove, CA 95624
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-200 flex-shrink-0" />
                <a
                  href="tel:+19162269909"
                  className="text-blue-100 hover:text-white transition-colors text-sm"
                >
                  (916) 226-9909
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-200 flex-shrink-0" />
                <a
                  href="mailto:vmtrans@gmail.com"
                  className="text-blue-100 hover:text-white transition-colors text-sm"
                >
                  vmtrans@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-200 text-sm">
            © {currentYear} VM Transportation LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
