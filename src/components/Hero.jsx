
const Hero = () => {



    return (
        
        <section className="w-full bg-gray-50 md:py-[50px] sm:py-10 pt-0 pb-10">
            <div className="container px-2 mx-auto">
                <div className="grid items-center grid-cols-1 lg:grid-cols-2 md:gap-x-[20px] ">
                    <div>
                        <div className="mt-[100px] md:mt-[100px] lg:mt-[0px] mx-auto mb-8 text-center w-full lg:mx-0 lg:text-left">
                            <h2 className="mb-5 text-[2.5rem] font-bold md:text-6xl lg:text-5xl xl:text-7xl">
                            Find
                            <span className="text-blue-600"> the best </span>
                            <span className="">solution together</span>

                            </h2>
                            <p className="leading-relaxed text-gray-400 px-[5%] sm:px-[10%] lg:px-0 text-sm md:text-md">
                            We not only provide consultation but also consider your thoughts to find the best solution to each of your business problems.
                            </p>
                        </div>
                        <div className="flex justify-center gap-3 text-center lg:justify-start lg:text-left">
                            
                            <a
                            className="px-8 py-3 mb-2 text-center  border-2 bg-[#1A56DB] transition delay-4000 border-[#1A56DB] text-white hover:bg-transparent hover:text-[#1A56DB] rounded-lg font-medium"
                            href="#"
                            >
                            Check Now
                            </a>
                            {/* <a
                            className="px-8 py-3 mb-2 text-center  border-2 bg-transparent border-[#1A56DB] font-medium hover:bg-[#1A56DB] hover:text-white rounded-lg"
                            href="#"
                            >
                            Learn More
                            </a> */}
                            
                        </div>
                    </div>

                    <div className="w-full">
                        {/* <Image width={500} height={500} className="w-full" src="/images/project.svg" alt="banner" /> */}

                        <iframe className="w-full md:h-[700px] h-[440px]" src="https://lottie.host/embed/3fa4ca6c-c852-47ec-a6d0-26974fa3e31e/YkuYfmBPRC.json"></iframe>

                    </div>
                </div>
            </div>
        </section>

    );
};

export default Hero;