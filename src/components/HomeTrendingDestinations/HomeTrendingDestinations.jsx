"use client";
import { Heading } from '../Heading/Heading';
import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Spinner from '../Loader/spinner';

export const HomeTrendingDestinations = () => {

    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: false })
    )

    const { data, isLoading, isError, isFetching, error } = useQuery({
        queryKey: ["treanding-destinations"],
        queryFn: async () => {
            const res = await axios.get('https://www.gdsons.co.in/draft/mwt/api/home-trending-destinations');
            return res.data;
        },
        retry: 1,
        placeholderData: (old) => old,
    });
    return (
        <section className="layout-pt-xl layout-pb-xl">
            <div className="container animated">
                <div className="row justify-between items-end y-gap-10 is-in-view">
                    <div className="col-auto">
                        <Heading
                            level={2}
                            text="Trending destinations"
                            className="text-30 mb-0"
                        />
                    </div>
                    <div className="col-auto">
                        <button className="buttonArrow d-flex items-center ">
                            <span className="text-xl">See all</span>
                            <i className="icon-arrow-top-right text-16 ml-10" />
                        </button>
                    </div>
                </div>
                {
                    isLoading && <Spinner />
                }
                <div className="row y-gap-30 pt-40 sm:pt-20 is-in-view">
                    <div className="col-12 relative">
                        <Carousel
                            plugins={[plugin.current]}
                            onMouseEnter={plugin.current.stop}
                            onMouseLeave={plugin.current.reset}
                            opts={{
                                align: "start",
                                loop: true,
                            }}
                            className="w-full"
                        >
                            {/* Previous Button */}
                            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 shadow-xl hover:shadow-2xl transition-all duration-300 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center" />

                            <CarouselContent className="-ml-2 md:-ml-4">
                                {data && data.map((destination) => (
                                    <CarouselItem
                                        key={destination.nid}
                                        className="min-w-0 shrink-0 grow-0 pl-1 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6"
                                    >
                                        <a href={`/destination/${destination.url}`} className="featureCard -type-2 -hover-image-scale block">
                                            <div className="featureCard__image ratio ratio-19:22 rounded-24 -hover-image-scale__image">
                                                <img
                                                    src={destination.image ?? "/assets/modern-img/varanasi-sarnath.jpg"}
                                                    alt={destination.name}
                                                    className="img-ratio rounded-24"
                                                />
                                            </div>
                                            <div className="featureCard__content text-center">
                                                <h4 className="text-white text-18">{destination.name}</h4>
                                            </div>
                                        </a>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>

                            {/* Next Button */}
                            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 shadow-xl hover:shadow-2xl transition-all duration-300 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center" />
                        </Carousel>
                    </div>
                </div>
            </div>
        </section>
    )
}