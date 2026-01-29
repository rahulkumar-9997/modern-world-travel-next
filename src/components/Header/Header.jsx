'use client';
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
export function Header({ menuList }) {
    useEffect(() => {
        headerSticky()
        menuEvents()
        menuListBindEvents()
    }, [])
    const isLoading = !menuList || menuList.length === 0;
    return (
        <>
            <header className="header -type-3 -page-5 js-header">
                <div className="header__container container">                    
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
                                                <>
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
                                                                                            <Link
                                                                                                href={`${section.title === "Favourite Cities" ? "/city" : menu.title === "Packages" ? "/tour-package" : "/tours-location"}/${item.url}`}
                                                                                                className='dropdown-link-a'>
                                                                                                {item.name}
                                                                                                {
                                                                                                    item.duration && (
                                                                                                        <>
                                                                                                        <br /><span className="span-text-s">
                                                                                                            {item.duration}
                                                                                                        </span>
                                                                                                        </>
                                                                                                    )
                                                                                                }
                                                                                            </Link>
                                                                                            
                                                                                        </div>
                                                                                    ))}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
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
                    <div className="headerMobile__left">
                        <button className="header__menuBtn js-menu-button">
                            <i className="icon-main-menu" />
                        </button>
                    </div>                    
                </div>
            </header>

            <div className="menu js-menu">
                <div className="menu__overlay js-menu-button"></div>
                <div className="menu__container">
                    <div className="menu__header">
                        <h4>Menu</h4>
                        <button className="js-menu-button"><i className="icon-cross text-10"></i></button>
                    </div>

                    <div className="menu__content">
                        <ul className="menuNav js-navList">
                            <li className="menuNav__item">
                                <Link href="/">Home</Link>
                            </li>
                            <li className="menuNav__item">
                                <Link href="/about-us">About Us</Link>
                            </li>
                            {!isLoading && menuList && menuList.map((menu, menuIndex) => (
                                <li className={`menuNav__item ${menu.sections && menu.sections.length > 0 ? '-has-submenu js-has-submenu' : ''}`} key={menuIndex}>
                                    {menu.sections && menu.sections.length > 0 && (
                                        <>
                                            <a>
                                                {menu.title}
                                                <i className="icon-chevron-right"></i>
                                            </a>

                                            <ul className="submenu">
                                                <li className="submenu__item js-nav-list-back">
                                                    <a>Back</a>
                                                </li>
                                                {menu.sections.map((section, sectionIndex) => (
                                                    <React.Fragment key={sectionIndex}>
                                                    <li className="submenu__item menu-head-se">
                                                        <a className="submenu__item-title menu-head-t">{section.title}</a>
                                                    </li>
                                                    {section.items && section.items.map((item, itemIndex) => (
                                                        <li className="submenu__item" key={`${sectionIndex}-${itemIndex}`}>
                                                        <Link href=
                                                        {`${section.title === "Favourite Cities" ? "/city" : menu.title === "Packages" ? "/tour-package" : "/tours-location"}/${item.url}`}
                                                        >
                                                            {item.name}
                                                            {/* {item.duration && (
                                                            <>
                                                                <br />
                                                                <span className="span-text-s">{item.duration}</span>
                                                            </>
                                                            )} */}
                                                        </Link>
                                                        </li>
                                                    ))}
                                                    </React.Fragment>
                                                ))}
                                                </ul>

                                        </>
                                    )}
                                </li>
                            ))}
                            <li className="menuNav__item">
                                <Link href="/blog">Blog</Link>
                            </li>                            
                            <li className="menuNav__item">
                                <Link href="/contact-us">Contact Us</Link>
                            </li>                            
                        </ul>
                    </div>


                    <div className="menu__footer">
                        <i className="icon-headphone text-50 text-[white]"></i>
                        <div className="text-20 lh-12 fw-500 mt-15">
                            <div className='text-[white]'>Speak to our expert at</div>
                            <div className="mt-6 text-[white]">1-800-453-6744</div>
                        </div>

                        <div className="d-flex items-center x-gap-10 pt-30">

                            <div>
                                <a className="d-block" href="" target="_blank">
                                    <i className="icon-facebook text-[white]"></i>
                                </a>
                            </div>

                            <div>
                                <a className="d-block" href="" target="_blank">
                                    <i className="icon-twitter text-[white]"></i>
                                </a>
                            </div>

                            <div>
                                <a className="d-block" href="" target="_blank">
                                    <i className="icon-instagram text-[white]"></i>
                                </a>
                            </div>

                            <div>
                                <a className="d-block" href="" target="_blank">
                                    <i className="icon-linkedin text-[white]"></i>
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
        menu.classList.remove("-is-active")
        document.body.classList.remove("overflow-hidden")
        header.classList.remove("-dark")
        menu.style.opacity = 0
    }
}
function menuListBindEvents() {
    const listItems = document.querySelectorAll('.js-navList .js-has-submenu');
    const navList = document.querySelector('.js-navList');
    const navBtnListBack = document.querySelectorAll('.js-nav-list-back');
    if (!listItems.length) return;
    if (window.gsap) {
        timeline = window.gsap.timeline();
    } else {
        timeline = {
            clear: () => { },
            to: (targets, config) => {
                if (config.onStart) config.onStart();
                if (config.onComplete) setTimeout(config.onComplete, config.duration * 1000 || 0);
            }
        };
    }
    navBtnListBack.forEach(el => {
        el.addEventListener('click', () => {
            const visibleList = navList.querySelector('ul.-is-active');
            if (!visibleList) return;

            const parentList = visibleList.parentElement.parentElement;

            menuDeepLevel--;
            menuListStepAnimate(visibleList, parentList, menuDeepLevel, navBtnListBack);
        })
    })
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