import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { TableSkeleton } from "@/components/shared/TableSkeleton";
import DoctorCard from "@/components/modules/Consultation/DoctorCard";
import { getDoctors } from "@/services/admin/doctorManagement";
import { IDoctor } from "@/types/doctor.interface";
import Link from "next/link";

export const revalidate = 1000; // ISR: revalidate every 10 minutes

const TopRatedDoctors = async () => {
  // Fetch top 4 doctors
  const doctorsResponse = await getDoctors("?limit=3&sort=-rating");
  const doctors = (doctorsResponse?.data || []).slice(0, 3);

  return (
    <section className="bg-blue-50/50 py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground">
            Our Top Doctors
          </h2>
          <p className="text-muted-foreground mt-4">
            Access to medical experts from various specialities, ready to
            provide you with top-notch medical services.
          </p>
        </div>

        {/* Doctor Grid */}
        <Suspense fallback={<TableSkeleton columns={3} />}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {doctors.map((doctor: IDoctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </Suspense>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link href="/consultation">
            <Button size="lg">View All Doctors</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopRatedDoctors;
