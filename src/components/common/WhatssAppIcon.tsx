import { useState, useEffect } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";



const WhatsAppChat = () => {


    const [isVisible, setIsVisible] = useState(false);


    // Phone number for WhatsApp chat - replace with your actual number
    const phoneNumber = "+919072377100";
    const message = "Hai happycouplesolution";
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;



    useEffect(() => {
        // Add a small delay before showing the chat bubble for a nice entrance
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);


    
    return (
        <div
            className={cn(
                "fixed bottom-4 right-4 md:bottom-22 md:right-6 z-50 transition-all duration-700 ease-in-out",
                isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-16 opacity-0"
            )}
        >
            <TooltipProvider delayDuration={300}>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden hover:scale-110"
                            aria-label="Chat on WhatsApp"
                        >
                            {/* Animated ripple effect */}
                            <span className="absolute inset-0 w-full h-full bg-white/20 scale-0 rounded-full group-hover:scale-150 transition-all duration-700 opacity-0 group-hover:opacity-100"></span>

                            {/* Pulsing border */}
                            <span className="absolute inset-0 border-2 border-white/30 rounded-full animate-[pulse_2s_infinite] scale-100 group-hover:scale-110"></span>

                            {/* Animated gradient overlay */}
                            <span className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rotate-0 group-hover:rotate-180"></span>

                            {/* WhatsApp Original Icon SVG */}
                            <svg
                                viewBox="0 0 24 24"
                                className="text-white w-6 h-6 md:w-7 md:h-7 z-10 transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-110"
                                fill="currentColor"
                            >
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                        </a>
                    </TooltipTrigger>
                    <TooltipContent
                        side="left"
                        className="bg-white/90 backdrop-blur-sm border-none shadow-lg px-4 py-3 rounded-lg transition-all duration-300"
                        sideOffset={14}
                        
                    >
                        <div className="relative overflow-hidden">
                            {/* Animated underline */}
                            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#25D366] to-[#128C7E] group-hover:w-full transition-all duration-500"></div>

                            <p className="font-medium text-sm md:text-base relative">
                                <span className="bg-gradient-to-r from-[#25D366] to-[#128C7E] bg-clip-text text-transparent">
                                    Let's chat now
                                </span>
                                <span className="ml-1 inline-block animate-bounce">👋</span>
                            </p>
                        </div>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>

        </div>
    );
};

export default WhatsAppChat;