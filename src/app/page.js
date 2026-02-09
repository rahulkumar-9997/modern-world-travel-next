import Image from "next/image";
import { Suspense } from "react";
import { HomeAbout } from "@/components/HomeAbout/HomeAbout";
import { HomeWhyChoose } from "@/components/HomeWhyChoose/HomeWhyChoose";
import { Testimonials } from "@/components/Testimonials/Testimonials";
import Spinner from "@/components/Loader/spinner";
import HomeTrendingDestinationsWrapper from "@/components/HomeTrendingDestinations/HomeTrendingDestinationsWrapper";
import HomeInternationalTourPackagesWrapper from "@/components/HomeInternationalTourPackages/HomeInternationalTourPackagesWrapper";
import HomeTourPackageWrapper from "@/components/HomeTourPackage/HomeTourPackageWrapper";
import HomeLandscapeImageWrapper from "@/components/HomeLandscapeImage/HomeLandscapeImageWrapper";
import HomeLandscapeVideoWrapper from "@/components/HomeLandscapeVideo/HomeLandscapeVideoWrapper";
import HomePortraitImageWrapper from "@/components/HomePortraitImage/HomePortraitImageWrapper";
import BannerWrapper from "@/components/Banner/BannerWrapper";
import HomePortraitVideoWrapper from "@/components/HomePortraitVideo/HomePortraitVideoWrapper";
export default function Home() {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <BannerWrapper />
      </Suspense>
      <HomeAbout />
      <HomeLandscapeImageWrapper/>
      <Suspense fallback={<Spinner />}>
        <HomeTrendingDestinationsWrapper />
      </Suspense>
      <HomeLandscapeVideoWrapper/>
      <Suspense fallback={<Spinner />}>
        <HomeTourPackageWrapper />
      </Suspense>
      <HomePortraitImageWrapper/>
      <Suspense fallback={<Spinner />}>
        <HomeWhyChoose />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <HomeInternationalTourPackagesWrapper />
      </Suspense>
      <HomePortraitVideoWrapper/>
      {/* <Suspense fallback={<Spinner />}>
        <Testimonials />
      </Suspense> */}
    </>
  );
}
