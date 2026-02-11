'use client'

import React from 'react'
import Autoplay from "embla-carousel-autoplay";
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Heading } from '../Heading/Heading'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
export const HomePortraitVideo = ({ initialData, sectionInfo }) => {
  const portraitVideos = initialData && Array.isArray(initialData) && initialData.length > 0
    ? initialData.map(item => ({
      id: item.id || Math.random().toString(),
      videoUrl: item.video_url,
      title: item.title,
      external_url: item.external_url
    }))
    : [];

  if (!initialData) {
    return (
      <section className="relative layout-pt-xl layout-pb-xl bg-gradient-to-b from-gray-50 to-white">
        <div className="container relative">
          <div className="row justify-center pt-20 md:pt-20">
            <div className="col-xl-12 col-lg-12">
              <div className="flex -ml-4 overflow-hidden">
                {[...Array(4)].map((_, index) => (
                  <div key={index} className="pl-4 basis-1/2 md:basis-1/4">
                    <div className="aspect-[9/16] bg-gray-300 rounded-2xl animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className="relative layout-pt-xl layout-pb-xl bg-gradient-to-b from-gray-50 to-white home-landscape-img-se">
      <div className="container relative">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <Heading
              level={2}
              text={sectionInfo.heading}
              className="text-30 md:text-24"
            />
            {sectionInfo?.sub_heading && sectionInfo.sub_heading.trim() !== '' && (
              <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                {sectionInfo.sub_heading}
              </p>
            )}
          </div>
        </div>
        <div className="row justify-center pt-20 md:pt-20">
          <div className="col-xl-12 col-lg-12">
            <Carousel
              className="w-full"
              plugins={[
                Autoplay({
                  delay: 4000,
                  stopOnInteraction: false,
                }),
              ]}
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent className="-ml-4">
                {portraitVideos.map((item, index) => (
                  <CarouselItem
                    key={item.id || index}
                    className="pl-3 lg:pl-4 basis-1/2 md:basis-1/4">
                    <div className="group relative overflow-hidden rounded-2xl shadow-lg mb-3">
                      <div className="relative aspect-[9/16] overflow-hidden rounded-2xl">
                        <video
                          className="w-full h-full object-cover transition-transform duration-700"
                          autoPlay
                          muted
                          playsInline
                          preload="none"
                          controls
                          controlsList="nodownload"
                        >
                          <source src={item.videoUrl} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                    <div className="text-center px-2">
                        {item.title && item.title.trim() && (
                          <h6 className="text-[#555555] text-18 font-semibold mb-1 truncate">
                            {item.title}
                          </h6>
                        )}                                                
                    </div>

                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white text-black border-none h-12 w-12 rounded-full shadow-lg z-10"
                size="icon"
              >
                <ChevronLeft className="h-6 w-6" />
              </CarouselPrevious>

              <CarouselNext
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white text-black border-none h-12 w-12 rounded-full shadow-lg z-10"
                size="icon"
              >
                <ChevronRight className="h-6 w-6" />
              </CarouselNext>
            </Carousel>
          </div>
        </div>
        {sectionInfo?.slug && (
          <div className="row">
              <div className="col-lg-12">
                  <div className="btn-wrap text-center mt-30">
                      <Link
                          href={`/gallery/${sectionInfo?.slug}`}
                          className="py-2! px-5! inline-block tracking-wide align-middle duration-500 text-base text-center bg-logo-color1 text-white rounded-md hover:!text-white"                            >
                          View all Video
                      </Link>
                  </div>
              </div>
          </div>
        )}
      </div>
    </section>
  )
}
