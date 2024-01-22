import React from "react";

const Counter = () => {
  return (
    <section className="py-10 bg-blueGray-50">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap bg-white rounded shadow lg:flex-nowrap">
          <div className="w-full px-4 py-6 text-center border-b sm:w-1/2 lg:w-1/4 lg:border-b-0 md:border-r">
            <p className="text-md lg:text-base text-blueGray-400">
              <span>Total Revenue</span>
              <span className="px-2 py-1 ml-1 text-xs font-semibold text-green-600 bg-green-100 rounded-full">
                +18%
              </span>
            </p>
            <p className="my-1 text-3xl font-bold lg:text-4xl font-heading">
              $33,261
            </p>
            
          </div>
          <div className="w-full px-4 py-6 text-center border-b sm:w-1/2 lg:w-1/4 lg:border-b-0 md:border-r">
            <p className="text-md lg:text-base text-blueGray-400">
              <span>Subscribers</span>
              <span className="px-2 py-1 ml-1 text-xs font-semibold text-green-600 bg-green-100 rounded-full">
                +18%
              </span>
            </p>
            <p className="my-1 text-3xl font-bold lg:text-4xl font-heading">
              643,533
            </p>
            
          </div>
          <div className="w-full px-4 py-6 text-center border-b sm:w-1/2 lg:w-1/4 md:border-b-0 md:border-r">
            <p className="text-md lg:text-base text-blueGray-400">
              <span>Conversations</span>
              <span className="px-2 py-1 ml-1 text-xs font-semibold text-red-600 bg-red-100 rounded-full">
                -3.4%
              </span>
            </p>
            <p className="my-1 text-3xl font-bold lg:text-4xl font-heading">
              643,533
            </p>
            
          </div>
          <div className="w-full px-4 py-6 text-center sm:w-1/2 lg:w-1/4">
            <p className="text-md lg:text-base text-blueGray-400">
              <span>Modal Sale Rate</span>
              <span className="px-2 py-1 ml-1 text-xs font-semibold text-green-600 bg-green-100 rounded-full">
                +18%
              </span>
            </p>
            <p className="my-1 text-3xl font-bold lg:text-4xl font-heading">
              25%
            </p>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
