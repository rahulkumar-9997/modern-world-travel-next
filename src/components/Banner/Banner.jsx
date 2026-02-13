'use client';
import dynamic from "next/dynamic";
import React, { useState } from 'react';
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
// import { BannerForm } from '../BannerForm/BannerForm';
import {
    Calendar as CalendarIcon,
    ChevronLeft,
    ChevronRight
} from 'lucide-react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
const BannerForm = dynamic(
  () => import("../BannerForm/BannerForm").then(m => m.BannerForm),
  { ssr: false }
);
export function Banner({ initialData }) {
    const autoplay = useRef(
        Autoplay({ delay: 3500, stopOnInteraction: false })
    )
    const carouselImages = initialData && initialData.length > 0
        ? initialData.map(item => ({
            src: item.desktop_img || "/assets/modern-img/banner-img.png",
            alt: item.title || 'Banner image',
            mobileSrc: item.mobile_img || item.desktop_img || "/assets/modern-img/banner-img.png",
            caption: item.caption,
            url: item.url
        }))
        : [];
    return (
        <>
            <section className="hero -type-1 relative lg:h-[520] h-[400px] md:h-[400px] overflow-hidden ">
                <div className="hero__bg absolute inset-0 h-full">
                    <Carousel className="w-full h-full"
                        plugins={[autoplay.current]}
                        opts={{ loop: true }}>
                        <CarouselContent>
                            {carouselImages.map((image, index) => (
                                <CarouselItem key={index}>
                                    <div className="relative w-full h-full">
                                        <img
                                            src={image.src}
                                            alt={image.alt}
                                            className="w-full h-full object-cover min-h-[500px] hidden lg:block"
                                            loading={index === 0 ? 'eager' : 'lazy'}
                                        />
                                        <img
                                            src={image.mobileSrc}
                                            alt={image.alt}
                                            className="w-full h-full object-cover min-h-[400px] block lg:hidden"
                                            loading={index === 0 ? 'eager' : 'lazy'}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-white text-black border-none h-12 w-12 rounded-full shadow-lg z-10"
                            size="icon"
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </CarouselPrevious>
                        <CarouselNext
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-white text-black border-none h-12 w-12 rounded-full shadow-lg z-10"
                            size="icon"
                        >
                            <ChevronRight className="h-6 w-6" />
                        </CarouselNext>
                    </Carousel>
                </div>                
            </section>
            <BannerForm />
        </>
        
    )
}