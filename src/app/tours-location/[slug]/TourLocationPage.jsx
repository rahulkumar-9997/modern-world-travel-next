import React from 'react'
import BreadcrumbHeader from '@/components/BreadcrumbHeader/BreadcrumbHeader';
import { Heading } from '@/components/Heading/Heading';
import Link from 'next/link';
export default function TourLocationPage({ initialData }) {
    const { tour_location = [], title, image} = initialData;
    return (
        <>
            <BreadcrumbHeader
                desktopImage={image || "/assets/img/hero/1.png"}
                mobileImage={image || "/assets/img/hero/1.png"}
                shapeImage="/assets/img/hero/1/shape.svg"
                title={title}
                subtitle=""
            />
            <section className="layout-pt-xl layout-pb-xl destination-list-section">
                <div className="container animated">                    
                    <div className="row y-gap-30 pt-40 sm:pt-20">
                        {tour_location.map((tour, index) => (
                            <div className="col-lg-4 col-sm-6 is-in-view" key={tour.nid || index}>
                                <Link href={`/tour-package/${tour.url}`}  className="tourCard -type-3 -hover-image-scale">
                                    <div className="tourCard__image ratio ratio-41:45 rounded-12 -hover-image-scale__image">
                                        <img
                                            src={tour.image || "/assets/modern-img/Prayagraj.jpg"}
                                            alt={tour.title}
                                            className="img-ratio rounded-12"
                                        />
                                    </div>
                                    <div className="tourCard__wrap">
                                        <div className="tourCard__header d-flex justify-between items-center text-13 text-white">
                                            <div className="d-flex items-center package-price">
                                                <i className="icon-clock text-16 mr-5" />
                                                {tour.duration}
                                            </div> 
                                                                                  
                                        </div>
                                        <div className="tourCard__content">
                                            <div>
                                                <Heading
                                                    level={3}
                                                    text= {tour.title}
                                                    className="tourCard__title text-20 text-white fw-500 mt-5"
                                                />  
                                                {Array.isArray(tour.covered_city) && tour.covered_city.length > 0 && (
                                                    <div className="flex flex-wrap gap-2 mt-3">
                                                        {tour.covered_city.slice(0, 3).map((city, i) => (
                                                            <span
                                                                key={i}
                                                                className="inline-flex items-center rounded
                                                                        bg-white/90 text-black text-xs
                                                                        px-3 py-1 font-medium"
                                                            >
                                                                {city}
                                                            </span>
                                                        ))}

                                                        {tour.covered_city.length > 3 && (
                                                            <span
                                                                className="inline-flex items-center rounded
                                                                        bg-[#eb6605] text-white text-xs
                                                                        px-3 py-1 font-medium"
                                                            >
                                                                +{tour.covered_city.length - 3}
                                                            </span>
                                                        )}
                                                    </div>
                                                )}

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
