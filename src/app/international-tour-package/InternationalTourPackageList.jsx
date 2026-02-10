'use client';
import React from 'react'
import { Heading } from '@/components/Heading/Heading';
import BreadcrumbHeader from '@/components/BreadcrumbHeader/BreadcrumbHeader';
import Link from 'next/link';
import Image from 'next/image';
export function InternationalTourPackageList({ initialData }) {
    const tours = Array.isArray(initialData) ? initialData : [];
    if (!tours.length) {
        return null;
    }
    return (
        <>
            <BreadcrumbHeader
                desktopImage="/assets/img/hero/1.png"
                mobileImage="/assets/img/hero/1.png"
                shapeImage="/assets/img/hero/1/shape.svg"
                title='International Tour Package'
                subtitle=""
            />
            <section className="layout-pt-xl layout-pb-xl international-tour-container">
                <div className="container">                
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mobile-css-slider -w-300 gap-3 mt-8!">
                        {initialData && initialData.map((tour) => (
                            <div key={tour.nid} className="w-full h-full shadow-lg hover:shadow-2xl rounded-12">
                                <Link href=
                                    {`/tour-package/${tour.url}`}
                                    className="tourCard -type-1 d-block border bg-white hover-shadow-1 overflow-hidden rounded-12 hover-shadow h-full! group flex! flex-col! justify-between!"
                                >
                                    <div className="tourCard__header">
                                        <div className="tourCard__image -hover-image-scale__image ratio ratio-28:20">
                                            <Image
                                                src={tour.image ?? "/assets/modern-img/varanasi-sarnath.jpg"}
                                                alt={tour.title}
                                                className="img-ratio"
                                                width={200}
                                                height={200}
                                            />
                                        </div>

                                    </div>
                                    <div className="international-tour-card w-full h-full">
                                        <div className="flex! flex-col! justify-between! w-full h-full">
                                            <div className="international-tour-section">
                                                <div className="tourCard__content flex! flex-col! justify-between! gap-2!">
                                                    {/* <div className="tourCard__location d-flex items-center text-13 text-light-2">
                                                        <i className="icon-pin d-flex text-16 text-light-2 mr-5" />
                                                        {tour.location}
                                                    </div> */}
                                                    <Heading
                                                        level={5}
                                                        text={tour.title}
                                                        className="ttourCard__title  fw-500 mt-5 leading-tight! "
                                                    />
                                                    <p className='relative z-10! line-clamp-4 group-hover:text-white! transition-colors'>
                                                        {tour.description}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='international-tour-section-in'>
                                                <div className="d-flex justify-between items-center home-duration">
                                                    <div className="d-flex items-center duration-content">
                                                        <i className="icon-clock text-16 mr-5" />
                                                        {tour.duration}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}