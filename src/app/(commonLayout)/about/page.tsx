import { HeartPulse, Brain, Bone, Baby, Users, Globe, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  const brandBlue = "#0071DF";

  return (
    <div className="w-full bg-blue-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 md:px-8 lg:px-16 flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-[48px] font-bold text-slate-900 mb-6">
            About PH Doc
          </h1>
          <p className="max-w-3xl text-[18px] text-slate-700 leading-8 mb-4">
            PH Doc is an AI-driven healthcare platform designed to make healthcare accessible, reliable, and efficient. 
            We connect patients with expert doctors online, enabling easy consultations and seamless access to medical guidance.
          </p>
          <p className="max-w-3xl text-[17px] leading-7 mb-6" style={{ color: brandBlue }}>
            Our goal is to empower users to take control of their health by leveraging advanced AI algorithms that match symptoms with the right specialists.
          </p>
          <Link href="/consultation">
            <Button style={{ backgroundColor: brandBlue, color: "white" }} className="px-10 py-4 rounded-xl font-semibold hover:brightness-90">
              Find Your Doctor
            </Button>
          </Link>
        </div>

        {/* Hero Image */}
        <div className="lg:w-1/2 relative w-full h-80 md:h-96 lg:h-[400px]">
          <Image
            src="/ph-health-care.jpg" 
            alt="AI Healthcare Illustration"
            fill
            className="object-cover rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-16 md:px-8 lg:px-16">
        <h2 className="text-3xl font-bold text-center mb-12" style={{ color: brandBlue }}>How PH Doc Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { icon: Users, title: "Create Your Profile", description: "Sign up and complete your health profile. Provide basic health information to get personalized doctor recommendations." },
            { icon: ClipboardCheck, title: "AI-Powered Doctor Matching", description: "Our advanced AI analyzes your symptoms, medical history, and preferences to suggest the most suitable doctors in seconds." },
            { icon: Globe, title: "Book Consultation Online", description: "Connect with verified doctors via video consultation, get prescriptions online, and manage your health seamlessly from home." },
          ].map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-transform hover:-translate-y-2 cursor-pointer"
            >
              <div className="mx-auto mb-4 w-14 h-14 flex items-center justify-center rounded-full" style={{ backgroundColor: brandBlue + "20", color: brandBlue }}>
                <step.icon size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-slate-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-[#E6F0FF]">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ color: brandBlue }}>Our Mission & Vision</h2>
          <p className="max-w-2xl mx-auto mb-4 text-slate-900 leading-7">
            <strong>Mission:</strong> To make healthcare accessible, personalized, and efficient using AI technology, bridging the gap between patients and medical experts.
          </p>
          <p className="max-w-2xl mx-auto text-slate-900 leading-7">
            <strong>Vision:</strong> To be the leading online healthcare platform, offering patients AI-driven guidance, online consultations, and reliable medical services anytime, anywhere.
          </p>
        </div>
      </section>

      {/* Coming Features */}
      <section className="container mx-auto px-4 py-16 md:px-8 lg:px-16">
        <h2 className="text-3xl font-bold text-center mb-12" style={{ color: brandBlue }}>Coming Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: HeartPulse, title: "Medicine Delivery", description: "Upload prescriptions and get medicines delivered directly to your address." },
            { icon: Brain, title: "Diagnostics Support", description: "Access diagnostic and lab services seamlessly online." },
            { icon: Bone, title: "Medical NGO Directory", description: "Connect with NGOs offering healthcare support and guidance." },
            { icon: Baby, title: "Expanded Teleconsultation", description: "More specialist doctors available for online consultations." },
          ].map((feature, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <div className="mx-auto mb-4 w-14 h-14 flex items-center justify-center rounded-full" style={{ backgroundColor: brandBlue + "20", color: brandBlue }}>
                <feature.icon size={28} />
              </div>
              <h4 className="text-lg font-semibold text-slate-900 mb-1">{feature.title}</h4>
              <p className="text-slate-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16" style={{ backgroundColor: brandBlue }}>
        <div className="container mx-auto px-4 text-center md:px-8 lg:px-16">
          <h2 className="text-4xl font-bold text-white mb-4">Start Your AI Health Journey Today</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Connect with top doctors, manage appointments, and receive prescriptions online—all from the comfort of your home.
          </p>
          <Link href="/consultation">
            <Button className="bg-white text-[#0071DF] px-10 py-4 rounded-xl font-semibold hover:bg-gray-100">
              Find Your Doctor
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
