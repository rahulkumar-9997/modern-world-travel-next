'use client';
import React, { useState } from 'react'
import { format } from 'date-fns'
import {
    Calendar as CalendarIcon,
    User,
    Phone,
    MapPin,
    Search
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'

export const Banner = () => {
    const [date, setDate] = useState(null)
    const [open, setOpen] = React.useState(false)
    const [formData, setFormData] = useState({
        name: '',
        phoneEmail: '',
        destination: '',
    })
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
    return (
        <section className="hero -type-1">
            <div className="hero__bg">
                <img src="/assets/img/hero/1/1.png" alt="image" />
                <img src="/assets/img/hero/1/shape.svg" alt="image" />
            </div>
            <div className="container">
                <div className="row justify-center">
                    <div className="col-xl-10 col-lg-10">
                        <div className="hero__content">
                            <h1 className="hero__title">Your world of joy</h1>
                            <p className="hero__text">
                                From local escapes to far-flung adventures, find what makes you
                                happy anytime, anywhere
                            </p>
                            <div className="mt-60 md:mt-35">
                                <form onSubmit={handleSubmit} className="searchForm -type-1">
                                    <div className="searchForm__form">
                                        <div className="searchFormItem js-select-control js-form-dd">
                                            <div className="searchFormItem__button">
                                                <div className="searchFormItem__icon size-50 rounded-12 border-1 flex-center">
                                                    <User className="text-20" />
                                                </div>
                                                <div className="searchFormItem__content">
                                                    <h5>Name</h5>
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
                                                <div className="searchFormItem__icon size-50 rounded-12 border-1 flex-center">
                                                    <Phone className="text-20" />
                                                </div>
                                                <div className="searchFormItem__content">
                                                    <h5>Phone/Email</h5>
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
                                                <div className="searchFormItem__icon size-50 rounded-12 border-1 flex-center">
                                                    <MapPin className="text-20" />
                                                </div>
                                                <div className="searchFormItem__content">
                                                    <h5>Destination</h5>
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
                                                <div className="searchFormItem__icon size-50 rounded-12 border-1 flex-center">
                                                    <CalendarIcon className="text-20" />
                                                </div>
                                                <div className="searchFormItem__content">
                                                    <h5>Select Date</h5>
                                                    <Popover open={open} onOpenChange={setOpen}>
                                                        <PopoverTrigger asChild>
                                                            <Button
                                                                variant="outline"
                                                                className="w-full justify-start text-left font-normal px-3 py-2 rounded"
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