"use client"
import { ErrorToast, IsEmpty, SuccessToast } from "@/utility/FormHelper";
import axios from "axios";
import { useRef } from "react";
import { Toaster } from "react-hot-toast";

const UpdateServicePop = ({item}) => {

    const serviceID = item?.id;
    let  titleRef, imgCdnRef = useRef();

    const serviceUpdate = async (e) => {
        e.preventDefault();

        let title    = titleRef.value;
        let imgCDN  = imgCdnRef.value;

        if(IsEmpty(title)){
            ErrorToast("Enter service title");
        }
        else if( IsEmpty(imgCDN)){
            ErrorToast("Enter service image link");
        }
        else if( imgCDN.length >= 4999 ){
            ErrorToast("Link must be under 5000 characters!")
        }
        else{
            let res = await axios.post(`/api/dashboard/service/update?id=${serviceID}`, {title, imgCDN});

            if(res.data.status === "success"){
                SuccessToast("Service updated");
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
            <form onSubmit={serviceUpdate}>
                <div className="mb-3 text-center">
                    <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Update Service</h1>
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

                    <button className="inline-flex items-center justify-center w-full px-4 py-3 text-sm font-semibold text-white uppercase bg-blue-600 border border-transparent rounded-lg gap-x-2 hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Update</button>
                </div>
            </form>
            {/* <!-- End Form --> */}
        </div>
    );
};

export default UpdateServicePop;