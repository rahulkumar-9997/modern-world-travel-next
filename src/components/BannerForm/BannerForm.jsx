'use client';

import React, { useState } from 'react';
import { format } from 'date-fns';
import { toast, Toaster } from 'react-hot-toast';
import {
    Calendar as CalendarIcon,
    User,
    Phone,
    MapPin,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';

export const BannerForm = () => {
    const [date, setDate] = useState(null);
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        name: '',
        phoneEmail: '',
        destination: '',
    });

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        } else if (formData.name.length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        }
        if (!formData.phoneEmail.trim()) {
            newErrors.phoneEmail = 'Phone or Email is required';
        } else {
            const isEmail = /\S+@\S+\.\S+/.test(formData.phoneEmail);
            const isPhone = /^[\+]?[0-9\s\-\(\)]{10,}$/.test(formData.phoneEmail.replace(/\s/g, ''));

            if (!isEmail && !isPhone) {
                newErrors.phoneEmail = 'Please enter a valid phone number or email';
            }
        }
        if (!formData.destination.trim()) {
            newErrors.destination = 'Destination is required';
        }
        if (!date) {
            newErrors.date = 'Please select a date';
        } else {
            const selectedDate = new Date(date);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            selectedDate.setHours(0, 0, 0, 0);

            if (selectedDate <= today) {
                newErrors.date = 'Please select a future date';
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            toast.error('Please fix the errors in the form');
            return;
        }
        setLoading(true);
        try {
            const response = await fetch('/api/home-send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    formattedDate: format(date, 'PPP'),
                }),
            });
            const result = await response.json();
            if (response.ok) {
                setFormData({
                    name: '',
                    phoneEmail: '',
                    destination: '',
                });
                setDate(null);
                setErrors({});
                toast.success('Enquiry sent successfully! We will contact you soon.');
            } else {
                throw new Error(result.error || 'Failed to send enquiry');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error(error.message || 'Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleDateSelect = (selectedDate) => {
        setDate(selectedDate);
        setOpen(false);
        if (errors.date) {
            setErrors(prev => ({
                ...prev,
                date: ''
            }));
        }
    };
    return (
        <>
            <Toaster
                position="top-right"
                toastOptions={{
                    duration: 4000,
                    style: {
                        background: '#363636',
                        color: '#fff',
                    },
                    success: {
                        duration: 3000,
                        iconTheme: {
                            primary: '#4CAF50',
                            secondary: '#fff',
                        },
                    },
                    error: {
                        duration: 4000,
                        iconTheme: {
                            primary: '#EF4444',
                            secondary: '#fff',
                        },
                    },
                }}
            />

            <div className="home-enqiry-from">
                <div className="container relative z-10">
                    <div className="row justify-center">
                        <div className="col-xl-10 col-lg-10">
                            <div className="hero__content">
                                <div className="home-forms">
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
                                                            className={`w-full border-0 bg-transparent focus:outline-none ${errors.name ? 'placeholder-red-500' : ''}`}
                                                        />
                                                    </div>
                                                </div>
                                                {/* {errors.name && (
                                                    <p className="text-red-500 text-sm mt-1 ml-12">{errors.name}</p>
                                                )} */}
                                            </div>
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
                                                            placeholder="Phone"
                                                            className={`w-full border-0 bg-transparent focus:outline-none ${errors.phoneEmail ? 'placeholder-red-500' : ''}`}
                                                        />
                                                    </div>
                                                </div>
                                                {/* {errors.phoneEmail && (
                                                    <p className="text-red-500 text-sm mt-1 ml-12">{errors.phoneEmail}</p>
                                                )} */}
                                            </div>
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
                                                            className={`w-full border-0 bg-transparent focus:outline-none ${errors.destination ? 'placeholder-red-500' : ''}`}
                                                        />
                                                    </div>
                                                </div>
                                                {/* {errors.destination && (
                                                    <p className="text-red-500 text-sm mt-1 ml-12">{errors.destination}</p>
                                                )} */}
                                            </div>
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
                                                                    className={`w-full justify-start text-left font-normal px-0 py-2 rounded bg-transparent border-0 ${errors.date ? 'text-red-500' : ''}`}
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
                                                                    onSelect={handleDateSelect}
                                                                    initialFocus
                                                                    disabled={(date) => {
                                                                        const today = new Date();
                                                                        today.setHours(0, 0, 0, 0);
                                                                        const selectedDate = new Date(date);
                                                                        selectedDate.setHours(0, 0, 0, 0);
                                                                        return selectedDate <= today;
                                                                    }}
                                                                />
                                                            </PopoverContent>
                                                        </Popover>
                                                    </div>
                                                </div>
                                                {/* {errors.date && (
                                                    <p className="text-red-500 text-sm mt-1 ml-12">{errors.date}</p>
                                                )} */}
                                            </div>
                                        </div>
                                        <div className="searchForm__button">
                                            <button
                                                type="submit"
                                                disabled={loading}
                                                className="button -dark-1 bg-accent-1 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                                            >
                                                {loading ? (
                                                    <span className="flex items-center justify-center">
                                                        <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                        </svg>
                                                        Sending...
                                                    </span>
                                                ) : 'Enquire Now'}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};