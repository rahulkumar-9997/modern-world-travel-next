'use client'
import React, { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Heading } from '../Heading/Heading';
import Link from 'next/link';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export const HomeAbout = () => {
    const carouselRef = useRef(null);
    const carouselImages = [
        {
            src: "/assets/modern-img/banner/International.jpg",
            alt: "About Modern World Travel 1"
        },
        {
            src: "/assets/modern-img/banner/banner.jpg",
            alt: "About Modern World Travel 2"
        },
        {
            src: "/assets/modern-img/banner/Taz-Mahal.jpg",
            alt: "About Modern World Travel 3"
        }
    ];
    return (
        <>
            <section className="about-home">
                <div className="about-home-container">                    
                    <div className="container about-home-section relative z-10">
                        <div className="row items-center">                            
                            <div className="col-md-6 md:order-2">
                                <div className="about-home-content">
                                    <Heading
                                        level={1}
                                        className="text-40 md:text-20 md:max-w-full max-w-xl font-extrabold md:mt-8 mt-4 mx-auto about-h-home-heading"
                                    >
                                        Modern World Travel —                            
                                        Your 
                                        <span> Journey, </span>
                                        Our 
                                        <span> Passion</span> .
                                    </Heading>
                                    <div className='about-text'>
                                        <p className="mb-3!">
                                            Modern World Travel has its corporate office in Varanasi. Located in the prime commercial/tourist area of the city of Varanasi, Modern World Travel's close to a whole range of hotels from 5 star to budget. 
                                        </p>
                                        
                                    </div>
                                    <div className="mt-3">
                                        <Link href="/about-us" className="py-2! px-5! inline-block tracking-wide align-middle duration-500 text-base text-center bg-logo-color1 text-white rounded-md hover:!text-white">
                                            Read More 
                                        </Link>
                                    </div>
                                </div>
                            </div>    
                            
                            <div className="col-md-6 md:order-1">
                                <div className="abou-home-image relative">
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
                                        <CarouselContent>
                                            {carouselImages.map((image, index) => (
                                                <CarouselItem key={index}>
                                                    <img
                                                        src={image.src}
                                                        className="w-full h-110 object-cover rounded-xl"
                                                        alt={image.alt}
                                                    />
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
                    </div>
                </div>
            </section>
        </>
    )
}