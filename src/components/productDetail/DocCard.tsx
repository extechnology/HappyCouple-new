


//TypeScript interface for DocCardProps
interface DocCardProps {

    image: string;
    name: string;
    specialization: string;
    qualification: string;
    experience: string;
    language: string;
    online : boolean

}


export default function DocCard({ image, name, specialization, qualification, experience, language , online }: DocCardProps) {


    return (


        <div className="mt-10 max-w-6xl mx-auto rounded-xl bg-gray-100 p-5 sm:p-10 shadow-sm flex flex-col md:flex-row items-center gap-8">


            {/* Doctor Image */}
            <img
                src={image} 
                alt={name}
                loading="lazy"
                className="w-52 h-auto rounded-lg object-cover"
            />


            {/* Doctor Info */}
            <div className="flex-1 text-left">


                {/* Doc Name */}
                <h3 className="text-xl font-semibold text-gray-900">{name}</h3>


                {/* Specialization */}
                <p className="text-[#25758A] mt-1 font-medium">
                    {specialization}
                </p>
                


                {/* Availability  */}
                <div className="mt-3">
                    <span className={`inline-block bg-transparent border ${online ? "border-[#16C272] text-[#078622]" : "border-red-500 text-red-500"}  text-sm px-10 py-1 rounded-full font-semibold`}>
                         {online ? "Online" : "Offline"}
                    </span>
                </div>



                {/* Qualifications */}
                <p className="text-sm text-gray-500 mt-3 leading-relaxed">
                    {qualification}
                </p>


                {/* Experience */}
                <p className="text-sm text-gray-900 mt-2 font-semibold">
                    Experience: {experience}
                </p>


                {/* Languages */}
                <p className="text-sm text-gray-900 mt-1">
                    {language}
                </p>


            </div>


        </div>

    )



}
