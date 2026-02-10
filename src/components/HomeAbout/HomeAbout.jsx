import React from 'react';
import { Heading } from '../Heading/Heading';
import Link from 'next/link';
export const HomeAbout = () => {
    return (
        <div className="container about-home-section">
            <div className="row items-center">
                <div className="col-md-5">
                    <div className="abou-home-image">
                        <img
                            src="/assets/modern-img/about.jpg"
                            className="mx-auto rounded-3xl shadow-sm dark:shadow-gray-700"
                            alt=""
                        />                                                
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="about-home-content">
                        <Heading
                            level={2}
                            text="About Modern World Travel"
                            className="text-30 md:text-24"
                        />
                        <div className='about-text'>
                            <p className="mb-3!">
                                “ModernWorld Travel has its corporate office in Varanasi. Located in the prime commercial/tourist area of the city of Varanasi, Modern World Travel’s close to a whole range of hotels from 5 star to budget. The main railway station is nearby and the airport is aprrox a 45 minute comfortable drive. The area also has many local traditional shops and bazaars as well as a small, but well appointed modern shopping mall and cinema.”
                            </p>
                            <p className="mb-3!">
                                Our major focused areas are Holiday Packages (Domestic & International). We will endeavour to be the most preferred travel company for the national and international travellers, by achieving excellence in customer satisfaction. We believe in Guest delight. We strive constanty to keep up the Service Excellence Level at its best for our guest. We are an Equal Opportunity employer and we believe that it is essential to be Good Corporate Citizens to serve the community that sustains us.
                            </p>
                        </div>
                        <Link href="/about-us" className="py-2! px-5! inline-block tracking-wide align-middle duration-500 text-base text-center bg-logo-color1 text-white rounded-md hover:!text-white">
                            Read More 
                        </Link>
                    </div>
                </div>                
            </div>
        </div>

    )
}
