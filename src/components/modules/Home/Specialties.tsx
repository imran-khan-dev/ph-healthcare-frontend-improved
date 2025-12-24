import { HeartPulse, Brain, Bone, Baby } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

const specialists = [
  {
    name: "Cardiology",
    icon: HeartPulse,
    bgColor: "bg-red-100",
    iconColor: "text-red-500",
  },
  {
    name: "Neurology",
    icon: Brain,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-500",
  },
  {
    name: "Orthopedic",
    icon: Bone,
    bgColor: "bg-pink-100",
    iconColor: "text-pink-500",
  },
  {
    name: "Pediatric",
    icon: Baby,
    bgColor: "bg-green-100",
    iconColor: "text-green-500",
  },
];

const Specialities = () => {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        {/* Centered Heading + View All Link */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Our Specialist
          </h2>
          <p className="text-slate-600 max-w-lg mx-auto mt-2">
            Access to medical experts across all major specialities.
          </p>
          <a
            href="#"
            className="inline-block mt-4 text-blue-600 font-semibold hover:underline"
          >
            View All
          </a>
        </div>

        {/* Specialist Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {specialists.map((specialist) => (
            <Card
              key={specialist.name}
              className={cn(
                "text-center transition-transform duration-300 ease-in-out cursor-pointer rounded-xl shadow-sm bg-white hover:shadow-xl hover:-translate-y-2 hover:bg-blue-50"
              )}
            >
              <CardContent className="p-6">
                <div
                  className={cn(
                    `w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4 ${specialist.bgColor}`
                  )}
                >
                  <specialist.icon
                    className={cn(specialist.iconColor)}
                    size={32}
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {specialist.name}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialities;
