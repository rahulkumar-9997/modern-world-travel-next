'use client';
import React, { useEffect, useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';
export function Footer({ initialData }) {
    const destinations = Array.isArray(initialData)
    ? initialData.slice(0, 6)
    : [];
    return (
        <footer className="footer -type-1 -dark text-white">
            <div className="footer__main bg-dark-1">
                <div className="footer__bg">
                    <img src="/assets/img/footer/1/bg.svg" alt="image" />
                </div>
                <div className="container">
                    <div className="footer__info">
                        <div className="row y-gap-20 justify-between">
                            <div className="col-auto">
                                <div className="row y-gap-20 items-center">
                                    <div className="col-auto">
                                        <i className="icon-headphone text-50" />
                                    </div>
                                    <div className="col-auto">
                                        <div className="text-20 fw-500">
                                            Speak to our expert at
                                            <span className="">
                                                <a href="tel:+91-9839901531">
                                                    +91 98399 01531
                                                </a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-auto">
                                <div className="footerSocials">
                                    <div className="footerSocials__title">Follow Us</div>
                                    <div className="footerSocials__icons">
                                        <a href="#" className="icon-facebook" />
                                        <a href="#" className="icon-twitter" />
                                        <a href="#" className="icon-instagram" />
                                        <a href="#" className="icon-linkedin" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer__content">
                        <div className="row y-gap-40 justify-between">
                            <div className="col-lg-4 col-md-6">
                                <div className="y-gap-10 mt-20">
                                    <div className="footer-logo">
                                        <a>
                                            <img src="/assets/modern-img/logo-new.jpg" className="w-1/4" />
                                        </a>
                                    </div>
                                    <p>
                                        Our major focused areas are Holiday Packages (Domestic & International). We will endeavour to be the most preferred travel company for the national and international travellers, by achieving excellence in customer satisfaction.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-auto col-6">
                                <h4 className="text-20 fw-500">Modern Word Travel</h4>
                                <div className="y-gap-10 mt-20">
                                    <Link className="d-block fw-500" href="/about-us">
                                        About Us
                                    </Link>
                                    
                                    <Link className="d-block fw-500" href="/international-tour-package">
                                        International Tour Packages
                                    </Link>
                                    <Link className="d-block fw-500" href="#">
                                        Tour Packages in Varanasi
                                    </Link>
                                    <Link className="d-block fw-500" href="/blog">
                                        Blog
                                    </Link>
                                    <Link className="d-block fw-500" href="/contact-us">
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-auto col-6">
                                <h4 className="text-20 fw-500">Top Destination</h4>
                                <div className="y-gap-10 mt-20">
                                    {destinations.map((item) => (
                                        <Link
                                            key={item.nid}
                                            href={`/city/${item.url}`}
                                            className="d-block fw-500"                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <h4 className="text-20 fw-500 mb-4">GET IN TOUCH</h4>

                                <ul className="space-y-3">
                                    <li className="flex items-start mb-4">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#eb6605] flex items-center justify-center mr-3">
                                            <FaMapMarkerAlt className="text-white text-sm" />
                                        </div>
                                        <span className="text-white">
                                            Varanasi (Head Office)<br />
                                            Mumukshu Bhawan,<br />
                                            Assi, Varanasi - 221005
                                        </span>
                                    </li>

                                    <li className="flex items-start mb-4">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#eb6605] flex items-center justify-center mr-3">
                                            <FaPhoneAlt className="text-white text-sm" />
                                        </div>
                                        <span className="text-white">
                                            <p>
                                                <a href="tel:+919839901531" className="text-white">+91 98399 01531</a>
                                            </p>
                                            <p>
                                                <a href="tel:+919451311551" className="text-white">+91 94513 11551</a>
                                            </p>
                                        </span>
                                    </li>

                                    {/* <li className="flex items-start mb-4">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#eb6605] flex items-center justify-center mr-3">
                                            <FaWhatsapp className="text-white text-sm" />
                                        </div>
                                        <span className="text-white">
                                            <a
                                                href="https://api.whatsapp.com/send?phone=918299529846&text=Hello%20Modern%20Word%20Travel"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:text-emerald-600 transition-colors"
                                            >
                                                +91 8299 529 846
                                            </a>
                                        </span>
                                    </li> */}

                                    <li className="flex items-start">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#eb6605] flex items-center justify-center mr-3">
                                            <FaEnvelope className="text-white text-sm" />
                                        </div>
                                        <span className="text-white">
                                            <p>
                                                <a href="mailto:info@modernworldtravel.com" className="transition-colors">
                                                    info@modernworldtravel.com,
                                                </a>
                                            </p>
                                            <p>
                                                <a href="mailto:modernworldtravel@gmail.com," className="transition-colors">
                                                    modernworldtravel@gmail.com,
                                                </a>
                                            </p>
                                            <p>
                                                <a href="mailto:sales@modernworldtravel.com" className="transition-colors">
                                                    sales@modernworldtravel.com
                                                </a>
                                            </p>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-dark-1 border-top">
                <div className="border-b border-gray-300 w-full h-px w-0.5"></div>
                <div className="container">
                    <div className="footer__bottom">
                        <div className="row justify-between items-center">
                            <div className="col-auto">
                                <div className="text-gray-400 text-sm">
                                    © Copyright Morden World Travel {new Date().getFullYear()}
                                </div>
                            </div>
                            <div className="col-auto">
                                <div className="footer__links d-flex items-center gap-4">
                                    <a href="/privacy-policy" className="text-gray-400! text-sm transition-colors">
                                        Privacy Policy
                                    </a>
                                    <span className="text-white">|</span>
                                    <a href="/terms-conditions" className="text-gray-400!  hover:text-white text-sm transition-colors">
                                        Terms & Conditions
                                    </a>
                                    <span className="text-white">|</span>
                                    <a href="/refund-policy" className="text-gray-400!  text-sm transition-colors">
                                        Return / Refund
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-center mt-3">
                            <div className="col-12 text-center">
                                <p className="text-gray-500 text-xs">
                                    © {new Date().getFullYear()}
                                    <a href="https://www.modernworldtravel.com/" className="text-gray-400 hover:text-white mx-1 transition-colors">
                                        www.modernworldtravel.com
                                    </a>
                                    , All Rights Reserved. | Website Designed & Maintained by{' '}
                                    <a
                                        href="https://wizards.co.in/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        Wizards Next LLP.
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}
