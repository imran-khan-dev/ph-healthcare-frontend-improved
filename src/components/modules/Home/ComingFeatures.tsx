import Link from "next/link";
import {
  Pill,
  TestTube2,
  HeartHandshake,
  Truck,
  ShieldCheck,
  Clock,
  Percent,
  FileUp,
  Microscope,
  Hospital,
  Users,
  Globe,
} from "lucide-react";

const comingFeatures = [
  {
    title: "Online Medicine Store",
    badge: "Coming Soon",
    icon: Pill,
    description:
      "Order your prescribed medicines online and get them delivered to your home. Safe, convenient, and affordable.",
    highlights: [
      { icon: ShieldCheck, text: "100% genuine medicines" },
      { icon: Percent, text: "Best prices & regular discounts" },
      { icon: Truck, text: "Fast home delivery" },
      { icon: Clock, text: "24/7 online ordering" },
    ],
  },
  {
    title: "Diagnostic Services",
    badge: "Coming Soon",
    icon: TestTube2,
    description:
      "Book diagnostic tests online and receive accurate digital reports from trusted labs.",
    highlights: [
      { icon: Microscope, text: "Blood, cardiac & imaging tests" },
      { icon: Hospital, text: "Accredited partner labs" },
      { icon: FileUp, text: "Digital reports anytime" },
      { icon: Truck, text: "Home sample collection" },
    ],
  },
  {
    title: "Healthcare NGOs & Organizations",
    badge: "Coming Soon",
    icon: HeartHandshake,
    description:
      "Connect with NGOs providing free or subsidized healthcare services across Bangladesh.",
    highlights: [
      { icon: Users, text: "Patient support & free clinics" },
      { icon: Globe, text: "Local & international NGOs" },
      { icon: HeartHandshake, text: "Medical camps & aid programs" },
      { icon: Hospital, text: "Community health initiatives" },
    ],
  },
];

export default function ComingFeatures() {
  return (
    <section className="bg-[#0071DF]/10 py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            What’s Coming Next at PH Doc
          </h2>
          <p className="mt-4 text-slate-700 text-lg leading-7">
            We’re expanding PH Doc beyond consultations to make healthcare
            simpler, faster, and more accessible for everyone.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {comingFeatures.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-all"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#0071DF]/15 text-[#0071DF]">
                  <feature.icon size={28} />
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#0071DF]/10 text-[#0071DF]">
                  {feature.badge}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                {feature.title}
              </h3>

              <p className="text-slate-600 text-sm leading-6 mb-6">
                {feature.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-3">
                {feature.highlights.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-700">
                    <item.icon className="text-[#0071DF]" size={18} />
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            href="/consultation"
            className="inline-flex items-center justify-center rounded-xl bg-[#0071DF] px-10 py-4 font-semibold text-white hover:bg-[#005BB5]"
          >
            Start Your Healthcare Journey
          </Link>
        </div>
      </div>
    </section>
  );
}
