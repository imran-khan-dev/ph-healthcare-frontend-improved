import { Metadata } from "next";
import Link from "next/link";
import {
  Lock,
  FileText,
  ShieldCheck,
  Users,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | PH Doc",
  description:
    "Learn how PH Doc protects your privacy and handles personal information while using our AI-driven healthcare platform.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full bg-blue-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 md:px-8 lg:px-16 text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">
          Privacy Policy
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-8">
          Your privacy is our priority at PH Doc. This page explains how we
          collect, use, and safeguard your personal information while providing
          AI-powered healthcare services.
        </p>
      </section>

      {/* Information Sections */}
      <section className=" bg-white">
        <div className="container mx-auto px-4 py-24 md:px-8 lg:px-16 space-y-12 ">
          {[
            {
              icon: Lock,
              title: "Information We Collect",
              description:
                "We may collect personal information such as your name, email, phone number, health profile, and consultation history to provide personalized healthcare recommendations.",
            },
            {
              icon: FileText,
              title: "How We Use Your Information",
              description:
                "Your information is used to provide AI-powered doctor recommendations, facilitate online consultations, process prescriptions, and improve our platform. We do not sell your personal data.",
            },
            {
              icon: ShieldCheck,
              title: "Data Security",
              description:
                "We implement industry-standard security measures to protect your information, including encryption, secure servers, and access controls.",
            },
            {
              icon: Users,
              title: "Third-Party Services",
              description:
                "We may use trusted third-party services to support platform functionality. These providers adhere to strict privacy standards.",
            },
            {
              icon: Mail,
              title: "Your Rights",
              description:
                "You have the right to access, correct, or delete your personal information. Contact us anytime to exercise these rights.",
            },
          ].map((section, idx) => (
            <div
              key={idx}
              className="flex flex-row gap-4 items-start"
            >
              <section.icon className="text-[#0071DF] w-8 h-8 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-semibold text-slate-900 mb-2">
                  {section.title}
                </h2>
                <p className="text-slate-700 text-[16px] leading-7">
                  {section.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Social Links */}
      <section className="bg-[#0071DF] py-12">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
          <h2 className="text-2xl font-bold mb-6 text-white">Follow Us</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6 text-white">
            <Link
              href="https://facebook.com"
              target="_blank"
              className="flex items-center gap-2 justify-center"
            >
              <Facebook size={20} /> Facebook
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              className="flex items-center gap-2 justify-center"
            >
              <Twitter size={20} /> Twitter
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              className="flex items-center gap-2 justify-center"
            >
              <Instagram size={20} /> Instagram
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="flex items-center gap-2 justify-center"
            >
              <Linkedin size={20} /> LinkedIn
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
