"use client";
import React, { useState, useEffect } from 'react';
import { toast, Toaster } from 'react-hot-toast';

const FORM_CITIES = ['', 'Bodhgaya', 'Ayodhya', 'Prayagraj', 'Varanasi (Kashi)'];
const FORM_GUESTS = ['', '1-2', '3-4', '5-6', '7-10', '10+'];
const FORM_LANGS = ['', 'English', 'Japanese', 'Thai', 'Tibetan', 'Chinese', 'Hindi', 'Spanish', 'French', 'German'];
const FORM_SERVICES = ['', 'AC Cab only', 'Stay Optional', 'Foreign Language Guide', 'Airport Pickup', 'Complete Package', 'Custom Tour'];

export const EnquiryVaranasiAirportModal = ({ isOpen, onClose, defaultCity, currentUrl = "" }) => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    nationality: '',
    city: defaultCity || '',
    date: '',
    guests: '',
    language: '',
    services: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const getDateOptions = () => {
    const options = [];
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();
    for (let i = 0; i <= 12; i++) {
      const date = new Date(currentYear, currentMonth + i, 1);
      const year = date.getFullYear();
      const month = date.getMonth();
      const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];
      const monthName = monthNames[month];
      options.push({
        value: `${year}-${String(month + 1).padStart(2, '0')}`,
        label: `${monthName} ${year}`
      });
    }
    return options;
  };

  const dateOptions = getDateOptions();

  useEffect(() => {
    if (isOpen) {
      setFormData({
        name: '',
        phone: '',
        email: '',
        nationality: '',
        city: defaultCity || '',
        date: '',
        guests: '',
        language: '',
        services: '',
        message: '',
      });
      setErrors({});
      setTouched({});
      setSubmitted(false);
      setServerError('');
      setIsSubmitting(false);
    }
  }, [isOpen, defaultCity]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const fieldError = validateField(name, formData[name]);
    if (fieldError) {
      setErrors((prev) => ({ ...prev, [name]: fieldError }));
    } else {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateField = (fieldName, value) => {
    switch (fieldName) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 3) return 'Name must be at least 3 characters';
        if (value.trim().length > 100) return 'Name cannot exceed 100 characters';
        return '';
      
      case 'phone':
        if (!value.trim()) return 'Phone number is required';
        if (!/^\d{10}$/.test(value.trim())) return 'Phone number must be 10 digits';
        return '';
      
      case 'email':
        if (value.trim()) {
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email address';
          if (value.length > 150) return 'Email cannot exceed 150 characters';
        }
        return '';
      
      case 'nationality':
        if (!value.trim()) return 'Nationality is required';
        if (value.trim().length > 100) return 'Nationality cannot exceed 100 characters';
        return '';
      
      case 'city':
        if (!value) return 'Please select a destination city';
        return '';
      
      case 'date':
        if (!value) return 'Please select travel month & year';
        return '';
      
      case 'guests':
        if (!value) return 'Please select number of travellers';
        return '';
      
      case 'message':
        if (value.trim() && value.trim().length < 10) return 'Message must be at least 10 characters';
        if (value.trim().length > 1000) return 'Message cannot exceed 1000 characters';
        return '';
      
      default:
        return '';
    }
  };

  const validateForm = () => {
    const newErrors = {};
    newErrors.name = validateField('name', formData.name);
    newErrors.phone = validateField('phone', formData.phone);
    newErrors.nationality = validateField('nationality', formData.nationality);
    newErrors.city = validateField('city', formData.city);
    newErrors.date = validateField('date', formData.date);
    newErrors.guests = validateField('guests', formData.guests);
    newErrors.email = validateField('email', formData.email);
    newErrors.message = validateField('message', formData.message);
    Object.keys(newErrors).forEach(key => {
      if (!newErrors[key]) delete newErrors[key];
    });
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const allFields = ['name', 'phone', 'nationality', 'city', 'date', 'guests', 'email', 'message'];
    const touchedFields = {};
    allFields.forEach(field => {
      touchedFields[field] = true;
    });
    setTouched(touchedFields);
    
    if (!validateForm()) {
      toast.error('Please fill all required fields correctly');
      return;
    }

    setIsSubmitting(true);
    setServerError('');

    try {
      const response = await fetch('/api/airport-services', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source: 'Varanasi Airport Services Modal',
          currenturl: currentUrl
        })
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitted(true);
        toast.success('Enquiry submitted successfully! We will contact you soon.');
        setTimeout(() => {
          onClose();
          setSubmitted(false);
          setFormData({
            name: '',
            phone: '',
            email: '',
            nationality: '',
            city: defaultCity || '',
            date: '',
            guests: '',
            language: '',
            services: '',
            message: '',
          });
          setTouched({});
        }, 3000);
      } else {
        throw new Error(result.error || 'Failed to send enquiry');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setServerError(error.message || 'Something went wrong. Please try again.');
      toast.error(error.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  const fieldCls = (hasError) =>
    `w-full px-4 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all text-sm
         ${hasError ? 'border-red-500 focus:border-red-500' : 'border-white/20 focus:border-transparent'}`;

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
          <div className="relative bg-gradient-to-tr from-[#004d91] via-[#004d91] to-[#004d91] backdrop-blur-sm rounded-2xl p-3 md:p-3 w-full max-w-3xl mx-auto border border-gray-700/50">
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
                Request a Quote
              </h5>
              {defaultCity && (
                <span className="text-22 md:text-18 font-bold text-[#FFD700] mb-2 block">
                  {defaultCity}
                </span>
              )}
            </div>

            {submitted ? (
              <div className="text-center py-10 px-4">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4CAF50"
                  strokeWidth={1.5}
                  className="w-16 h-16 mx-auto mb-4"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="9 12 11 14 15 10" />
                </svg>
                <h3 className="text-xl font-semibold text-white mb-2">Enquiry Received!</h3>
                <p className="text-white/70 leading-relaxed">
                  Our team will contact you within 24 hours with a personalised quote on WhatsApp or email.
                </p>
                <button
                  onClick={onClose}
                  className="mt-6 px-6 py-2 rounded-lg bg-white text-[#004d91] text-sm font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 contactForm">
                {serverError && (
                  <div className="mb-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg">
                    <p className="text-sm text-white">{serverError}</p>
                  </div>
                )}
                {defaultCity && (
                  <input
                    type="hidden"
                    name="defaultCity"
                    value={defaultCity}
                  />
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white mb-1 text-sm font-medium">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      className={fieldCls(errors.name)}
                      disabled={isSubmitting}
                    />
                    {errors.name && (
                      <div className="mt-1 text-xs text-red-300">{errors.name}</div>
                    )}
                  </div>

                  <div>
                    <label className="block text-white mb-1 text-sm font-medium">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="9876543210"
                      value={formData.phone}
                      onChange={handleChange}
                      maxLength={10}
                      className={fieldCls(errors.phone)}
                      disabled={isSubmitting}
                    />
                    {errors.phone && (
                      <div className="mt-1 text-xs text-red-300">{errors.phone}</div>
                    )}
                  </div>

                  <div>
                    <label className="block text-white mb-1 text-sm font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="you@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={fieldCls(errors.email)}
                      disabled={isSubmitting}
                    />
                    {errors.email && (
                      <div className="mt-1 text-xs text-red-300">{errors.email}</div>
                    )}
                  </div>

                  <div>
                    <label className="block text-white mb-1 text-sm font-medium">
                      Nationality
                    </label>
                    <input
                      type="text"
                      name="nationality"
                      placeholder="e.g. Indian, Japanese"
                      value={formData.nationality}
                      onChange={handleChange}
                      className={fieldCls(errors.nationality)}
                      disabled={isSubmitting}
                    />
                    {errors.nationality && (
                      <div className="mt-1 text-xs text-red-300">{errors.nationality}</div>
                    )}
                  </div>

                  <div>
                    <label className="block text-white mb-1 text-sm font-medium">
                      Destination City *
                    </label>
                    <select
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className={fieldCls(errors.city)}
                      disabled={isSubmitting}
                    >
                      {FORM_CITIES.map((c) => (
                        <option key={c} value={c} className="text-black">
                          {c || '-- Select city --'}
                        </option>
                      ))}
                    </select>
                    {errors.city && (
                      <div className="mt-1 text-xs text-red-300">{errors.city}</div>
                    )}
                  </div>

                  <div>
                    <label className="block text-white mb-1 text-sm font-medium">
                      Travel Month & Year *
                    </label>
                    <select
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className={fieldCls(errors.date)}
                      disabled={isSubmitting}
                    >
                      <option value="" className="text-black">-- Select travel month --</option>
                      {dateOptions.map((option) => (
                        <option key={option.value} value={option.value} className="text-black">
                          {option.label}
                        </option>
                      ))}
                    </select>
                    {errors.date && (
                      <div className="mt-1 text-xs text-red-300">{errors.date}</div>
                    )}
                    
                  </div>

                  <div>
                    <label className="block text-white mb-1 text-sm font-medium">
                      No. of Travellers *
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className={fieldCls(errors.guests)}
                      disabled={isSubmitting}
                    >
                      {FORM_GUESTS.map((g) => (
                        <option key={g} value={g} className="text-black">
                          {g || '-- Select number --'}
                        </option>
                      ))}
                    </select>
                    {errors.guests && (
                      <div className="mt-1 text-xs text-red-300">{errors.guests}</div>
                    )}
                  </div>

                  <div>
                    <label className="block text-white mb-1 text-sm font-medium">
                      Preferred Language
                    </label>
                    <select
                      name="language"
                      value={formData.language}
                      onChange={handleChange}
                      className={fieldCls(errors.language)}
                      disabled={isSubmitting}
                    >
                      {FORM_LANGS.map((l) => (
                        <option key={l} value={l} className="text-black">
                          {l || '-- Select language --'}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-white mb-1 text-sm font-medium">
                      Services Needed
                    </label>
                    <select
                      name="services"
                      value={formData.services}
                      onChange={handleChange}
                      className={fieldCls(errors.services)}
                      disabled={isSubmitting}
                    >
                      {FORM_SERVICES.map((s) => (
                        <option key={s} value={s} className="text-black">
                          {s || '-- Select services --'}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-white mb-1 text-sm font-medium">
                      Additional Requirements
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      maxLength={1000}
                      placeholder="Special requests, dietary needs, accessibility requirements..."
                      className={fieldCls(errors.message)}
                      disabled={isSubmitting}
                    />
                    <div className="flex justify-between items-center mt-1">
                      {errors.message ? (
                        <div className="text-xs text-red-300">{errors.message}</div>
                      ) : (
                        <p className="text-xs! text-white">
                          Optional - Tell us more about your requirements
                        </p>
                      )}
                      <p className="text-xs text-white/50">
                        {formData.message.length}/1000
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-3 py-2.5! rounded! bg-white text-[#410f06] font-semibold transition-all duration-300 flex items-center justify-center ${isSubmitting
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
                      'Submit Enquiry'
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

export default EnquiryVaranasiAirportModal;