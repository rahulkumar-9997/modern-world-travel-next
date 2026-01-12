'use client'
import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { Heading } from '../Heading/Heading';

export const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "Brooklyn Simmons",
            role: "Web Developer",
            image: "/assets/modern-img/testimonials/test-1.jpg",
            quote: "Great quality!",
            content: "The tours in this website are great. I had been really enjoy with my family! The team is very professional and taking care of the customers. Will surely recommend to my friend to join this company!"
        },
        {
            id: 2,
            name: "Alex Johnson",
            role: "Travel Blogger",
            image: "/assets/modern-img/testimonials/test-2.jpg",
            quote: "Amazing Experience!",
            content: "One of the best travel experiences I've ever had. Everything was perfectly organized and the guides were extremely knowledgeable."
        },
        {
            id: 3,
            name: "Sarah Williams",
            role: "Photographer",
            image: "/assets/modern-img/testimonials/test-3.jpg",
            quote: "Unforgettable Journey",
            content: "The attention to detail was impressive. From accommodation to activities, everything exceeded my expectations."
        },
        
    ];
    return (
        <div className="bg-accent-1-05">
            <section className="relative layout-pt-xl layout-pb-xl">
                <div className="sectionBg md:d-none">
                    <img src="/assets/img/testimonials/1/1.png" alt="background" />
                </div>
                <div className="container">
                    <div className="row justify-center text-center">
                        <div className="col-auto">
                            <Heading
                                level={2}
                                text="Happy Clients of Modern World Travel"
                                className="text-30 md:text-24"
                            />
                        </div>
                    </div>
                    <div className="row justify-center pt-60 md:pt-20">
                        <div className="col-xl-6 col-md-8 col-sm-10">
                            <Carousel
                                className="overflow-hidden"
                                plugins={[
                                    Autoplay({
                                        delay: 5000,
                                        stopOnInteraction: false,
                                    })
                                ]}
                                opts={{
                                    align: "start",
                                    loop: true,
                                }}
                            >
                                <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 shadow-xl hover:shadow-2xl transition-all duration-300 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center" />
                                <CarouselContent>
                                    {testimonials.map((testimonial) => (
                                        <CarouselItem key={testimonial.id}>
                                            <div className="testimonials -type-1 pt-10 text-center">
                                                <div className="testimonials__image size-100 rounded-full">
                                                    <img
                                                        src={testimonial.image}
                                                        alt={testimonial.name}
                                                        className="rounded-full"
                                                    />
                                                    <div className="testimonials__icon">
                                                        <svg
                                                            width={16}
                                                            height={13}
                                                            viewBox="0 0 16 13"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M13.3165 0.838867C12.1013 1.81846 10.9367 3.43478 9.77215 5.63887C8.65823 7.84295 8 10.2429 7.8481 12.8389H12.4557C12.4051 8.87152 13.6203 5.24703 16 1.91642L13.3165 0.838867ZM5.51899 0.838867C4.25316 1.81846 3.08861 3.43478 1.92405 5.63887C0.810126 7.84295 0.151899 10.2429 0 12.8389H4.60759C4.55696 8.87152 5.77215 5.19805 8.20253 1.91642L5.51899 0.838867Z"
                                                                fill="white"
                                                            />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="text-18 fw-500 text-accent-1 mt-20 md:mt-20">
                                                    {testimonial.quote}
                                                </div>
                                                <div className="text-20 fw-500 mt-20">
                                                    {testimonial.content}
                                                </div>
                                                <div className="mt-20 md:mt-40">
                                                    <div className="lh-16 text-16 fw-500">{testimonial.name}</div>
                                                    
                                                </div>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 shadow-xl hover:shadow-2xl transition-all duration-300 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center" />
                            </Carousel>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}