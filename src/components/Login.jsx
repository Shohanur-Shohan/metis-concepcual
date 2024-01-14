"use client"
import Link from "next/link";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { ErrorToast, IsEmail, IsEmpty, SuccessToast } from "@/utility/FormHelper";


const Login = () => {

    const [passVisible, setPassVisible] = useState(false);

    const router = useRouter();
    let  passwordRef, emailRef  = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();

        let email    = emailRef.value;
        let password = passwordRef.value;

        if(IsEmpty(email)){
            ErrorToast("Email Required");
        }
        else if(IsEmail(email)){
            ErrorToast("This email is not valid");
        }
        else if(IsEmpty(password)){
            ErrorToast("password Required");
        }
        else{

           let res = await axios.post("api/user/login", { email, password });
        //    console.log(res);
            if(res.data.status === "Success"){
                SuccessToast("Login Success");
                router.replace("/dashboard");
            }
            else{
                ErrorToast("Login failed, please try again!");
            }

        }

    }


    return (
        <>
            <Toaster position="top-center" reverseOrder={false}/>
        
            <div className="h-full">
                <div className="flex items-center h-full py-16 bg-gray-100 dark:bg-slate-900">
                    <div className="w-full max-w-md p-6 mx-auto">
                    <div className="bg-white border border-gray-200 shadow-sm mt-7 rounded-xl dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-4 sm:p-7">
                        <div className="text-center">
                            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Sign in</h1>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                            Dont have an account? 
                            <Link href={'/signup'} className="font-medium text-blue-600 decoration-2 hover:underline dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"> Sign up here</Link>
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
                            Sign in with Google
                            </button>

                            <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">Or</div>

                            {/* <!-- Form --> */}
                            <form onSubmit={handleSubmit}>
                                <div className="grid gap-y-4">
                                    {/* <!-- Form Group --> */}
                                    <div>
                                    <label htmlFor="email" className="block mb-2 text-sm dark:text-white">Email address</label>
                                    <div className="relative">
                                        <input ref={ (input) => emailRef = input } type="email" id="email" name="email" className="w-full border-[1px] px-4 py-3 text-sm border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required />
                                        <div className="absolute inset-y-0 flex items-center pointer-events-none end-0 pe-3">
                                        </div>
                                    </div>
                                    <p className="hidden mt-2 text-xs text-red-600" id="email-error">Please include a valid email address so we can get back to you</p>
                                    </div>
                                    {/* <!-- End Form Group --> */}

                                    {/* <!-- Form Group --> */}
                                    <div>
                                        <div className="flex items-center justify-between">
                                            <label htmlFor="password" className="block mb-2 text-sm dark:text-white">Password</label>
                                        </div>
                                        <div className="relative">
                                            {/* password */}
                                            <input ref={(input) => passwordRef = input } type={passVisible === false ? 'password' : 'text'} id="password" name="password" className="w-full border-[1px] px-4 py-3 text-sm border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"  />

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

                                    {/* <!-- Checkbox --> */}
                                    <div className="flex items-center">

                                        <input id="remember-me" name="remember-me" type="checkbox" defaultChecked className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"/>

                                    <div className="ms-3">
                                        <label htmlFor="remember-me" className="text-sm dark:text-white">Remember me</label>
                                    </div>
                                    </div>
                                    {/* <!-- End Checkbox --> */}

                                    <button className="inline-flex items-center justify-center w-full px-4 py-3 text-sm font-semibold text-white uppercase bg-blue-600 border border-transparent rounded-lg gap-x-2 hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Sign in</button>
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

export default Login;