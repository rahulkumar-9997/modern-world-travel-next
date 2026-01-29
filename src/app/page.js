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
import HomeTrendingDestinationsWrapper from "@/components/HomeTrendingDestinations/HomeTrendingDestinationsWrapper";
import HomeInternationalTourPackagesWrapper from "@/components/HomeInternationalTourPackages/HomeInternationalTourPackagesWrapper";
export default function Home() {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Banner />
      </Suspense>
      <HomeAbout />
      <Suspense fallback={<Spinner />}>
        <HomeTrendingDestinationsWrapper />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <HomeTourPackage />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <HomeWhyChoose />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <HomeInternationalTourPackagesWrapper />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <Testimonials />
      </Suspense>
    </>
  );
}
