"use client";
import React, { useState } from 'react';
import BreadcrumbHeader from '@/components/BreadcrumbHeader/BreadcrumbHeader';
import { Heading } from '@/components/Heading/Heading';
import Image from 'next/image';
import Link from 'next/link';
import { Leaf, Star, Droplet, Flame, MapPin, Compass, Circle, Globe } from 'lucide-react';
import EnquiryVaranasiAirportModal from '@/components/EnquiryVaranasiAirportModal/EnquiryVaranasiAirportModal';

const iconComponents = {
    leaf: Leaf,
    star: Star,
    droplet: Droplet,
    flame: Flame,
};

const defaultIcons = [MapPin, Compass, Circle, Globe];

const CityIcon = ({ icon, color }) => {
    let Icon = iconComponents[icon];
    if (!Icon) {
        const randomIndex = Math.floor(Math.random() * defaultIcons.length);
        Icon = defaultIcons[randomIndex];
    }
    return <Icon size={28} color={color} />;
};

export default function CityPage({ initialData }) {
    const { city, destinations = [], tour_cover = [], airport_services = [] } = initialData;

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCity, setSelectedCity] = useState('');

    const CITY_PALETTES = [
        { color: '#10b981', bg: '#d1fae5', lightBg: '#ecfdf5' },
        { color: '#f59e0b', bg: '#fed7aa', lightBg: '#fffbeb' },
        { color: '#3b82f6', bg: '#dbeafe', lightBg: '#eff6ff' },
        { color: '#ef4444', bg: '#fee2e2', lightBg: '#fef2f2' },
    ];

    const openModal = (title) => {
        setSelectedCity(title);
        setIsModalOpen(true);
    };

    // Helper function to validate image URL
    const getValidImageUrl = (url, fallback = "/assets/modern-img/Vrindavan.jpg") => {
        if (!url || typeof url !== 'string' || url.trim() === '') {
            return fallback;
        }
        // Check if it's a valid URL or path
        try {
            new URL(url);
            return url;
        } catch {
            // If invalid URL, return fallback
            return fallback;
        }
    };

    return (
        <>
            <BreadcrumbHeader
                desktopImage={city.desktop_banner_image || "/assets/img/hero/1.png"}
                mobileImage={city.mobile_banner_image || "/assets/img/hero/1.png"}
                shapeImage="/assets/img/hero/1/shape.svg"
                title={city.title}
                subtitle=""
            />
            <section className="tour_package_section">
                <div className="single-tour-section">
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col-lg-8">
                                <div className="single-tour-inner">
                                    {city.city_details && (
                                        <div className="city-description mb-5">
                                            <p className="text-lg" dangerouslySetInnerHTML={{ __html: city.city_details }} />
                                        </div>
                                    )}
                                    {destinations.length > 0 && (
                                        <div className="city_inner destination-table">
                                            <h2 className="!text-[22px] !sm:text-[16px] !md:text-[20px] lg:text-[22px]">Destinations</h2>
                                            <hr />
                                            {destinations.map((destination, index) => (
                                                <div className="grid grid-cols-1 gap-3 city-slug" key={destination.nid || index}>
                                                    <div>
                                                        <h4 className='text-20 md:text-2xl font-semibold text-20 text-[#004d91] fw-600'>
                                                            {destination.title}
                                                        </h4>
                                                    </div>
                                                    {city.city_url && destination.url && (
                                                        <Link href={`/destination/${city.city_url}/${destination.url}`}>
                                                            <div className="text destination-content">
                                                                {destination.image && (
                                                                    <div className='float-image inline main-img'>
                                                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                                                        <img
                                                                            src={getValidImageUrl(destination.image)}
                                                                            alt={destination.title}
                                                                            className="img-cover w-56 h-auto object-contain object-center rounded-lg"
                                                                        />
                                                                    </div>
                                                                )}
                                                                {destination.description && (
                                                                    <div className="mb-4">
                                                                        <div dangerouslySetInnerHTML={{ __html: destination.description }} />
                                                                    </div>
                                                                )}
                                                            </div>
                                                            {destination.timings && destination.timings.length > 0 && (
                                                                <>
                                                                    <div className="destination-time-title mt-4">
                                                                        <h4 className="text-xl md:text-2xl font-semibold text-20 text-white fw-500 table-title">Important Timings</h4>
                                                                    </div>
                                                                    <div className="table-format">
                                                                        <div dangerouslySetInnerHTML={{ __html: destination.timings }} />
                                                                    </div>
                                                                </>
                                                            )}
                                                        </Link>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="col-lg-4 relative tour-cover-section">
                                <div className="sticky top-20">
                                    <div className="varansi-airport-service-details-section">
                                        <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 mb-8">
                                            {airport_services?.length > 0 && airport_services.map((service, idx) => {
                                                const { color, bg, lightBg } = CITY_PALETTES[idx % CITY_PALETTES.length];
                                                return (
                                                    <div key={service.nid}>
                                                        <div
                                                            className="bg-white rounded-xl shadow-sm overflow-hidden border border-stone-200 cursor-pointer"
                                                            style={{ borderTop: `4px solid ${color}` }}
                                                        >
                                                            <Link
                                                                href={service.city_url ? `/city/${service.city_url}` : "#"}
                                                                className="block no-underline hover:transform hover:-translate-y-1 transition-all duration-300"
                                                            >
                                                                <div className="flex items-center gap-3 lg:p-4 p-3">
                                                                    <div
                                                                        className="w-[50px] h-[50px] rounded-lg flex items-center justify-center flex-shrink-0"
                                                                        style={{ background: bg }}
                                                                    >
                                                                        <CityIcon icon={service.icon} color={color} />
                                                                    </div>
                                                                    <div>
                                                                        <Heading
                                                                            level={3}
                                                                            text={service.title}
                                                                            className="text-[20px]! mb-0 leading-[1.3]"
                                                                        />
                                                                        <p className="text-[14px] text-stone-400 mb-0">
                                                                            {service.sub_title}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="h-px bg-stone-100 mx-2" />
                                                                <div className="lg:p-4 p-3">
                                                                    {service.pills?.length > 0 && (
                                                                        <div className="flex flex-wrap gap-[6px] mb-3">
                                                                            {service.pills.map((pill, index) => {
                                                                                const isAccent = index === service.pills.length - 1;
                                                                                return (
                                                                                    <span
                                                                                        key={index}
                                                                                        className="text-[12px] px-3 py-1 rounded-2xl shadow-lg border font-medium leading-none"
                                                                                        style={
                                                                                            isAccent
                                                                                                ? {
                                                                                                    background: lightBg,
                                                                                                    color: color,
                                                                                                    borderColor: color,
                                                                                                }
                                                                                                : {
                                                                                                    background: "#fff",
                                                                                                    color: "#374151",
                                                                                                    borderColor: "#d1d5db",
                                                                                                }
                                                                                        }
                                                                                    >
                                                                                        {pill.title}
                                                                                    </span>
                                                                                );
                                                                            })}
                                                                        </div>
                                                                    )}
                                                                    {service.highlights?.length > 0 && (
                                                                        <ul className="flex flex-col gap-[5px] pb-3">
                                                                            {service.highlights.map((hl, index) => (
                                                                                <li
                                                                                    key={index}
                                                                                    className="flex items-center gap-[10px] text-[17px]! text-stone-600 mb-0"
                                                                                >
                                                                                    <svg
                                                                                        viewBox="0 0 24 24"
                                                                                        fill="none"
                                                                                        strokeWidth={2.5}
                                                                                        stroke={color}
                                                                                        className="w-[14px] h-[14px] flex-shrink-0"
                                                                                    >
                                                                                        <polyline points="20 6 9 17 4 12" />
                                                                                    </svg>
                                                                                    {hl.title}
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    )}
                                                                </div>
                                                            </Link>
                                                            <div className="lg:p-4 p-3 pt-0 pb-3">
                                                                <button
                                                                    onClick={() => openModal(service.title)}
                                                                    className="w-full p-2 rounded-2xl! text-white font-medium cursor-pointer transition-all hover:opacity-90 bg-[#004d91]!"
                                                                >
                                                                    Ask for Quote
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                    {tour_cover?.length > 0 && (
                                        <div className="sidebar -type-2">
                                            <div className="sidebar__item">
                                                <h3 className="text-24 md:text-22 fw-600 mb-20">Tours Covering {city.title}</h3>
                                                <div className="d-flex y-gap-20 flex-column">
                                                    {tour_cover.map((tour, index) => {
                                                        const validImageUrl = getValidImageUrl(tour.image, "/assets/modern-img/Vrindavan.jpg");

                                                        return (
                                                            <Link
                                                                key={tour.nid || index}
                                                                href={tour.url ? `/tour-package/${tour.url}` : "#"}
                                                                className="d-flex align-center tour-cover-a"
                                                            >
                                                                <div className="size-70 overflow-hidden rounded-12">
                                                                    <Image
                                                                        src={validImageUrl}
                                                                        alt={tour.title || "Tour package"}
                                                                        className="img-cover"
                                                                        width={300}
                                                                        height={300}
                                                                        onError={(e) => {
                                                                            // Fallback if image fails to load
                                                                            e.target.src = "/assets/modern-img/Vrindavan.jpg";
                                                                        }}
                                                                    />
                                                                </div>
                                                                <div className="ml-20">
                                                                    <h5 className="text-15 lh-14 fw-500">
                                                                        {tour.title}
                                                                        <br />
                                                                        <span className='text-sm mt-2 text-[#eb6605]'>
                                                                            {tour.duration}
                                                                        </span>
                                                                    </h5>
                                                                </div>
                                                            </Link>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <EnquiryVaranasiAirportModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                defaultCity={selectedCity}
            />
        </>
    );
}