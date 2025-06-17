import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Truck, ChevronRight } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-navy to-brand-navy-dark text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive freight transportation solutions for all your
              shipping needs.
            </p>
          </div>
        </div>
      </section>

      {/* Content Coming Soon */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-brand-gray rounded-lg p-12">
            <Truck className="h-24 w-24 text-brand-navy mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-brand-navy mb-4">
              Detailed Services Page Coming Soon
            </h2>
            <p className="text-xl text-brand-gray-dark mb-8">
              We're currently building out our comprehensive services page. In
              the meantime, contact us directly to learn about our freight
              transportation solutions.
            </p>

            <Card className="max-w-2xl mx-auto mb-8">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-brand-navy mb-4">
                  Services We Offer:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  <div className="flex items-center space-x-2">
                    <Truck className="h-5 w-5 text-brand-navy" />
                    <span>General Freight</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Truck className="h-5 w-5 text-brand-navy" />
                    <span>Refrigerated Food</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Truck className="h-5 w-5 text-brand-navy" />
                    <span>Fresh Produce</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Truck className="h-5 w-5 text-brand-navy" />
                    <span>Coal/Coke</span>
                  </div>
                  <div className="flex items-center space-x-2 md:col-span-2 justify-center">
                    <Truck className="h-5 w-5 text-brand-navy" />
                    <span>US Mail</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-brand-navy hover:bg-brand-navy-dark"
              >
                <Link to="/contact">
                  Contact Us for Details
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/">Return to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
