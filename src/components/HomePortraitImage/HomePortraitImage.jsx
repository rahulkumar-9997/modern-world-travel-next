'use client'
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
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

export const HomePortraitImage = ({ initialData, sectionInfo }) => {
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

    const portraitImages = initialData && Array.isArray(initialData) && initialData.length > 0
        ? initialData.map(item => ({
            id: item.id || Math.random().toString(),
            image: item.image_url,
            title: item.title,
            external_url: item.external_url
        }))
        : [];
    if (!initialData) {
        return (
            <section className="relative layout-pt-xl layout-pb-xl bg-gradient-to-b from-gray-50 to-white home-landscape-img-se">
                <div className="container relative z-20">
                    <div className="row justify-center pt-20 md:pt-20">
                        <div className="col-xl-12 col-lg-12">
                            <div className="flex -ml-2 md:-ml-4 overflow-hidden">
                                {[...Array(4)].map((_, index) => (
                                    <div key={index} className="pl-8 md:pl-4 basis-1/2 md:basis-1/4">
                                        <div className="aspect-[3/4] bg-gray-300 rounded-2xl animate-pulse"></div>
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
                                {portraitImages.map((item, index) => (
                                    <CarouselItem
                                        key={item.id}
                                        className="pl-8 md:pl-4 basis-1/2 md:basis-1/4"
                                    >
                                        <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 box-sd">
                                            <div className="relative aspect-[3/4] overflow-hidden">
                                                {item.external_url && item.external_url.trim() && item.external_url !== " " ? (
                                                    <a
                                                        href={item.external_url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="block w-full h-full"
                                                    >
                                                        <img
                                                            src={item.image}
                                                            alt={item.title || `Portrait ${index + 1}`}
                                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                            loading="lazy"
                                                            onError={(e) => {
                                                                console.error('Portrait image failed to load:', item.image);
                                                                e.target.src = '/assets/modern-img/varanasi-sarnath.jpg';
                                                            }}
                                                        />
                                                    </a>
                                                ) : (
                                                    <a
                                                        href={item.image}
                                                        data-fancybox="portrait-gallery"
                                                        data-caption={item.title || `Portrait ${index + 1}`}
                                                        className="block w-full h-full"
                                                    >
                                                        <img
                                                            src={item.image}
                                                            alt={item.title || `Portrait ${index + 1}`}
                                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                            loading="lazy"
                                                            onError={(e) => {
                                                                console.error('Portrait image failed to load:', item.image);
                                                                e.target.src = '/assets/modern-img/varanasi-sarnath.jpg';
                                                            }}
                                                        />
                                                    </a>
                                                )}
                                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent pointer-events-none">
                                                    {item.title && item.title.trim() && (
                                                        <div className="text-white font-semibold text-center mb-1 truncate text-18">
                                                            {item.title} 
                                                        </div>
                                                    )}
                                                </div>
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
                {sectionInfo?.slug && (
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="btn-wrap text-center mt-30">
                                <Link
                                    href={`/gallery/${sectionInfo?.slug}`}
                                    className="py-2! px-5! inline-block tracking-wide align-middle duration-500 text-base text-center bg-logo-color1 text-white rounded-md hover:!text-white"                            >
                                    View all Gallery
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}