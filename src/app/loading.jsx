'use client'
import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';

const Loading = ({
    size = 'medium',
    color = '#d97706',
    text = 'Loading...',
    fullPage = true,
    showDots = true,
    opacity = 0.95,
    showProgressBar = false,
    variant = 'spinner',
    className = '',
    textClassName = '',
    showPercentage = false,
    progress = 0,
    speed = 'normal'
}) => {
    const [windowWidth, setWindowWidth] = useState(0);
    const [percentage, setPercentage] = useState(0);

    // Handle responsive window width
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setWindowWidth(window.innerWidth);

            const handleResize = () => {
                setWindowWidth(window.innerWidth);
            };

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    // Animate percentage if showPercentage is enabled
    useEffect(() => {
        if (!showPercentage) return;

        const interval = setInterval(() => {
            setPercentage(prev => prev >= 100 ? 0 : prev + 1);
        }, 50);

        return () => clearInterval(interval);
    }, [showPercentage]);

    // Size configurations with better type safety
    const sizeConfig = useMemo(() => ({
        small: { container: 40, inner: 20, center: 6 },
        medium: { container: 60, inner: 30, center: 9 },
        large: { container: 80, inner: 40, center: 12 }
    }), []);

    // Speed configurations
    const speedConfig = useMemo(() => ({
        slow: { spin: '1.5s', pulse: '2s', progress: '3s' },
        normal: { spin: '1s', pulse: '1.5s', progress: '2s' },
        fast: { spin: '0.6s', pulse: '1s', progress: '1s' }
    }), []);

    // Determine responsive size
    const getResponsiveSize = useMemo(() => {
        if (windowWidth === 0) return size;
        if (windowWidth < 640) return 'small';
        if (windowWidth < 1024) return 'medium';
        return size;
    }, [windowWidth, size]);

    const responsiveSize = getResponsiveSize;
    const currentSize = sizeConfig[responsiveSize];
    const currentSpeed = speedConfig[speed];

    // Parse color for opacity variants
    const parseColorWithOpacity = (baseColor, alpha = 1) => {
        if (baseColor.startsWith('#')) {
            const r = parseInt(baseColor.slice(1, 3), 16);
            const g = parseInt(baseColor.slice(3, 5), 16);
            const b = parseInt(baseColor.slice(5, 7), 16);
            return `rgba(${r}, ${g}, ${b}, ${alpha})`;
        }
        return baseColor;
    };

    const primaryColor = parseColorWithOpacity(color, 1);
    const lightColor = parseColorWithOpacity(color, 0.2);
    const lighterColor = parseColorWithOpacity(color, 0.1);
    const veryLightColor = parseColorWithOpacity(color, 0.05);

    // Spinner variant renderer
    const renderSpinner = () => (
        <div className="relative" data-testid="spinner-container">
            {/* Outer ring with gradient */}
            <div
                className="rounded-full animate-spin"
                style={{
                    width: `${currentSize.container}px`,
                    height: `${currentSize.container}px`,
                    background: `conic-gradient(transparent, ${primaryColor}, transparent)`,
                    animationDuration: currentSpeed.spin
                }}
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-label="Loading spinner"
            />

            {/* Inner mask */}
            <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
                style={{
                    width: `${currentSize.container * 0.7}px`,
                    height: `${currentSize.container * 0.7}px`
                }}
            />

            {/* Center dot with pulse animation */}
            <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{
                    width: `${currentSize.center}px`,
                    height: `${currentSize.center}px`,
                    backgroundColor: primaryColor,
                    animation: `pulse ${currentSpeed.pulse} ease-in-out infinite`
                }}
            />
        </div>
    );

    // Dots variant renderer
    const renderDots = () => (
        <div className="flex items-center justify-center space-x-3" data-testid="dots-container">
            {[...Array(3)].map((_, i) => (
                <div
                    key={i}
                    className="rounded-full animate-bounce"
                    style={{
                        width: `${currentSize.center}px`,
                        height: `${currentSize.center}px`,
                        backgroundColor: primaryColor,
                        animationDelay: `${i * 0.15}s`,
                        animationDuration: currentSpeed.pulse
                    }}
                />
            ))}
        </div>
    );

    return (
        <div
            className={`
                ${fullPage ? 'fixed' : 'absolute'} 
                inset-0 z-[9999] 
                flex flex-col items-center justify-center 
                transition-all duration-300 ease-in-out
                ${className}
            `}
            style={{
                backgroundColor: `rgba(255, 255, 255, ${opacity})`,
                backdropFilter: 'blur(8px)'
            }}
            role="status"
            aria-live="polite"
            aria-busy="true"
        >
            <div className="flex flex-col items-center justify-center w-full max-w-md px-4 space-y-6">
                {/* Main loader based on variant */}
                <div className="flex items-center justify-center">
                    {variant === 'spinner' ? renderSpinner() : renderDots()}
                </div>

                {/* Text content */}
                <div className="text-center space-y-2">
                    <p
                        className={`
                            font-medium transition-all duration-300
                            ${textClassName || 'text-gray-800'}
                        `}
                        style={{
                            fontSize: responsiveSize === 'small' ? '1rem' :
                                responsiveSize === 'medium' ? '1.125rem' : '1.25rem',
                            color: primaryColor
                        }}
                    >
                        {text}
                    </p>

                    {/* Optional percentage display */}
                    {showPercentage && (
                        <div className="flex items-center justify-center space-x-2">
                            <span
                                className="text-sm font-semibold text-gray-600"
                                data-testid="percentage-display"
                            >
                                {progress > 0 ? progress : percentage}%
                            </span>
                            <span className="text-xs text-gray-400">complete</span>
                        </div>
                    )}

                    {/* Subtle help text */}
                    <p className="text-xs text-gray-400 mt-1">
                        This will only take a moment...
                    </p>
                </div>

                {/* Optional progress bar */}
                {showProgressBar && (
                    <div className="w-full max-w-xs" data-testid="progress-bar">
                        <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                            <div
                                className="h-full rounded-full transition-all duration-300 ease-out"
                                style={{
                                    width: `${progress || 60}%`,
                                    background: `linear-gradient(90deg, ${lightColor}, ${primaryColor})`,
                                    animation: `progress ${currentSpeed.progress} ease-in-out infinite`
                                }}
                            />
                        </div>
                    </div>
                )}

                {/* Optional animated dots below */}
                {showDots && variant !== 'dots' && (
                    <div className="flex space-x-1">
                        {[...Array(3)].map((_, i) => (
                            <div
                                key={i}
                                className="rounded-full animate-pulse"
                                style={{
                                    width: '6px',
                                    height: '6px',
                                    backgroundColor: lightColor,
                                    animationDelay: `${i * 0.2}s`,
                                    animationDuration: currentSpeed.pulse
                                }}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* Inline styles for animations */}
            <style jsx>{`
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                
                @keyframes pulse {
                    0%, 100% { 
                        opacity: 1;
                        transform: scale(1);
                    }
                    50% { 
                        opacity: 0.5;
                        transform: scale(0.8);
                    }
                }
                
                @keyframes bounce {
                    0%, 100% { 
                        transform: translateY(0);
                    }
                    50% { 
                        transform: translateY(-8px);
                    }
                }
                
                @keyframes progress {
                    0% { 
                        transform: translateX(-100%);
                    }
                    100% { 
                        transform: translateX(200%);
                    }
                }
                
                .animate-spin {
                    animation: spin linear infinite;
                }
                
                .animate-pulse {
                    animation: pulse ease-in-out infinite;
                }
                
                .animate-bounce {
                    animation: bounce ease-in-out infinite;
                }
                
                /* Reduce motion preferences */
                @media (prefers-reduced-motion: reduce) {
                    .animate-spin,
                    .animate-pulse,
                    .animate-bounce {
                        animation: none;
                    }
                }
                
                /* Dark mode support */
                @media (prefers-color-scheme: dark) {
                    div {
                        background-color: rgba(15, 23, 42, ${opacity}) !important;
                    }
                    .text-gray-800 {
                        color: #f1f5f9 !important;
                    }
                    .text-gray-400 {
                        color: #94a3b8 !important;
                    }
                    .bg-white {
                        background-color: #1e293b !important;
                    }
                }
            `}</style>
        </div>
    );
};
Loading.propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    color: PropTypes.string,
    text: PropTypes.string,
    fullPage: PropTypes.bool,
    showDots: PropTypes.bool,
    opacity: PropTypes.number,
    showProgressBar: PropTypes.bool,
    variant: PropTypes.oneOf(['spinner', 'dots']),
    className: PropTypes.string,
    textClassName: PropTypes.string,
    showPercentage: PropTypes.bool,
    progress: PropTypes.number,
    speed: PropTypes.oneOf(['slow', 'normal', 'fast'])
};
Loading.defaultProps = {
    size: 'medium',
    color: '#d97706',
    text: 'Loading...',
    fullPage: true,
    showDots: true,
    opacity: 0.95,
    showProgressBar: false,
    variant: 'spinner',
    className: '',
    textClassName: '',
    showPercentage: false,
    progress: 0,
    speed: 'normal'
};

export default Loading;