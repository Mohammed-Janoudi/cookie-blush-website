
import { NavBar } from "@/components/NavBar";
import { Instagram, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <main className="min-h-screen bg-nude-50">
      <NavBar />
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-light text-nude-300 mb-8">Contact Us</h1>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="space-y-8">
              {/* Instagram */}
              <div className="flex items-center space-x-4">
                <div className="bg-nude-100 p-3 rounded-full">
                  <Instagram className="w-6 h-6 text-nude-300" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-nude-300">Instagram</h3>
                  <p className="text-nude-300/70">@cookiesbydamdoom</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-4">
                <div className="bg-nude-100 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-nude-300" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-nude-300">Phone</h3>
                  <p className="text-nude-300/70">+1 (xxx) xxx-xxxx</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-4">
                <div className="bg-nude-100 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-nude-300" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-nude-300">Email</h3>
                  <p className="text-nude-300/70">contact@cookiesbydamdoom.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
