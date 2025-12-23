import { MapPin, Phone, Mail, Globe, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - PH Doc",
  description: "Reach PH Doc for inquiries, support, or feedback. Connect via email, phone, or social media.",
};

export default function ContactPage() {
  return (
    <div className="w-full bg-[#0071DF]/10">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 md:px-8 lg:px-16 flex flex-col lg:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-6">
          <h1 className="text-[48px] font-bold text-slate-900">
            Contact PH Doc
          </h1>
          <p className="max-w-3xl text-[18px] text-slate-700 leading-8">
            We are here to assist you with your health needs. Reach out to our support team or explore our services for a seamless healthcare experience.
          </p>
          <p className="max-w-3xl text-[17px] text-[#0071DF] leading-7">
            Quick access to our contact details, social platforms, and location.
          </p>
          <div className="flex sm:flex-row  justify-center md:justify-start gap-4 mt-4">
            <Link href="mailto:contact@phdoc.com">
              <Button className="bg-[#0071DF] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#005BB5] flex items-center gap-2 justify-center">
                <Mail size={20} /> Email Us
              </Button>
            </Link>
            <Link href="tel:+1234567890">
              <Button className="bg-white text-[#0071DF] border border-[#0071DF] px-8 py-4 rounded-xl font-semibold hover:bg-[#0071DF]/10 flex items-center gap-2 justify-center">
                <Phone size={20} /> Call Us
              </Button>
            </Link>
          </div>
        </div>

        {/* Map / Illustration */}
        <div className="lg:w-1/2 w-full h-80 md:h-96 lg:h-[400px] rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.123456!2d90.123456!3d23.780456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c6abcd12345%3A0xabcdef123456789!2sHealth%20City%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1690000000000"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="container mx-auto px-4 py-16 md:px-8 lg:px-16">
        <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-transform hover:-translate-y-2 cursor-pointer">
            <MapPin className="mx-auto mb-4 text-[#0071DF]" size={28} />
            <h3 className="text-xl font-semibold mb-2">Address</h3>
            <p className="text-slate-600 text-sm">
              123 Medical Lane<br />
              Health City, Dhaka 12345
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-transform hover:-translate-y-2 cursor-pointer">
            <Phone className="mx-auto mb-4 text-[#0071DF]" size={28} />
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="text-slate-600 text-sm">+123 456 7890</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-transform hover:-translate-y-2 cursor-pointer">
            <Mail className="mx-auto mb-4 text-[#0071DF]" size={28} />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-slate-600 text-sm">contact@phdoc.com</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-transform hover:-translate-y-2 cursor-pointer">
            <Globe className="mx-auto mb-4 text-[#0071DF]" size={28} />
            <h3 className="text-xl font-semibold mb-2">Website</h3>
            <p className="text-slate-600 text-sm">www.phdoc.com</p>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="bg-[#0071DF] py-12">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
          <h2 className="text-2xl font-bold mb-6 text-white">Follow Us</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6 text-white">
            <Link href="https://facebook.com" target="_blank" className="hover:text-[#005BB5] flex items-center gap-2 justify-center">
              <Facebook size={20} /> Facebook
            </Link>
            <Link href="https://twitter.com" target="_blank" className="hover:text-[#005BB5] flex items-center gap-2 justify-center">
              <Twitter size={20} /> Twitter
            </Link>
            <Link href="https://instagram.com" target="_blank" className="hover:text-[#005BB5] flex items-center gap-2 justify-center">
              <Instagram size={20} /> Instagram
            </Link>
            <Link href="https://linkedin.com" target="_blank" className="hover:text-[#005BB5] flex items-center gap-2 justify-center">
              <Linkedin size={20} /> LinkedIn
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
