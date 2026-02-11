"use client";
import React, { useState, useEffect } from 'react';
import { toast, Toaster } from 'react-hot-toast';

const EnquiryModal = ({ isOpen, onClose, title = "Contact Us" }) => {
    const [formData, setFormData] = useState({
        title: '',
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [serverError, setServerError] = useState('');

    useEffect(() => {
        if (isOpen) {
            setFormData({
                title: title || '',
                name: '',
                email: '',
                subject: '',
                message: ''
            });
            setErrors({});
            setSubmitStatus(null);
            setServerError('');
        }
    }, [isOpen, title]);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
        if (errors[id]) {
            setErrors(prev => ({
                ...prev,
                [id]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        } else if (formData.name.trim().length < 3) {
            newErrors.name = 'Name must be at least 3 characters';
        } else if (formData.name.trim().length > 100) {
            newErrors.name = 'Name cannot exceed 100 characters';
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        } else if (formData.email.length > 150) {
            newErrors.email = 'Email cannot exceed 150 characters';
        }
        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required';
        } else if (formData.subject.trim().length < 3) {
            newErrors.subject = 'Subject must be at least 3 characters';
        } else if (formData.subject.trim().length > 150) {
            newErrors.subject = 'Subject cannot exceed 150 characters';
        }
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }
        if (formData.title && formData.title.trim().length > 100) {
            newErrors.title = 'Title cannot exceed 100 characters';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }
        setIsSubmitting(true);
        setSubmitStatus(null);
        setServerError('');

        try {            
            // Send email via Resend
            const emailResponse = await fetch('/api/contact-us', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: formData.title || '',
                    name: formData.name.trim(),
                    email: formData.email.trim(),
                    subject: formData.subject.trim(),
                    message: formData.message.trim(),
                    source: 'Enquiry Modal'
                })
            });

            const emailResult = await emailResponse.json();

            if (backendResponse.ok && backendResult.status === true && emailResponse.ok) {
                setFormData({
                    title: title || '',
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
                setSubmitStatus('success');
                toast.success('Enquiry submitted successfully! We will contact you soon.');
                setTimeout(() => {
                    onClose();
                }, 3000);
            } else {
                if (backendResult.errors) {
                    const serverErrors = {};
                    Object.keys(backendResult.errors).forEach(key => {
                        serverErrors[key] = backendResult.errors[key][0];
                    });
                    setErrors(serverErrors);
                    setSubmitStatus('error');
                    setServerError('Please correct the errors below.');
                } else if (!emailResponse.ok) {
                    setSubmitStatus('error');
                    setServerError(emailResult.error || 'Failed to send notification email.');
                    toast.error('Failed to send notification email.');
                } else {
                    setSubmitStatus('error');
                    setServerError(backendResult.message || 'Failed to submit enquiry. Please try again.');
                    toast.error(backendResult.message || 'Failed to submit enquiry. Please try again.');
                }
            }

        } catch (error) {
            console.error('Enquiry submission error:', error);
            setSubmitStatus('error');
            setServerError('Network error. Please check your connection and try again.');
            toast.error('Network error. Please check your connection and try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

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

            <div className="fixed inset-0 z-50 overflow-y-auto">
                <div
                    className="fixed inset-0 bg-black bg-opacity-70 transition-opacity"
                    onClick={onClose}
                    aria-hidden="true"
                />
                <div className="flex min-h-full items-center justify-center p-4">
                    <div className="relative bg-gradient-to-tr from-[#004d91] via-[#004d91] to-[#004d91] backdrop-blur-sm rounded-2xl p-3 md:p-3 w-full max-w-2xl mx-auto border border-gray-700/50">
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors z-10"
                            aria-label="Close modal"
                            disabled={isSubmitting}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div className="text-center mb-6">
                            <h5 className="text-26 md:text-22 font-bold text-white mb-2">
                                {title}
                            </h5>
                        </div>
                        {submitStatus === 'success' && (
                            <div className="mb-3 p-2 bg-green-500/20 border border-green-500/30 rounded-lg animate-fadeIn">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-white">
                                            ✓ Enquiry submitted successfully!
                                        </p>
                                        <p className="mt-1 text-sm text-white">
                                            Thank you for contacting us. We'll get back to you shortly.
                                        </p>
                                        <p className="mt-1 text-xs text-green-100 opacity-80">
                                            This modal will close automatically...
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                        {submitStatus === 'error' && serverError && (
                            <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg animate-fadeIn">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <svg className="h-5 w-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-white">
                                            ✗ {serverError}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                        {submitStatus !== 'success' && (
                            <form onSubmit={handleSubmit} className="space-y-4 contactForm">
                                {title && (
                                    <div className="d-none">
                                        <label htmlFor="title" className="block text-white mb-1 text-sm font-medium">
                                            Enquiry For
                                        </label>
                                        <input
                                            type="text"
                                            id="title"
                                            readOnly
                                            value={formData.title}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 bg-white border rounded-lg text-white placeholder-white-400  ${errors.title
                                                ? 'border-red-500 focus:border-red-500'
                                                : 'border-white/20 focus:border-transparent'
                                                }`}
                                            placeholder="e.g., Room Booking, General Inquiry"
                                            disabled={isSubmitting}
                                        />
                                        {errors.title && (
                                            <div className="mt-1 text-xs text-white">{errors.title}</div>
                                        )}
                                    </div>
                                )}

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="name" className="block text-white mb-1 text-lg font-medium">
                                            Your Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 bg-white/10 border-white rounded-lg text-white l text-sm ${errors.name
                                                ? 'border-red-500 focus:border-red-500'
                                                : 'border-white/20 focus:border-transparent'
                                                }`}
                                            disabled={isSubmitting}
                                        />
                                        {errors.name && (
                                            <div className="mt-1 text-xs text-white">{errors.name}</div>
                                        )}
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-white mb-1 text-lg font-medium">
                                            Your Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white text-sm ${errors.email
                                                ? 'border-red-500 focus:border-red-500'
                                                : 'border-white/20 focus:border-transparent'
                                                }`}
                                            disabled={isSubmitting}
                                        />
                                        {errors.email && (
                                            <div className="mt-1 text-xs text-white">{errors.email}</div>
                                        )}
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-white mb-1 text-lg font-medium">
                                        Subject *
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all text-sm ${errors.subject
                                            ? 'border-red-500 focus:border-red-500'
                                            : 'border-white/20 focus:border-transparent'
                                            }`}
                                        disabled={isSubmitting}
                                    />
                                    {errors.subject && (
                                        <div className="mt-1 text-xs text-white">{errors.subject}</div>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-white mb-1 text-lg font-medium">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all text-sm resize-none ${errors.message
                                            ? 'border-red-500 focus:border-red-500'
                                            : 'border-white/20 focus:border-transparent'
                                            }`}
                                        disabled={isSubmitting}
                                    />
                                    <div className="flex justify-between items-center mt-1">
                                        {errors.message ? (
                                            <div className="text-xs text-white">{errors.message}</div>
                                        ) : (
                                            <p className="text-xs text-white">
                                                Minimum 10 characters required
                                            </p>
                                        )}
                                        <p className="text-xs text-gray-300">
                                            {formData.message.length}/1000
                                        </p>
                                    </div>
                                </div>
                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-full px-3 py-3 rounded! bg-white text-[#410f06] font-semibold transition-all duration-300 flex items-center justify-center ${isSubmitting
                                            ? 'opacity-70 cursor-not-allowed'
                                            : 'hover:bg-gray-100 hover:shadow-lg transform hover:-translate-y-0.5'
                                            }`}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                                </svg>
                                                Submitting...
                                            </>
                                        ) : (
                                            'Send Message'
                                        )}
                                    </button>
                                </div>
                            </form>
                        )}
                        {isSubmitting && (
                            <div className="absolute inset-0 bg-black/30 rounded-2xl flex items-center justify-center">
                                <div className="text-white">
                                    <svg className="animate-spin h-8 w-8 mx-auto" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                    </svg>
                                    <p className="mt-2 text-sm">Submitting your enquiry...</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default EnquiryModal;