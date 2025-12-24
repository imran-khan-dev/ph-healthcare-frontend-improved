import AboutUs from "@/components/modules/Home/About";
import ComingFeatures from "@/components/modules/Home/ComingFeatures";
import CTABanner from "@/components/modules/Home/CTA";
import FAQS from "@/components/modules/Home/FAQ";
import { Hero } from "@/components/modules/Home/Hero";
import Specialities from "@/components/modules/Home/Specialties";
import Steps from "@/components/modules/Home/Steps";
import TopRatedDoctors from "@/components/modules/Home/TopRatedDoctors";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>AI-Powered Healthcare - Find Your Perfect Doctor</title>
        <meta
          name="description"
          content="Discover top-rated doctors tailored to your needs with our AI-powered healthcare platform. Get personalized recommendations and book appointments effortlessly."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <Specialities />
        <TopRatedDoctors />
        <Steps />
        <ComingFeatures/>
        <AboutUs/>
        <FAQS/>
        <CTABanner/>
      </main>
    </>
  );
}
