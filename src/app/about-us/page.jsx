import React from 'react'
import BreadcrumbHeader from '@/components/BreadcrumbHeader/BreadcrumbHeader';
import { Heading } from '@/components/Heading/Heading';
export default function AboutUsPage() {
    return (
        <>
            <BreadcrumbHeader
                desktopImage="/assets/img/pageHeader/1.jpg"
                mobileImage="/assets/img/pageHeader/1.jpg"
                shapeImage="/assets/img/hero/1/shape.svg"
                title="About Us"
                subtitle="A tropical paradise made for animal lovers replete with monkey caves, dog foundations, and dolphins in the wild."
            />
            <section className="layout-pt-lg layout-pb-lg">
                <div className="container animated">
                    <div className="row y-gap-20 align-items-center">
                        <div className="col-lg-6 is-in-view">
                            <Heading
                                level={2}
                                text="About Modern World Travel <br/> Experience Excellence in Travel"
                                className="text-30 fw-700"
                            />
                        </div>
                    </div>
                    <div className="row y-gap-20 align-items-center">
                        <div className="col-md-6 is-in-view">
                            <div className="bg-linear-to-tr from-[#eb6605] via-[#eb6605] to-[#004d91] backdrop-blur-sm rounded-2xl p-4 border border-gray-700/50 relative mt-6">
                                <div className="absolute -top-4 left-8">
                                    <div className="bg-[#004d91] text-white p-3 rounded-lg shadow-lg">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                        </svg>
                                    </div>
                                </div>
                                <p className="text-lg md:text-xl text-white leading-relaxed italic font-medium pt-6">
                                    “ModernWorld Travel has its corporate office in Varanasi. Located in the prime commercial/tourist area of the city of Varanasi, Modern World Travel’s close to a whole range of hotels from 5 star to budget. The main railway station is nearby and the airport is aprrox a 45 minute comfortable drive. The area also has many local traditional shops and bazaars as well as a small, but well appointed modern shopping mall and cinema.”
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 is-in-view">

                            <p>
                                Our major focused areas are Holiday Packages (Domestic & International). We will endeavour to be the most preferred travel company for the national and international travellers, by achieving excellence in customer satisfaction. We believe in Guest delight. We strive constanty to keep up the Service Excellence Level at its best for our guest. We are an Equal Opportunity employer and we believe that it is essential to be Good Corporate Citizens to serve the community that sustains us.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="feature-section bg-color-1 mb-10 mt-10 relative is-in-view">
                <div className="pattern-layer" style={{ backgroundImage: 'url(/assets/modern-img/shape-6.png)' }}></div>
                <div className="relative xl:unset container">
                    <div className="layout-pt-xl layout-pb-xl">
                        <div className="row y-gap-30 justify-center items-center">
                            <div className="col-lg-7 col-md-7">
                                <Heading
                                    level={3}
                                    text=" Our Philosophy"
                                    className="text-30 lh-13"
                                />
                                <p className="mt-10">
                                    “Our approach as a travel company is to treat all clients as individuals, providing a personal service that reflects our customer’s interest, preferences, time - frame and budget. It has been our Main Principle from the beginning that Modern World Travel should not simply book and print tour itineraries, and robotically distribute pre - printed brochures; personalized services and innovation make us a leader in the travel market. Modern World Travel goes further and deals with the entire range of potential travel services. Our Travel Advisors answer even those questions clients have not yet thought to ask; our aim is to assist with the most useful advice, ideas, and information possible. Our young, dynamic professionals are a vital part of the organization who are providing our professional services and are committed to ensuring that our customers enjoy the personal attention that they deserve.”
                                </p>

                            </div>
                            <div className="col-md-5 col-lg-5">
                                <div className="image_block_one">
                                    <div className="image-box">
                                        <figure className="image">
                                            <img src="/assets/modern-img/about-1.jpg" alt="about" />
                                        </figure>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="layout-pt-xl layout-pb-xl">
                <div className="container animated">
                    <div className="row justify-content-md-center">
                        <div className="col-md-10">
                            <div className="text-center">
                                <Heading
                                    level={3}
                                    text="Why Choose Morden World Travel ?"
                                    className="text-30 lh-13"
                                />
                                <p>
                                    “The purpose of our organization is simple; helping our customers get exactly what they want at the best value available. Consequently, we are capable of providing an exceptionally complex range of products and integrated services for both individual and corporate clients.”
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row md:x-gap-20 pt-20 sm:pt-20 mobile-css-slider -w-280 is-in-view"
                    >
                        <div className="col-lg-3 col-sm-6">
                            <div className="featureIcon -type-1 pr-40 md:pr-0">
                                <div className="featureIcon__icon">
                                    <img src="/assets/img/icons/1/ticket.svg" alt="icon" />
                                </div>
                                <Heading
                                    level={4}
                                    text=" Ultimate flexibility"
                                    className="featureIcon__title text-18 fw-500 mt-30 text-[#05073C]!"
                                />
                                <p className="featureIcon__text mt-10">
                                    You're in control, with free cancellation and payment options to
                                    satisfy any plan or budget.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="featureIcon -type-1 pr-40 md:pr-0">
                                <div className="featureIcon__icon">
                                    <img src="/assets/img/icons/1/hot-air-balloon.svg" alt="icon" />
                                </div>
                                <Heading
                                    level={4}
                                    text="Memorable experiences"
                                    className="featureIcon__title text-18 fw-500 mt-30 text-[#05073C]!"
                                />
                                <p className="featureIcon__text mt-10">
                                    Browse and book tours and activities so incredible, you'll want to
                                    tell your friends.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="featureIcon -type-1 pr-40 md:pr-0">
                                <div className="featureIcon__icon">
                                    <img src="/assets/img/icons/1/diamond.svg" alt="icon" />
                                </div>
                                <Heading
                                    level={4}
                                    text="Quality at our core"
                                    className="featureIcon__title text-18 fw-500 mt-30 text-[#05073C]!"
                                />
                                <p className="featureIcon__text mt-10">
                                    High quality standards. Millions of reviews. A tourz company.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="featureIcon -type-1 pr-40 md:pr-0">
                                <div className="featureIcon__icon">
                                    <img src="/assets/img/icons/1/medal.svg" alt="icon" />
                                </div>
                                <Heading
                                    level={4}
                                    text="Award-winning support"
                                    className="featureIcon__title text-18 fw-500 mt-30 text-[#05073C]!"
                                />
                                <p className="featureIcon__text mt-10">
                                    New price? New plan? No problem. We're here to help, 24/7.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
