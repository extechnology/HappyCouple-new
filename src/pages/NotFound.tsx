import { useState, useEffect } from 'react';
import { WifiOff, Home, ArrowLeft, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

// Define TypeScript interface for floating objects
interface FloatingObject {
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
    delay: number;
}

export default function NotFoundPage() {
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [floatingObjects, setFloatingObjects] = useState<FloatingObject[]>([]);
    const [glitchActive, setGlitchActive] = useState<boolean>(false);

    useEffect(() => {
        // Create animation after component mounts
        setIsLoaded(true);

        // Generate random floating objects
        const objects: FloatingObject[] = [];
        for (let i = 0; i < 15; i++) {
            objects.push({
                id: i,
                x: Math.floor(Math.random() * 90),
                y: Math.floor(Math.random() * 70),
                size: Math.floor(Math.random() * 30) + 10,
                duration: Math.floor(Math.random() * 10) + 10,
                delay: Math.floor(Math.random() * 5)
            });
        }
        setFloatingObjects(objects);

        // Set up periodic glitch effect
        const glitchInterval = setInterval(() => {
            setGlitchActive(true);
            setTimeout(() => setGlitchActive(false), 200);
        }, 3000);

        return () => clearInterval(glitchInterval);
    }, []);

    // SVG shapes for floating background elements
    const renderFloatingShape = (obj: FloatingObject) => {
        const shapeType = obj.id % 3;

        if (shapeType === 0) {
            return (
                <circle
                    cx="50%"
                    cy="50%"
                    r="40%"
                    fill="none"
                    stroke="#25434E"
                    strokeWidth="2"
                    strokeOpacity="0.1"
                />
            );
        } else if (shapeType === 1) {
            return (
                <rect
                    x="10%"
                    y="10%"
                    width="80%"
                    height="80%"
                    fill="none"
                    stroke="#25434E"
                    strokeWidth="2"
                    strokeOpacity="0.1"
                />
            );
        } else {
            return (
                <polygon
                    points="50,10 90,90 10,90"
                    fill="none"
                    stroke="#25434E"
                    strokeWidth="2"
                    strokeOpacity="0.1"
                />
            );
        }
    };

    return (
        <div className="relative w-full min-h-screen bg-white overflow-hidden flex flex-col items-center justify-center p-4">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50 z-0"></div>

            {/* Animated grid background */}
            <div className="absolute inset-0 z-0 opacity-10"
                style={{
                    backgroundSize: '20px 20px',
                    backgroundImage: 'linear-gradient(to right, rgba(37, 67, 78, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(37, 67, 78, 0.1) 1px, transparent 1px)',
                    animation: 'gridMove 15s linear infinite'
                }}>
            </div>

            {/* Floating background elements */}
            {floatingObjects.map((obj) => (
                <div
                    key={obj.id}
                    className="absolute opacity-20"
                    style={{
                        left: `${obj.x}%`,
                        top: `${obj.y}%`,
                        width: `${obj.size}px`,
                        height: `${obj.size}px`,
                    }}
                >
                    <svg width="100%" height="100%" viewBox="0 0 100 100"
                        style={{
                            animation: `float ${obj.duration}s ease-in-out infinite`,
                            animationDelay: `${obj.delay}s`
                        }}
                    >
                        {renderFloatingShape(obj)}
                    </svg>
                </div>
            ))}

            {/* Main content */}
            <div className="relative z-10 text-center"
                style={{
                    opacity: isLoaded ? 1 : 0,
                    transform: isLoaded ? 'translateY(0)' : 'translateY(2rem)',
                    transition: 'opacity 1s, transform 1s'
                }}
            >
                <div className="mb-4 sm:mb-8 relative">
                    <div className="text-6xl sm:text-8xl md:text-9xl font-extrabold inline-block relative text-[#25434E]"
                        style={{
                            transform: glitchActive ? 'translate(-2px, 2px)' : 'translate(0, 0)',
                            transition: 'transform 0.1s ease'
                        }}
                    >
                        <span className="relative z-10 inline-block"
                            style={{
                                transform: glitchActive ? 'translate(1px, -1px)' : 'translate(0, 0)',
                                transition: 'transform 0.1s ease'
                            }}
                        >4</span>

                        <div className="absolute top-1/2 left-1/2 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 z-0"
                            style={{
                                transform: 'translate(-50%, -50%)'
                            }}
                        >
                            <svg viewBox="0 0 100 100"
                                style={{
                                    animation: isLoaded ? 'spin 20s linear infinite' : 'none'
                                }}
                            >
                                <circle cx="50" cy="50" r="40" fill="none" stroke="#25434E" strokeWidth="3" strokeDasharray="6 3" />
                            </svg>
                        </div>

                        <span className="relative z-10 inline-block"
                            style={{
                                transform: glitchActive ? 'translate(-1px, 1px)' : 'translate(0, 0)',
                                transition: 'transform 0.1s ease'
                            }}
                        >0</span>

                        <div className="absolute top-1/3 left-2/3 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 z-0"
                            style={{
                                transform: 'translateY(-50%)'
                            }}
                        >
                            <WifiOff
                                className="text-[#25434E] opacity-50 w-full h-full"
                                style={{
                                    animation: isLoaded ? 'pulse 2s ease-in-out infinite' : 'none'
                                }}
                            />
                        </div>

                        <span className="relative z-10 inline-block"
                            style={{
                                transform: glitchActive ? 'translate(1px, -1px)' : 'translate(0, 0)',
                                transition: 'transform 0.1s ease'
                            }}
                        >4</span>
                    </div>
                </div>

                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#25434E] mb-2 sm:mb-4 tracking-wide">
                    <span className="inline-block"
                        style={{
                            opacity: isLoaded ? 1 : 0,
                            transform: isLoaded ? 'translateY(0)' : 'translateY(1rem)',
                            transition: 'opacity 0.7s, transform 0.7s',
                            transitionDelay: '200ms'
                        }}
                    >
                        Page Not Found
                    </span>
                </h2>

                <p className="text-sm sm:text-base md:text-lg max-w-xs sm:max-w-sm md:max-w-md mx-auto mb-6 sm:mb-8 text-[#25434E]"
                    style={{
                        opacity: isLoaded ? 1 : 0,
                        transform: isLoaded ? 'translateY(0)' : 'translateY(1rem)',
                        transition: 'opacity 0.7s, transform 0.7s',
                        transitionDelay: '300ms'
                    }}
                >
                    The page you are looking for might have been removed,
                    had its name changed, or is temporarily unavailable.
                </p>

                <div
                    style={{
                        opacity: isLoaded ? 1 : 0,
                        transform: isLoaded ? 'translateY(0)' : 'translateY(1rem)',
                        transition: 'opacity 0.7s, transform 0.7s',
                        transitionDelay: '500ms'
                    }}
                >


                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">

                        <Link to={'/'}>
                            <button
                                className="flex hover:cursor-pointer items-center justify-center w-full sm:w-auto px-6 py-3 bg-[#25434E] text-white rounded-lg shadow-lg hover:bg-opacity-90 transition-all"
                            >
                                <Home className="mr-2 w-5 h-5" />
                                <span>Go Home</span>
                            </button>
                        </Link>


                        <Link to={'/'}>
                            <button
                                className="flex hover:cursor-pointer hover:text-white items-center justify-center w-full sm:w-auto px-6 py-3 border-2 border-[#25434E] text-[#25434E] rounded-lg hover:bg-[#25434E] hover:bg-opacity-10 transition-all"
                            >
                                <ArrowLeft className="mr-2 w-5 h-5" />
                                <span>Go Back</span>
                            </button>
                        </Link>

                    </div>


                </div>
            </div>

            {/* Status indicator */}
            <div
                className="fixed bottom-4 right-4 flex items-center text-sm text-[#25434E] bg-white bg-opacity-70 px-3 py-2 rounded-full shadow-md"
                style={{
                    backdropFilter: 'blur(4px)',
                    opacity: isLoaded ? 0.7 : 0,
                    transform: isLoaded ? 'translateY(0)' : 'translateY(2rem)',
                    transition: 'opacity 0.7s, transform 0.7s'
                }}
            >
                <AlertCircle className="mr-2 w-4 h-4 text-red-500"
                    style={{
                        animation: 'pulse 2s infinite'
                    }}
                />
                <span>Status: 404 Not Found</span>
            </div>

            {/* Custom animations */}
            <style>{`
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0) rotate(0deg);
                    }
                    50% {
                        transform: translateY(-20px) rotate(10deg);
                    }
                }
                @keyframes spin {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }
                @keyframes pulse {
                    0%, 100% {
                        opacity: 0.5;
                    }
                    50% {
                        opacity: 1;
                    }
                }
                @keyframes gridMove {
                    0% {
                        background-position: 0 0;
                    }
                    100% {
                        background-position: 20px 20px;
                    }
                }
            `}</style>
        </div>
    );
}