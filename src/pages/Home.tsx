import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Truck,
  Shield,
  Clock,
  MapPin,
  Users,
  Route,
  Phone,
  ChevronRight,
} from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: "Safe & Reliable",
      description:
        "Fully licensed and insured with USDOT 972775 and MC-412286 for your peace of mind.",
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description:
        "Committed to meeting deadlines with our 450,000+ miles of experience in 2024.",
    },
    {
      icon: Route,
      title: "Interstate Coverage",
      description:
        "Comprehensive freight transportation services across the entire United States.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Professional drivers and dedicated support team ensuring excellent service.",
    },
  ];

  const stats = [
    { number: "450,000+", label: "Miles Driven (2024)" },
    { number: "4", label: "Power Units" },
    { number: "4", label: "Professional Drivers" },
    { number: "5", label: "Service Categories" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-navy to-brand-navy-dark text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Professional Freight
              <span className="block text-brand-blue-light">
                Transportation
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto animate-fade-in">
              Safe, reliable, and efficient interstate freight transportation
              across the U.S. Your trusted partner for all your shipping needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button
                asChild
                size="lg"
                className="bg-white text-brand-navy hover:bg-gray-100 text-lg px-8 py-3"
              >
                <Link to="/contact">
                  Get Free Quote
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-brand-navy text-lg px-8 py-3"
              >
                <a href="tel:+19162269909">
                  <Phone className="mr-2 h-5 w-5" />
                  (916) 226-9909
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-brand-navy mb-2">
                  {stat.number}
                </div>
                <div className="text-brand-gray-dark font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Why Choose VM Transportation?
            </h2>
            <p className="text-xl text-brand-gray-dark max-w-3xl mx-auto">
              We combine years of experience with modern technology to deliver
              exceptional freight transportation services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="bg-brand-navy rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-navy mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-brand-gray-dark">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Our Services
            </h2>
            <p className="text-xl text-brand-gray-dark max-w-3xl mx-auto">
              Comprehensive freight transportation solutions for all your
              shipping needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              "General Freight",
              "Refrigerated Food",
              "Fresh Produce",
              "Coal/Coke",
              "US Mail",
            ].map((service, index) => (
              <Card
                key={index}
                className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6 text-center">
                  <Truck className="h-12 w-12 text-brand-navy mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-brand-navy">
                    {service}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-brand-navy hover:bg-brand-navy-dark"
            >
              <Link to="/services">
                View All Services
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Ship with VM Transportation?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact Nadia Marinov and our professional team today for reliable,
            efficient freight transportation services across the United States.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-brand-navy hover:bg-gray-100 text-lg px-8 py-3"
            >
              <Link to="/contact">
                Get Your Quote Today
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-brand-navy text-lg px-8 py-3"
            >
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
