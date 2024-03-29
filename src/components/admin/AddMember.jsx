"use client"

import { SuccessToast, ErrorToast, IsEmpty } from '@/utility/FormHelper';
import axios from 'axios';
import { useRef } from 'react';
import { Toaster } from 'react-hot-toast';


const AddMember = () => {

    let imgCdnRef, nameRef, roleRef = useRef();

    const handleSubmit = async (e) =>{
        e.preventDefault();

        let name = nameRef.value;
        let imgCDN = imgCdnRef.value;
        let role = roleRef.value;

        if(IsEmpty(name)){
            ErrorToast("Enter member name");
        }
        else if( IsEmpty(imgCDN)){
            ErrorToast("Enter image link");
        }
        else if( IsEmpty(role)){
            ErrorToast("Enter member role");
        }
        else if( imgCDN.length >= 300){
            ErrorToast("CDN link must be under 300 characters!");
        }
        else{
            let res = await axios.post("/api/dashboard/member/create", {name, imgCDN, role});

            if(res.data.status === "success"){
                SuccessToast("Successfully added a member");
                window.location.reload();
            }
            else{
                ErrorToast("Someting went wrong!");
            }
            
        }
    }

    return (
        <>
        <Toaster position='top center' reverseOrder={false} />
        
        <div className="container py-[100px]">
            <h1 className="mb-5 text-3xl font-semibold">Add Team Member</h1>
            <form onSubmit={handleSubmit}>        
                <div className="mb-6">
                    <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Member Name</label>
                    <input ref={(input) => nameRef = input } type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
                <div className="mb-6">
                    <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Profile Image CDN Link</label>
                    <input ref={(input) => imgCdnRef = input } type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
                <div className="mb-6">
                    <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Member Role</label>
                    <input ref={(input) => roleRef = input } type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
                <button className="inline-flex border-[1px] border-transparent hover:border-black items-center px-6 py-3 text-sm font-medium text-white bg-black border-gray-200 rounded-lg shadow-sm gap-x-2 hover:bg-gray-50 dark:text-white hover:text-black">
                Add Member
                </button>
            </form>   
        </div>
        </>
    );
};

export default AddMember;