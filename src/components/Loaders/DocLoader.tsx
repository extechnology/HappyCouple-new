

export default function DocLoader() {

    return (

        <div className="mt-10 max-w-6xl mx-auto rounded-xl bg-gray-100 p-5 sm:p-10 shadow-sm flex flex-col md:flex-row items-center gap-8 animate-pulse">

            {/* Image Skeleton */}
            <div className="w-52 h-52 bg-gray-300 rounded-lg"></div>

            {/* Info Skeleton */}
            <div className="flex-1 w-full">
                <div className="h-6 bg-gray-300 rounded w-1/2 mb-3"></div>
                <div className="h-4 bg-gray-300 rounded w-1/3 mb-5"></div>

                <div className="h-8 bg-gray-300 rounded-full w-32 mb-5"></div>

                <div className="h-4 bg-gray-300 rounded w-full mb-3"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4 mb-3"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2 mb-3"></div>
            </div>

        </div>

    )

}
