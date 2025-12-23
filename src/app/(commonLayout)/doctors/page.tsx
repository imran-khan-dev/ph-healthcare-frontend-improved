import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

/* -------------------------------- metadata -------------------------------- */
export const metadata: Metadata = {
  title: "Doctors | PH Doc",
  description:
    "Browse and book appointments with verified doctors across multiple medical specialties on PH Doc.",
};

/* ----------------------------- mock fetch (replace later) ----------------------------- */
async function getDoctors() {
  // later: fetch(`${process.env.API_URL}/doctors`)
  return [
    {
      id: "1",
      name: "Dr. Cameron Williamson",
      specialty: "Cardiology",
      rating: 4.9,
      reviews: 23,
      image: "/images/doctor-cardiologist.jpg",
    },
    {
      id: "2",
      name: "Dr. Leslie Alexander",
      specialty: "Neurology",
      rating: 4.8,
      reviews: 45,
      image: "/images/doctor-neurologist.jpg",
    },
    {
      id: "3",
      name: "Dr. Robert Fox",
      specialty: "Orthopedics",
      rating: 4.9,
      reviews: 32,
      image: "/images/doctor-orthopedic.jpg",
    },
  ];
}

/* -------------------------------- Doctor Card -------------------------------- */
function DoctorCard({ doctor }: { doctor: Awaited<ReturnType<typeof getDoctors>>[0] }) {
  return (
    <Card className="text-center overflow-hidden hover:shadow-xl transition-shadow">
      <CardHeader className="bg-[#0071DF]/10 items-center p-6">
        <Image
          src={doctor.image}
          alt={doctor.name}
          width={96}
          height={96}
          className="rounded-full border-4 border-white shadow-md object-cover"
        />
      </CardHeader>

      <CardContent className="p-6">
        <CardTitle className="text-lg">{doctor.name}</CardTitle>
        <p className="text-[#0071DF] font-medium mt-1">{doctor.specialty}</p>

        <div className="flex items-center justify-center my-3 text-sm">
          <Star className="text-yellow-400 fill-yellow-400" size={16} />
          <span className="ml-2 font-semibold">{doctor.rating}</span>
          <span className="ml-2 text-muted-foreground">
            ({doctor.reviews} reviews)
          </span>
        </div>
      </CardContent>

      <CardFooter className="grid grid-cols-2 gap-2 p-4 pt-0">
        <Link href={`/doctors/${doctor.id}`}>
          <Button variant="outline" className="w-full">
            View Profile
          </Button>
        </Link>
        <Button className="w-full bg-[#0071DF] hover:bg-[#005BB5]">
          Book Now
        </Button>
      </CardFooter>
    </Card>
  );
}

/* -------------------------------- Page -------------------------------- */
export default async function DoctorsPage() {
  const doctors = await getDoctors();

  return (
    <div className="w-full bg-[#0071DF]/10">
      {/* Hero */}
      <section className="container mx-auto px-4 py-24 md:px-8 lg:px-16 text-center">
        <h1 className="text-[42px] font-bold text-slate-900 mb-4">
          Find the Right Doctor
        </h1>
        <p className="max-w-3xl mx-auto text-[18px] text-slate-700 leading-8">
          Browse our verified doctors across multiple specialties and book
          appointments instantly through PH Doc.
        </p>
      </section>

      {/* Doctors Grid */}
      <section className="bg-white rounded-t-3xl">
        <div className="container mx-auto px-4 py-20 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
