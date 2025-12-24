/* eslint-disable @typescript-eslint/no-explicit-any */
import { getSpecialities } from "@/services/admin/specialitiesManagement";
import SpecialistCard from "../Admin/SpecialitiesManagement/SpecialistCard";

type Speciality = {
  id: string;
  title: string;
  icon: string;
  slug?: string;
};

const Specialities = async () => {
  const specialitiesResponse = await getSpecialities();
  const specialities: Speciality[] = specialitiesResponse?.data || [];

  // Get only top 4
  const topSpecialities = specialities.slice(0, 4);

  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 py-24 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {topSpecialities.map((speciality) => (
            <SpecialistCard
              key={speciality.id}
              id={speciality.id}
              title={speciality.title}
              icon={speciality.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialities;
