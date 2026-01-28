import Image from "next/image";
import { Suspense } from "react";
import { Banner } from "@/components/Banner/Banner";
import { HomeAbout } from "@/components/HomeAbout/HomeAbout";
import { HomeTrendingDestinations } from "@/components/HomeTrendingDestinations/HomeTrendingDestinations";
import { HomeTourPackage } from "@/components/HomeTourPackage/HomeTourPackage";
import { HomeWhyChoose } from "@/components/HomeWhyChoose/HomeWhyChoose";
import { HomeInternationalTourPackages } from "@/components/HomeInternationalTourPackages/HomeInternationalTourPackages";
import { Testimonials } from "@/components/Testimonials/Testimonials";
import Spinner from "@/components/Loader/spinner";
export default function Home() {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Banner />
      </Suspense>
      <HomeAbout />
      <Suspense fallback={<Spinner />}>
        <HomeTrendingDestinations />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <HomeTourPackage />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <HomeWhyChoose />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <HomeInternationalTourPackages />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <Testimonials />
      </Suspense>
    </>
  );
}
