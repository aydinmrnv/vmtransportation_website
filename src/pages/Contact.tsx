import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ChevronRight } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-navy to-brand-navy-dark text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Get in touch with VM Transportation LLC for all your freight
              shipping needs.
            </p>
          </div>
        </div>
      </section>

      {/* Content Coming Soon */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-brand-gray rounded-lg p-12">
            <Mail className="h-24 w-24 text-brand-navy mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-brand-navy mb-4">
              Contact Form Coming Soon
            </h2>
            <p className="text-xl text-brand-gray-dark mb-8">
              We're currently building our contact form. In the meantime, please
              reach out to us directly using the contact information below.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <Phone className="h-12 w-12 text-brand-navy mx-auto mb-4" />
                  <h3 className="font-semibold text-brand-navy mb-2">Phone</h3>
                  <a
                    href="tel:+19162269909"
                    className="text-brand-gray-dark hover:text-brand-navy transition-colors"
                  >
                    (916) 226-9909
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Mail className="h-12 w-12 text-brand-navy mx-auto mb-4" />
                  <h3 className="font-semibold text-brand-navy mb-2">Email</h3>
                  <a
                    href="mailto:vmtrans@gmail.com"
                    className="text-brand-gray-dark hover:text-brand-navy transition-colors"
                  >
                    vmtrans@gmail.com
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <MapPin className="h-12 w-12 text-brand-navy mx-auto mb-4" />
                  <h3 className="font-semibold text-brand-navy mb-2">
                    Address
                  </h3>
                  <div className="text-brand-gray-dark">
                    9129 Shire Oaks Lane
                    <br />
                    Elk Grove, CA 95624
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white rounded-lg p-6 mb-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-brand-navy mb-4">
                Contact Nadia Marinov
              </h3>
              <p className="text-brand-gray-dark mb-4">
                For quotes, scheduling, or any questions about our freight
                transportation services, please contact our founder directly.
              </p>
              <div className="text-sm text-brand-gray-dark">
                <p>
                  <strong>USDOT:</strong> 972775
                </p>
                <p>
                  <strong>MC Number:</strong> MC-412286
                </p>
                <p>
                  <strong>Operating Authority:</strong> Authorized For Property
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-brand-navy hover:bg-brand-navy-dark"
              >
                <a href="tel:+19162269909">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="mailto:vmtrans@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
