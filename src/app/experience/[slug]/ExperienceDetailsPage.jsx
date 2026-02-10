'use client';
import React from 'react'
import BreadcrumbHeader from '@/components/BreadcrumbHeader/BreadcrumbHeader';
import { Heading } from '@/components/Heading/Heading';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { Fancybox } from '@fancyapps/ui';
import { useEffect } from 'react';
export default function experienceDetailsPage({ initialData }) {
    if (!initialData) return null;
    useEffect(() => {
        Fancybox.bind('[data-fancybox="experience-gallery"]', {
            Thumbs: false,
            Toolbar: true,
        });

        return () => {
            Fancybox.destroy();
        };
    }, []);
    return (
        <>
            <BreadcrumbHeader
                desktopImage={initialData?.desktop_banner_image || "/assets/img/hero/1.png"}
                mobileImage={initialData?.mobile_banner_image || "/assets/img/hero/1.png"}
                shapeImage="/assets/img/hero/1/shape.svg"
                title={initialData?.title}
                subtitle=""
            />
            <div className="single-tour-section city_section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {/* <div className="sub-heading text-center">
                                <Heading
                                level={3}
                                text={initialData?.title}
                                className="text-26 text-white fw-500 mb-10"
                                />
                            </div> */}
                            <div className="single-tour-inner blog-section experience-section">
                                <div className="table-formatulli mt-0">
                                    {initialData?.page_intro && (
                                        <div
                                            className="mb-20"
                                            dangerouslySetInnerHTML={{
                                                __html: initialData.page_intro
                                            }}
                                        />
                                    )}
                                </div>
                                <div className="list-data exp-time-section">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            {initialData?.page_paragraph?.map((item, index) => {
                                                const hasImage = item?.image && item.image !== '';
                                                const imageOnRight = index % 2 === 0; 
                                                return (
                                                    <div className="padding-bottom" key={item.nid || index}>
                                                        <div className="row align-items-center">

                                                            <div className="col-md-12">
                                                                <div className="destination-time-title">
                                                                    <h4 className="text-xl md:text-2xl font-semibold text-20 text-white fw-500 table-title">
                                                                        {item.title}
                                                                    </h4>
                                                                </div>
                                                            </div>
                                                            {hasImage && !imageOnRight && (
                                                                <div className="col-lg-5 d-flex align-items-center">
                                                                    <div className="image paragra-img">
                                                                        <figure className="feature-image1">
                                                                            <img
                                                                                className="rounded shadow-black"
                                                                                src={item.image}
                                                                                alt={item.title || ''}
                                                                            />
                                                                        </figure>
                                                                    </div>
                                                                </div>
                                                            )}
                                                            <div
                                                                className={
                                                                    hasImage
                                                                        ? "col-lg-7 pagedata table-formatulli"
                                                                        : "col-lg-12 pagedata table-formatulli"
                                                                }
                                                            >
                                                                <div className='mb-10'
                                                                    dangerouslySetInnerHTML={{
                                                                        __html: item?.content || ''
                                                                    }}
                                                                />
                                                            </div>
                                                            {hasImage && imageOnRight && (
                                                                <div className="col-lg-5 d-flex align-items-center">
                                                                    <div className="image paragra-img">
                                                                        <figure className="feature-image1">
                                                                            <img
                                                                                className="rounded shadow-black"
                                                                                src={item.image}
                                                                                alt={item.title || ''}
                                                                            />
                                                                        </figure>
                                                                    </div>
                                                                </div>
                                                            )}

                                                        </div>
                                                    </div>
                                                );
                                            })}


                                        </div>
                                    </div>
                                </div>
                                {initialData?.more_img?.length > 0 && (
                                    <div className="more-images-section mt-40">
                                        <div className="row">
                                            {initialData.more_img.map((img, i) => (
                                                <div
                                                    key={img.nid || i}
                                                    className="col-lg-3 col-md-4 col-sm-6 mb-10 pr-2! pl-2!"
                                                >
                                                    <a
                                                        href={img.image}
                                                        data-fancybox="experience-gallery"
                                                        className="d-block image"
                                                    >
                                                        <div className="image">
                                                            <img
                                                                src={img.image}
                                                                alt=""
                                                                className="img-fluid rounded shadow-black"
                                                            />
                                                        </div>
                                                    </a>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
