import DeleteBlogPop from "../admin/UpdateForm/DeleteBlogPop";
import UpdateBlogPop from "../admin/UpdateForm/UpdateBlogPop";


const DashboardBlogCard = ({item}) => {

  const blogID = item?.id;
  // console.log(blogID);

    
    return (
        <a className=" group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
              <div className="">
                <img className="w-full rounded-xl" src={item?.imgCDN} alt="Image Description"/>
              </div>
              <div className="my-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">{item?.title}</h3>
                <p className="mt-5 h-[100px] overflow-hidden  text-gray-600 dark:text-gray-400">{item?.des}</p>
              </div>
              <div className="flex justify-between">
                {/* left */}
                <div className="flex items-center mt-auto gap-x-3">
                  <img className="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description"/>
                  <div>
                    <h5 className="text-sm text-gray-800 dark:text-gray-200">By Aaron Larsson</h5>
                  </div>
                </div>
                {/* left */}
                {/* right */}
                <div className="flex items-center">
                    <div className="dropdown dropdown-top dropdown-left">
                        <label tabIndex={0} className="">
                            <button className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20" type="button">
                                <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">                           
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-4 h-4">
                                    <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path>
                                </svg>
                                </span>
                            </button>
                        </label>
                        
                        <ul tabIndex={0} className="dropdown-content  mt-3 z-[1] px-6 py-10 shadow bg-base-100 rounded-box md:w-[500px] w-[360px]">
                            <UpdateBlogPop item={item}/>
                        </ul>
                      </div>
                      {/* popup */}

                      {/*delete popup  */}
                      <div className="dropdown dropdown-top dropdown-left">
                          <label tabIndex={0} className="">
                              <button className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20" type="button">
                                  <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">                           
                                  <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512" fill="currentColor" aria-hidden="true" className="w-4 h-4"><g><path fill="#fc0005" fillRule="evenodd" d="M170.8 14.221A14.21 14.21 0 0 1 185 .014L326.991.006a14.233 14.233 0 0 1 14.2 14.223v35.117H170.8zm233.461 477.443a21.75 21.75 0 0 1-21.856 20.33H127.954a21.968 21.968 0 0 1-21.854-20.416L84.326 173.06H427.5l-23.234 318.6zm56.568-347.452H51.171v-33A33.035 33.035 0 0 1 84.176 78.2l343.644-.011a33.051 33.051 0 0 1 33 33.02v33zm-270.79 291.851a14.422 14.422 0 1 0 28.844 0V233.816a14.42 14.42 0 0 0-28.839-.01v202.257zm102.9 0a14.424 14.424 0 1 0 28.848 0V233.816a14.422 14.422 0 0 0-28.843-.01z"></path></g></svg>
                                  </span>
                              </button>
                          </label>
                          
                          <ul tabIndex={0} className="dropdown-content mt-3 z-[1] px-6 py-10 shadow bg-base-100 rounded-box md:w-[500px] w-[360px]">
                            <DeleteBlogPop item={item}/>
                          </ul>
                      </div>
                      {/*delete popup  */}
                      
                </div>
                {/* right */}
              </div>
              
            </a>
    );
};

export default DashboardBlogCard;