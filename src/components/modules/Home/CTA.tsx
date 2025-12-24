import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="bg-[#0071DF] py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get the Right Doctor, Right Now
          </h2>

          <p className="text-blue-100 text-lg leading-8 mb-8">
            Describe your symptoms and let our AI instantly match you with the
            most suitable medical specialist. Fast, secure, and hassle-free.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/consultation"
              className="inline-flex items-center justify-center rounded-xl bg-white px-10 py-4 font-semibold text-[#0071DF] hover:bg-slate-100 transition"
            >
              Use AI Doctor Finder
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
