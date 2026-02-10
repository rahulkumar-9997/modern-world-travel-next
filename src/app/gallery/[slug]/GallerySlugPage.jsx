'use client';

import React, { useEffect, useRef } from 'react';
import BreadcrumbHeader from '@/components/BreadcrumbHeader/BreadcrumbHeader';
import { Heading } from '@/components/Heading/Heading';

import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { Fancybox as NativeFancybox } from '@fancyapps/ui';
export default function GallerySlugPage({ initialData }) {
    const section = initialData?.section_info;
    const items = initialData?.data || [];
    const mediaType = section?.media_type;
    const masonryRef = useRef(null);
    const masonryInstance = useRef(null);
    useEffect(() => {
        NativeFancybox.bind('[data-fancybox]', {});

        return () => {
            NativeFancybox.destroy();
        };
    }, []);
    /* ---------------------------
        Masonry (client only)
    --------------------------- */
    useEffect(() => {
        if (!masonryRef.current) return;
        let destroyed = false;
        const initMasonry = async () => {
            const MasonryModule = await import('masonry-layout');
            const imagesLoadedModule = await import('imagesloaded');
            const Masonry = MasonryModule.default;
            const imagesLoaded = imagesLoadedModule.default;
            if (destroyed) return;
            if (masonryInstance.current) {
                masonryInstance.current.destroy();
                masonryInstance.current = null;
            }
            imagesLoaded(masonryRef.current, () => {
                if (destroyed) return;
                masonryInstance.current = new Masonry(masonryRef.current, {
                    itemSelector: '.masonry-item',
                    percentPosition: true,
                    transitionDuration: 0,
                });
            });
        };
        initMasonry();
        return () => {
            destroyed = true;
            if (masonryInstance.current) {
                masonryInstance.current.destroy();
                masonryInstance.current = null;
            }
        };

    }, [items, mediaType]);
    return (
        <>
            <BreadcrumbHeader
                desktopImage="/assets/img/pageHeader/1.jpg"
                mobileImage="/assets/img/pageHeader/1.jpg"
                shapeImage="/assets/img/hero/1/shape.svg"
                title={section?.heading || 'Gallery'}
                subtitle={section?.sub_heading || ''}
            />

            <section className="layout-pt-lg layout-pb-lg section-gallery">
                <div className="container">
                    {/* {section?.title && (
                        <div className="text-center mb-40">
                            <Heading
                                level={4}
                                text={section.title}
                                className="ttourCard__title fw-600 mt-5 leading-tight!"
                            />
                        </div>
                    )} */}
                    <div className="gallery-masonry-container">
                        <div className="row masonry-grid" ref={masonryRef}>
                            {items.map((item, index) => {
                                const image = item.gallery_url;
                                const videoUrl = item.video_url;
                                const title = item.title;
                                const externalUrl = item.external_url;
                                if (mediaType === 'landscape_image') {
                                    return (
                                        <div
                                            key={item.id}
                                            className="col-xl-4 col-lg-4 col-sm-6 col-12 mb-5 masonry-item p-2"
                                        >
                                            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                                                <div className="relative h-80 overflow-hidden">
                                                    {externalUrl && externalUrl.trim() ? (
                                                        <a
                                                            href={externalUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="block w-full h-full relative"
                                                        >
                                                            <img
                                                                src={image}
                                                                alt={title || `Image ${item.id}`}
                                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                                loading="lazy"
                                                                onError={(e) => {
                                                                    e.currentTarget.src = '/assets/modern-img/varanasi-sarnath.jpg';
                                                                }}
                                                            />
                                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                        </a>
                                                    ) : (
                                                        <a
                                                            href={image}
                                                            data-fancybox="gallery"
                                                            data-caption={title || `Image ${item.id}`}
                                                            className="block w-full h-full relative"
                                                        >
                                                            <img
                                                                src={image}
                                                                alt={title || `Image ${item.id}`}
                                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                                loading="lazy"
                                                                onError={(e) => {
                                                                    e.currentTarget.src = '/assets/modern-img/varanasi-sarnath.jpg';
                                                                }}
                                                            />
                                                        </a>
                                                    )}

                                                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent pointer-events-none">
                                                        {title && title.trim() && (
                                                            <div className="text-white font-semibold text-center mb-1 truncate text-18">
                                                                {title}
                                                            </div>
                                                        )}
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    );
                                }
                                /* ============================
                                    LANDSCAPE VIDEO
                                ============================ */
                                if (mediaType === 'landscape_video') {
                                return (
                                    <div
                                        key={item.id}
                                        className="col-xl-4 col-lg-4 col-sm-6 col-12 mb-5 masonry-item p-2"
                                    >
                                        <div className="group">
                                            <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 mb-3">
                                                <div className="relative h-56 md:h-64 overflow-hidden rounded-2xl bg-black">

                                                    <video
                                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                        muted
                                                        playsInline
                                                        preload="metadata"
                                                        controls
                                                        controlsList="nodownload"
                                                    >
                                                        <source src={videoUrl} type="video/mp4" />
                                                        Your browser does not support the video tag.
                                                    </video>

                                                </div>
                                            </div>

                                            <div className="text-center px-2">
                                                {title && title.trim() && (
                                                    <h6 className="text-[#555555] text-18 font-semibold mb-1 truncate">
                                                        {title}
                                                    </h6>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            }

                                /* ============================
                                    PORTRAIT IMAGE
                                ============================ */
                                if (mediaType === 'portrait_image') {
                                    return (
                                        <div
                                            key={item.id}
                                            className="col-xl-4 col-lg-4 col-sm-6 col-12 mb-5 masonry-item p-2"
                                        >
                                            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 box-sd">
                                                <div className="relative aspect-[3/4] overflow-hidden">

                                                    {externalUrl && externalUrl.trim() ? (
                                                        <a
                                                            href={externalUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="block w-full h-full"
                                                        >
                                                            <img
                                                                src={image}
                                                                alt={title || `Portrait ${index + 1}`}
                                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                                loading="lazy"
                                                                onError={(e) => {
                                                                    e.currentTarget.src = '/assets/modern-img/varanasi-sarnath.jpg';
                                                                }}
                                                            />
                                                        </a>
                                                    ) : (
                                                        <a
                                                            href={image}
                                                            data-fancybox="portrait-gallery"
                                                            data-caption={title || `Portrait ${index + 1}`}
                                                            className="block w-full h-full"
                                                        >
                                                            <img
                                                                src={image}
                                                                alt={title || `Portrait ${index + 1}`}
                                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                                loading="lazy"
                                                                onError={(e) => {
                                                                    e.currentTarget.src = '/assets/modern-img/varanasi-sarnath.jpg';
                                                                }}
                                                            />
                                                        </a>
                                                    )}

                                                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent pointer-events-none">
                                                        {title && title.trim() && (
                                                            <div className="text-white font-semibold text-center mb-1 truncate text-18">
                                                                {title}
                                                            </div>
                                                        )}
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    );
                                }
                                /* ============================
                                    PORTRAIT VIDEO
                                ============================ */
                                if (mediaType === 'portrait_video') {
                                    return (
                                        <div
                                            key={item.id}
                                            className="col-xl-3 col-lg-3 col-sm-6 col-12 mb-5 masonry-item p-2"
                                        >
                                            <div className="group relative overflow-hidden rounded-2xl shadow-lg mb-3">
                                                <div className="relative aspect-[9/16] overflow-hidden rounded-2xl bg-black">

                                                    <video
                                                        className="w-full h-full object-cover transition-transform duration-700"
                                                        muted
                                                        playsInline
                                                        preload="metadata"
                                                        controls
                                                        controlsList="nodownload"
                                                    >
                                                        <source src={videoUrl} type="video/mp4" />
                                                        Your browser does not support the video tag.
                                                    </video>

                                                </div>
                                            </div>

                                            <div className="text-center px-2">
                                                {title && title.trim() && (
                                                    <h6 className="text-[#555555] text-18 font-semibold mb-1 truncate">
                                                        {title}
                                                    </h6>
                                                )}
                                            </div>
                                        </div>
                                    );
                                }
                                return null;
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
