'use client';
import React, { useEffect, useRef } from 'react'

export const TopToBottomButton = () => {
    const buttonRef = useRef(null)

    useEffect(() => {
        // Initialize back to top button functionality
        toTopButton()

        return () => {
            // Cleanup if needed
        }
    }, [])

    const toTopButton = () => {
        const button = buttonRef.current
        if (!button || typeof window === 'undefined') return

        // Get page content height
        const pageContentHeight = document.querySelector('main')?.offsetHeight || 0

        // Initialize ScrollMagic only on client side
        if (window.ScrollMagic && window.App?.SMcontroller) {
            new ScrollMagic.Scene({
                duration: Math.max(pageContentHeight - 1600, 0),
            })
                .setClassToggle(button, 'is-hidden')
                .addTo(window.App.SMcontroller)
        } else {
            // Fallback: Show/hide based on scroll position
            const handleScroll = () => {
                if (window.scrollY > 500) {
                    button.classList.remove('is-hidden')
                } else {
                    button.classList.add('is-hidden')
                }
            }

            window.addEventListener('scroll', handleScroll)
            // Initial check
            handleScroll()

            return () => {
                window.removeEventListener('scroll', handleScroll)
            }
        }

        // Add click event
        button.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            })
        })

        return () => {
            button.removeEventListener('click', () => { })
        }
    }

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    return (
        <button
            ref={buttonRef}
            className="toTopButton js-top-button"
            onClick={handleClick}
            aria-label="Scroll to top"
        >
            <svg
                width={22}
                height={22}
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g clipPath="url(#clip0_83_4004)">
                    <path d="M17.8783 0H4.12177C3.59388 0 3.16602 0.42786 3.16602 0.955755C3.16602 1.48365 3.59388 1.91151 4.12177 1.91151H17.8783C18.4062 1.91151 18.834 1.48365 18.834 0.955755C18.834 0.42786 18.4062 0 17.8783 0Z" />
                    <path d="M11.6759 4.67546C11.3026 4.30219 10.6975 4.30219 10.3242 4.67546L6.04107 8.95863C5.66779 9.3319 5.66779 9.937 6.04107 10.3103C6.41434 10.6837 7.01955 10.6836 7.39272 10.3103L10.0444 7.6587V21.0443C10.0444 21.5722 10.4723 22 11.0002 22C11.5281 22 11.9559 21.5722 11.9559 21.0443V7.65859L14.6076 10.3102C14.7942 10.4969 15.0389 10.5901 15.2834 10.5901C15.528 10.5901 15.7726 10.4968 15.9593 10.3102C16.3325 9.9369 16.3325 9.3318 15.9593 8.95852L11.6759 4.67546Z" />
                </g>
                <defs>
                    <clipPath id="clip0_83_4004">
                        <rect width={22} height={22} fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </button>
    )
}