import React from 'react'
import BreadcrumbHeader from '@/components/BreadcrumbHeader/BreadcrumbHeader';
import Link from 'next/link';
import { Heading } from '@/components/Heading/Heading';
import Image from 'next/image';
export default function BlogListPage({ initialData }) {
    if (!Array.isArray(initialData) || initialData.length === 0) {
        return (
            <>
                <BreadcrumbHeader
                    desktopImage="/assets/img/hero/1.png"
                    mobileImage="/assets/img/hero/1.png"
                    shapeImage="/assets/img/hero/1/shape.svg"
                    title="Blog"
                    subtitle=""
                />
                <section className="layout-pt-md layout-pb-xl">
                    <div className="container text-center">
                        <h4>No blog found</h4>
                    </div>
                </section>
            </>
        );
    }
    return (
        <>
            <BreadcrumbHeader
                desktopImage="/assets/img/hero/1.png"
                mobileImage="/assets/img/hero/1.png"
                shapeImage="/assets/img/hero/1/shape.svg"
                title="Blog"
                subtitle=""
            />
            <section className="layout-pt-md layout-pb-xl">
                <div className="container">
                    <div className="blog-list-container">
                        <div className="row y-gap-30">
                            {initialData.map((item) => (
                                <div className="col-lg-4 col-md-6" key={item.nid}>
                                    <Link href={`/blog/${item.url}`} className="blogCard -type-1">
                                        <div className="blogCard__image ratio ratio-41:30">
                                            <Image
                                                src={item.image || '/assets/modern-img/chitrakoot.jpg'}
                                                alt={item.title}
                                                width={400}
                                                height={300}
                                                sizes="(max-width: 768px) 100vw, 500px"                          
                                                className="img-ratio rounded-12"
                                            />
                                            {Array.isArray(item.blog_heading) && item.blog_heading.length > 0 && (
                                                <div className="blogCard__badge">
                                                    {item.blog_heading[0].title}
                                                </div>
                                            )}
                                        </div>
                                        <div className="blogCard__content mt-15">
                                            {/* <div className="blogCard__info text-14">
                                                    <div className="lh-13">April 06 2023</div>
                                                    <div className="blogCard__line" />
                                                    <div className="lh-13">By Ali Tufan</div>
                                                </div> */}
                                            <Heading
                                                level={3}
                                                text={item.title}
                                                className="blogCard__title blog-list-title  fw-600 mt-10"
                                            />
                                            <p>
                                                {item.blog_intro
                                                    ? item.blog_intro.substring(0, 110) + '...'
                                                    : ''}
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                            ))}                            
                        </div>
                    </div>                    
                </div>
            </section>
        </>
    )
}
