import { Metadata } from "next";
import Link from "next/link";
import {
  HeartPulse,
  Brain,
  Bone,
  Baby,
  Eye,
  Stethoscope,
  Activity,
  Pill,
  Syringe,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Medical Specialists | PH Doc",
  description:
    "Explore a complete list of medical specialists on PH Doc. Find the right doctor for your symptoms using our AI-powered healthcare platform.",
};

const specialists = [
  { name: "Cardiology", icon: HeartPulse },
  { name: "Neurology", icon: Brain },
  { name: "Orthopedics", icon: Bone },
  { name: "Pediatrics", icon: Baby },
  { name: "Ophthalmology", icon: Eye },
  { name: "General Medicine", icon: Stethoscope },
  { name: "Pulmonology", icon: Activity },
  { name: "Endocrinology", icon: Syringe },
  { name: "Pharmacology", icon: Pill },
];

export default function SpecialistsPage() {
  return (
    <div className="w-full bg-[#0071DF]/10">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 md:px-8 lg:px-16 text-center">
        <h1 className="text-[48px] font-bold text-slate-900 mb-6">
          Medical Specialists
        </h1>
        <p className="max-w-3xl mx-auto text-[18px] text-slate-700 leading-8">
          Browse through a wide range of medical specialists. Our AI helps you
          find the right doctor based on your symptoms, health needs, and
          preferences.
        </p>
      </section>

      {/* Specialist Grid */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-24 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialists.map((specialist, idx) => (
              <Link
                key={idx}
                href={`/consultation?specialist=${specialist.name}`}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-[#0071DF]/15 text-[#0071DF] group-hover:bg-[#0071DF] group-hover:text-white transition-colors">
                    <specialist.icon size={30} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-1">
                    {specialist.name}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Find expert doctors and book consultations online.
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0071DF] py-16">
        <div className="container mx-auto px-4 text-center md:px-8 lg:px-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Not Sure Which Specialist You Need?
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-6">
            Let our AI analyze your symptoms and match you with the most suitable
            doctor instantly.
          </p>
          <Link
            href="/consultation"
            className="inline-flex items-center justify-center rounded-xl bg-white px-10 py-4 font-semibold text-[#0071DF] hover:bg-slate-100"
          >
            Use AI Doctor Finder
          </Link>
        </div>
      </section>
    </div>
  );
}
