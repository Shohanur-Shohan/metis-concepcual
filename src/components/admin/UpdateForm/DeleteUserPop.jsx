"use client"
import { ErrorToast, SuccessToast } from "@/utility/FormHelper";
import axios from "axios";
import { Toaster } from "react-hot-toast";

const DeleteUserPop = (props) => {

    const userID = props?.data;
    // console.log(userID);

    const handleDeleteUser = async (ID) => {
        try {
            let res = await axios.delete(`/api/user/delete?id=${ID}`);
            if(res?.status == 200) {
                SuccessToast("User Deleted");
                window.location.reload();
            } else {
                ErrorToast("Something went wrong");
            }
        } catch (error) {
            console.log("Error deleting user:", error);
            ErrorToast("Something went wrong");
        }
    }
    


    return (
        <div>
             {/* <!-- Form --> */}
                <Toaster position='top center' reverseOrder={false}/>

                <div className="mb-3 text-center">
                    {/* icon */}
                    <div className="flex justify-center pb-8">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 512 512"><g><g data-name="Layer 2"><circle cx="256" cy="256" r="256" fill="#ff2147"></circle><g fill="#fff"><path d="M256 307.2a35.89 35.89 0 0 1-35.86-34.46l-4.73-119.44a35.89 35.89 0 0 1 35.86-37.3h9.46a35.89 35.89 0 0 1 35.86 37.3l-4.73 119.44A35.89 35.89 0 0 1 256 307.2z" fill="#ffffff"></path><rect width="71.66" height="71.66" x="220.17" y="324.34" rx="35.83" fill="#ffffff"></rect></g></g></g></svg>  
                    </div>
                    
                    {/* icon */}
                    <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Are you sure?</h1>
                    <p className="block pb-5 text-gray-800 text-md dark:text-white">This will be permanently deleted!</p>
                </div>
                <div className="grid gap-y-4">
                    <button onClick={()=>handleDeleteUser(userID)} className="inline-flex items-center justify-center w-full px-4 py-3 text-sm font-semibold text-white uppercase bg-red-600 border border-transparent rounded-lg gap-x-2 hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Delete</button>
                </div>
            {/* <!-- End Form --> */}
        </div>
    );
};

export default DeleteUserPop;