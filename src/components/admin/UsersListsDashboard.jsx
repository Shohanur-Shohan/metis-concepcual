
import Image from "next/image";
import DeleteUserPop from "./UpdateForm/DeleteUserPop";
import UserUpdatePopup from "./UpdateForm/UserUpdatePopup";

const UsersListsDashboard = async (props) => {


    const userData = await props.data;
    // console.log(userData);

    return (

    <div className='flex justify-center h-[fit-content] pt-10 '>
        <div className="container p-6 px-0 pb-[1000px] overflow-x-scroll overflow-y-hidden md:overflow-hidden ">
            <table className="w-full text-left table-auto border-[1px] border-gray-100">
                <thead >
                <tr>
                    <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                    <p className="block font-sans text-sm antialiased font-semibold leading-none text-blue-gray-900 opacity-70">Profile</p>
                    </th>
                    <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                    <p className="block font-sans text-sm antialiased font-semibold leading-none text-blue-gray-900 opacity-70">Name</p>
                    </th>
                    <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                    <p className="block font-sans text-sm antialiased font-semibold leading-none text-blue-gray-900 opacity-70">Email</p>
                    </th>
                    <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                    <p className="block font-sans text-sm antialiased font-semibold leading-none text-blue-gray-900 opacity-70">Password</p>
                    </th>
                    <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                    <p className="block font-sans text-sm antialiased font-semibold leading-none text-blue-gray-900 opacity-70">Joined</p>
                    </th>
                    <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                    <p className="block font-sans text-sm antialiased font-semibold leading-none text-blue-gray-900 opacity-70">Edit</p>
                    </th>
                </tr>
                </thead>
                <tbody>

                {              
                
                userData?.data.map((item, id)=>{

                    //remove timezone
                    let createdAt = item?.createdAt;                   
                    function removeTimezone(){
                        let withTimeZone = new Date(createdAt);
                        let withoutTimeZone = withTimeZone.toLocaleDateString();

                        return withoutTimeZone;
                    }
                
                    return (
                        <tr key={id}>
                        <td className="p-4 border-b border-blue-gray-50">
                            <div className="flex items-center gap-3">
                                <Image className="relative inline-block object-contain object-center w-12 h-12 p-1 border rounded-full border-blue-gray-50 bg-blue-gray-50/50" width={100} height={100} src={'/images/unknown.jpg'} alt="profile"/>
                            </div>
                        </td>
                        <td className="p-4 border-b border-blue-gray-50">
                            <p className="block font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900">{item?.firstName + ' ' + item?.lastName}</p>
                        </td>
                        <td className="p-4 border-b border-blue-gray-50">
                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">{item?.email}</p>
                        </td>
                        <td className="p-4 border-b border-blue-gray-50">
                            <div className="w-max">
                                <div className="relative grid items-center px-2 py-1 font-sans text-xs font-bold text-green-900 rounded-md select-none whitespace-nowrap bg-green-500/20" >
                                <span className="">{item?.password}</span>
                                </div>
                            </div>
                        </td>
                        <td className="p-4 border-b border-blue-gray-50">
                            <div className="flex items-center gap-3">
                                <div className="flex flex-col">
                                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 opacity-70">{removeTimezone()}</p>
                                </div>
                            </div>
                        </td>
                        <td className="flex p-4 border-b border-blue-gray-50">
                                {/*update popup  */}
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="">
                                    <button className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20" type="button">
                                        <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">                           
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-4 h-4">
                                            <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path>
                                        </svg>
                                        </span>
                                    </button>
                                </label>
                                
                                <ul tabIndex={0} className="dropdown-content mt-3 z-[1] px-6 py-10 shadow bg-base-100 rounded-box md:w-[500px] w-[360px] mr-[50px] ">
                                    <UserUpdatePopup data={item?.id}/>
                                </ul>
                            </div>
                            {/* popup */}
                            {/*delete popup  */}
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="">
                                    <button className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20" type="button">
                                    <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">                            
                                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512" fill="currentColor" aria-hidden="true" className="w-4 h-4"><g><path fill="#fc0005" fillRule="evenodd" d="M170.8 14.221A14.21 14.21 0 0 1 185 .014L326.991.006a14.233 14.233 0 0 1 14.2 14.223v35.117H170.8zm233.461 477.443a21.75 21.75 0 0 1-21.856 20.33H127.954a21.968 21.968 0 0 1-21.854-20.416L84.326 173.06H427.5l-23.234 318.6zm56.568-347.452H51.171v-33A33.035 33.035 0 0 1 84.176 78.2l343.644-.011a33.051 33.051 0 0 1 33 33.02v33zm-270.79 291.851a14.422 14.422 0 1 0 28.844 0V233.816a14.42 14.42 0 0 0-28.839-.01v202.257zm102.9 0a14.424 14.424 0 1 0 28.848 0V233.816a14.422 14.422 0 0 0-28.843-.01z"></path></g></svg>
                                    </span>
                                </button>
                                </label>
                                
                                <ul tabIndex={0} className="dropdown-content mt-3 z-[1] px-6 py-10 shadow bg-base-100 rounded-box md:w-[500px] w-[360px] mr-[50px] ">
                                    <DeleteUserPop data={item?.id}/>
                                </ul>
                            </div>
                            {/*delete popup */}
                        </td>
                    </tr>
                    )
                
                })

                }

                </tbody>
            </table>
        </div>
    </div>
    );
};

export default UsersListsDashboard;