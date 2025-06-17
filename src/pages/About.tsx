import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Truck,
  Award,
  Shield,
  Users,
  MapPin,
  Phone,
  ChevronRight,
} from "lucide-react";

const About = () => {
  const credentials = [
    {
      icon: Shield,
      title: "USDOT Number",
      value: "972775",
      description: "Fully authorized for interstate commerce",
    },
    {
      icon: Award,
      title: "MC Number",
      value: "MC-412286",
      description: "Motor Carrier operating authority",
    },
    {
      icon: Truck,
      title: "Operating Authority",
      value: "Property Transport",
      description: "Authorized for property transportation",
    },
    {
      icon: MapPin,
      title: "2024 Mileage",
      value: "450,000 miles",
      description: "Extensive experience across the U.S.",
    },
  ];

  const companyValues = [
    {
      title: "Safety First",
      description:
        "Every shipment is handled with the utmost care and safety protocols to ensure your freight arrives securely.",
    },
    {
      title: "Reliability",
      description:
        "We pride ourselves on consistent, on-time delivery and clear communication throughout the transportation process.",
    },
    {
      title: "Professional Service",
      description:
        "Our experienced team provides personalized service and solutions tailored to your specific shipping needs.",
    },
    {
      title: "Efficiency",
      description:
        "Optimized routes and modern equipment ensure cost-effective and timely delivery of your freight.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-navy to-brand-navy-dark text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About VM Transportation LLC
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Your trusted partner for professional freight transportation
              services across the United States since our founding.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-brand-gray-dark">
                <p>
                  VM Transportation LLC was founded with a simple mission: to
                  provide safe, reliable, and efficient freight transportation
                  services across the United States. Based in Elk Grove,
                  California, we have built our reputation on trust,
                  professionalism, and exceptional customer service.
                </p>
                <p>
                  With our comprehensive operating authority and extensive
                  experience, we specialize in interstate freight
                  transportation, handling everything from general freight to
                  specialized cargo like refrigerated food and fresh produce.
                </p>
                <p>
                  Our commitment to excellence has driven us to accumulate over
                  450,000 miles of safe driving in 2024 alone, demonstrating our
                  dedication to serving our customers across the nation.
                </p>
              </div>
            </div>

            <div className="bg-brand-gray rounded-lg p-8">
              <h3 className="text-2xl font-bold text-brand-navy mb-6">
                Company Facts
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="font-medium text-brand-gray-dark">
                    Location:
                  </span>
                  <span className="text-brand-navy">Elk Grove, CA</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-brand-gray-dark">
                    Power Units:
                  </span>
                  <span className="text-brand-navy">4</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-brand-gray-dark">
                    Professional Drivers:
                  </span>
                  <span className="text-brand-navy">4</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-brand-gray-dark">
                    Service Area:
                  </span>
                  <span className="text-brand-navy">Nationwide</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-brand-gray-dark">
                    Specialization:
                  </span>
                  <span className="text-brand-navy">Interstate Freight</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Bio */}
      <section className="py-20 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
              Meet Our Founder
            </h2>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1 text-center">
                <div className="bg-brand-navy rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-16 w-16 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-2">
                  Nadia Marinov
                </h3>
                <p className="text-brand-gray-dark font-medium">
                  Founder & Owner
                </p>
              </div>

              <div className="md:col-span-2">
                <div className="space-y-4 text-brand-gray-dark">
                  <p>
                    Nadia Marinov is the driving force behind VM Transportation
                    LLC. With years of experience in the transportation
                    industry, she founded the company with a vision to provide
                    exceptional freight services built on trust, reliability,
                    and customer satisfaction.
                  </p>
                  <p>
                    Under her leadership, VM Transportation has established
                    itself as a trusted partner for businesses across the United
                    States, maintaining the highest standards of safety and
                    professionalism in every shipment.
                  </p>
                  <p>
                    Nadia's commitment to excellence and personal attention to
                    customer needs has been instrumental in building lasting
                    relationships with clients and ensuring the company's
                    continued growth and success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Our Credentials
            </h2>
            <p className="text-xl text-brand-gray-dark max-w-3xl mx-auto">
              Fully licensed and authorized for interstate freight
              transportation with all necessary certifications and compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {credentials.map((credential, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="bg-brand-navy rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <credential.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-brand-navy mb-2">
                    {credential.title}
                  </h3>
                  <div className="text-2xl font-bold text-brand-blue mb-2">
                    {credential.value}
                  </div>
                  <p className="text-sm text-brand-gray-dark">
                    {credential.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Our Values
            </h2>
            <p className="text-xl text-brand-gray-dark max-w-3xl mx-auto">
              The principles that guide everything we do at VM Transportation
              LLC.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {companyValues.map((value, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-brand-navy mb-4">
                    {value.title}
                  </h3>
                  <p className="text-brand-gray-dark leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Partner with VM Transportation
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Experience the difference that professional, reliable freight
            transportation can make for your business. Contact us today to
            discuss your shipping needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-brand-navy hover:bg-gray-100 text-lg px-8 py-3"
            >
              <Link to="/contact">
                Contact Us
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
                Call (916) 226-9909
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
