import React from 'react';

const Testimonial = () => {
    return (
        
        <div className="py-16">
        <div className="px-6 m-auto text-gray-600 xl:container dark:text-gray-300 md:px-12 xl:px-6">
        <div className="text-center">
                <div className="py-[50px]">
                    <h1 className="mb-4 text-3xl font-bold md:text-4xl">What <span className="text-[#2563EB] mb-4 text-3xl font-bold md:text-4xl">Our Clients </span>Say</h1>
                </div>
            </div>
          <div className="grid gap-8 md:grid-rows-2 lg:grid-cols-2">
            <div
              className="row-span-2 p-8 text-center border border-gray-100 shadow-2xl rounded-3xl dark:border-gray-700 bg-gray-50 dark:bg-gray-800 shadow-gray-600/10 dark:shadow-none"
            >
              <div className="flex flex-col justify-center h-full space-y-4">
                <img
                  className="w-20 h-20 mx-auto rounded-full"
                  src="images/profile.jpg"
                  alt="user avatar"
                  height="220"
                  width="220"
                  loading="lazy"
                />
                <p className="md:text-xl">
                  <span className="font-serif"></span> Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto aliquam
                  consequatur repellat provident, omnis ut, sapiente voluptates veritatis cum deleniti
                  repudiandae ad doloribus. <span className="font-serif"></span>
                </p>
                <div>
                  <h6 className="text-lg font-semibold leading-none">Jane Doe</h6>
                  <span className="text-xs text-gray-500">Product Designer</span>
                </div>
              </div>
            </div>
      
            <div className="p-8 text-center border border-gray-100 shadow-2xl rounded-3xl sm:flex sm:space-x-8 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 shadow-gray-600/10 dark:shadow-none">
              <img
                className="w-20 h-20 mx-auto rounded-full"
                src="images/first_user.webp"
                alt="user avatar"
                height="220"
                width="220"
                loading="lazy"
              />
              <div className="mt-4 space-y-4 text-center sm:mt-0 sm:text-left">
                <p >
                  <span className="font-serif"></span> Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto aliquam
                  consequatur repellat provident, omnis ut, sapiente voluptates veritatis cum deleniti
                  repudiandae ad doloribus. <span className="font-serif"></span>
                </p>
                <div>
                  <h6 className="text-lg font-semibold leading-none">Jane Doe</h6>
                  <span className="text-xs text-gray-500">Product Designer</span>
                </div>
              </div>
            </div>
            <div className="p-8 text-center border border-gray-100 shadow-2xl rounded-3xl sm:flex sm:space-x-8 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 shadow-gray-600/10 dark:shadow-none">
              <img
                className="w-20 h-20 mx-auto rounded-full"
                src="images/third_user.webp"
                alt="user avatar"
                height="220"
                width="220"
                loading="lazy"
              />
              <div className="mt-4 space-y-4 text-center sm:mt-0 sm:text-left">
                <p>
                  <span className="font-serif"></span> Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto aliquam
                  consequatur repellat provident, omnis ut, sapiente voluptates veritatis cum deleniti
                  repudiandae ad doloribus. <span className="font-serif"></span>
                </p>
                <div>
                  <h6 className="text-lg font-semibold leading-none">Jane Doe</h6>
                  <span className="text-xs text-gray-500">Product Designer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
                                          
    );
};

export default Testimonial;