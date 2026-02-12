'use client';
import React, { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import BreadcrumbHeader from '@/components/BreadcrumbHeader/BreadcrumbHeader';
import { Heading } from '@/components/Heading/Heading';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
export default function ContactUsPage() {
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
    });

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        } else if (formData.name.length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        }
        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^[\+]?[0-9\s\-\(\)]{10,}$/.test(formData.phone.replace(/\s/g, ''))) {
            newErrors.phone = 'Please enter a valid phone number';
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
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
            const response = await fetch('/api/contact-us', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const result = await response.json();
            if (response.ok) {
                setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    message: '',
                });
                setErrors({});
                toast.success('Message sent successfully! We will contact you soon.');
            } else {
                throw new Error(result.error || 'Failed to send message');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error(error.message || 'Something went wrong. Please try again.');
        } finally {
            setLoading(false);
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
            <BreadcrumbHeader
                desktopImage="/assets/img/pageHeader/1.jpg"
                mobileImage="/assets/img/pageHeader/1.jpg"
                shapeImage="/assets/img/hero/1/shape.svg"
                title="Contact Us"
                subtitle=""
            />
            <section className="contact-section layout-pt-lg layout-pb-lg">
                <div className="container">
                    <div className="row align-items-center clearfix">
                        <div className="col-lg-4 col-md-12 col-sm-12 info-column">
                            <div className="info-inner">
                                <div className="space-y-8">
                                    <div className="flex items-start space-x-3 p-3 bg-white rounded-xl shadow-sm border border-[#eb6605] hover:shadow-md transition-shadow duration-300">
                                        <div className="flex-shrink-0 w-12 h-12 bg-[#004d91] rounded-lg flex items-center justify-center">
                                            <FaPhoneAlt className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <Heading
                                                level={3}
                                                text="Phone Number"
                                                className="text-24 fw-700 mb-2"
                                            />
                                            <p className='mb-1'>
                                                <a href="tel:5424108953" className="">
                                                    +91 542 4108953
                                                </a>
                                            </p>
                                            <p className='mb-1'>
                                                <a href="tel:+919839901531" className="">
                                                    +91 98399 01531
                                                </a>
                                            </p>
                                            <p className='mb-1'>
                                                <a href="tel:+919451311551" className="">
                                                    +91 94513 11551
                                                </a>
                                            </p>
                                            <p className="text-sm text-black! mt-1">Mon-Fri, 9am-6pm</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3 p-3 bg-white rounded-xl shadow-sm border border-[#eb6605] hover:shadow-md transition-shadow duration-300">
                                        <div className="flex-shrink-0 w-12 h-12 bg-[#004d91] rounded-lg flex items-center justify-center">
                                            <FaEnvelope className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <Heading
                                                level={3}
                                                text="Email Address"
                                                className="text-24 fw-700 mb-2"
                                            />
                                            <p className='mb-1'>
                                                <a href="mailto:info@modernworldtravel.com"
                                                    className="">
                                                    info@modernworldtravel.com
                                                </a>
                                            </p>
                                            <p className='mb-1'>
                                                <a href="mailto:modernworldtravel@gmail.com"
                                                    className="">
                                                    modernworldtravel@gmail.com
                                                </a>
                                            </p>
                                            <p className='mb-1'>
                                                <a href="mailto:sales@modernworldtravel.com"
                                                    className="">
                                                    sales@modernworldtravel.com
                                                </a>
                                            </p>
                                            <p className='mb-1'>
                                                <a href="mailto:mwt@modernworldtravel.in"
                                                    className="">
                                                    mwt@modernworldtravel.in
                                                </a>
                                            </p>

                                            <p className="text-sm text-black! mt-1">We respond within 24 hours</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3 p-3 bg-white rounded-xl shadow-sm border border-[#eb6605] hover:shadow-md transition-shadow duration-300">
                                        <div className="flex-shrink-0 w-12 h-12 bg-[#004d91] rounded-lg flex items-center justify-center">
                                            <FaMapMarkerAlt className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <Heading
                                                level={3}
                                                text="Our Location"
                                                className="text-24 fw-700 mb-2"
                                            />
                                            <p>
                                                Varanasi ( Head Office ) Mumukshu Bhawan, Assi, Varanasi - 221005
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                            <div className="content_block_six">
                                <div className="content-box">
                                    <div className="form-inner">
                                        <form onSubmit={handleSubmit} className="contactForm">
                                            <div className="row y-gap-30">
                                                <div className="col-md-6">
                                                    <div className="relative">
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            value={formData.name}
                                                            onChange={handleInputChange}
                                                            placeholder="Name *"
                                                            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004d91] transition-all ${errors.name ? 'border-red-500!' : 'border-gray-300'
                                                                }`}
                                                        />
                                                        {errors.name && (
                                                            <p className="mb-0 text-red-500! text-sm mt-1">{errors.name}</p>
                                                        )}
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="relative">
                                                        <input
                                                            type="text"
                                                            name="phone"
                                                            value={formData.phone}
                                                            onChange={handleInputChange}
                                                            placeholder="Phone *"
                                                            maxLength={10}
                                                            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004d91] transition-all ${errors.phone ? 'border-red-500!' : 'border-gray-300'
                                                                }`}
                                                        />
                                                        {errors.phone && (
                                                            <p className="mb-0 text-red-500! text-sm mt-1">{errors.phone}</p>
                                                        )}
                                                    </div>
                                                </div>

                                                <div className="col-12">
                                                    <div className="relative">
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            value={formData.email}
                                                            onChange={handleInputChange}
                                                            placeholder="Email *"
                                                            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004d91] transition-all ${errors.email ? 'border-red-500!' : 'border-gray-300'
                                                                }`}
                                                        />
                                                        {errors.email && (
                                                            <p className="mb-0 text-red-500! text-sm mt-1">{errors.email}</p>
                                                        )}
                                                    </div>
                                                </div>

                                                <div className="col-12">
                                                    <div className="relative">
                                                        <textarea
                                                            name="message"
                                                            value={formData.message}
                                                            onChange={handleInputChange}
                                                            placeholder="Message *"
                                                            rows={6}
                                                            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004d91] transition-all resize-none ${errors.message ? 'border-red-500!' : 'border-gray-300'
                                                                }`}
                                                        />
                                                        {errors.message && (
                                                            <p className="mb-0 text-red-500! text-sm mt-1">{errors.message}</p>
                                                        )}
                                                    </div>
                                                </div>

                                                <div className="col-12">
                                                    <button
                                                        type="submit"
                                                        disabled={loading}
                                                        className="button -md -dark-1 bg-accent-1 text-white hover:bg-[#003366] text-white col-12 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                                                    >
                                                        {loading ? (
                                                            <>
                                                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                                </svg>
                                                                Sending...
                                                            </>
                                                        ) : (
                                                            <>
                                                                <FiSend className="w-5 h-5" />
                                                                Send Message
                                                            </>
                                                        )}
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-12 col-md-12">
                            <div className="w-full mt-26">
                                <div className="relative w-full h-[450px] rounded-xl overflow-hidden shadow-lg">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2925.9963138758717!2d83.00306135088152!3d25.286404551558523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e31f29214f029%3A0x5fc961550d740ac7!2sModern%20World%20Travel!5e0!3m2!1sen!2sin!4v1608887363413!5m2!1sen!2sin"
                                        width="100%"
                                        height="100%"
                                        className="absolute inset-0"
                                        frameBorder="0"
                                        allowFullScreen
                                        aria-hidden="false"
                                        tabIndex="0"
                                        title="Modern World Travel Location"
                                        loading="lazy"
                                    ></iframe>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
