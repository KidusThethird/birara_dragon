import React from "react";
import logo from "../assets/images/logo01.png";
import whatsapp from "../assets/images/whatsapplogo.png";
import { Phone, MapPin } from "lucide-react";

const ContactUs = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center font-serif">
      <div className="bg-white shadow-lg rounded-lg max-w-4xl w-full p-6 mt-14 md:mt-32">
        <div className="flex justify-center mb-6 ">
          <img src={logo} alt="Company Logo" className="w-64 p-1 rounded" />
        </div>
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Get in touch with us through the following contact information.
        </p>

        <div className="space-y-8 md:flex md:space-y-0 md:space-x-6">
          {/* Phone Info */}
          <div className="space-y-4 md:w-1/2">
            <div className="flex items-center space-x-3">
              <Phone className="h-6 w-6 text-blue-800" />
              <span className="text-gray-700">+8619700356386</span>
            </div>

            <div className="flex items-center space-x-3">
              <img
                src={whatsapp}
                alt="WhatsApp"
                className="w-8 h-8 my-auto bg-blue-800 rounded-full p-1"
              />
              <div>
                <span className="text-gray-700 block">+8619700356386</span>
                <span className="text-gray-700 block">+8613098393670</span>
              </div>
            </div>
          </div>

          {/* Address Info */}
          <div className="flex items-center space-x-3 md:w-1/2">
            <MapPin size={32} className="text-blue-800" />
            <div className="text-gray-700">
              <p>China: 深圳市南山区同方科兴科学园F区3201</p>
              <p>
                Hongkong Branch: 2301, BAYFIELD BUILDING, 99 HENNESSY ROAD,
                WANCHAI
              </p>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-10 text-center">
          <p className="text-gray-600">
            At Birara Dragon Bridge General Trading, our mission is to enhance
            lives and empower businesses by delivering high-quality products and
            exceptional services across a wide range of sectors.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
