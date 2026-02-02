import React from 'react'
import BreadcrumbHeader from '@/components/BreadcrumbHeader/BreadcrumbHeader';
import { Heading } from '@/components/Heading/Heading';
import Image from 'next/image';
export default function BlogDetailsPage({ initialData }) {
    if (!initialData) return null;
    const {
        title,
        intro,
        banner_image,
        sections
    } = initialData;
    return (
        <>
            <BreadcrumbHeader
                desktopImage={banner_image || "/assets/img/hero/1.png"}
                mobileImage={banner_image || "/assets/img/hero/1.png"}
                shapeImage="/assets/img/hero/1/shape.svg"
                title={title || "Blog Details"}
                subtitle=""
            />
            <section className="layout-pt-md layout-pb-xl">
                <div className="container">
                    <div className="row justify-center">
                        <div className="col-lg-8">
                            <div className="blog_details_page blog-details-contact blog-single">
                                {/* <Heading
                                    level={2}
                                    text="The Brazen Head"
                                    className="text-30 md:text-24"
                                /> */}

                                {intro && (
                                    <p
                                        className="mt-0"
                                        dangerouslySetInnerHTML={{ __html: intro }}
                                    />
                                )}
                                {Array.isArray(sections) && sections.length > 0 && (
                                    sections.map((section, index) => (
                                        <div key={index} className="mt-10 paragraph-content mt-3 blog-post-data">
                                            {section.heading && (
                                                <Heading
                                                    level={2}
                                                    text={section.heading}
                                                    className="fw-600 blog-de-h2"
                                                />
                                            )}

                                            {section.image && (
                                                <div className="mt-3">
                                                    <div className="para-img featureCard__image ratio ratio-19:22 rounded-24 -hover-image-scale__image">
                                                        <Image
                                                        src={section.image}
                                                        alt={section.heading || 'image'}
                                                        className="img-ratio paragraph-image rounded! mb-2" 
                                                        width={500}
                                                        height={300}
                                                        sizes="(max-width: 768px) 100vw, 500px"                                                    
                                                        />
                                                    </div>
                                                </div>
                                            )}                                           
                                            {section.message && (
                                                <div
                                                    className="mt-15"
                                                    dangerouslySetInnerHTML={{ __html: section.message }}
                                                />
                                            )}                                            
                                        </div>
                                    ))
                                )}
                            </div>
                            {/* <div className="line mt-60 mb-30" /> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
