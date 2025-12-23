import Image from "next/image";
import Link from "next/link";

interface SpecialistCardProps {
  id: string;
  title: string;
  icon: string;
}

const SpecialistCard = ({ id, title, icon }: SpecialistCardProps) => {
  return (
    <Link
      href={`/consultation?specialist=${encodeURIComponent(title)}`}
      className="group"
    >
      <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
        <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-[#0071DF]/15 group-hover:bg-[#0071DF] transition-colors">
          <Image
            src={icon}
            alt={title}
            width={32}
            height={32}
            className="group-hover:invert transition-all"
          />
        </div>

        <h3 className="text-xl font-semibold text-slate-900 mb-1">
          {title}
        </h3>

        <p className="text-slate-600 text-sm">
          Find expert doctors and book consultations online.
        </p>
      </div>
    </Link>
  );
};

export default SpecialistCard;
