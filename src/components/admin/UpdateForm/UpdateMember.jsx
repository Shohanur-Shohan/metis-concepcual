
const UpdateMember = () => {

    return (
        <div>
             {/* <!-- Form --> */}
            <form >
                <div className="mb-3 text-center">
                    <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Update Member</h1>
                </div>
                <div className="grid gap-y-4">
                    {/* <!-- Form Group --> */}
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm dark:text-white">Full Name</label>
                        <div className="relative">
                            <input  type="text" id="name" name="name" className="w-full border-[1px] px-4 py-3 text-sm border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required />
                            <div className="absolute inset-y-0 flex items-center pointer-events-none end-0 pe-3">
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Form Group --> */}
                    {/* <!-- Form Group --> */}
                    <div>
                        <label htmlFor="image" className="block mb-2 text-sm dark:text-white">Image Link</label>
                        <div className="relative">
                            <input  type="text" id="image" name="image" className="w-full border-[1px] px-4 py-3 text-sm border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required />
                            <div className="absolute inset-y-0 flex items-center pointer-events-none end-0 pe-3">
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Form Group --> */}
                    {/* <!-- Form Group --> */}
                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block mb-2 text-sm dark:text-white">Role</label>
                        </div>
                        <div className="relative">
                            {/* password */}
                            <input  type="text" id="password" name="password" className="w-full border-[1px] px-4 py-3 text-sm border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"  />
                        </div>
                    </div>
                    {/* <!-- End Form Group --> */}

                    <button className="inline-flex items-center justify-center w-full px-4 py-3 text-sm font-semibold text-white uppercase bg-blue-600 border border-transparent rounded-lg gap-x-2 hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Update</button>
                </div>
            </form>
            {/* <!-- End Form --> */}
        </div>
    );
};

export default UpdateMember;