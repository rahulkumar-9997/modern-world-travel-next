import React from 'react'
import BreadcrumbHeader from '@/components/BreadcrumbHeader/BreadcrumbHeader';
import { Heading } from '@/components/Heading/Heading';
export default function GallerySlugPage() {
    return (
        <>
            <BreadcrumbHeader
                desktopImage="/assets/img/pageHeader/1.jpg"
                mobileImage="/assets/img/pageHeader/1.jpg"
                shapeImage="/assets/img/hero/1/shape.svg"
                title="Gallery"
                subtitle="Gallery"
            />
            <section className="layout-pt-lg layout-pb-lg section-gallery">
                <div className="container">
                    <div className="gallery-masonry-container">                        
                        <div className="row masonry-grid">
                            <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb-24 masonry-item ">
                                <div className="rx-gallery-card-two">
                                    <a
                                        className="rx-gallery-img block overflow-hidden rounded-lg group mb-3"
                                        href="https://www.inforbit.in/demo/hotel-elegance-backend/public/storage/gallery/gallery_695766f88eae6.webp"
                                        data-fancybox="gallery"
                                        data-caption="new-13"
                                    >
                                        <img
                                            alt="new-13"
                                            loading="lazy"
                                            className="w-full h-64 object-contain transition-transform duration-300 group-hover:scale-110"
                                            src="https://www.inforbit.in/demo/hotel-elegance-backend/public/storage/gallery/gallery_695766f88eae6.webp"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                            <i className="fas fa-search-plus text-white text-2xl" />
                                        </div>
                                    </a>
                                    <div className="text-center px-2">
                                        <h6 className="text-[#555555] text-18 font-semibold mb-1 truncate">Land Video</h6>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
