'use client';
import React, { useState } from 'react';
import { format } from 'date-fns';
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import {
    Calendar as CalendarIcon,
    User,
    Phone,
    MapPin,
    ChevronLeft,
    ChevronRight
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'

export const Banner = () => {
    const [date, setDate] = useState(null)
    const [open, setOpen] = React.useState(false)
    const [formData, setFormData] = useState({
        name: '',
        phoneEmail: '',
        destination: '',
    })
    const carouselImages = [
        {
            src: "/assets/modern-img/banner-img.png",
            alt: "Beautiful beach destination"
        },
        {
            src: "/assets/modern-img/banner-img.png",
            alt: "Mountain adventure"
        },
        {
            src: "/assets/modern-img/banner-img.png",
            alt: "City skyline"
        },
        {
            src: "/assets/modern-img/banner-img.png",
            alt: "Cultural heritage site"
        }
    ]

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form data:', { ...formData, selectedDate: date })
    }
    const autoplay = useRef(
        Autoplay({ delay: 3500, stopOnInteraction: false })
    )    
    return (
        <section className="hero -type-1 relative">
            <div className="hero__bg absolute inset-0">
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
                                        className="w-full h-full object-cover min-h-[600px]"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious 
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 border-none h-12 w-12 rounded-full shadow-lg z-10"
                        size="icon"
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </CarouselPrevious>
                    <CarouselNext 
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 border-none h-12 w-12 rounded-full shadow-lg z-10"
                        size="icon"
                    >
                        <ChevronRight className="h-6 w-6" />
                    </CarouselNext>
                </Carousel>
            </div>
            <div className="container relative z-10 pt-40 pb-40">
                <div className="row justify-center">
                    <div className="col-xl-10 col-lg-10">
                        <div className="hero__content">
                            <div className="mt-60 md:mt-35">
                                <form onSubmit={handleSubmit} className="searchForm -type-1">
                                    <div className="searchForm__form">
                                        <div className="searchFormItem js-select-control js-form-dd">
                                            <div className="searchFormItem__button">
                                                <div className="searchFormItem__icon size-40 rounded-12 border-1 flex-center">
                                                    <User className="text-18" />
                                                </div>
                                                <div className="searchFormItem__content">
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleInputChange}
                                                        placeholder="Your name"
                                                        required
                                                        className="w-full border-0 bg-transparent focus:outline-none"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Phone/Email Field */}
                                        <div className="searchFormItem js-select-control js-form-dd">
                                            <div className="searchFormItem__button">
                                                <div className="searchFormItem__icon size-40 rounded-12 border-1 flex-center">
                                                    <Phone className="text-20" />
                                                </div>
                                                <div className="searchFormItem__content">
                                                    <input
                                                        type="text"
                                                        name="phoneEmail"
                                                        value={formData.phoneEmail}
                                                        onChange={handleInputChange}
                                                        placeholder="Phone or Email"
                                                        required
                                                        className="w-full border-0 bg-transparent focus:outline-none"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Destination Field */}
                                        <div className="searchFormItem js-select-control js-form-dd">
                                            <div className="searchFormItem__button">
                                                <div className="searchFormItem__icon size-40 rounded-12 border-1 flex-center">
                                                    <MapPin className="text-20" />
                                                </div>
                                                <div className="searchFormItem__content">
                                                    <input
                                                        type="text"
                                                        name="destination"
                                                        value={formData.destination}
                                                        onChange={handleInputChange}
                                                        placeholder="Where do you want to go?"
                                                        required
                                                        className="w-full border-0 bg-transparent focus:outline-none"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Date Picker Field */}
                                        <div className="searchFormItem js-select-control js-form-dd">
                                            <div className="searchFormItem__button">
                                                <div className="searchFormItem__icon size-40 rounded-12 border-1 flex-center">
                                                    <CalendarIcon className="text-20" />
                                                </div>
                                                <div className="searchFormItem__content">
                                                    <Popover open={open} onOpenChange={setOpen}>
                                                        <PopoverTrigger asChild>
                                                            <Button
                                                                variant="outline"
                                                                className="w-full justify-start text-left font-normal px-0 py-2 rounded bg-transparent border-0"
                                                            >
                                                                <span className="truncate">
                                                                    {date ? format(date, "PPP") : "Select Date"}
                                                                </span>
                                                            </Button>
                                                        </PopoverTrigger>
                                                        <PopoverContent className="w-auto p-0" align="start">
                                                            <Calendar
                                                                mode="single"
                                                                selected={date}
                                                                onSelect={(selectedDate) => {
                                                                    setDate(selectedDate)
                                                                    setOpen(false)
                                                                }}
                                                                initialFocus
                                                                disabled={(date) => {
                                                                    const today = new Date()
                                                                    today.setHours(0, 0, 0, 0)
                                                                    const selectedDate = new Date(date)
                                                                    selectedDate.setHours(0, 0, 0, 0)
                                                                    return selectedDate <= today
                                                                }}
                                                            />
                                                        </PopoverContent>
                                                    </Popover>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="searchForm__button">
                                        <button
                                            type="submit"
                                            className="button -dark-1 bg-accent-1 text-white"
                                        >
                                            Enquire Now
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}