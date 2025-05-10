

export default function CardSkelton({length}: {length: number}) {


    return (

        <section className="py-10 sm:py-16 px-2 md:px-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {Array.from({ length: length }).map((_, index) => (
                    <div
                        key={index}
                        className="relative rounded-xl overflow-hidden shadow-md animate-pulse"
                    >
                        <div className="w-full h-72 bg-gray-300" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#25434E]/80 to-transparent" />
                        <div className="absolute bottom-6 left-6 z-20 text-white space-y-3 w-[80%]">
                            <div className="h-4 bg-white/50 rounded w-3/4" />
                            <div className="h-8 bg-white/60 rounded w-24" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )


}
