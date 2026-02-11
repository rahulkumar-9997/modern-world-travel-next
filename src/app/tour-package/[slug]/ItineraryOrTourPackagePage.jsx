"use client";
import React, { useEffect, useState } from 'react';
import BreadcrumbHeader from '@/components/BreadcrumbHeader/BreadcrumbHeader';
import { Heading } from '@/components/Heading/Heading';
import EnquiryModal from '@/components/EnquiryModal/EnquiryModal';
import Link from 'next/link';
export default function ItineraryOrTourPackagePage({initialData}) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTour, setSelectedTour] = useState(null);
    const {title, duration, desktop_banner_image, mobile_banner_image, meta_title, meta_desc, highlights, inclusions, exclusions,  for_daywise = [], cover_city = []} = initialData;
    return (
        <>
            <BreadcrumbHeader
                desktopImage={desktop_banner_image || "/assets/img/hero/1.png"}
                mobileImage={mobile_banner_image || "/assets/img/hero/1.png"}
                shapeImage="/assets/img/hero/1/shape.svg"
                title={title}
                subtitle={duration}
            />
            <section className="tour_package_section">
                <div className="single-tour-section">
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col-lg-8">
                                <div className="single-tour-inner">
                                    {highlights && (
                                        <div 
                                            className="package-head-text"
                                            dangerouslySetInnerHTML={{ __html: highlights }}
                                        />
                                    )} 
                                    {for_daywise.length > 0 && (                                   
                                    <div className="itinerary-timeline-wrap">
                                        <ul>
                                            {for_daywise.map((day, index) => (
                                            <li key={day.nid || index}>
                                                <div className="timeline-content">
                                                    <div className="day_wise">
                                                        <div className="destination-time-title">
                                                            <div className="day-count text-xl md:text-2xl font-semibold text-20 text-white fw-500 table-title">
                                                                Day {index + 1}
                                                            </div>
                                                        </div>
                                                        <h4 className="text-20 md:text-2xl font-semibold text-20 text-[#004d91]! fw-600">
                                                            {day.day_title}
                                                        </h4>
                                                    </div>
                                                    {day.day_description && (
                                                        <span>
                                                            <div className="table-formatulli">
                                                                <div dangerouslySetInnerHTML={{ __html: day.day_description }} />
                                                            </div>
                                                        </span>
                                                    )}
                                                    {day.destination?.length > 0 && (
                                                    <div className="destination-inner destination-four-column on_this_day_cover">
                                                        <h3>On this day, we are covering</h3>
                                                        <div className="row">
                                                            {day.destination.map(dest => (
                                                            <div className="col-lg-4 col-sm-6" key={dest.nid}>
                                                                <Link href={`/destination/${dest.city_url}/${dest.destination_url}`}>
                                                                    <div className="desti-item text-center this-day-item">
                                                                        <div className="day-item_header">
                                                                            <div className="tourCard__image ratio ratio-28:20 desti-image">
                                                                                <img
                                                                                    src={dest.destination_image}
                                                                                    alt={dest.title || ""}
                                                                                    className="img-ratio rounded-12 card-img-top"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                        <div className="desti-content">
                                                                            <div className="meta-cat">
                                                                                <h5>{dest.title}</h5>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    )}
                                                </div>
                                            </li>                                            
                                            ))}
                                        </ul>
                                    </div>
                                    )}
                                    <div className="page-content inclusions-exclusions space-y-6">
                                        {inclusions && (
                                            <div>
                                                <h5 className="text-24 md:text-22 text-[#eb6605]! fw-600 mb-5">
                                                    Inclusions
                                                </h5>
                                                <div className="list-disc list-inside space-y-1" dangerouslySetInnerHTML={{ __html: inclusions }} />                                                
                                            </div>
                                        )}
                                        {exclusions && (
                                            <div>
                                                <h6 className="text-24 md:text-22 text-[#eb6605]! fw-600 mb-5">
                                                    Exclusions
                                                </h6>
                                                <div className="list-disc list-inside space-y-1" dangerouslySetInnerHTML={{ __html: exclusions }} />  
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 relative">
                                
                                <div className="sticky top-20">
                                    {Array.isArray(cover_city) && cover_city.length > 0 && (
                                        <div className="sidebar -type-2">
                                            <div className="sidebar__item">
                                                <h3 className="text-24 fw-600 mb-20">Covered Cities</h3>
                                                <div className="d-flex y-gap-20 flex-column">
                                                    {cover_city.map((city, index) => (
                                                        <Link href={`/city/${city.city_url}`} className="d-flex align-center tour-cover-a" key={city.nid || index}>
                                                            <div className="size-70 overflow-hidden rounded-12">
                                                                <img
                                                                    src={city.city_img_path || "/assets/modern-img/Vrindavan.jpg"}
                                                                    alt={city.title || "city"}
                                                                    className="img-cover"
                                                                />
                                                            </div>
                                                            <div className="ml-20">
                                                                <h5 className="text-[#eb6605]! text-18 lh-14 fw-500">
                                                                    {city.title}
                                                                </h5>
                                                                <p className="text-xs md:text-sm">{city.city_details?.slice(0, 30)}...</p>
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    <div className="book-this-tour bg-white rounded-xl shadow-lg border border-gray-100 p-2 md:p-2">
                                        
                                        <div className="book_form_section">
                                            <div className="contactForm">
                                                <div className="row y-gap-15">
                                                    <div className="col-12">
                                                        <button
                                                        onClick={() => {
                                                            setSelectedTour({
                                                                title: title,
                                                                duration: duration,
                                                            });
                                                            setIsModalOpen(true);
                                                        }}
                                                        className="button -md -dark-1 bg-accent-1 text-white col-12">
                                                            Book This Tour
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <EnquiryModal
                isOpen={isModalOpen}
                title={selectedTour?.title}
                duration={selectedTour?.duration}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    )
}