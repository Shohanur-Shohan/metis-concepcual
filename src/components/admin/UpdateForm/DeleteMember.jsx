
const DeleteMember = () => {

    return (
        <div>
             {/* <!-- Form --> */}
            <form >
                <div className="mb-3 text-center">
                    <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Are you sure?</h1>
                </div>
                <div className="grid gap-y-4">
                    <button className="inline-flex items-center justify-center w-full px-4 py-3 text-sm font-semibold text-white uppercase bg-red-600 border border-transparent rounded-lg gap-x-2 hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Delete</button>
                </div>
            </form>
            {/* <!-- End Form --> */}
        </div>
    );
};

export default DeleteMember;