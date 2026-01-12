import React from 'react'
import { Heading } from '../Heading/Heading';
export const HomeTourPackage = () => {
    return (
        <section className="layout-pb-xl pt-2">
            <div className="container">
                <div className="row justify-between items-end y-gap-10">
                    <div className="col-auto">
                        <Heading
                            level={2}
                            text="Tour Packages in Varanasi"
                            className="text-30 mb-1"
                        />                        
                    </div>
                    <div className="col-auto">
                        <button className="buttonArrow d-flex items-center ">
                            <span className="text-xl">See all</span>
                            <i className="icon-arrow-top-right text-16 ml-10" />
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <div className="head-title">
                            <p>
                                Spend your days as close the Ganges & the ghats as you can please, you will not regret it. Take one of our Highlight Varanasi Tour Packages
                            </p>
                        </div>
                    </div>
                </div>
                <div className="grid -type-3 pt-40 sm:pt-20">
                    <a
                        href="destinations.html"
                        className="featureCard -type-1 overflow-hidden rounded-12 px-30 py-30 -hover-image-scale"
                    >
                        <div className="featureCard__image -hover-image-scale__image">
                            <img src="/assets/modern-img/Prayagraj.jpg" alt="image"/>
                        </div>
                        <div className="featureCard__content">
                            <h4 className="text-white">Varanasi – Prayagraj – Gaya/Bodh Gaya Itinerary (5 Days) </h4>
                        </div>
                    </a>
                    <a
                        href="destinations.html"
                        className="featureCard -type-1 overflow-hidden rounded-12 px-30 py-30 -hover-image-scale"
                    >
                        <div className="featureCard__image -hover-image-scale__image">
                            <img src="/assets/modern-img/Varanasi.jpg" alt="image" />
                        </div>
                        <div className="featureCard__content">
                            <h4 className="text-white">The Great Ganges Tours</h4>
                        </div>
                    </a>
                    <a
                        href="destinations.html"
                        className="featureCard -type-1 overflow-hidden rounded-12 px-30 py-30 -hover-image-scale"
                    >
                        <div className="featureCard__image -hover-image-scale__image">
                            <img src="/assets/modern-img/Agra.jpg" alt="image" />
                        </div>
                        <div className="featureCard__content">
                            <h4 className="text-white">Agra Yatra </h4>
                        </div>
                    </a>
                    <a
                        href="destinations.html"
                        className="featureCard -type-1 overflow-hidden rounded-12 px-30 py-30 -hover-image-scale"
                    >
                        <div className="featureCard__image -hover-image-scale__image">
                            <img src="/assets/modern-img/Mathura.jpg" alt="image" />
                        </div>
                        <div className="featureCard__content">
                            <h4 className="text-white">Kashi - Prayagraj Special Tour </h4>
                        </div>
                    </a>
                    <a
                        href="destinations.html"
                        className="featureCard -type-1 overflow-hidden rounded-12 px-30 py-30 -hover-image-scale"
                    >
                        <div className="featureCard__image -hover-image-scale__image">
                            <img src="/assets/modern-img/lucknow.jpg" alt="image" />
                        </div>
                        <div className="featureCard__content">
                            <h4 className="text-white">Food</h4>
                        </div>
                    </a>
                    <a
                        href="destinations.html"
                        className="featureCard -type-1 overflow-hidden rounded-12 px-30 py-30 -hover-image-scale"
                    >
                        <div className="featureCard__image -hover-image-scale__image">
                            <img src="/assets/modern-img/Ram-Mandir-Ayodhya.jpg" alt="image" />
                        </div>
                        <div className="featureCard__content">
                            <h4 className="text-white">Hiking</h4>
                        </div>
                    </a>
                </div>
            </div>
        </section>

    )
}
