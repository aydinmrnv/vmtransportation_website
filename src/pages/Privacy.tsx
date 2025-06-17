import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Shield } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-navy to-brand-navy-dark text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Your privacy and data protection are important to us at VM
              Transportation LLC.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-lg">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-center mb-8">
                <Shield className="h-12 w-12 text-brand-navy mr-4" />
                <div>
                  <h2 className="text-2xl font-bold text-brand-navy">
                    SMS & Privacy Terms
                  </h2>
                  <p className="text-brand-gray-dark">
                    Effective as of the date of your contact
                  </p>
                </div>
              </div>

              <div className="space-y-6 text-brand-gray-dark leading-relaxed">
                <p className="text-lg">
                  We respect your privacy. By contacting VM Transportation via
                  text message (SMS), you consent to receive text responses
                  related to your inquiry. We do not sell or share your contact
                  information. You may opt out at any time by replying "STOP".
                  No mobile information will be shared with third parties for
                  marketing purposes.
                </p>

                <div className="bg-brand-gray rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-brand-navy mb-4">
                    Information We Collect
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      • Contact information (name, phone number, email address)
                    </li>
                    <li>
                      • Business information related to your shipping needs
                    </li>
                    <li>• Communication preferences</li>
                  </ul>
                </div>

                <div className="bg-brand-gray rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-brand-navy mb-4">
                    How We Use Your Information
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      • To respond to your inquiries about our transportation
                      services
                    </li>
                    <li>• To provide quotes and scheduling information</li>
                    <li>• To communicate about shipment status and updates</li>
                    <li>• To improve our services and customer experience</li>
                  </ul>
                </div>

                <div className="bg-brand-gray rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-brand-navy mb-4">
                    Your Rights
                  </h3>
                  <ul className="space-y-2">
                    <li>• Opt out of SMS communications by replying "STOP"</li>
                    <li>• Request information about data we have collected</li>
                    <li>
                      • Request correction or deletion of your personal
                      information
                    </li>
                    <li>
                      • Contact us with any privacy-related questions or
                      concerns
                    </li>
                  </ul>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-xl font-semibold text-brand-navy mb-4">
                    Contact Information
                  </h3>
                  <p>
                    If you have any questions about this Privacy Policy or our
                    data practices, please contact us:
                  </p>
                  <div className="mt-4 space-y-1">
                    <p>
                      <strong>VM Transportation LLC</strong>
                    </p>
                    <p>Nadia Marinov</p>
                    <p>9129 Shire Oaks Lane, Elk Grove, CA 95624</p>
                    <p>Phone: (916) 226-9909</p>
                    <p>Email: vmtrans@gmail.com</p>
                  </div>
                </div>

                <div className="text-sm text-brand-gray-dark bg-blue-50 rounded-lg p-4">
                  <p>
                    <strong>Last Updated:</strong> This privacy policy is
                    effective as of your first contact with VM Transportation
                    LLC and may be updated from time to time. We will notify you
                    of any material changes to this policy.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;
