import { Metadata } from "next";
import Link from "next/link";
import {
  Lock,
  FileText,
  ShieldCheck,
  Users,
  CheckCircle,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | PH Doc",
  description:
    "Read PH Doc's Terms of Service to understand the rules, obligations, and usage policies for our AI-driven healthcare platform.",
};

export default function TermsPage() {
  return (
    <div className="w-full bg-[#0071DF]/10">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 md:px-8 lg:px-16 text-center">
        <h1 className="text-[48px] font-bold text-slate-900 mb-6">
          Terms of Service
        </h1>
        <p className="max-w-3xl mx-auto text-[18px] text-slate-700 leading-8">
          Welcome to PH Doc. By accessing or using our platform, you agree to comply with our terms and conditions, ensuring a safe and reliable experience for all users.
        </p>
      </section>

      {/* Information Sections */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-24 md:px-8 lg:px-16 space-y-12">
          {[
            {
              icon: Users,
              title: "User Responsibilities",
              description:
                "Users must provide accurate personal information, respect healthcare providers, and follow platform guidelines for online consultations and interactions.",
            },
            {
              icon: FileText,
              title: "Account Security",
              description:
                "Users are responsible for maintaining the confidentiality of their account credentials and notifying PH Doc immediately of any unauthorized access.",
            },
            {
              icon: ShieldCheck,
              title: "Use of AI Recommendations",
              description:
                "Our AI-powered recommendations are for informational purposes only. Users should consult with a licensed healthcare provider before making medical decisions.",
            },
            {
              icon: CheckCircle,
              title: "Limitation of Liability",
              description:
                "PH Doc is not liable for any damages arising from the use of our platform, including medical decisions based on AI recommendations. Use the platform responsibly.",
            },
            {
              icon: FileText,
              title: "Changes to Terms",
              description:
                "We may update these terms periodically. Continued use of the platform constitutes acceptance of the revised terms.",
            },
          ].map((section, idx) => (
            <div key={idx} className="flex flex-row gap-4 items-start">
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

      {/* Follow Section */}
      <section className="bg-[#0071DF] py-12">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
          <h2 className="text-2xl font-bold mb-6 text-white">Follow Us</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6 text-white">
            <Link
              href="https://facebook.com"
              target="_blank"
              className="hover:text-[#005BB5] flex items-center gap-2 justify-center"
            >
              <Facebook size={20} /> Facebook
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              className="hover:text-[#005BB5] flex items-center gap-2 justify-center"
            >
              <Twitter size={20} /> Twitter
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              className="hover:text-[#005BB5] flex items-center gap-2 justify-center"
            >
              <Instagram size={20} /> Instagram
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="hover:text-[#005BB5] flex items-center gap-2 justify-center"
            >
              <Linkedin size={20} /> LinkedIn
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
