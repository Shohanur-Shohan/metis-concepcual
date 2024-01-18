"use client"
import { ErrorToast, IsEmail, IsEmpty, SuccessToast } from "@/utility/FormHelper";
import axios from "axios";
import { NextResponse } from "next/server";
import { useRef, useState } from "react";
import { Toaster } from "react-hot-toast";


const UserUpdatePopup = (props) => {

    const userID = props.data;
    // console.log(userID);
    
    const [passVisible, setPassVisible] = useState(false);

    let   firstNameRef, lastNameRef, emailRef, passwordRef = useRef();

    const handleUpdate = async (e) => {
        e.preventDefault();

        let firstName    = firstNameRef.value;
        let lastName    = lastNameRef.value;
        let email    = emailRef.value;
        let password = passwordRef.value;

        if(IsEmpty(firstName)){
            ErrorToast("Enter your first name");
        }
        else if( IsEmpty(lastName)){
            ErrorToast("Enter your last name");
        }
        else if( IsEmpty(email)){
            ErrorToast("Enter your email");
        }
        else if( IsEmail(email)){
            ErrorToast("This email isn't valid");
        }
        else if( IsEmpty(password)){
            ErrorToast("Enter your password");
        }
        else{
            let res = await axios.post(`/api/user/update?id=${userID}`, {firstName, lastName, email, password});

            if(res.data.status === "Success"){
                SuccessToast("User updated");
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
            <form onSubmit={handleUpdate}>
                <div className="mb-3 text-center">
                    <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Update User</h1>
                </div>
                <div className="grid gap-y-4">
                    {/* <!-- Form Group --> */}
                    <div>
                        <label className="block mb-2 text-sm dark:text-white">First Name</label>
                        <div className="relative">
                            <input ref={(input)=> firstNameRef = input } type="text" className="w-full border-[1px] px-4 py-3 text-sm border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" />
                            <div className="absolute inset-y-0 flex items-center pointer-events-none end-0 pe-3">
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Form Group --> */}
                    {/* <!-- Form Group --> */}
                    <div>
                        <label  className="block mb-2 text-sm dark:text-white">Last Name</label>
                        <div className="relative">
                            <input ref={(input)=> lastNameRef = input }  type="text" className="w-full border-[1px] px-4 py-3 text-sm border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"/>
                            <div className="absolute inset-y-0 flex items-center pointer-events-none end-0 pe-3">
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Form Group --> */}
                    {/* <!-- Form Group --> */}
                    <div>
                        <label  className="block mb-2 text-sm dark:text-white">Email</label>
                        <div className="relative">
                            <input ref={(input)=> emailRef = input }  type="email" className="w-full border-[1px] px-4 py-3 text-sm border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"/>
                            <div className="absolute inset-y-0 flex items-center pointer-events-none end-0 pe-3">
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Form Group --> */}
                    {/* <!-- Form Group --> */}
                    <div>
                        <div className="flex items-center justify-between">
                            <label  className="block mb-2 text-sm dark:text-white">Password</label>
                        </div>
                        <div className="relative">
                            {/* password */}
                            <input ref={(input)=> passwordRef = input }  type={passVisible === false ? 'password' : 'text'} className="w-full border-[1px] px-4 py-3 text-sm border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" />

                            <div onClick={ ()=>setPassVisible(!passVisible) } className="absolute top-[25%] right-[10px]">

                                {
                                
                                passVisible === false ?
                                    <svg xmlns="http://www.w3.org/2000/svg" className="fill-[#B6BBC4] hover:fill-[#5d5d5f]" width="20" height="20" viewBox="0 0 128 128" ><g><path d="m79.891 65.078 7.27-7.27C87.69 59.787 88 61.856 88 64c0 13.234-10.766 24-24 24-2.144 0-4.213-.31-6.192-.839l7.27-7.27a15.929 15.929 0 0 0 14.813-14.813zm47.605-3.021c-.492-.885-7.47-13.112-21.11-23.474l-5.821 5.821c9.946 7.313 16.248 15.842 18.729 19.602C114.553 71.225 95.955 96 64 96c-4.792 0-9.248-.613-13.441-1.591l-6.573 6.573C50.029 102.835 56.671 104 64 104c41.873 0 62.633-36.504 63.496-38.057a3.997 3.997 0 0 0 0-3.886zm-16.668-39.229-88 88C22.047 111.609 21.023 112 20 112s-2.047-.391-2.828-1.172a3.997 3.997 0 0 1 0-5.656l11.196-11.196C10.268 83.049 1.071 66.964.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24c10.827 0 20.205 2.47 28.222 6.122l12.95-12.95c1.563-1.563 4.094-1.563 5.656 0s1.563 4.094 0 5.656zM34.333 88.011 44.46 77.884C41.663 73.96 40 69.175 40 64c0-13.234 10.766-24 24-24 5.175 0 9.96 1.663 13.884 4.459l8.189-8.189C79.603 33.679 72.251 32 64 32 32.045 32 13.447 56.775 8.707 63.994c3.01 4.562 11.662 16.11 25.626 24.017zm15.934-15.935 21.809-21.809C69.697 48.862 66.958 48 64 48c-8.822 0-16 7.178-16 16 0 2.958.862 5.697 2.267 8.076z"></path></g></svg>
                                :
                                    <svg xmlns="http://www.w3.org/2000/svg"  className="fill-[#5d5d5f] hover:fill-[#B6BBC4]" width="20" height="20" viewBox="0 0 511.999 511.999"><g><path d="M508.745 246.041c-4.574-6.257-113.557-153.206-252.748-153.206S7.818 239.784 3.249 246.035a16.896 16.896 0 0 0 0 19.923c4.569 6.257 113.557 153.206 252.748 153.206s248.174-146.95 252.748-153.201a16.875 16.875 0 0 0 0-19.922zM255.997 385.406c-102.529 0-191.33-97.533-217.617-129.418 26.253-31.913 114.868-129.395 217.617-129.395 102.524 0 191.319 97.516 217.617 129.418-26.253 31.912-114.868 129.395-217.617 129.395z" ></path><path d="M255.997 154.725c-55.842 0-101.275 45.433-101.275 101.275s45.433 101.275 101.275 101.275S357.272 311.842 357.272 256s-45.433-101.275-101.275-101.275zm0 168.791c-37.23 0-67.516-30.287-67.516-67.516s30.287-67.516 67.516-67.516 67.516 30.287 67.516 67.516-30.286 67.516-67.516 67.516z" ></path></g></svg>
                                
                                }
                                
                            </div>
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

export default UserUpdatePopup;