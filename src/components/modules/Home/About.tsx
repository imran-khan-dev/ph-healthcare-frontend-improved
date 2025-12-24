import Link from "next/link";
import {
  HeartPulse,
  BrainCircuit,
  Users,
  ShieldCheck,
} from "lucide-react";

export default function AboutUs() {
  return (
    <section className="bg-white py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              About PH Doc
            </h2>

            <p className="text-slate-700 text-lg leading-8 mb-6">
              <span className="font-semibold text-[#0071DF]">PH Doc</span> is a
              digital healthcare platform designed to make quality medical care
              accessible, reliable, and simple for everyone.
            </p>

            <p className="text-slate-700 leading-7 mb-8">
              We connect patients with verified doctors across multiple
              specialties, offer AI-powered doctor recommendations, and aim to
              build a complete healthcare ecosystem — from online consultations
              to diagnostics, medicines, and community healthcare support.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/consultation"
                className="inline-flex items-center justify-center rounded-xl border border-[#0071DF] px-8 py-4 font-semibold text-[#0071DF] hover:bg-[#0071DF]/10"
              >
                AI Doctor Finder
              </Link>
            </div>
          </div>

          {/* Right Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: HeartPulse,
                title: "Patient-Centered Care",
                desc: "Healthcare designed around patient needs, comfort, and trust.",
              },
              {
                icon: BrainCircuit,
                title: "AI-Powered Guidance",
                desc: "Smart recommendations to help you choose the right specialist.",
              },
              {
                icon: Users,
                title: "Verified Doctors",
                desc: "Consult with experienced and verified medical professionals.",
              },
              {
                icon: ShieldCheck,
                title: "Secure & Private",
                desc: "Your medical data is protected with industry-standard security.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-100 p-6 hover:shadow-md transition"
              >
                <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-xl bg-[#0071DF]/15 text-[#0071DF]">
                  <item.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-6">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
