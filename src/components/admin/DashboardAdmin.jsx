'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// for cookie delete
import { useRouter } from 'next/navigation';
import Cookies from "js-cookie";

export default function DashboardAdmin  (props)  {

    const [open, setOpen] = useState(false);
    const router = useRouter();

// for cookie delete
    const handleLogout = () =>{
        Cookies.remove('token');

        router.push('/login');
    }

    return (

        <div>
            <nav className="fixed z-30 w-full bg-white border-b border-gray-200">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start">

                            <button onClick={()=>setOpen(!open)} id="toggleSidebarMobile" aria-expanded="true" aria-controls="sidebar" className="p-2 mr-2 text-gray-600 rounded cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100">
                                {
                                    open == false ? 
                                
                                    <svg id="toggleSidebarMobileHamburger" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                                    </svg>

                                    :

                                    <svg id="toggleSidebarMobileClose" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                    </svg>
                                }
                            </button>

                            <Link href={'/'} className="text-xl font-bold flex items-center lg:ml-2.5">
                                <Image width={100} height={50} src="/images/logo.svg" alt="logo"/>
                            </Link>
                        </div>
                        <div className="flex items-center">
                            <div className="relative hidden mt-1 mr-2 lg:w-64 md:flex">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                                    </svg>
                                </div>
                                <input type="text" name="email" id="topbar-search" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full pl-10 p-2.5" placeholder="Search"/>
                            </div>
                            {/* profile start  */}
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                    <Image width={50} height={50} src="/images/profile.jpg" alt="profile"/>
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    <li>
                                    <a className="justify-between">
                                        Profile
                                    </a>
                                    </li>
                                    <li><a>Settings</a></li>
                                    <li onClick={handleLogout}><a>Logout</a></li>
                                </ul>
                            </div>
                            {/* profile end */}
                        </div>
                    </div>
                </div>
            </nav>

            <div className="flex pt-16 overflow-hidden bg-white">

                <aside id="sidebar" className={`fixed top-0 left-0 z-20 flex-col flex-shrink-0 w-64 h-full pt-16 duration-75  transition-width ${open == true ? "flex" : "hidden"} lg:flex`} aria-label="Sidebar">
                    <div className="relative flex flex-col flex-1 min-h-0 pt-0 bg-white border-r border-gray-200">
                        <div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
                        <div className="flex-1 px-3 space-y-1 bg-white divide-y">
                            <ul className="pb-2 space-y-2">
                                <li>
                                    <form action="#" method="GET" className="lg:hidden">
                                    <label htmlFor="mobile-search" className="sr-only">Search</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                                            </svg>
                                        </div>
                                        <input type="text" name="email" id="mobile-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-600 block w-full pl-10 p-2.5" placeholder="Search"/>
                                    </div>
                                    </form>
                                </li>
                                <li>
                                    <Link href={'/dashboard'} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 group">
                                        <svg xmlns="http://www.w3.org/2000/svg"  className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" viewBox="0 0 512 512"><g><path fill="#2196f3" d="M197.332 0h-160C16.746 0 0 16.746 0 37.332v96c0 20.59 16.746 37.336 37.332 37.336h160c20.59 0 37.336-16.746 37.336-37.336v-96C234.668 16.746 217.922 0 197.332 0zm0 0"></path><path fill="#1976d2" d="M197.332 213.332h-160C16.746 213.332 0 230.078 0 250.668v224C0 495.254 16.746 512 37.332 512h160c20.59 0 37.336-16.746 37.336-37.332v-224c0-20.59-16.746-37.336-37.336-37.336zm0 0"></path><path fill="#2196f3" d="M474.668 341.332h-160c-20.59 0-37.336 16.746-37.336 37.336v96c0 20.586 16.746 37.332 37.336 37.332h160C495.254 512 512 495.254 512 474.668v-96c0-20.59-16.746-37.336-37.332-37.336zm0 0"></path><path fill="#1976d2" d="M474.668 0h-160c-20.59 0-37.336 16.746-37.336 37.332v224c0 20.59 16.746 37.336 37.336 37.336h160c20.586 0 37.332-16.746 37.332-37.336v-224C512 16.746 495.254 0 474.668 0zm0 0"></path></g></svg>
                                        <span className="ml-3">Dashboard</span>
                                    </Link>
                                </li> 
                                <li>
                                    <Link href={'/'} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 group">
                                        <svg xmlns="http://www.w3.org/2000/svg"  className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" viewBox="0 0 512 512"><g><path d="m498.195 222.695-.035-.035L289.305 13.813C280.402 4.905 268.566 0 255.977 0c-12.59 0-24.426 4.902-33.332 13.809L13.898 222.55c-.07.07-.14.144-.21.215-18.282 18.386-18.25 48.218.09 66.558 8.378 8.383 19.445 13.238 31.277 13.746.48.047.965.07 1.453.07h8.324v153.7C54.832 487.254 79.578 512 110 512h81.71c8.282 0 15-6.715 15-15V376.5c0-13.879 11.29-25.168 25.169-25.168h48.195c13.88 0 25.168 11.29 25.168 25.168V497c0 8.285 6.715 15 15 15h81.711c30.422 0 55.168-24.746 55.168-55.16v-153.7h7.719c12.586 0 24.422-4.902 33.332-13.808 18.36-18.371 18.367-48.254.023-66.637zm0 0" fill="#1976d2" opacity="1" data-original="#000000"></path></g></svg>
                                        <span className="ml-3">Home</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/dashboard/users'} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 group ">
                                        <svg xmlns="http://www.w3.org/2000/svg"  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900" fill="#1976d2" viewBox="0 0 24 24"><g><path d="M17.233 15.328a4.773 4.773 0 0 0-4.7-4.078h-1.064a4.773 4.773 0 0 0-4.7 4.078l-.51 3.566a.75.75 0 0 0 .213.636c.2.2 1.427 1.22 5.53 1.22s5.327-1.016 5.53-1.22a.75.75 0 0 0 .213-.636zM7.56 11.8a5.7 5.7 0 0 0-1.78 3.39l-.37 2.56c-2.97-.02-3.87-1.1-4.02-1.32a.739.739 0 0 1-.13-.56l.22-1.24a4.093 4.093 0 0 1 6.08-2.83zM22.74 15.87a.739.739 0 0 1-.13.56c-.15.22-1.05 1.3-4.02 1.32l-.37-2.56a5.7 5.7 0 0 0-1.78-3.39 4.093 4.093 0 0 1 6.08 2.83zM7.73 9.6a2.714 2.714 0 0 1-2.23 1.15A2.75 2.75 0 1 1 7.15 5.8 4.812 4.812 0 0 0 7 7a5.01 5.01 0 0 0 .73 2.6zM21.25 8a2.748 2.748 0 0 1-2.75 2.75 2.714 2.714 0 0 1-2.23-1.15A5.01 5.01 0 0 0 17 7a4.812 4.812 0 0 0-.15-1.2 2.75 2.75 0 0 1 4.4 2.2z" fill="#1976d2"></path><circle cx="12" cy="7" r="3.75" fill="#1976d2"></circle></g></svg>
                                        <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
                                    </Link>
                                </li> 
                                <li>
                                    <Link href={'/dashboard/about'}  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 group" width="24" height="24">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900" viewBox="0 0 24 24"  fillRule="evenodd"><g><circle cx="11.5" cy="6.744" r="5.5" fill="#1976d2"></circle><path d="M12.925 21.756A6.226 6.226 0 0 1 11.25 17.5c0-1.683.667-3.212 1.751-4.336-.49-.038-.991-.058-1.501-.058-3.322 0-6.263.831-8.089 2.076-1.393.95-2.161 2.157-2.161 3.424v1.45a1.697 1.697 0 0 0 1.7 1.7z" fill="#1976d2" ></path><path d="M17.5 12.25c-2.898 0-5.25 2.352-5.25 5.25s2.352 5.25 5.25 5.25 5.25-2.352 5.25-5.25-2.352-5.25-5.25-5.25zm-.75 5.25V20a.75.75 0 0 0 1.5 0v-2.5a.75.75 0 0 0-1.5 0zm.75-3.25a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="#1976d2" ></path></g></svg>                         
                                        <span className="flex-1 ml-3 whitespace-nowrap">About</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/dashboard/blog'} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 group ">
                                    <svg xmlns="http://www.w3.org/2000/svg"  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900" fill="#1976d2" viewBox="0 0 32 32"><g><path d="m20.552 22.448-3.394 1.204a.634.634 0 0 1-.81-.81l1.204-3.394a.126.126 0 0 1 .032-.05l8.979-8.98a1.135 1.135 0 0 1 1.605 0l1.414 1.414a1.135 1.135 0 0 1 0 1.605l-8.98 8.979a.126.126 0 0 1-.05.032zM24 21.847V25c0 .796-.316 1.559-.879 2.121A2.996 2.996 0 0 1 21 28H5a2.996 2.996 0 0 1-2.121-.879A2.996 2.996 0 0 1 2 25V11h21.153l-6.984 6.984a2.13 2.13 0 0 0-.502.796l-1.204 3.393a2.635 2.635 0 0 0 3.364 3.364l3.393-1.204c.3-.106 2.78-2.486 2.78-2.486zM7 23h3.169a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2zm0-4h5.169a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2zm0-4h9.169a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2zM2 9V7c0-.796.316-1.559.879-2.121A2.996 2.996 0 0 1 5 4h16c.796 0 1.559.316 2.121.879C23.684 5.441 24 6.204 24 7v2z" fill="#1976d2"></path></g></svg>
                                    <span className="flex-1 ml-3 whitespace-nowrap">Blog</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/dashboard/service'} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 group ">
                                        <svg xmlns="http://www.w3.org/2000/svg"  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" fill="#1976d2" viewBox="0 0 512 512"><g><path d="M241 350.63V512H55.97c-9.1 0-16.1-8.04-14.86-17.05l9.65-69.86c2.95-21.31 10.52-40.97 21.62-58.02 17.17-26.38 50.41-50.99 83.44-63.13 20.77 25.37 50.96 42.73 85.18 46.69zM126.55 105.05v107.91h-12.79c-15.76 0-28.55-12.78-28.55-28.55v-50.8c0-15.77 12.79-28.56 28.55-28.56zM470.89 494.95l-9.65-69.86c-2.95-21.31-10.52-40.97-21.62-58.02-17.17-26.38-50.41-50.99-83.44-63.13-20.77 25.37-50.96 42.73-85.18 46.69V512h185.03c9.1 0 16.1-8.04 14.86-17.05zm-96.229-95.847h-34.363c-8.284 0-15-6.716-15-15s6.716-15 15-15h34.363c8.284 0 15 6.716 15 15s-6.715 15-15 15zM426.79 133.61v107.53c0 25.07-20.4 45.48-45.48 45.48h-49.74a99.208 99.208 0 0 0 17.68-30h32.06c8.53 0 15.48-6.95 15.48-15.48v-28.18h-11.38V105.05h12.83c15.76 0 28.55 12.79 28.55 28.56z" fill="#1976d2"></path><path d="M355.45 156.99v65.06c0 12.15-2.19 23.79-6.2 34.57H271c-8.229 0-15 6.771-15 15s6.771 15 15 15h60.57c-18.24 21.33-45.35 34.88-75.57 34.88-54.84 0-99.45-44.62-99.45-99.45v-65.06c15.49 13.59 35.78 21.85 57.96 21.85h82.98c22.18 0 42.47-8.26 57.96-21.85zM355.45 75.07v.81h-198.9v-.81C156.55 33.68 190.23 0 231.62 0h48.76c41.39 0 75.07 33.68 75.07 75.07zM353.48 105.88c-6.62 24.71-29.21 42.96-55.99 42.96h-82.98c-26.78 0-49.37-18.25-55.99-42.96z" fill="#1976d2"></path></g></svg>                              
                                        <span className="flex-1 ml-3 whitespace-nowrap">Service</span>
                                    </Link>
                                </li>
                                
                            </ul>
                            {/* LINE */}
                            <div className="pt-2 space-y-2">
                                <li className="list-none">
                                    <button onClick={handleLogout} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 group ">
                                        <svg xmlns="http://www.w3.org/2000/svg"  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900" viewBox="0 0 458.125 458.125"><g><g fillRule="evenodd" clipRule="evenodd"><path fill="#1976d2" d="M210.991.001c-59.383 0-107.521 48.138-107.521 107.52S151.608 215.04 210.991 215.04c59.382 0 107.52-48.138 107.52-107.519 0-59.382-48.138-107.52-107.52-107.52z"></path><path fill="#f44336" d="M345.07 212.48c16.261 0 30.872 7.15 40.825 18.426 5.614 6.359 5.007 16.067-1.352 21.68-6.361 5.614-16.067 5.007-21.68-1.352-4.368-4.95-10.711-8.034-17.793-8.034h-39.078c-13.097 0-23.716 10.619-23.716 23.718v136.77c0 13.099 10.619 23.718 23.716 23.718h39.078c7.082 0 13.425-3.084 17.793-8.034 5.614-6.359 15.319-6.965 21.68-1.352 6.359 5.614 6.965 15.321 1.352 21.68-9.953 11.276-24.564 18.426-40.825 18.426h-39.078c-30.065 0-54.436-24.371-54.436-54.438v-136.77c0-30.065 24.371-54.438 54.436-54.438zm58.12 174.641 40.96-40.96c5.997-5.999 5.997-15.722 0-21.721l-40.96-40.96c-5.999-5.999-15.725-5.999-21.723 0s-5.999 15.723 0 21.721l14.739 14.739h-75.559c-8.483 0-15.36 6.877-15.36 15.36s6.877 15.36 15.36 15.36h75.559l-14.739 14.74c-5.999 5.999-5.999 15.723 0 21.721s15.724 5.999 21.723 0z"></path></g><path fill="#1976d2" d="M221.147 259.586a85.906 85.906 0 0 0-.311 7.332v136.77c0 15.274 4.02 29.608 11.061 42.002H45.318c-19.794 0-35.84-16.046-35.84-35.84v-75.201a33.949 33.949 0 0 1 18.018-29.979c60.429-32.112 127.245-47.14 193.651-45.084z"></path><g fillRule="evenodd" clipRule="evenodd"><path fill="#1976d2" d="M210.756 259.404V445.69H45.318c-19.794 0-35.84-16.046-35.84-35.84v-75.201a33.949 33.949 0 0 1 18.018-29.979 386.942 386.942 0 0 1 183.26-45.266zm0-259.404v215.04c-59.382 0-107.52-48.138-107.52-107.519C103.235 48.139 151.374.001 210.756 0z"></path><path fill="#cc382d" d="M305.287 335.303h143.36c0 3.93-1.499 7.86-4.497 10.858l-40.96 40.96c-5.999 5.999-15.725 5.999-21.723 0s-5.999-15.723 0-21.721l14.739-14.739h-75.559c-8.48 0-15.358-6.876-15.36-15.358zm-23.011 0v68.385c0 13.099 10.619 23.718 23.716 23.718h39.078c7.082 0 13.425-3.084 17.793-8.034 5.614-6.359 15.319-6.965 21.68-1.352 6.359 5.614 6.965 15.321 1.352 21.68-9.953 11.276-24.564 18.426-40.825 18.426h-39.078c-30.065 0-54.436-24.371-54.436-54.438v-68.385z"></path></g></g></svg>
                                        <span className="flex-1 ml-3 whitespace-nowrap">Log Out</span>
                                    </button>
                                </li>
                            </div>
                        </div>
                        </div>
                    </div>
                </aside>


                <div id="main-content" className="relative w-full h-full overflow-y-auto lg:ml-64   bg-[#EEF5FF] p-2">
                    
                    {props.data}

                </div>

            </div>

        </div>
    );
};