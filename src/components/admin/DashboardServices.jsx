"use client"
import { useEffect, useState } from "react";
import DashboardServiceCard from "./DashboardServiceCard";
import axios from "axios";

const DashboardServices = () => {

    const [ service, setService] = useState();


  useEffect(()=>{
  
  (async ()=>{
  
    try {
      let res = await axios.get("/api/dashboard/service/all");
      // console.log(res);
      setService(res?.data);
    } catch (error) {
      console.log("blog fetch error", error);
    } 
  
  })()

  }, []);

    return (
    <div className='flex justify-center h-[fit-content] pt-10'>
        <div className="container p-6 px-0 overflow-x-scroll overflow-y-hidden md:overflow-hidden">
            <table className="w-full text-left table-auto border-[1px] border-gray-100">
                <thead >
                <tr className="">
                    <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                    <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">Image</p>
                    </th>
                    <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                    <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">Service Name</p>
                    </th>
                    <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                    <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">Image Link</p>
                    </th>
                    <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                    <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">Edit</p>
                    </th>
                </tr>
                </thead>
                <tbody >
                    {
                        service?.data.map((service, id)=>{
                        
                        return(
                            <DashboardServiceCard key={id} service={service}/>
                        )
                        })
                    }
                
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default DashboardServices;