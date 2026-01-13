import React from 'react'
import { Heading } from '../Heading/Heading';
export const HomeInternationalTourPackages = () => {
    const tourPackages = [
        {
            id: 1,
            image: "/assets/modern-img/Prayagraj.jpg",
            location: "Paris, France",
            title: "Centipede Tour - Guided Arizona Desert Tour by ATV",
            duration: "4 days 3 Night"
        },
        {
            id: 2,
            image: "/assets/modern-img/lucknow.jpg",
            location: "New York, USA",
            title: "Molokini and Turtle Town Snorkeling Adventure Aboard",
            duration: "4 days 3 Night"
        },
        {
            id: 3,
            image: "/assets/modern-img/Prayagraj.jpg",
            location: "Tokyo, Japan",
            title: "Tokyo City Lights and Traditional Temples Tour",
            duration: "5 days 4 Night"
        },
        {
            id: 4,
            image: "/assets/modern-img/varanasi-sarnath.jpg",
            location: "Rome, Italy",
            title: "Ancient Rome and Vatican City Exploration",
            duration: "6 days 5 Night"
        },
        {
            id: 5,
            image: "/assets/modern-img/Vrindavan.jpg",
            location: "Dubai, UAE",
            title: "Desert Safari and Burj Khalifa Experience",
            duration: "4 days 3 Night"
        },
        {
            id: 6,
            image: "/assets/modern-img/Varanasi.jpg",
            location: "Sydney, Australia",
            title: "Great Barrier Reef and Sydney Opera House Tour",
            duration: "7 days 6 Night"
        },
        {
            id: 7,
            image: "/assets/modern-img/Ram-Mandir-Ayodhya.jpg",
            location: "Bangkok, Thailand",
            title: "Thai Culture and Island Hopping Adventure",
            duration: "5 days 4 Night"
        },
        {
            id: 8,
            image: "/assets/modern-img/Mathura.jpg",
            location: "London, UK",
            title: "Royal London and British Museum Tour",
            duration: "4 days 3 Night"
        }
    ];

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
                <div className="row y-gap-30 justify-between pt-30 sm:pt-20 mobile-css-slider -w-300">
                    {tourPackages.map((tour) => (
                        <div key={tour.id} className="col-lg-3 col-md-6">
                            <a
                                href="#"
                                className="tourCard -type-1 d-block border-1 bg-white hover-shadow-1 overflow-hidden rounded-12 -hover-shadow"
                            >
                                <div className="tourCard__header">
                                    <div className="tourCard__image -hover-image-scale__image ratio ratio-28:20">
                                        <img
                                            src={tour.image}
                                            alt={tour.location}
                                            className="img-ratio"
                                        />
                                    </div>
                                    
                                </div>
                                <div className="tourCard__content px-20 py-10 international-tour-card">
                                    <div className="tourCard__location d-flex items-center text-13 text-light-2">
                                        <i className="icon-pin d-flex text-16 text-light-2 mr-5" />
                                        {tour.location}
                                    </div>
                                    <Heading
                                        level={5}
                                        text={tour.title}
                                        className="ttourCard__title text-18 fw-500 mt-5"
                                    /> 
                                    <div className="d-flex justify-between items-center border-1-top text-13 text-dark-1 pt-10 mt-10 home-duration">
                                        <div className="d-flex items-center duration-content">
                                            <i className="icon-clock text-16 mr-5" />
                                            {tour.duration}
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}