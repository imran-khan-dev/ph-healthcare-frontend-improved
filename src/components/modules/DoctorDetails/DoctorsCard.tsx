import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getDoctors } from "@/services/admin/doctorManagement";

export default function DoctorCard({
  doctor,
}: {
  doctor: Awaited<ReturnType<typeof getDoctors>>[0];
}) {
  return (
    <Card className="text-center overflow-hidden hover:shadow-xl transition-shadow">
      <CardHeader className="bg-[#0071DF]/10 items-center p-6">
        <Image
          src={doctor.image || "/default-doctor.png"} 
          alt={doctor.name}
          width={96}
          height={96}
          className="rounded-full border-4 border-white shadow-md object-cover"
        />
      </CardHeader>

      <CardContent className="p-6">
        <CardTitle className="text-lg">{doctor.name}</CardTitle>
        <p className="text-[#0071DF] font-medium mt-1">
          {doctor.specialty || "General Medicine"}
        </p>

        {doctor.rating && (
          <div className="flex items-center justify-center my-3 text-sm">
            <Star className="text-yellow-400 fill-yellow-400" size={16} />
            <span className="ml-2 font-semibold">{doctor.rating}</span>
            <span className="ml-2 text-muted-foreground">
              ({doctor.reviews || 0} reviews)
            </span>
          </div>
        )}
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
