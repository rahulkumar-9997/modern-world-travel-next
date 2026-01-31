'use client';
import React from 'react'
import { Heading } from '../Heading/Heading';
import Link from 'next/link';
import Image from 'next/image';
export function HomeInternationalTourPackages({ initialData }) {
    const isLoading = !initialData || initialData.length === 0;      
    return (
        <section className="layout-pt-xl layout-pb-xl international-tour-container">
            <div className="container">
                <div className="row justify-between items-end y-gap-10">
                    <div className="col-auto">
                        <Heading
                            level={2}
                            text="International Tour Packages"
                            className="text-30 md:text-24"
                        />
                    </div>
                    <div className="col-auto">
                        <button className="buttonArrow d-flex items-center ">
                            <span className="text-xl">See all</span>
                            <i className="icon-arrow-top-right text-16 ml-10" />
                        </button>
                    </div>
                </div>
                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mobile-css-slider -w-300 gap-5 mt-8!">
                    {initialData && initialData.map((tour) => (
                        <div key={tour.nid} className="w-full h-full">
                            <Link href=
                                {`/tour-package/${tour.url}`}
                                className="tourCard -type-1 d-block border bg-white hover-shadow-1 overflow-hidden rounded-12 hover-shadow h-full! group flex! flex-col! justify-between!"
                            >
                                <div className="tourCard__header">
                                    <div className="tourCard__image -hover-image-scale__image ratio ratio-28:20">
                                        <Image
                                            src={tour.image}
                                            alt={tour.title}
                                            className="img-ratio"
                                            width={200}
                                            height={200}
                                        />
                                    </div>

                                </div>
                                <div className="tourCard__content px-10 py-10 international-tour-card flex! flex-col! justify-between! gap-2!">
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
                                    <div className="d-flex justify-between items-center border-1-top text-13 text-dark-1 home-duration">
                                        <div className="d-flex items-center duration-content">
                                            <i className="icon-clock text-16 mr-5" />
                                            {tour.duration}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}