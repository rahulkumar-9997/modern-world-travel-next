import React from 'react'
import { Heading } from '../Heading/Heading';
import Link from 'next/link';
export const HomeWhyChoose = () => {
    return (
        <section className="chooseus-section pt_100 pb_100">
            <div className="container">
                <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="content_block_one">
                            <div className="content-box mr_30">
                                <div className="sec-title mb-3">
                                    <h2></h2>
                                    <Heading
                                        level={2}
                                        text="Why Choose Morden World Travel ?"
                                        className="text-30 mb-1"
                                    /> 
                                    <p>
                                       “The purpose of our organization is simple; helping our customers get exactly what they want at the best value available. Consequently, we are capable of providing an exceptionally complex range of products and integrated services for both individual and corporate clients. We are convinced that besides being sensitive to prices, people tend to choose their Travel Agency on the basis of reliability.
                                    </p>
                                    
                                </div>
                                <ul className="list-style-one clearfix pb-5">
                                    <li>
                                        <a className="gradient-color">
                                            <i className="icon-arrow-right gradient-color" /> Professional Tour
                                            Guide
                                        </a>
                                    </li>
                                    <li>
                                        <a  className="gradient-color">
                                            <i className="icon-arrow-right gradient-color" /> Quality you can trust
                                        </a>
                                    </li>
                                    <li>
                                        <a className="gradient-color">
                                            <i className="icon-arrow-right gradient-color" /> Exceptional
                                            flexibility
                                        </a>
                                    </li>
                                    <li>
                                        <a className="gradient-color">
                                            <i className="icon-arrow-right gradient-color" /> Award-winning support
                                        </a>
                                    </li>
                                    <li>
                                        <a className="gradient-color">
                                            <i className="icon-arrow-right gradient-color" /> Blandit sit amet non
                                            magna
                                        </a>
                                    </li>
                                </ul>
                                <div className="mt-4">
                                    <Link 
                                        href="/about-us" 
                                        className="py-2! px-5! inline-block tracking-wide align-middle duration-500 text-base text-center bg-logo-color1 text-white rounded-md hover:!text-white">
                                        About Us
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="offer-box">
                <div
                    className="bg-layer"
                    style={{
                        backgroundImage: "url(/assets/modern-img/chooseus-bg.jpg)"
                    }}
                />
                <div className="content_block_two">
                    <div className="content-box">
                        <span className="sub-title">discover</span>
                        <p>IT’S LIMITED SEATING! HURRY UP</p>
                        <Heading
                            level={3}
                            text="New Experiences in Singapore Delight"
                            className="text-white! why-head"
                        />
                        <Heading
                            level={4}
                            text="45 <span>% OFF</span>"
                            className="text-50 text-white!"
                            allowHTML={true}
                        />
                        <div className="btn-box mt-3">
                            <a href="#" className="py-2! px-5! inline-block tracking-wide align-middle duration-500 text-base text-center bg-logo-color1 text-white rounded-md hover:!text-white">
                                Book Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
