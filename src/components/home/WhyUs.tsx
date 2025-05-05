


export default function WhyUs() {


    const features = [
        {
            icon: "/svgs/Medal-icon.svg",
            title: 'Evidence-Based Protocol',
            desc: 'EAU-Aligned treatment protocols ensuring highest medical standards',
            dark: true,
        },
        {
            icon: "/svgs/Bot-icon.svg",
            title: 'AI-Powered Assessment',
            desc: 'Private self-assessment powered by advanced AI technology',
            dark: false,
        },
        {
            icon: "/svgs/Contact-icon.svg",
            title: 'Personalised Treatment',
            desc: 'Doctor consultation just at 469, fully refundable',
            dark: true,
        },
        {
            icon: "/svgs/people-icon.svg",
            title: 'Real Experts, Real Solutions',
            desc: 'Customized recommendations tailored to your specific needs',
            dark: false,
        },
        {
            icon: "/svgs/Lock-icon.svg",
            title: '100% Confidential',
            desc: 'Carefully designed products backed by science',
            dark: true,
        },
        {
            icon: "/svgs/Hygine-icon.svg",
            title: 'Scientific Products',
            desc: 'Get expert guidance from certified professionals',
            dark: false,
        },
    ];




    return (


        <>

            <section className="py-10 sm:py-16 px-2 md:px-12">

                <div className="max-w-7xl mx-auto text-center">


                    {/* Head */}
                    <div className="relative">


                        <img
                            src="/svgs/Star-icon.svg"
                            alt="svg-logo"
                            loading="lazy"
                            className="absolute h-10 w-10 sm:h-16 sm:w-16 top-0 right-0 pointer-events-none"
                        />


                        <h2 className="text-3xl md:text-4xl font-bold mb-8 relative">
                            WHY CHOOSE <span className="text-[#145566]">US</span>

                            <img
                                src="/svgs/hero-text-underline.svg"
                                alt="svg-logo"
                                loading="lazy"
                                className="absolute -bottom-3 left-1/3 sm:left-1/2 pointer-events-none"
                            />
                        </h2>

                        <p className="text-sm md:text-base mb-10">
                            See what we have achieved throughout our journey helping our clients.
                        </p>


                    </div>



                    {/* Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {features.map((feature, idx) => (
                            <div
                                key={idx}
                                className={`w-full rounded-xl p-6 h-full shadow-md transition-all duration-300 ${feature.dark
                                    ? 'bg-[#145566] text-white'
                                    : 'border border-[#145566] bg-transparent'
                                    }`}
                            >
                                <div className="mb-4"><img src={feature.icon} loading="lazy" className="" alt="" /></div>
                                <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                                <p className="text-sm leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>


                </div>


            </section>

        </>



    )


}
