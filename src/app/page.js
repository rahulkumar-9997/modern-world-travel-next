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
import { BannerForm } from "@/components/BannerForm/BannerForm";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "";
export const metadata = {
  title:
    "Modern World Travel - Trusted Travel Agency in Varanasi | Book Holiday Packages",
  description:
    "Modern World Travel is a trusted travel agency in Varanasi offering domestic & international holiday packages, hotel bookings, and customized tour packages. Start your perfect journey today!",
  keywords:
    "travel agency Varanasi, holiday packages, international tour packages, domestic tours, hotel booking, Modern World Travel, tour packages India",
  authors: [{ name: "Modern World Travel" }],
  openGraph: {
    title: "Modern World Travel - Where Your Perfect Journey Begins",
    description:
      "Experience excellence in travel with Modern World Travel. Book domestic and international holiday packages, hotel stays, and customized tours.",
    url: baseUrl,
    siteName: "Modern World Travel",
    images: [
      {
        url: `${baseUrl}/assets/modern-img/banner/International.jpg`,
        width: 1200,
        height: 630,
        alt: "Modern World Travel - Perfect Journey Begins",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Modern World Travel - Trusted Travel Agency in Varanasi",
    description:
      "Book your dream holiday with Modern World Travel. Domestic & international packages available.",
    images: [`${baseUrl}/assets/modern-img/banner/International.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: baseUrl,
  },
  category: "travel",
};
export default function Home() {
  return (
    <>
      {/* <Suspense fallback={<Spinner />}>
        <BannerWrapper />
      </Suspense> */}
      {/* <HomeAbout /> */}
      <BannerForm />
      <HomeLandscapeImageWrapper />
      <Suspense fallback={<Spinner />}>
        <HomeTrendingDestinationsWrapper />
      </Suspense>
      <HomeLandscapeVideoWrapper />
      <Suspense fallback={<Spinner />}>
        <HomeTourPackageWrapper />
      </Suspense>
      <HomePortraitImageWrapper />
      <Suspense fallback={<Spinner />}>
        <HomeWhyChoose />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <HomeInternationalTourPackagesWrapper />
      </Suspense>
      <HomePortraitVideoWrapper />
      {/* <Suspense fallback={<Spinner />}>
        <Testimonials />
      </Suspense> */}
    </>
  );
}
