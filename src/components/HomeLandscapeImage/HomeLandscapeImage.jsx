'use client'
import React, { useEffect, useRef } from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { Heading } from '../Heading/Heading';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { Fancybox } from '@fancyapps/ui';

export const HomeLandscapeImage = ({ initialData, sectionInfo }) => {
    const carouselRef = useRef(null);
    useEffect(() => {
        Fancybox.bind("[data-fancybox]", {
            Thumbs: {
                autoStart: true,
            },
            Toolbar: {
                display: {
                    left: ["infobar"],
                    middle: [
                        "zoomIn",
                        "zoomOut",
                        "toggle1to1",
                        "rotateCCW",
                        "rotateCW",
                        "flipX",
                        "flipY"
                    ],
                    right: ["slideshow", "fullscreen", "close"],
                },
            },
        });
        return () => {
            Fancybox.destroy();
        };
    }, []);
    const isLoading = !initialData;
    const landscapeImages = initialData && Array.isArray(initialData) && initialData.length > 0
        ? initialData.map(item => ({
            id: item.id || Math.random().toString(),
            image: item.image_url,
            title: item.title,
            external_url: item.external_url
        }))
        : [];

    console.log('Processed landscapeImages:', landscapeImages);
    if (isLoading) {
        return (
            <section className="relative layout-pt-xl layout-pb-xl bg-gradient-to-b from-gray-50 to-white home-landscape-img-se">
                <div className="container relative z-20">

                    <div className="row justify-center pt-20 md:pt-20">
                        <div className="col-xl-12 col-lg-12">
                            <div className="relative">
                                <div className="flex -ml-2 md:-ml-4 overflow-hidden">
                                    {[...Array(4)].map((_, index) => (
                                        <div
                                            key={index}
                                            className="pl-8 md:pl-4 basis-1/2 md:basis-1/4 flex-shrink-0"
                                        >
                                            <div className="group relative overflow-hidden rounded-2xl shadow-lg box-sd">
                                                <div className="relative h-80 overflow-hidden bg-gray-300 animate-pulse">

                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-gray-300 animate-pulse"></div>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-gray-300 animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
    if (landscapeImages.length > 0) {
        return (
            <section className="relative layout-pt-xl layout-pb-xl bg-gradient-to-b from-gray-50 to-white home-landscape-img-se">
                <div className="container relative z-20">
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

                    {/* Carousel Section */}
                    <div className="row justify-center pt-20 md:pt-20">
                        <div className="col-xl-12 col-lg-12">
                            <Carousel
                                ref={carouselRef}
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
                                    slidesToScroll: 1,
                                }}
                            >
                                <CarouselContent className="-ml-2 md:-ml-4">
                                    {landscapeImages.map((item) => (
                                        <CarouselItem
                                            key={item.id}
                                            className="pl-8 md:pl-4 basis-1/2 md:basis-1/4"
                                        >
                                            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 box-sd">
                                                <div className="relative h-80 overflow-hidden">
                                                    {/* relative aspect-[4/3] overflow-hidden flex items-center justify-center bg-white */}
                                                    {item.external_url && item.external_url.trim() ? (
                                                        <a
                                                            href={item.external_url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            <img
                                                                src={item.image}
                                                                alt={item.title || `Image ${item.id}`}
                                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                                loading="lazy"
                                                            />
                                                        </a>
                                                    ) : (
                                                        <a
                                                            href={item.image}
                                                            data-fancybox="gallery"
                                                            data-caption={item.title || `Image ${item.id}`}
                                                        >
                                                            <img
                                                                src={item.image}
                                                                alt={item.title || `Image ${item.id}`}
                                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                                loading="lazy"
                                                            />
                                                        </a>
                                                    )}

                                                </div>

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
                    </div>
                </div>
            </section>
        )
    }
}