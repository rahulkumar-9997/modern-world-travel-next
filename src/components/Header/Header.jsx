'use client';
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const Header = () => {
    const [menuList, setMenuList] = useState([]);
    useEffect(() => {
        headerSticky()
        menuEvents()
        menuListBindEvents()
    }, [])

    const { data, isLoading, isError, isFetching, error } = useQuery({
        queryKey: ["nav-bar"],
        queryFn: async () => {
            const res = await axios.get('https://www.gdsons.co.in/draft/mwt/api/header-menu');
            setMenuList(res.data?.data);
            return res.data?.data;
        },
        retry: 1,
        placeholderData: (old) => old,
    });

    return (
        <>
            <header className="header -type-3 -page-5 js-header">
                <div className="header__container container">
                    <div className="headerMobile__left">
                        <button className="header__menuBtn js-menu-button">
                            <i className="icon-main-menu" />
                        </button>
                    </div>
                    <div className="header__logo">
                        <Link href="/" className="header-logo-btn">
                            <img src="/assets/modern-img/logo-new.jpg" alt="logo icon" />
                        </Link>
                        <div className="xl:d-none ml-30 desktop-head-nav">
                            <div className="desktopNav">
                                <div className="desktopNav__item">
                                    <Link className="desktopNav__item_a" href="/">Home</Link>
                                </div>
                                <div className="desktopNav__item">
                                    <Link className="desktopNav__item_a" href="/about-us">About Us</Link>
                                </div>
                                {
                                    isLoading &&
                                    <>
                                        <div className="desktopNav__item">
                                            <Link className="desktopNav__item_a" href="/">
                                                Destination
                                                <i className="icon-chevron-down" />
                                            </Link>
                                        </div>
                                        <div className="desktopNav__item">
                                            <Link className="desktopNav__item_a" href="/">
                                                Experience
                                                <i className="icon-chevron-down" />
                                            </Link>
                                        </div>
                                        <div className="desktopNav__item">
                                            <Link className="desktopNav__item_a" href="/">
                                                Package
                                                <i className="icon-chevron-down" />
                                            </Link>
                                        </div>
                                    </>
                                }
                                {!isLoading &&
                                    menuList &&
                                    menuList.map((menu) => (
                                        <div className="desktopNav__item" key={menu.title}>
                                            <Link href="#" className="desktopNav__item_a">
                                                {menu.title}
                                                <i className="icon-chevron-down" />
                                            </Link>

                                            {menu.sections && menu.sections.length > 0 && (
                                                <div className="desktopNavMega">
                                                    <div className="desktopNavMega__container">
                                                        <div className="desktopNavMega__lists">
                                                            {menu.sections.map((section) => (
                                                                <div className="desktopNavMega-list" key={section.title}>
                                                                    <div className="desktopNavMega-list__item">
                                                                        <div className="desktopNavMega-list__title">
                                                                            {section.title}
                                                                        </div>

                                                                        <div className="desktopNavMega-list__list">
                                                                            {section.items &&
                                                                                section.items.map((item, idx) => (
                                                                                    <div
                                                                                        className="desktopNavMega-list__link"
                                                                                        key={idx}
                                                                                    >
                                                                                        <a href={`/${item.url}`} className='text-sm! m-0! leading-tight'>
                                                                                            {item.name}
                                                                                        </a>
                                                                                        {
                                                                                            item.duration && (
                                                                                                <span className="text-[10px] text-[#EB662B] leading-[2px] ">
                                                                                                    {item.duration}
                                                                                                </span>
                                                                                            )
                                                                                        }
                                                                                    </div>
                                                                                ))}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))
                                }

                                <div className="desktopNav__item">
                                    <Link href="/blog" className="desktopNav__item_a">Blog</Link>
                                </div>
                                <div className="desktopNav__item">
                                    <Link href="/contact-us" className="desktopNav__item_a">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="headerMobile__right">
                        <button className="d-flex">
                            <i className="icon-search text-18" />
                        </button>
                        <button className="d-flex ml-20">
                            <i className="icon-person text-18" />
                        </button>
                    </div>
                </div>
            </header>

            <div className="menu js-menu">
                <div className="menu__overlay js-menu-button"></div>

                <div className="menu__container">
                    <div className="menu__header">
                        <h4>Main Menu</h4>

                        <button className="js-menu-button"><i className="icon-cross text-10"></i></button>
                    </div>

                    <div className="menu__content">
                        <ul className="menuNav js-navList">
                            <li className="menuNav__item -has-submenu js-has-submenu">
                                <a>
                                    Home
                                    <i className="icon-chevron-right"></i>
                                </a>

                                <ul className="submenu">
                                    <li className="submenu__item js-nav-list-back">
                                        <a>Back</a>
                                    </li>


                                    <li className="submenu__item">
                                        <a href="index.html">Home 01</a>
                                    </li>

                                    <li className="submenu__item">
                                        <a href="home-2.html">Home 02</a>
                                    </li>

                                    <li className="submenu__item">
                                        <a href="home-3.html">Home 03</a>
                                    </li>

                                    <li className="submenu__item">
                                        <a href="home-4.html">Home 04</a>
                                    </li>

                                    <li className="submenu__item">
                                        <a href="home-5.html">Home 05</a>
                                    </li>

                                    <li className="submenu__item">
                                        <a href="home-6.html">Home 06</a>
                                    </li>

                                    <li className="submenu__item">
                                        <a href="home-7.html">Home 07</a>
                                    </li>

                                    <li className="submenu__item">
                                        <a href="home-8.html">Home 08</a>
                                    </li>

                                    <li className="submenu__item">
                                        <a href="home-9.html">Home 09</a>
                                    </li>

                                    <li className="submenu__item">
                                        <a href="home-10.html">Home 10</a>
                                    </li>

                                </ul>
                            </li>

                            <li className="menuNav__item -has-submenu js-has-submenu">
                                <a>
                                    Tour
                                    <i className="icon-chevron-right"></i>
                                </a>

                                <ul className="submenu">
                                    <li className="submenu__item js-nav-list-back">
                                        <a>Back</a>
                                    </li>


                                    <li className="submenu__item">
                                        <a href="tour-list-1.html">Tour list 1</a>
                                    </li>

                                    <li className="submenu__item">
                                        <a href="tour-list-2.html">Tour list 2</a>
                                    </li>

                                    <li className="submenu__item">
                                        <a href="tour-list-3.html">Tour list 3</a>
                                    </li>

                                    <li className="submenu__item">
                                        <a href="tour-list-4.html">Tour list 4</a>
                                    </li>

                                    <li className="submenu__item">
                                        <a href="tour-list-5.html">Tour list 5</a>
                                    </li>

                                    <li className="submenu__item">
                                        <a href="tour-list-6.html">Tour list 6</a>
                                    </li>

                                    <li className="submenu__item">
                                        <a href="tour-list-7.html">Tour list 7</a>
                                    </li>

                                    <li className="submenu__item">
                                        <a href="tour-list-8.html">Tour list 8</a>
                                    </li>

                                    <li className="submenu__item">
                                        <a href="tour-list-9.html">Tour list 9</a>
                                    </li>

                                    <li className="submenu__item">
                                        <a href="tour-list-10.html">Tour list 10</a>
                                    </li>

                                    <li className="submenu__item">
                                        <a href="tour-single-1.html">Tour single 1</a>
                                    </li>

                                    <li className="submenu__item">
                                        <a href="tour-single-2.html">Tour single 2</a>
                                    </li>

                                    <li className="submenu__item">
                                        <a href="tour-single-3.html">Tour single 3</a>
                                    </li>

                                    <li className="submenu__item">
                                        <a href="tour-single-4.html">Tour single 4</a>
                                    </li>

                                    <li className="submenu__item">
                                        <a href="tour-single-5.html">Tour single 5</a>
                                    </li>

                                    <li className="submenu__item">
                                        <a href="booking-pages.html">Booking</a>
                                    </li>

                                </ul>
                            </li>

                            <li className="menuNav__item -has-submenu js-has-submenu">
                                <a>
                                    Dashboard
                                    <i className="icon-chevron-right"></i>
                                </a>

                                <ul className="submenu">
                                    <li className="submenu__item js-nav-list-back">
                                        <a>Back</a>
                                    </li>


                                    <li className="submenu__item">
                                        <a href="db-main.html">Dashboard</a>
                                    </li>

                                    <li className="submenu__item">
                                        <a href="db-booking.html">Booking</a>
                                    </li>

                                    <li className="submenu__item">
                                        <a href="db-listing.html">Listing</a>
                                    </li>

                                    <li className="submenu__item">
                                        <a href="db-add-tour.html">Add tour</a>
                                    </li>

                                    <li className="submenu__item">
                                        <a href="db-favorites.html">Favorites</a>
                                    </li>

                                    <li className="submenu__item">
                                        <a href="db-messages.html">Messages</a>
                                    </li>

                                    <li className="submenu__item">
                                        <a href="db-profile.html">Profile</a>
                                    </li>

                                </ul>
                            </li>

                            <li className="menuNav__item -has-submenu js-has-submenu">
                                <a>
                                    Blog
                                    <i className="icon-chevron-right"></i>
                                </a>

                                <ul className="submenu">
                                    <li className="submenu__item js-nav-list-back">
                                        <a>Back</a>
                                    </li>


                                    <li className="submenu__item">
                                        <a href="blog-list-1.html">Blog list 1</a>
                                    </li>

                                    <li className="submenu__item">
                                        <a href="blog-list-2.html">Blog list 2</a>
                                    </li>

                                    <li className="submenu__item">
                                        <a href="blog-list-3.html">Blog list 3</a>
                                    </li>

                                    <li className="submenu__item">
                                        <a href="blog-single.html">Blog single</a>
                                    </li>

                                </ul>
                            </li>

                            <li className="menuNav__item -has-submenu js-has-submenu">
                                <a>
                                    Pages
                                    <i className="icon-chevron-right"></i>
                                </a>

                                <ul className="submenu">
                                    <li className="submenu__item js-nav-list-back">
                                        <a>Back</a>
                                    </li>


                                    <li className="submenu__item">
                                        <a href="destinations.html">Destinations</a>
                                    </li>

                                    <li className="submenu__item">
                                        <a href="about.html">About</a>
                                    </li>

                                    <li className="submenu__item">
                                        <a href="contact.html">Contact</a>
                                    </li>

                                    <li className="submenu__item">
                                        <a href="help-center.html">Help center</a>
                                    </li>

                                    <li className="submenu__item">
                                        <a href="terms.html">Terms</a>
                                    </li>

                                    <li className="submenu__item">
                                        <a href="login.html">Login</a>
                                    </li>

                                    <li className="submenu__item">
                                        <a href="register.html">Register</a>
                                    </li>

                                    <li className="submenu__item">
                                        <a href="404.html">404 Page</a>
                                    </li>

                                    <li className="submenu__item">
                                        <a href="invoice.html">Invoice</a>
                                    </li>

                                    <li className="submenu__item">
                                        <a href="ui-elements.html">UI elements</a>
                                    </li>

                                </ul>
                            </li>

                            <li className="menuNav__item">
                                <a href="contact.html">Contact</a>
                            </li>
                        </ul>
                    </div>


                    <div className="menu__footer">
                        <i className="icon-headphone text-50"></i>

                        <div className="text-20 lh-12 fw-500 mt-20">
                            <div>Speak to our expert at</div>
                            <div className="text-accent-1">1-800-453-6744</div>
                        </div>

                        <div className="d-flex items-center x-gap-10 pt-30">

                            <div>
                                <a className="d-block">
                                    <i className="icon-facebook"></i>
                                </a>
                            </div>

                            <div>
                                <a className="d-block">
                                    <i className="icon-twitter"></i>
                                </a>
                            </div>

                            <div>
                                <a className="d-block">
                                    <i className="icon-instagram"></i>
                                </a>
                            </div>

                            <div>
                                <a className="d-block">
                                    <i className="icon-linkedin"></i>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function headerSticky() {
    const target = document.querySelector(".js-header")
    if (!target) return

    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            target.classList.add('-is-sticky')
        } else {
            target.classList.remove('-is-sticky')
        }
    })
}

// Mobile menu variables
let isMenuOpen = false
let menuDeepLevel = 0
let timeline

function menuEvents() {
    const menuButtons = document.querySelectorAll('.js-menu-button')

    menuButtons.forEach((el) => {
        el.addEventListener('click', (e) => {
            if (!isMenuOpen) {
                menuOpen()
                isMenuOpen = true
            } else {
                menuClose()
                isMenuOpen = false
            }
        })
    })
}

function menuOpen() {
    const menu = document.querySelector('.js-menu')
    const header = document.querySelector('.js-header')

    if (window.gsap) {
        window.gsap.timeline()
            .to(menu, {
                opacity: 1,
                onStart: () => {
                    menu.classList.add("-is-active")
                    document.body.classList.add("overflow-hidden")
                    header.classList.add("-dark")
                }
            })
    } else {
        // Fallback if GSAP is not available
        menu.classList.add("-is-active")
        document.body.classList.add("overflow-hidden")
        header.classList.add("-dark")
        menu.style.opacity = 1
    }
}

function menuClose() {
    const menu = document.querySelector('.js-menu')
    const header = document.querySelector('.js-header')

    if (window.gsap) {
        window.gsap.timeline()
            .to(menu, {
                opacity: 0,
                onStart: () => {
                    menu.classList.remove("-is-active")
                    document.body.classList.remove("overflow-hidden")
                    header.classList.remove("-dark")
                }
            })
    } else {
        // Fallback if GSAP is not available
        menu.classList.remove("-is-active")
        document.body.classList.remove("overflow-hidden")
        header.classList.remove("-dark")
        menu.style.opacity = 0
    }
}

// Mobile menu submenu functionality
function menuListBindEvents() {
    const listItems = document.querySelectorAll('.js-navList .js-has-submenu');
    const navList = document.querySelector('.js-navList');
    const navBtnListBack = document.querySelectorAll('.js-nav-list-back');

    if (!listItems.length) return;

    // Initialize timeline
    if (window.gsap) {
        timeline = window.gsap.timeline();
    } else {
        timeline = {
            clear: () => { },
            to: (targets, config) => {
                // Simple fallback animation
                if (config.onStart) config.onStart();
                if (config.onComplete) setTimeout(config.onComplete, config.duration * 1000 || 0);
            }
        };
    }

    // Back button events
    navBtnListBack.forEach(el => {
        el.addEventListener('click', () => {
            const visibleList = navList.querySelector('ul.-is-active');
            if (!visibleList) return;

            const parentList = visibleList.parentElement.parentElement;

            menuDeepLevel--;
            menuListStepAnimate(visibleList, parentList, menuDeepLevel, navBtnListBack);
        })
    })

    // Submenu item events
    listItems.forEach(el => {
        const parentLink = el.querySelector('li > a');
        if (parentLink) {
            parentLink.removeAttribute('href');

            parentLink.addEventListener('click', (e) => {
                e.preventDefault();
                const parent = el.parentElement;
                const subnavList = el.lastElementChild;

                menuDeepLevel++;
                menuListStepAnimate(parent, subnavList, menuDeepLevel, navBtnListBack);
            });
        }
    });
}

function deepLevelCheck(level) {
    return level >= 1;
}

function menuListStepAnimate(hideList, showList, level, navBtnListBack) {
    let hideListItems = hideList.children;
    hideListItems = Array.from(hideListItems);
    const hideListLinks = hideListItems.map(item => item.querySelector('li > a'));

    let showListItems = showList.children;
    showListItems = Array.from(showListItems);
    const showListLinks = showListItems.map(item => item.querySelector('li > a'));

    timeline.clear();

    if (!deepLevelCheck(level)) {
        if (window.gsap) {
            window.gsap.to(navBtnListBack, {
                ease: "quart.inOut",
                duration: 0.6,
                opacity: 0,
            })
        } else {
            // Fallback
            navBtnListBack.forEach(btn => btn.style.opacity = 0);
        }
    }

    if (window.gsap) {
        timeline.to(hideListLinks, {
            ease: 'quart.out',
            stagger: -0.04,
            duration: 0.8,
            y: '100%',
            onStart: () => {
                showList.classList.add('-is-active');
            },
            onComplete: () => {
                hideList.classList.remove('-is-active');
            },
        })

        if (deepLevelCheck(level)) {
            timeline.to(navBtnListBack, {
                ease: "quart.inOut",
                duration: 0.6,
                y: '0px',
                opacity: 1,
            }, '>-0.5')
        }

        timeline.to(showListLinks, {
            ease: 'quart.out',
            stagger: 0.08,
            duration: 0.9,
            y: '0%',
        }, '>-0.6')
    } else {
        // Fallback animation without GSAP
        showList.classList.add('-is-active');
        hideList.classList.remove('-is-active');

        if (deepLevelCheck(level)) {
            navBtnListBack.forEach(btn => {
                btn.style.transform = 'translateY(0px)';
                btn.style.opacity = 1;
            });
        } else {
            navBtnListBack.forEach(btn => {
                btn.style.opacity = 0;
            });
        }
    }
}