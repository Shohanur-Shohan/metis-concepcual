
const Category = () => {
    return (
        // <!-- Card Section -->
        <div className="container px-2 py-14 mx-auto md:py-[100px]">
            {/* content */}          
            <div className="text-center">
                <div className="py-[50px]">
                    <h1 className="mb-4 text-3xl font-bold md:text-4xl">Make your <span className="text-[#2563EB] mb-4 text-3xl font-bold md:text-4xl">life easier </span><br></br>for marketing sales & customer </h1>
                </div>
            </div>
            {/* <!-- Grid --> */}
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 sm:gap-4">
                {/* <!-- Card --> */}
                <a className="flex flex-col transition bg-white border shadow-sm group rounded-xl hover:shadow-md dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                <div className="p-4 md:p-5">
                    <div className='text-center'>
                        <svg className="w-7 h-7 mx-auto mt-1  text-[#367BF3]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path  d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>

                        <div className="mt-4 grow ">
                            <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 dark:group-hover:text-gray-400 dark:text-gray-200">
                            Category
                            </h3>
                            <p className="text-sm text-gray-500">
                            Get help from 40k+ Preline users
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
                    <svg className="mx-auto mt-1 w-7 h-7 text-[#367BF3]"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>

                    <div className="mt-4 grow ">
                        <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 dark:group-hover:text-gray-400 dark:text-gray-200">
                        Category
                        </h3>
                        <p className="text-sm text-gray-500">
                        Just head to «Help» in the app
                        </p>
                    </div>
                    </div>
                </div>
                </a>
                {/* <!-- End Card --> */}

                {/* <!-- Card --> */}
                <a className="flex flex-col transition bg-white border shadow-sm group rounded-xl hover:shadow-md dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                <div className="p-4 md:p-5">
                    <div className="text-center">
                    <svg className="w-7 h-7 mx-auto mt-1 text-[#367BF3]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"/><path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"/></svg>

                    <div className="mt-4 grow ">
                        <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 dark:group-hover:text-gray-400 dark:text-gray-200">
                        Category
                        </h3>
                        <p className="text-sm text-gray-500">
                        Reach us at <span className="font-medium text-blue-600 dark:text-blue-500">info@site.com</span>
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
                        <svg className="mx-auto mt-1 w-7 h-7 text-[#367BF3]"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>

                        <div className="mt-4 grow ">
                            <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 dark:group-hover:text-gray-400 dark:text-gray-200">
                            Category
                            </h3>
                            <p className="text-sm text-gray-500">
                            Just head to «Help» in the app
                            </p>
                        </div>
                    </div>
                </div>
                </a>
                {/* <!-- End Card --> */}

            </div>
            {/* <!-- End Grid --> */}
        </div>
// <!-- End Card Section -->
    );
};

export default Category;