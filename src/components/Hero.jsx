
const Hero = () => {



    return (
        
        <section className="w-full bg-gray-50 md:py-[50px] py-10">
            <div className="container px-2 mx-auto">
                <div className="grid items-center grid-cols-1 lg:grid-cols-2 md:gap-x-[100px]">
                    <div>
                        <div className="mt-[100px] md:mt-[100px] lg:mt-[0px] mx-auto mb-8 text-center w-full lg:mx-0 lg:text-left">
                            <h2 className="mb-5 text-3xl font-bold md:text-6xl">
                            <span>The quick</span>
                            <span className="text-blue-600"> brown fox</span>
                            <span> jumps over the <br></br> lazy dog.</span>
                            </h2>
                            <p className="leading-relaxed text-gray-400 ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                            luctus eget justo et iaculis. Quisque vitae nulla malesuada,
                            auctor arcu vitae, luctus nisi.
                            </p>
                        </div>
                        <div className="text-center lg:text-left">
                            <a
                            className="block px-10 py-5 mb-4 text-xs font-bold leading-none text-center text-white bg-blue-600 rounded-md sm:inline-block sm:mb-0 sm:mr-3 hover:bg-blue-700"
                            href="#"
                            >
                            Check Now
                            </a>
                            <a
                            className="block px-10 py-5 text-xs font-bold leading-none text-center text-gray-500 bg-white border border-gray-200 rounded-md sm:inline-block hover:text-gray-600 hover:border-gray-300"
                            href="#"
                            >
                            Documentation
                            </a>
                        </div>
                    </div>

                    <div className="w-full">
                        {/* <Image width={500} height={500} className="w-full" src="/images/project.svg" alt="banner" /> */}

                        <iframe className="w-full h-[600px]" src="https://lottie.host/embed/3fa4ca6c-c852-47ec-a6d0-26974fa3e31e/YkuYfmBPRC.json"></iframe>

                    </div>
                </div>
            </div>
        </section>

    );
};

export default Hero;