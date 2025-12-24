import { Metadata } from "next";
import { getSpecialities } from "@/services/admin/specialitiesManagement";
import Link from "next/link";
import SpecialistCard from "@/components/modules/Admin/SpecialitiesManagement/SpecialistCard";

interface Speciality {
  id: string | number;
  title: string;
  icon: string;
}

export const metadata: Metadata = {
  title: "Medical Specialists - PH Doc",
  description:
    "Explore a complete list of medical specialists on PH Doc. Find the right doctor for your symptoms using our AI-powered healthcare platform.",
};

export default async function SpecialistsPage() {
  const specialitiesResponse = await getSpecialities();
  const specialities = specialitiesResponse?.data || [];

  return (
    <div className="w-full bg-[#0071DF]/10">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 md:px-8 lg:px-16 text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">
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
            {specialities.toReversed().map((speciality: Speciality) => (
              <SpecialistCard
                key={speciality.id}
                id={String(speciality.id)}
                title={speciality.title}
                icon={speciality.icon}
              />
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
            Let our AI analyze your symptoms and match you with the most
            suitable doctor instantly.
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
