import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SparkleIcon } from "@/assets/icons/SparkleIcon";
import Link from "next/link";

export function Hero() {
  // Hero content
  const badge = { text: "AI-Powered Healthcare" };
  const heading = {
    line1: "Find Your Perfect",
    line2: "Doctor with AI",
  };
  const description = [
    "Our advanced AI technology analyzes your symptoms, medical",
    "history, and preferences to match you with the best-fit doctors",
    "in seconds.",
  ];
  const buttonText = "Find Your Doctor";

  return (
    <div className="relative w-full py-12 md:py-24 flex items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100 px-4 md:px-8 lg:px-16">
      <div className="max-w-3xl text-center space-y-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-3 rounded-full bg-white/30 px-4 py-2 backdrop-blur mx-auto">
          <div className="text-blue-500 animate-pulse">
            <SparkleIcon />
          </div>
          <span className="text-[12px] font-medium text-blue-700">
            {badge.text}
          </span>
        </div>

        {/* Heading */}
        <div className="space-y-2">
          <h1 className="text-[48px] md:text-[56px] leading-tight font-bold text-slate-900">
            {heading.line1}
          </h1>
          <h1 className="text-[48px] md:text-[56px] leading-tight font-bold text-blue-600">
            {heading.line2}
          </h1>
        </div>

        {/* Description */}
        <div className="max-w-2xl mx-auto space-y-2 text-[17px] md:text-[18px] leading-7 text-slate-700">
          {description.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>

        {/* CTA Button */}
        <Link href="/consultation" className="inline-block pt-4">
          <Button className="h-[60px] rounded-xl bg-blue-600 px-10 text-[15px] font-medium text-white shadow-md transition hover:bg-blue-700 hover:-translate-y-[1px] hover:shadow-blue-500/40">
            <Search className="mr-2 size-5 transition group-hover:translate-x-1" />
            {buttonText}
          </Button>
        </Link>
      </div>
    </div>
  );
}
