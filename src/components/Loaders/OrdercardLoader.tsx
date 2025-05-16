

export default function OrdercardLoader() {


    return (

        <>
            {[...Array(3)].map((_, index) => (
                <div
                    key={index}
                    className="flex flex-col md:flex-row gap-4 items-center p-4 shadow-md animate-pulse border rounded-md mb-4"
                >
                    <div className="w-32 h-24 bg-gray-200 rounded-md" />

                    <div className="flex-1 w-full md:w-auto">
                        <div className="flex items-center gap-4 mb-2 text-sm">
                            <div className="h-5 w-20 bg-gray-200 rounded-full" />
                            <div className="h-4 w-24 bg-gray-200 rounded" />
                        </div>

                        <div className="h-5 w-3/4 bg-gray-200 rounded mb-2" />
                        <div className="h-6 w-1/2 bg-gray-200 rounded mb-4" />

                        <div className="h-8 w-28 bg-gray-200 rounded-md" />
                    </div>
                </div>
            ))}
        </>

    )

}
