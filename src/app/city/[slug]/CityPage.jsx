"use client";
import React from 'react';
import BreadcrumbHeader from '@/components/BreadcrumbHeader/BreadcrumbHeader';
import { Heading } from '@/components/Heading/Heading';
import Image from 'next/image';
import Link from 'next/link';
export default function CityPage({ initialData }) {
    const { city, destinations = [], tour_cover =[] } = initialData;
    return (
        <>
            <BreadcrumbHeader
                desktopImage={city.banner_img || "/assets/img/hero/1.png"}
                mobileImage={city.banner_img || "/assets/img/hero/1.png"}
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
                                            <h3>Destinations</h3>
                                            <hr/>
                                            {destinations.map((destination, index) => (
                                                <div className="grid grid-cols-1 gap-3 city-slug"  key={destination.nid || index}>
                                                    <div>
                                                        <h4 className='text-20 md:text-2xl font-semibold text-20 text-[#004d91]! fw-600'>
                                                           {destination.title}
                                                        </h4>
                                                    </div>
                                                    <Link href={`/destination/${city.city_url}/${destination.url}`}>
                                                        <div className="text destination-content">
                                                            {destination.image && (
                                                                <div className='float-left! inline main-img'>
                                                                    <img
                                                                        src={destination.image}
                                                                        alt={destination.title}
                                                                        className="img-cover w-56! h-auto!  object-contain object-center rounded-lg!"
                                                                    />
                                                                </div>
                                                            )}

                                                            {destination.description && (
                                                                <div className="mb-4">
                                                                    <div dangerouslySetInnerHTML={{ __html: destination.description }}/>
                                                                </div>
                                                            )}
                                                        </div>
                                                        {destination.timings && destination.timings.length > 0 && (
                                                        <>
                                                            <div className="destination-time-title mt-4">
                                                                <h4 className="text-xl md:text-2xl font-semibold text-20 text-white fw-500 table-title">Important Timings</h4>
                                                            </div>
                                                            <div className="table-format">
                                                                <div dangerouslySetInnerHTML={{ __html: destination.timings }}
                                                                />
                                                            </div>
                                                        </>
                                                        )}
                                                    </Link>
                                                </div>
                                            ))}                                            
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="col-lg-4 relative tour-cover-section">
                                <div className="sticky top-20">
                                    {tour_cover?.length > 0 && (
                                        <div className="sidebar -type-2">
                                            <div className="sidebar__item">
                                                <h3 className="text-24 fw-600 mb-20">Tours Covering {city.title}</h3>
                                                <div className="d-flex y-gap-20 flex-column">
                                                    {tour_cover.map((tour, index) => (
                                                        <Link key={tour.nid || index} 
                                                        href={`/tour-package/${tour.url}`} className="d-flex align-center tour-cover-a">
                                                            <div className="size-70 overflow-hidden rounded-12">
                                                                <Image
                                                                    src={tour.image || "/assets/modern-img/Vrindavan.jpg"}
                                                                    alt={tour.title}
                                                                    className="img-cover"
                                                                    width={300}
                                                                    height={300}
                                                                />
                                                            </div>
                                                            <div className="ml-20">
                                                                <h5 className="text-15 lh-14 fw-500">
                                                                    {tour.title}
                                                                    <br/>
                                                                    <span className='text-sm mt-2 text-[#eb6605]'>
                                                                        {tour.duration}
                                                                    </span>
                                                                </h5>

                                                            </div>
                                                        </Link>
                                                    ))}
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
        </>
    )
}
