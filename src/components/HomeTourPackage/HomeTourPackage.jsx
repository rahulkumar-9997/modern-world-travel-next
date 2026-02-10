import React from 'react'
import { Heading } from '../Heading/Heading';
import Link from 'next/link';
import Image from 'next/image';
export const HomeTourPackage = ({ initialData }) => {
    const packages = Array.isArray(initialData?.data)
        ? initialData.data
        : [];
    return (
        <section className="layout-pb-xl home-tour-package">
            <div className="container">
                <div className="row justify-center items-end y-gap-10">
                    <div className="col-auto">
                        <Heading
                            level={2}
                            text={initialData?.title || 'Tour Packages in Varanasi'}
                            className="text-30 md:text-24 mb-1"
                        />                        
                    </div>
                    {/* <div className="col-auto">
                        <button className="buttonArrow d-flex items-center ">
                            <span className="text-xl">See all</span>
                            <i className="icon-arrow-top-right text-16 ml-10" />
                        </button>
                    </div> */}
                </div>
                {initialData?.details && (
                    <div className="row justify-center">
                        <div className="col-md-6">
                            <div className="head-title text-center">
                                <p>{initialData.details}</p>
                            </div>
                        </div>
                    </div>
                )}
                <div className="grid -type-3 pt-20 sm:pt-20 tour-package-home">
                    {packages.map((item) => (
                    <Link
                        key={item.nid}
                        href={`/tour-package/${item.url}`}
                        className="featureCard -type-1 overflow-hidden rounded-12 px-10 py-10 -hover-image-scale"
                    >
                        <div className="featureCard__image -hover-image-scale__image relative ">
                            <Image src={item.image ?? "/assets/modern-img/Prayagraj.jpg"}
                            alt={item.name}
                            width={400}
                            height={300}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"             
                            />
                            {/* <div className="absolute inset-0 bg-linear-to-t from-black/40 to-black/30"></div> */}

                        </div>
                        <div className="featureCard__content">
                            <div className='text-center'>
                                <h4 className="text-white title-color">
                                    {item.name}
                                </h4>
                                {item.duration && (
                                    <div className="text-white text-14 mt-5">
                                        {item.duration}
                                    </div>
                                )}
                            </div>
                        </div>
                    </Link>
                    ))}
                </div>
            </div>
        </section>

    )
}
