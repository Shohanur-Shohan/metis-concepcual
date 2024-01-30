import { getServiceData } from "@/utility/api/AllApi";
import DashboardServiceCard from "./DashboardServiceCard";

const DashboardServices = async () => {
  
  const service = await getServiceData();

    return (
    <div className='flex justify-center h-[fit-content] pt-10'>
        <div className="container p-6 px-0 pb-[1000px] overflow-x-scroll overflow-y-hidden md:overflow-hidden">
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
                        service?.data.map((item, id)=>{
                        
                        return(
                            <DashboardServiceCard key={id} item={item}/>
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