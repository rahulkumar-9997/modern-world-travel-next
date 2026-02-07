'use client'

import React from 'react'
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Heading } from '../Heading/Heading'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'

export const HomeLandscapeVideo = () => {

  const landscapeVideos = [
    { id: 1, videoUrl: "/assets/modern-img/landscape-video/landscape-video-1.mp4" },
    { id: 2, videoUrl: "/assets/modern-img/landscape-video/landscape-video-2.mp4" },
    { id: 3, videoUrl: "/assets/modern-img/landscape-video/landscape-video-3.mp4" },
    { id: 4, videoUrl: "/assets/modern-img/landscape-video/landscape-video-2.mp4" },
    { id: 5, videoUrl: "/assets/modern-img/landscape-video/landscape-video-1.mp4" },
    { id: 6, videoUrl: "/assets/modern-img/landscape-video/landscape-video-3.mp4" },
  ]

  return (
    <section className="relative layout-pt-xl layout-pb-xl bg-gradient-to-b from-gray-50 to-white home-landscape-img-se">
      <div className="container relative z-20">

        {/* Heading */}
        <div className="row justify-center text-center">
          <div className="col-auto">
            <Heading
              level={2}
              text="Journeys Our Travelers Will Never Forget"
              className="text-30 md:text-24"
            />
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Memories created, moments cherished, and trips made truly special.
            </p>
          </div>
        </div>

        {/* Carousel */}
        <div className="row justify-center pt-20 md:pt-20">
          <div className="col-xl-12 col-lg-12">

            <Carousel
              className="w-full"
              plugins={[
                // Autoplay({
                //   delay: 4000,
                //   stopOnInteraction: false,
                // }),
              ]}
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent className="-ml-4">

                {landscapeVideos.map((item) => (
                  <CarouselItem
                    key={item.id}
                    className="pl-4 basis-1/2 md:basis-1/4"
                  >
                    <div className="group relative overflow-hidden rounded-2xl shadow-lg">

                      <div className="relative h-48 md:h-64 overflow-hidden rounded-2xl">

                        {/* ✅ AUTOPLAY VIDEO */}
                        <video
                          src={item.videoUrl}
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="metadata"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        
                      </div>

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

      </div>
    </section>
  )
}
