
const Newsletter = () => {
    return (
        <section className="container px-2 py-6 mx-auto md:py-12">
            <div className="relative px-3 overflow-hidden text-center bg-blue-600 py-14 rounded-2xl lg:px-0">
                <div className="relative z-10 max-w-xl mx-auto sm:text-center">
                    <div className="space-y-3">

                        <h3 className="text-3xl font-bold text-white">
                            Subscribe to our newsletter
                        </h3>
                        <p className="leading-relaxed text-blue-100">
                            Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.
                        </p>
                    </div>
                    <div className="mt-6">
                        <form
                            className="flex items-center justify-center p-1 bg-white rounded-lg sm:max-w-md sm:mx-auto">
                            <input type="email" placeholder="Enter your email" className="w-full p-2 text-gray-500 outline-none" />
                            
                            <button className="p-2 px-3 font-medium text-white duration-150 bg-blue-600 rounded-lg shadow-md outline-none hover:bg-blue-500 active:bg-blue-700 focus:shadow-none sm:px-4">
                                Subscribe
                            </button>
                        </form>
                        <p className="mt-3 max-w-lg text-[15px] text-blue-100 sm:mx-auto">
                            No spam ever, we are care about the protection of your data.
                            Read our <a className="underline"> Privacy Policy </a>
                        </p>
                    </div>
                </div>
                <div className="absolute inset-0 w-full h-full" style={{ background: "linear-gradient(268.24deg, rgba(59, 130, 246, 0.76) 50%, rgba(59, 130, 246, 0.545528) 80.61%, rgba(55, 48, 163, 0) 117.35%)" }}></div>
            </div>
        </section>
    );
};

export default Newsletter;