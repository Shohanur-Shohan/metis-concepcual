"use client"

import { SuccessToast, ErrorToast, IsEmpty } from '@/utility/FormHelper';
import axios from 'axios';
import { useRef } from 'react';
import { Toaster } from 'react-hot-toast';





const AddBlog = () => {

      let titleRef, imgCdnRef, desRef  = useRef();

      const blogSubmit = async (e) => {
        e.preventDefault();

        let title = titleRef.value;
        let imgCDN = imgCdnRef.value;
        let des = desRef.value;


        if( IsEmpty(title) ){
            ErrorToast("Please add blog title!");
        }
        else if( IsEmpty(imgCDN) ){
            ErrorToast("Please add image cdn link!");
        }
        else if( imgCDN.length >= 300 ){
            ErrorToast("CDN link must be under 300 characters!")
        }
        else if( IsEmpty(des) ){
            ErrorToast("Please add blog description!");
        }     
        else if( des.length >= 5000 ){
            ErrorToast("Description must be under 5000 characters!")
        }
        else{
            let res = await axios.post("/api/dashboard/blog/create", {title, imgCDN, des});
            if(res.data.status === "success"){
                SuccessToast("Blog Created Successfully");
                window.location.reload();
            }
            else{
                ErrorToast("Error,  Please try again later!");
            }
        }
    
    }


    return (

        <>
        <Toaster position='top center' reverseOrder={false}/>

        <div className="container py-[100px]">
            <h1 className="mb-5 text-3xl font-semibold">Add Your Blog</h1>
            
            <form onSubmit={blogSubmit}>      
                <div className="mb-6">
                    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Blog Title</label>
                    <input ref={ (input)=> titleRef = input } type="text"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
                <div className="mb-6">
                    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Blog Image CDN Link</label>
                    <input ref={ (input)=> imgCdnRef = input } type="text"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>

                <div className="mb-6">
                    <label  className="block h-10 mb-2 text-sm font-medium text-gray-900 dark:text-white">Blog Description</label>

                    <textarea ref={ (input)=> desRef = input } type="text" rows={8} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                    </textarea>

                </div>           
                
                <button className="mt-7 inline-flex border-[1px] border-transparent hover:border-black items-center px-6 py-3 text-sm font-medium text-white bg-black border-gray-200 rounded-lg shadow-sm gap-x-2 hover:bg-gray-50 dark:text-white hover:text-black">
                Create Blog
                </button>
            </form>
        </div>

        </>
    );
};

export default AddBlog;