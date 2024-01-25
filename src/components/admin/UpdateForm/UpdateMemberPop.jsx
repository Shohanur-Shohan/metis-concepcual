"use client"
import { ErrorToast, IsEmpty, SuccessToast } from "@/utility/FormHelper";
import axios from "axios";
import { useRef } from "react";
import { Toaster } from "react-hot-toast";


const UpdateMemberPop = (props) => {

    const memberID = props.data;


    let  fullNameRef, imageLinkRef, roleRef = useRef();

    const memberUpdate = async (e) => {
        e.preventDefault();

        let name    = fullNameRef.value;
        let imgCDN  = imageLinkRef.value;
        let role    = roleRef.value;

        if(IsEmpty(name)){
            ErrorToast("Enter your fullname");
        }
        else if( IsEmpty(imgCDN)){
            ErrorToast("Enter your image link");
        }
        else if( IsEmpty(role)){
            ErrorToast("Enter your role");
        }
        else{
            let res = await axios.post(`/api/dashboard/member/update?id=${memberID}`, {name, imgCDN, role});

            if(res.data.status === "success"){
                SuccessToast("Member updated");
                window.location.reload();
            }
            else{
                ErrorToast("Someting went wrong!");
            }
        }
    }
    

    return (
        <div>
            <Toaster position='top center' reverseOrder={false} />
             {/* <!-- Form --> */}
            <form onSubmit={memberUpdate}>
                <div className="mb-3 text-center">
                    <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Update Member</h1>
                </div>
                <div className="grid gap-y-4">
                    {/* <!-- Form Group --> */}
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm dark:text-white">Full Name</label>
                        <div className="relative">
                            <input ref={(input)=> fullNameRef = input} type="text" id="name" name="name" className="w-full border-[1px] px-4 py-3 text-sm border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"/>
                            <div className="absolute inset-y-0 flex items-center pointer-events-none end-0 pe-3">
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Form Group --> */}
                    {/* <!-- Form Group --> */}
                    <div>
                        <label htmlFor="image" className="block mb-2 text-sm dark:text-white">Image Link</label>
                        <div className="relative">
                            <input ref={(input)=> imageLinkRef = input} type="text" id="image" name="image" className="w-full border-[1px] px-4 py-3 text-sm border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"/>
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
                            {/* role */}
                            <input ref={(input)=> roleRef = input} type="text" id="password" name="password" className="w-full border-[1px] px-4 py-3 text-sm border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" />
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

export default UpdateMemberPop;