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
import { ChevronLeft, ChevronRight} from 'lucide-react';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { Fancybox } from '@fancyapps/ui';

export const HomeLandscapeImage = () => {
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

    const landscapeImages = [
        {
            id: 1,
            image: "/assets/modern-img/varanasi-sarnath.jpg",

        },
        {
            id: 2,
            image: "/assets/modern-img/varanasi-sarnath.jpg",

        },
        {
            id: 3,
            image: "/assets/modern-img/varanasi-sarnath.jpg",

        },
        {
            id: 4,
            image: "/assets/modern-img/varanasi-sarnath.jpg",

        },
        {
            id: 5,
            image: "/assets/modern-img/varanasi-sarnath.jpg",

        },
        {
            id: 6,
            image: "/assets/modern-img/varanasi-sarnath.jpg",

        }
    ];

    return (
        <section className="relative layout-pt-xl layout-pb-xl bg-gradient-to-b from-gray-50 to-white home-landscape-img-se">
            <div className="container relative z-20">
                <div className="row justify-center text-center">
                    <div className="col-auto">
                        <Heading
                            level={2}
                            text="Travel Stories That Speak From the Heart"
                            className="text-30 md:text-24"
                        />
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                            Real experiences shared by travelers who trusted us with their journeys.
                        </p>
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
                                                <a
                                                    href={item.image}
                                                    data-fancybox="gallery">
                                                    <img
                                                        src={item.image}
                                                        alt={item.id}
                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                    />
                                                </a>

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