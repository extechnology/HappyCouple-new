import { LockKeyhole } from "lucide-react";


const SkeletonLine = ({ className = "" }: { className?: string }) => (
    <div className={`bg-gray-300/50 dark:bg-gray-700/50 animate-pulse rounded-md ${className}`} />
);



const BookingFormSkeleton: React.FC = () => {
    
    return (
        <div className="mt-10 space-y-12 sm:space-y-10 p-32">
            {/* Name */}
            <div>
                <SkeletonLine className="h-4 w-32 mb-2" />
                <SkeletonLine className="h-10 w-full" />
            </div>

            {/* Phone */}
            <div>
                <SkeletonLine className="h-4 w-56 mb-2" />
                <SkeletonLine className="h-10 w-full" />
            </div>

            {/* Email */}
            <div>
                <SkeletonLine className="h-4 w-32 mb-2" />
                <SkeletonLine className="h-10 w-full" />
            </div>

            {/* Date & Time */}
            <div>
                <SkeletonLine className="h-4 w-48 mb-2" />
                <div className="grid grid-cols-2 gap-4">
                    <SkeletonLine className="h-10 w-full" />
                    <SkeletonLine className="h-10 w-full" />
                </div>
            </div>

            {/* Health Concern */}
            <div>
                <SkeletonLine className="h-4 w-80 mb-2" />
                <SkeletonLine className="h-10 w-full" />
            </div>

            {/* Payment Section */}
            <div>
                <SkeletonLine className="h-4 w-64 mb-2" />
                <div className="w-full h-12 bg-[#145566]/80 rounded-md animate-pulse flex items-center justify-center text-white text-lg font-medium">
                    <LockKeyhole className="animate-pulse" />
                </div>
                <SkeletonLine className="h-3 w-3/4 mt-2" />
            </div>
        </div>
    );
};

export default BookingFormSkeleton;
