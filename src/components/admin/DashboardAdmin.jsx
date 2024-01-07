'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function DashboardAdmin  (props)  {

    const [open, setOpen] = useState(false);

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
                            <div className="relative hidden mt-1 lg:w-64 md:flex">
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
                                    <li><a>Logout</a></li>
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
                                    <svg className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                                    </svg>
                                    <span className="ml-3">Dashboard</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'} target="_blank" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 group ">
                                        <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                                        </svg>
                                    <span className="flex-1 ml-3 whitespace-nowrap">Home</span>
                                    </Link>
                                </li> 
                                <li>
                                    <Link href={'/dashboard/blog'} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 group ">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900" fill="#6B7280" viewBox="0 0 32 32"><g><path d="m20.552 22.448-3.394 1.204a.634.634 0 0 1-.81-.81l1.204-3.394a.126.126 0 0 1 .032-.05l8.979-8.98a1.135 1.135 0 0 1 1.605 0l1.414 1.414a1.135 1.135 0 0 1 0 1.605l-8.98 8.979a.126.126 0 0 1-.05.032zM24 21.847V25c0 .796-.316 1.559-.879 2.121A2.996 2.996 0 0 1 21 28H5a2.996 2.996 0 0 1-2.121-.879A2.996 2.996 0 0 1 2 25V11h21.153l-6.984 6.984a2.13 2.13 0 0 0-.502.796l-1.204 3.393a2.635 2.635 0 0 0 3.364 3.364l3.393-1.204c.3-.106 2.78-2.486 2.78-2.486zM7 23h3.169a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2zm0-4h5.169a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2zm0-4h9.169a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2zM2 9V7c0-.796.316-1.559.879-2.121A2.996 2.996 0 0 1 5 4h16c.796 0 1.559.316 2.121.879C23.684 5.441 24 6.204 24 7v2z" fill="#6B7280"></path></g></svg>
                                    <span className="flex-1 ml-3 whitespace-nowrap">Blog</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/dashboard/service'} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 group ">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900" fill="#6B7280" viewBox="0 0 512 512"><g><path d="M241 350.63V512H55.97c-9.1 0-16.1-8.04-14.86-17.05l9.65-69.86c2.95-21.31 10.52-40.97 21.62-58.02 17.17-26.38 50.41-50.99 83.44-63.13 20.77 25.37 50.96 42.73 85.18 46.69zM126.55 105.05v107.91h-12.79c-15.76 0-28.55-12.78-28.55-28.55v-50.8c0-15.77 12.79-28.56 28.55-28.56zM470.89 494.95l-9.65-69.86c-2.95-21.31-10.52-40.97-21.62-58.02-17.17-26.38-50.41-50.99-83.44-63.13-20.77 25.37-50.96 42.73-85.18 46.69V512h185.03c9.1 0 16.1-8.04 14.86-17.05zm-96.229-95.847h-34.363c-8.284 0-15-6.716-15-15s6.716-15 15-15h34.363c8.284 0 15 6.716 15 15s-6.715 15-15 15zM426.79 133.61v107.53c0 25.07-20.4 45.48-45.48 45.48h-49.74a99.208 99.208 0 0 0 17.68-30h32.06c8.53 0 15.48-6.95 15.48-15.48v-28.18h-11.38V105.05h12.83c15.76 0 28.55 12.79 28.55 28.56z" fill="#6B7280"></path><path d="M355.45 156.99v65.06c0 12.15-2.19 23.79-6.2 34.57H271c-8.229 0-15 6.771-15 15s6.771 15 15 15h60.57c-18.24 21.33-45.35 34.88-75.57 34.88-54.84 0-99.45-44.62-99.45-99.45v-65.06c15.49 13.59 35.78 21.85 57.96 21.85h82.98c22.18 0 42.47-8.26 57.96-21.85zM355.45 75.07v.81h-198.9v-.81C156.55 33.68 190.23 0 231.62 0h48.76c41.39 0 75.07 33.68 75.07 75.07zM353.48 105.88c-6.62 24.71-29.21 42.96-55.99 42.96h-82.98c-26.78 0-49.37-18.25-55.99-42.96z" fill="#6B7280"></path></g></svg>                              
                                        <span className="flex-1 ml-3 whitespace-nowrap">Service</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/dashboard/about'} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 group ">
                                        <svg xmlns="http://www.w3.org/2000/svg"  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900" fill="#6B7280" viewBox="0 0 24 24"><g><path d="M17.233 15.328a4.773 4.773 0 0 0-4.7-4.078h-1.064a4.773 4.773 0 0 0-4.7 4.078l-.51 3.566a.75.75 0 0 0 .213.636c.2.2 1.427 1.22 5.53 1.22s5.327-1.016 5.53-1.22a.75.75 0 0 0 .213-.636zM7.56 11.8a5.7 5.7 0 0 0-1.78 3.39l-.37 2.56c-2.97-.02-3.87-1.1-4.02-1.32a.739.739 0 0 1-.13-.56l.22-1.24a4.093 4.093 0 0 1 6.08-2.83zM22.74 15.87a.739.739 0 0 1-.13.56c-.15.22-1.05 1.3-4.02 1.32l-.37-2.56a5.7 5.7 0 0 0-1.78-3.39 4.093 4.093 0 0 1 6.08 2.83zM7.73 9.6a2.714 2.714 0 0 1-2.23 1.15A2.75 2.75 0 1 1 7.15 5.8 4.812 4.812 0 0 0 7 7a5.01 5.01 0 0 0 .73 2.6zM21.25 8a2.748 2.748 0 0 1-2.75 2.75 2.714 2.714 0 0 1-2.23-1.15A5.01 5.01 0 0 0 17 7a4.812 4.812 0 0 0-.15-1.2 2.75 2.75 0 0 1 4.4 2.2z" fill="#6B7280"></path><circle cx="12" cy="7" r="3.75" fill="#6B7280"></circle></g></svg>                             
                                        <span className="flex-1 ml-3 whitespace-nowrap">About</span>
                                    </Link>
                                </li>
                            </ul>
                            {/* LINE */}
                            <div className="pt-2 space-y-2">
                                <li className="list-none">
                                    <Link href='/' className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 group ">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900" fill="#6B7280" viewBox="0 0 512 512"><g><g data-name="7.Log in"><path d="M384.249 273.851a151.17 151.17 0 0 1-174.048 0 142.14 142.14 0 0 0-9.325 2.139l65.12 95.141a25.962 25.962 0 0 1 .002 29.508l-46.33 67.69h228.61A52.718 52.718 0 0 0 501 415.61a144.073 144.073 0 0 0-116.751-141.758zM146.17 468.33h3.147v-23.259H102.43a52.694 52.694 0 0 0 43.74 23.259zM149.317 326.691v-25.169a144.68 144.68 0 0 0-25.252 25.17z" fill="#6B7280"></path><circle cx="297.225" cy="150.282" r="138.834" transform="rotate(-10.89 297.425 150.316)" fill="#6B7280"></circle><path d="M186.848 277.266a13.825 13.825 0 0 0-25.234 7.808v47.767a6.151 6.151 0 0 1-6.15 6.15H57.89a46.89 46.89 0 0 0 0 93.781h97.573a6.151 6.151 0 0 1 6.15 6.151v47.767a13.825 13.825 0 0 0 25.234 7.808L255.84 393.69a13.738 13.738 0 0 0 0-15.617z" fill="#6B7280"></path></g></g></svg>
                                    <span className="flex-1 ml-3 whitespace-nowrap">Sign In</span>
                                    </Link>
                                </li>
                                <li className="list-none">
                                    <Link href={'/'} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 group ">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900" fill="#6B7280" viewBox="0 0 512.005 512" ><g><path d="M320 277.336c-11.797 0-21.332 9.559-21.332 21.332v85.336c0 11.754-9.559 21.332-21.336 21.332h-64v-320c0-18.219-11.605-34.496-29.055-40.555l-6.316-2.113h99.371c11.777 0 21.336 9.578 21.336 21.336v64c0 11.773 9.535 21.332 21.332 21.332s21.332-9.559 21.332-21.332v-64c0-35.285-28.715-64-64-64H48c-.812 0-1.492.363-2.281.469-1.028-.086-2.008-.47-3.051-.47C19.137.004 0 19.138 0 42.669v384c0 18.219 11.605 34.496 29.055 40.555L157.44 510.02c4.352 1.343 8.68 1.984 13.227 1.984 23.531 0 42.664-19.137 42.664-42.668v-21.332h64c35.285 0 64-28.715 64-64v-85.336c0-11.773-9.535-21.332-21.332-21.332zm0 0" fill="#6B7280"></path><path d="m505.75 198.254-85.336-85.332a21.33 21.33 0 0 0-23.25-4.633C389.207 111.598 384 119.383 384 128.004v64h-85.332c-11.777 0-21.336 9.555-21.336 21.332 0 11.777 9.559 21.332 21.336 21.332H384v64c0 8.621 5.207 16.406 13.164 19.715a21.335 21.335 0 0 0 23.25-4.63l85.336-85.335c8.34-8.34 8.34-21.824 0-30.164zm0 0" fill="#6B7280"></path></g></svg>
                                    <span className="flex-1 ml-3 whitespace-nowrap">Log Out</span>
                                    </Link>
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