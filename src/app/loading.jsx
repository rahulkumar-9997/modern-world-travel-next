'use client'
import React from 'react';

const Loading = ({
    size = 'medium',
    color = '#d97706',
    text = 'Loading...',
    fullPage = true,
    showDots = true,
    opacity = 0.95
}) => {
    const sizeMap = {
        small: '40px',
        medium: '60px',
        large: '80px'
    };

    // Calculate responsive sizes
    const getResponsiveSize = () => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth < 640) return 'small';
            if (window.innerWidth < 1024) return 'medium';
        }
        return size;
    };

    const responsiveSize = getResponsiveSize();

    return (
        <div
            className={`${fullPage ? 'fixed' : 'absolute'} inset-0 z-[9999] flex flex-col items-center justify-center bg-white`}
            style={{
                backgroundColor: `rgba(255, 255, 255, ${opacity})`,
                backdropFilter: 'blur(4px)'
            }}
        >
            {/* Main spinner container */}
            <div className="flex flex-col items-center justify-center w-full max-w-md px-4">

                {/* Spinner with responsive design */}
                <div className="relative">
                    {/* Outer spinner */}
                    <div
                        className="rounded-full border-4 border-solid animate-spin"
                        style={{
                            width: sizeMap[responsiveSize],
                            height: sizeMap[responsiveSize],
                            borderColor: `${color}20`,
                            borderTopColor: color,
                            borderRightColor: color,
                            animation: 'spin 1s linear infinite'
                        }}
                        role="status"
                        aria-label="Loading"
                    >
                        <span className="sr-only">Loading...</span>
                    </div>

                    {/* Inner ring */}
                    <div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
                        style={{
                            width: `calc(${sizeMap[responsiveSize]} * 0.5)`,
                            height: `calc(${sizeMap[responsiveSize]} * 0.5)`,
                            backgroundColor: `${color}10`,
                            border: `2px solid ${color}30`
                        }}
                    />

                    {/* Center dot */}
                    <div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
                        style={{
                            width: `calc(${sizeMap[responsiveSize]} * 0.15)`,
                            height: `calc(${sizeMap[responsiveSize]} * 0.15)`,
                            backgroundColor: color,
                            animation: 'pulse 1.5s ease-in-out infinite'
                        }}
                    />
                </div>

                {/* Loading text with responsive sizing */}
                <div className="mt-6 text-center">
                    <p
                        className="font-semibold mb-2"
                        style={{
                            color,
                            fontSize: responsiveSize === 'small' ? '1rem' : '1.25rem'
                        }}
                    >
                        {text}
                    </p>

                    {/* Optional subtitle */}
                    <p className="text-gray-500 text-sm">
                        Please wait while we load the content
                    </p>
                </div>

                {/* Animated dots - responsive visibility */}
                {showDots && (
                    <div className="flex space-x-2 mt-6">
                        {[...Array(3)].map((_, i) => (
                            <div
                                key={i}
                                className="rounded-full bg-gradient-to-r from-amber-400 to-amber-600 animate-pulse"
                                style={{
                                    width: responsiveSize === 'small' ? '10px' : '12px',
                                    height: responsiveSize === 'small' ? '10px' : '12px',
                                    animationDelay: `${i * 0.2}s`,
                                    animationDuration: '1.5s'
                                }}
                            />
                        ))}
                    </div>
                )}

                {/* Progress bar (optional) */}
                <div className="w-full max-w-xs mt-6 bg-gray-200 rounded-full h-1.5 overflow-hidden">
                    <div
                        className="h-full rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 animate-progress"
                        style={{
                            width: '60%',
                            animation: 'progress 2s ease-in-out infinite'
                        }}
                    />
                </div>
            </div>

            {/* Inline CSS for animations */}
            <style jsx>{`
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                
                @keyframes pulse {
                    0%, 100% { 
                        opacity: 1;
                        transform: translate(-50%, -50%) scale(1);
                    }
                    50% { 
                        opacity: 0.7;
                        transform: translate(-50%, -50%) scale(0.9);
                    }
                }
                
                @keyframes progress {
                    0% { 
                        transform: translateX(-100%);
                        opacity: 0.5;
                    }
                    50% { 
                        opacity: 1;
                    }
                    100% { 
                        transform: translateX(200%);
                        opacity: 0.5;
                    }
                }
                
                .animate-spin {
                    animation: spin 1s linear infinite;
                }
                
                .animate-pulse {
                    animation: pulse 1.5s ease-in-out infinite;
                }
                
                .animate-progress {
                    animation: progress 2s ease-in-out infinite;
                }
                
                /* Mobile responsiveness */
                @media (max-width: 640px) {
                    .max-w-md {
                        max-width: 90%;
                    }
                    .text-lg {
                        font-size: 1rem;
                    }
                }
                
                @media (max-width: 768px) {
                    .flex-col {
                        gap: 1rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default Loading;