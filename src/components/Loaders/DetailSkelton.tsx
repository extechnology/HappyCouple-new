

const SkeletonBox = ({ className }: { className: string }) => (
    <div className={`bg-gray-200 animate-pulse rounded ${className}`} />
);



export const DetailSkelton = () => {


    return (

        <main className="bg-white">

            <div className="max-w-7xl mx-auto px-4 pt-5 sm:pt-16 pb-10">

                {/* Product Details */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-0">

                    
                    {/* Left - Image Skeleton */}
                    <div className="flex">
                        <SkeletonBox className="w-full max-w-lg h-72 sm:h-96" />
                    </div>

                    {/* Right - Details Skeleton */}
                    <div>
                        {/* Title */}
                        <SkeletonBox className="w-3/4 h-6 mb-4" />

                        {/* Rating & Price */}
                        <SkeletonBox className="w-1/4 h-5 mb-2" />
                        <SkeletonBox className="w-1/3 h-6 mb-4" />

                        {/* Description */}
                        <div className="space-y-3">
                            <SkeletonBox className="w-1/2 h-4" />
                            <SkeletonBox className="w-full h-4" />
                            <SkeletonBox className="w-5/6 h-4" />
                            <SkeletonBox className="w-full h-4" />
                            <SkeletonBox className="w-2/3 h-4" />
                        </div>

                        {/* Button */}
                        <SkeletonBox className="w-40 h-10 mt-6" />
                    </div>
                    
                </section>

                {/* Tabs Section */}
                <section className="mt-12">
                    <div className="flex flex-wrap gap-4 mb-8">
                        {Array(4).fill(null).map((_, i) => (
                            <SkeletonBox key={i} className="w-36 h-10" />
                        ))}
                    </div>

                    <div className="space-y-4 mt-10 sm:mt-10">
                        {Array(5).fill(null).map((_, i) => (
                            <SkeletonBox key={i} className="w-full h-4" />
                        ))}
                    </div>
                </section>

                
            </div>

        </main>
    );
};
