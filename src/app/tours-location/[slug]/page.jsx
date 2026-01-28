import React from 'react'
import BreadcrumbHeader from '@/components/BreadcrumbHeader/BreadcrumbHeader';
import { Heading } from '@/components/Heading/Heading';
export default function DestinationListPage() {
    return (
        <>
            <BreadcrumbHeader
                desktopImage="/assets/img/hero/1.png"
                mobileImage="/assets/img/hero/1.png"
                shapeImage="/assets/img/hero/1/shape.svg"
                title="Aadhyatmik Circuit"
                subtitle=""
            />
            <section className="layout-pt-xl layout-pb-xl destination-list-section">
                <div className="container animated">                    
                    <div className="row y-gap-30 pt-40 sm:pt-20">
                        <div className="col-lg-4 col-sm-6 is-in-view">
                            <a href="/destination/slug" className="tourCard -type-3 -hover-image-scale">
                                <div className="tourCard__image ratio ratio-41:45 rounded-12 -hover-image-scale__image">
                                    <img
                                        src="/assets/modern-img/Prayagraj.jpg"
                                        alt="image"
                                        className="img-ratio rounded-12"
                                    />
                                </div>
                                <div className="tourCard__wrap">
                                    <div className="tourCard__header d-flex justify-between items-center text-13 text-white">
                                        <div className="d-flex items-center">
                                            <i className="icon-clock text-16 mr-5" />4 days
                                        </div>                                       
                                    </div>
                                    <div className="tourCard__content">
                                        <div>
                                            <Heading
                                                level={3}
                                                text="Centipede Tour - Guided Arizona Desert Tour by ATV"
                                                className="tourCard__title text-20 text-white fw-500 mt-5"
                                            />   
                                            
                                        </div>
                                        {/* <div className="text-right text-white">
                                            <div className="text-13 lh-14">From</div>
                                            <div className="text-18 fw-500">$189,25</div>
                                        </div> */}
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-sm-6 is-in-view">
                            <a href="/destination/slug" className="tourCard -type-3 -hover-image-scale">
                                <div className="tourCard__image ratio ratio-41:45 rounded-12 -hover-image-scale__image">
                                    <img
                                        src="/assets/modern-img/chitrakoot.jpg"
                                        alt="image"
                                        className="img-ratio rounded-12"
                                    />
                                </div>
                                <div className="tourCard__wrap">
                                    <div className="tourCard__header d-flex justify-between items-center text-13 text-white">
                                        <div className="d-flex items-center">
                                            <i className="icon-clock text-16 mr-5" />4 days
                                        </div>
                                        
                                    </div>
                                    <div className="tourCard__content">
                                        <div>
                                            <Heading
                                                level={3}
                                                text="Centipede Tour - Guided Arizona Desert Tour by ATV"
                                                className="tourCard__title text-20 text-white fw-500 mt-5"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-sm-6 is-in-view">
                            <a href="/destination/slug" className="tourCard -type-3 -hover-image-scale">
                                <div className="tourCard__image ratio ratio-41:45 rounded-12 -hover-image-scale__image">
                                    <img
                                        src="/assets/modern-img/chitrakoot.jpg"
                                        alt="image"
                                        className="img-ratio rounded-12"
                                    />
                                </div>
                                <div className="tourCard__wrap">
                                    <div className="tourCard__header d-flex justify-between items-center text-13 text-white">
                                        <div className="d-flex items-center">
                                            <i className="icon-clock text-16 mr-5" />4 days
                                        </div>
                                        
                                    </div>
                                    <div className="tourCard__content">
                                        <div>
                                            <Heading
                                                level={3}
                                                text="Centipede Tour - Guided Arizona Desert Tour by ATV"
                                                className="tourCard__title text-20 text-white fw-500 mt-5"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>    
                                            
                    </div>
                </div>
            </section>


        </>
    )
}
