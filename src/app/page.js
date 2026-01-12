import Image from "next/image";
import { Suspense } from "react";
import { Banner } from "@/components/Banner/Banner";
import { HomeAbout } from "@/components/HomeAbout/HomeAbout";
import { HomeTrendingDestinations } from "@/components/HomeTrendingDestinations/HomeTrendingDestinations";
import { HomeTourPackage } from "@/components/HomeTourPackage/HomeTourPackage";
import { HomeWhyChoose } from "@/components/HomeWhyChoose/HomeWhyChoose";
import { HomeInternationalTourPackages } from "@/components/HomeInternationalTourPackages/HomeInternationalTourPackages";
import { Testimonials } from "@/components/Testimonials/Testimonials";
export default function Home() {
  return (
  <>    
    <Suspense>
      <Banner /> 
    </Suspense> 
    <HomeAbout />
    <Suspense>
      <HomeTrendingDestinations/>
    </Suspense>
    <HomeTourPackage/> 
    <HomeWhyChoose/>
    <HomeInternationalTourPackages/>
    <Testimonials/>
  </>
  );
}
