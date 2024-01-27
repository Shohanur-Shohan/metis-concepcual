"use client"
import { ErrorToast, IsEmpty, SuccessToast } from "@/utility/FormHelper";
import axios from "axios";
import { useRef } from "react";
import { Toaster } from "react-hot-toast";

const UpdateBlogPop = ({item}) => {

    const blogID = item?.id;
    let  titleRef, imgCdnRef, desRef = useRef();

    const memberUpdate = async (e) => {
        e.preventDefault();

        let title    = titleRef.value;
        let imgCDN  = imgCdnRef.value;
        let des    = desRef.value;

        if(IsEmpty(title)){
            ErrorToast("Enter blog title");
        }
        else if( IsEmpty(imgCDN)){
            ErrorToast("Enter blog image link");
        }
        else if( IsEmpty(des)){
            ErrorToast("Enter blog description");
        }
        else{
            let res = await axios.post(`/api/dashboard/blog/update?id=${blogID}`, {title, imgCDN, des});

            if(res.data.status === "success"){
                SuccessToast("Blog updated");
                window.location.reload();
            }
            else{
                ErrorToast("Someting went wrong!");
            }
        }
    }
        


    return (
        <div className="">
            <Toaster position='top center' reverseOrder={false} />

             {/* <!-- Form --> */}
            <form onSubmit={memberUpdate}>
                <div className="mb-3 text-center">
                    <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Update Blog</h1>
                </div>
                <div className="grid gap-y-4">
                    {/* <!-- Form Group --> */}
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm dark:text-white">Title</label>
                        <div className="relative">
                            <input ref={(input)=> titleRef = input} type="text" id="name" name="name" className="w-full border-[1px] px-4 py-3 text-sm border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required />       
                        </div>
                    </div>
                    {/* <!-- End Form Group --> */}
                    {/* <!-- Form Group --> */}
                    <div>
                        <label htmlFor="image" className="block mb-2 text-sm dark:text-white">Image Link</label>
                        <div className="relative">
                            <input ref={(input)=> imgCdnRef = input} type="text" id="image" name="image" className="w-full border-[1px] px-4 py-3 text-sm border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required />
                        </div>
                    </div>
                    {/* <!-- End Form Group --> */}
                    {/* <!-- Form Group --> */}
                    <div>
                        <label htmlFor="des" className="block mb-2 text-sm dark:text-white">Description</label>
                        <div className="relative">
                            <textarea ref={(input)=> desRef = input} rows={4} type="text" id="des" name="des" className="w-full border-[1px] px-4 py-3 text-sm border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required>

                            </textarea>
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

export default UpdateBlogPop;