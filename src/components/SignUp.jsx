'use client'
import Link from "next/link";
import { useRef } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Toaster } from "react-hot-toast";

import { IsEmpty, IsEmail ,ErrorToast, SuccessToast } from "@/utility/FormHelper";


const SignUp = () => {

    const router = useRouter();
    let firstNameRef, lastNameRef, emailRef, passwordRef = useRef();
    // submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        let firstName = firstNameRef.value;
        let lastName  = lastNameRef.value;
        let email     = emailRef.value;
        let password  = passwordRef.value;

        if(IsEmpty(firstName)){
            ErrorToast("First Name Required");
        }
        else if(IsEmpty(lastName)){
            ErrorToast("Last Name Required");
        }
        else if(IsEmpty(email)){
            ErrorToast("Email Required");
        }
        else if(IsEmail(email)){
            ErrorToast("This email is not valid");
        }
        else if(IsEmpty(password)){
            ErrorToast("Password Required");
        }
        else{
            let res = await axios.post("api/user/registration", {
                firstName,
                lastName,
                email,
                password
            });

            if(res.data.status === "Success"){
                SuccessToast("Registration Success!");
                router.replace("/login");
            }
            else{
              ErrorToast("Someting went wrong");
            }
               
        }

    };

    return (

    <>
        <Toaster position="top-center" reverseOrder={false}/>

        <div className="h-full">
            <div className="flex items-center h-full py-16 bg-gray-100 dark:bg-slate-900">
                <div className="w-full max-w-md p-6 mx-auto">
                    <div className="bg-white border border-gray-200 shadow-sm mt-7 rounded-xl dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-4 sm:p-7">
                        <div className="text-center">
                            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Sign Up</h1>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                            Already have an account? 
                            <Link href={'/signin'} className="font-medium text-blue-600 decoration-2 hover:underline dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"> Sign in here</Link>
                            </p>
                        </div>

                        <div className="mt-5">
                            <button type="button" className="inline-flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-gray-800 bg-white border border-gray-200 rounded-lg shadow-sm gap-x-2 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                            <svg className="w-4 h-auto" width="46" height="47" viewBox="0 0 46 47" fill="none">
                                <path d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z" fill="#4285F4"/>
                                <path d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z" fill="#34A853"/>
                                <path d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z" fill="#FBBC05"/>
                                <path d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z" fill="#EB4335"/>
                            </svg>
                            Sign up with Google
                            </button>

                            <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">Or</div>

                                {/* <!-- Form --> */}
                                <form onSubmit={handleSubmit}>
                                    <div className="grid gap-y-4">
                                        {/* <!-- Form Group --> */}
                                        <div>
                                            <label htmlFor="firstName" className="block mb-2 text-sm dark:text-white">First Name</label>
                                            <div className="relative">
                                                {/* firstname */}
                                                <input ref={(input) => firstNameRef = input } type="text" id="firstName" name="firstName" className="w-full border-[1px] px-4 py-3 text-sm border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"  />

                                                <div className="absolute inset-y-0 flex items-center pointer-events-none end-0 pe-3">
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="lastName" className="block mb-2 text-sm dark:text-white">Last Name</label>
                                            <div className="relative">
                                                {/* lastname */}
                                                <input ref={(input) => lastNameRef = input} type="text" id="lastName" name="lastName" className="w-full border-[1px] px-4 py-3 text-sm border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" />

                                                <div className="absolute inset-y-0 flex items-center pointer-events-none end-0 pe-3">
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block mb-2 text-sm dark:text-white">Email address</label>
                                            <div className="relative">
                                                {/* email */}
                                                <input ref={(input) => emailRef = input } type="email" id="email" name="email" className="w-full border-[1px] px-4 py-3 text-sm border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"  />

                                                <div className="absolute inset-y-0 flex items-center pointer-events-none end-0 pe-3">
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="flex items-center justify-between">
                                                <label htmlFor="password" className="block mb-2 text-sm dark:text-white">Password</label>
                                            </div>
                                            <div className="relative">
                                                {/* password */}
                                                <input ref={(input) => passwordRef = input } type="password" id="password" name="password" className="w-full border-[1px] px-4 py-3 text-sm border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"  />

                                                <div className="absolute inset-y-0 flex items-center pointer-events-none end-0 pe-3">
                                                </div>
                                            </div>
                                        </div>

                                        {/* <!-- End Form Group --> */}
                                        
                                        {/* Signup */}
                                        <button  className="inline-flex items-center justify-center w-full px-4 py-3 text-sm font-semibold text-white uppercase bg-blue-600 border border-transparent rounded-lg gap-x-2 hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Sign Up</button>
                                        
                                    </div>
                                </form>
                                {/* <!-- End Form --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>


        
    );
};

export default SignUp;