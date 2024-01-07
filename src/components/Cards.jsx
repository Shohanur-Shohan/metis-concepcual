import Image from "next/image";

const Cards = () => {
    return (
        // <!-- Card Section -->
        <div className="py-10 lg:py-14 w-full bg-[#F9FAFB]">
            <div className="container px-2 mx-auto">
                {/* content */}          
                <div className="grid items-center gap-3 sm:grid-cols-2 lg:grid-cols-2 sm:gap-4 lg:justify-between">
                    <div className="py-[50px]">
                        <h1 className="mb-4 text-3xl font-bold md:text-4xl">Make your <span className="text-[#2563EB] mb-4 text-3xl font-bold md:text-4xl">life easier </span>for marketing sales & customer support</h1>
                    </div>
                    <div>
                        <p className="mb-[50px] lg:mb-[0px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam natus excepturi quas hic similique voluptatem quasi recusandae asperiores, tempore molestiae dolor laboriosam soluta esse magnam culpa ut odio omnis perferendis!</p>
                    </div>
                </div>
                {/* <!-- Grid --> */}
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 sm:gap-4">
                    {/* <!-- Card --> */}
                    <a className="flex flex-col transition bg-white border shadow-sm group rounded-xl hover:shadow-md dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                    <div className="p-4 md:p-5">
                        <div className='text-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto mt-1 w-8 h-8 fill-[#367BF3]" x="0" y="0" viewBox="0 0 405.07 405.07"><g><path d="M202.531 0C90.676 0 0 90.678 0 202.535 0 314.393 90.676 405.07 202.531 405.07c111.859 0 202.539-90.678 202.539-202.535S314.391 0 202.531 0zm40.661 312.198c0 8.284-6.716 15-15 15h-27.629c-8.284 0-15-6.716-15-15v-168.35l-17.1 9.231a15.002 15.002 0 0 1-21.665-9.51l-5.459-21.518a15 15 0 0 1 7.461-16.913l47.626-25.491a14.99 14.99 0 0 1 7.078-1.775h24.688c8.284 0 15 6.716 15 15v219.326z"></path></g></svg>

                            <Image width={300} height={300} className="w-full md:px-[15%] px-[10%]" src="/images/work-tv.png" alt="work"/>

                            <div className="mt-4 grow ">
                                <h3 className="mb-2 text-2xl font-semibold text-gray-800 group-hover:text-blue-600 dark:group-hover:text-gray-400 dark:text-gray-200">
                                Shohanur Shohan
                                </h3>
                                <p className="text-sm text-gray-500">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident unde laudantium maxime! Cum eveniet asperiores itaque nihil perspiciatis? Dolorum 
                                </p>
                            </div>
                        </div>
                    </div>
                    </a>
                    {/* <!-- End Card --> */}

                    {/* <!-- Card --> */}
                    <a className="flex flex-col transition bg-white border shadow-sm group rounded-xl hover:shadow-md dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                    <div className="p-4 md:p-5">
                        <div className='text-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto mt-1 w-8 h-8 fill-[#367BF3]" x="0" y="0" viewBox="0 0 64 64"><g><circle cx="32" cy="31.999" r="32" fill="#367bf3" opacity="1" data-original="#222020"></circle><path fill="#ffffff" d="m24.882 44.822 6.812-13.116a50.376 50.376 0 0 0 1.526-3.126c.391-.891.698-1.671.921-2.339.223-.669.377-1.25.461-1.743.084-.494.127-.939.127-1.338 0-.626-.058-1.152-.172-1.58-.115-.428-.283-.771-.506-1.03a1.834 1.834 0 0 0-.831-.551 3.705 3.705 0 0 0-1.147-.163c-1.06 0-1.828.438-2.304 1.311s-.714 2.129-.714 3.767v1.753h-3.613a86.431 86.431 0 0 1-.343-1.853 10.763 10.763 0 0 1-.145-1.833c0-.783.136-1.563.406-2.34.271-.777.696-1.479 1.274-2.105s1.315-1.132 2.213-1.518c.896-.385 1.972-.578 3.225-.578 1.349 0 2.502.157 3.46.471.957.312 1.743.771 2.357 1.373s1.062 1.336 1.346 2.203.425 1.85.425 2.945c0 .626-.058 1.244-.172 1.852s-.304 1.259-.568 1.951c-.266.693-.608 1.448-1.03 2.268s-.939 1.759-1.554 2.818l-6.088 11.562h9.015v3.686H24.882z"></path></g></svg>

                            <Image width={300} height={300} className="w-full md:px-[15%] px-[10%]" src="/images/work-tv.png" alt="work"/>

                            <div className="mt-4 grow ">
                                <h3 className="mb-2 text-2xl font-semibold text-gray-800 group-hover:text-blue-600 dark:group-hover:text-gray-400 dark:text-gray-200">
                                Shohanur Shohan
                                </h3>
                                <p className="text-sm text-gray-500">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident unde laudantium maxime! Cum eveniet asperiores itaque nihil perspiciatis? Dolorum 
                                </p>
                            </div>
                        </div>
                    </div>
                    </a>
                    {/* <!-- End Card --> */}

                    {/* <!-- Card --> */}
                    <a className="flex flex-col transition bg-white border shadow-sm group rounded-xl hover:shadow-md dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                    <div className="p-4 md:p-5">
                        <div className='text-center'>
                            <svg xmlns="http://www.w3.org/2000/svg"  className="mx-auto mt-1 w-8 h-8 fill-[#367BF3]" x="0" y="0" viewBox="0 0 512 512"><g><path d="M256 6C117.929 6 6 117.929 6 256s111.929 250 250 250 250-111.929 250-250S394.071 6 256 6zm-1.045 377.577c-53.591 0-90.432-34.981-91.931-86.6h64.009c.749 17.58 11.682 29.262 28.081 29.262 17.046 0 29-12.548 29-30.773s-12.388-29.536-31.795-29.536h-39.945v-13.9l40.608-66.763h-83.7v-56.844H340.4v11.457l-50.052 80.127c35.754 8.97 58.628 37.913 58.628 76.535 0 50.716-39.304 87.035-94.021 87.035z"></path></g></svg>

                            <Image width={300} height={300} className="w-full md:px-[15%] px-[10%]" src="/images/work-tv.png" alt="work"/>

                            <div className="mt-4 grow ">
                                <h3 className="mb-2 text-2xl font-semibold text-gray-800 group-hover:text-blue-600 dark:group-hover:text-gray-400 dark:text-gray-200">
                                Shohanur Shohan
                                </h3>
                                <p className="text-sm text-gray-500">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident unde laudantium maxime! Cum eveniet asperiores itaque nihil perspiciatis? Dolorum 
                                </p>
                            </div>
                        </div>
                    </div>
                    </a>
                    {/* <!-- End Card --> */}

                </div>
                {/* <!-- End Grid --> */}
            </div>
        {/* // <!-- End Card Section --> */}
        </div>
    );
};

export default Cards;