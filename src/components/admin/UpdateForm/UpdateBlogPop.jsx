
const UpdateBlogPop = ({item}) => {

    const blogID = item?.id;

    const handleUpdateUser = async (ID) => {
        console.log(ID);
        // try {
        //     let res = await axios.delete(`/api/user/delete?id=${ID}`);
        //     if(res?.status == 200) {
        //         SuccessToast("User Deleted");
        //         window.location.reload();
        //     } else {
        //         ErrorToast("Something went wrong");
        //     }
        // } catch (error) {
        //     console.log("Error deleting user:", error);
        //     ErrorToast("Something went wrong");
        // }
    }

    return (
        <div className="">
             {/* <!-- Form --> */}
            <form >
                <div className="mb-3 text-center">
                    <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Update Blog</h1>
                </div>
                <div className="grid gap-y-4">
                    {/* <!-- Form Group --> */}
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm dark:text-white">Title</label>
                        <div className="relative">
                            <input  type="text" id="name" name="name" className="w-full border-[1px] px-4 py-3 text-sm border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required />       
                        </div>
                    </div>
                    {/* <!-- End Form Group --> */}
                    {/* <!-- Form Group --> */}
                    <div>
                        <label htmlFor="image" className="block mb-2 text-sm dark:text-white">Image Link</label>
                        <div className="relative">
                            <input  type="text" id="image" name="image" className="w-full border-[1px] px-4 py-3 text-sm border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required />
                        </div>
                    </div>
                    {/* <!-- End Form Group --> */}
                    {/* <!-- Form Group --> */}
                    <div>
                        <label htmlFor="des" className="block mb-2 text-sm dark:text-white">Description</label>
                        <div className="relative">
                            <textarea rows={4} type="text" id="des" name="des" className="w-full border-[1px] px-4 py-3 text-sm border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required>

                            </textarea>
                            {/* <input  type="text" id="des" name="des" className="w-full border-[1px] px-4 py-3 text-sm border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required /> */}
                        </div>
                    </div>
                    {/* <!-- End Form Group --> */}

                    <button onClick={()=>handleUpdateUser(blogID)} className="inline-flex items-center justify-center w-full px-4 py-3 text-sm font-semibold text-white uppercase bg-blue-600 border border-transparent rounded-lg gap-x-2 hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Update</button>
                </div>
            </form>
            {/* <!-- End Form --> */}
        </div>
    );
};

export default UpdateBlogPop;