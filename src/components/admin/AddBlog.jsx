import React from 'react';

const AddBlog = () => {

    return (

        <div className="container py-[100px]">
            <h1 className="mb-5 text-3xl font-semibold">Add Your Blog</h1>
            <div className="mb-6">
                <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Service Title</label>
                <input type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>
            <div className="mb-6">
                <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Service Image Link</label>
                <input type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>
            <button type="button" className="inline-flex border-[1px] border-transparent hover:border-black items-center px-6 py-3 text-sm font-medium text-white bg-black border-gray-200 rounded-lg shadow-sm gap-x-2 hover:bg-gray-50 dark:text-white hover:text-black">
            Create Blog
            </button>
        </div>
    );
};

export default AddBlog;