import React from 'react'
import BreadcrumbHeader from '@/components/BreadcrumbHeader/BreadcrumbHeader';
import { Heading } from '@/components/Heading/Heading';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
export default function AboutUsPage() {
    return (
        <>
            <BreadcrumbHeader
                desktopImage="/assets/img/pageHeader/1.jpg"
                mobileImage="/assets/img/pageHeader/1.jpg"
                shapeImage="/assets/img/hero/1/shape.svg"
                title="Contact Us"
                subtitle=""
            />
            <section className="contact-section layout-pt-lg layout-pb-lg">
                <div className="container">
                    <div className="row align-items-center clearfix">
                        <div className="col-lg-4 col-md-12 col-sm-12 info-column">
                            <div className="info-inner">
                                <div className="space-y-8">
                                    <div className="flex items-start space-x-3 p-3 bg-white rounded-xl shadow-sm border border-[#eb6605] hover:shadow-md transition-shadow duration-300">
                                        <div className="flex-shrink-0 w-12 h-12 bg-[#004d91] rounded-lg flex items-center justify-center">
                                            <FaPhoneAlt className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <Heading
                                                level={3}
                                                text="Phone Number"
                                                className="text-24 fw-700 mb-2"
                                            />
                                            <p className='mb-1'>
                                                <a href="tel:5424108953" className="">
                                                    +91 542 4108953
                                                </a>
                                            </p>
                                            <p className='mb-1'>
                                                <a href="tel:+919839901531" className="">
                                                    +91 98399 01531
                                                </a>
                                            </p>
                                            <p className='mb-1'>
                                                <a href="tel:+919451311551" className="">
                                                    +91 94513 11551
                                                </a>
                                            </p>
                                            <p className="text-sm text-black! mt-1">Mon-Fri, 9am-6pm</p>
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="flex items-start space-x-3 p-3 bg-white rounded-xl shadow-sm border border-[#eb6605] hover:shadow-md transition-shadow duration-300">
                                        <div className="flex-shrink-0 w-12 h-12 bg-[#004d91] rounded-lg flex items-center justify-center">
                                            <FaEnvelope className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <Heading
                                                level={3}
                                                text="Email Address"
                                                className="text-24 fw-700 mb-2"
                                            />
                                            <p className='mb-1'>
                                                <a href="mailto:info@modernworldtravel.com"
                                                    className="">
                                                    info@modernworldtravel.com
                                                </a>
                                            </p>
                                            <p className='mb-1'>
                                                <a href="mailto:modernworldtravel@gmail.com"
                                                    className="">
                                                    modernworldtravel@gmail.com
                                                </a>
                                            </p>
                                            <p className='mb-1'>
                                                <a href="mailto:sales@modernworldtravel.com"
                                                    className="">
                                                    sales@modernworldtravel.com
                                                </a>
                                            </p>
                                            <p className='mb-1'>
                                                <a href="mailto:mwt@modernworldtravel.in"
                                                    className="">
                                                    mwt@modernworldtravel.in
                                                </a>
                                            </p>

                                            <p className="text-sm text-black! mt-1">We respond within 24 hours</p>
                                        </div>
                                    </div>
                                    {/* Location */}
                                    <div className="flex items-start space-x-3 p-3 bg-white rounded-xl shadow-sm border border-[#eb6605] hover:shadow-md transition-shadow duration-300">
                                        <div className="flex-shrink-0 w-12 h-12 bg-[#004d91] rounded-lg flex items-center justify-center">
                                            <FaMapMarkerAlt className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <Heading
                                                level={3}
                                                text="Our Location"
                                                className="text-24 fw-700 mb-2"
                                            />
                                            <p>
                                                Varanasi ( Head Office ) Mumukshu Bhawan, Assi, Varanasi - 221005
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                            <div className="content_block_six">
                                <div className="content-box">
                                    <div className="form-inner">
                                        <div className="contactForm">
                                            <div className="row y-gap-30">
                                                <div className="col-md-6">
                                                    <input type="text" placeholder="Name" />
                                                </div>
                                                <div className="col-md-6">
                                                    <input type="text" placeholder="Phone" />
                                                </div>
                                                <div className="col-12">
                                                    <input type="text" placeholder="Email" />
                                                </div>
                                                <div className="col-12">
                                                    <textarea placeholder="Message" rows={6} defaultValue={""} />
                                                </div>
                                                <div className="col-12">
                                                    <button className="button -md -dark-1 bg-accent-1 text-white col-12">
                                                        Send Message
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-12 col-md-12">
                            <div className="w-full mt-26">
                                <div className="relative w-full h-[450px] rounded-xl overflow-hidden shadow-lg">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2925.9963138758717!2d83.00306135088152!3d25.286404551558523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e31f29214f029%3A0x5fc961550d740ac7!2sModern%20World%20Travel!5e0!3m2!1sen!2sin!4v1608887363413!5m2!1sen!2sin"
                                        width="100%"
                                        height="100%"
                                        className="absolute inset-0"
                                        frameBorder="0"
                                        allowFullScreen
                                        aria-hidden="false"
                                        tabIndex="0"
                                        title="Modern World Travel Location"
                                        loading="lazy"
                                    ></iframe>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
