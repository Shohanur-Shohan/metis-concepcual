import Image from "next/image";

const TodaysPercentage = () => {
    return (
        <div className="flex flex-wrap w-full py-4">
          {/* <!-- card1 --> */}
          
          <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
            <div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
              <div className="flex-auto p-4">
                <div className="flex flex-row -mx-3">
                  <div className="flex-none w-2/3 max-w-full px-3">
                    <div>
                      <p className="mb-0 font-sans text-sm font-semibold leading-normal">Active Users</p>
                      <h5 className="mb-0 font-bold">
                        2,300
                        <span className="text-sm leading-normal font-weight-bolder text-lime-500">+3%</span>
                      </h5>
                    </div>
                  </div>
                  <div className="px-3 text-right basis-1/3">
                    <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-r from-[#2196F3] to-[#1976D2]">
                      {/* <i className="ni leading-none ni-world text-lg relative top-3.5 text-white"></i> */}
                      <Image width={50} height={50} className="w-full p-2" src="/images/team.png" alt="work"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- card2 --> */}
          <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
            <div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
              <div className="flex-auto p-4">
                <div className="flex flex-row -mx-3">
                  <div className="flex-none w-2/3 max-w-full px-3">
                    <div>
                      <p className="mb-0 font-sans text-sm font-semibold leading-normal">New Users</p>
                      <h5 className="mb-0 font-bold">
                        +462
                        <span className="text-sm leading-normal text-red-600 font-weight-bolder">-2%</span>
                      </h5>
                    </div>
                  </div>
                  <div className="px-3 text-right basis-1/3">
                    <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-r from-[#2196F3] to-[#1976D2]">
                    <Image width={50} height={50} className="w-full p-2" src="/images/new.png" alt="work"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          

          {/* <!-- card3 --> */}
          <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
            <div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
              <div className="flex-auto p-4">
                <div className="flex flex-row -mx-3">
                  <div className="flex-none w-2/3 max-w-full px-3">
                    <div>
                      <p className="mb-0 font-sans text-sm font-semibold leading-normal">Todays Posts</p>
                      <h5 className="mb-0 font-bold">
                        +100
                        <span className="text-sm leading-normal font-weight-bolder text-lime-500">+15%</span>
                      </h5>
                    </div>
                  </div>
                  <div className="px-3 text-right basis-1/3">
                    <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-r from-[#2196F3] to-[#1976D2]">
                        <Image width={50} height={50} className="w-full p-2" src="/images/picture.png" alt="work"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- card4 --> */}
          <div className="w-full max-w-full px-3 sm:w-1/2 sm:flex-none xl:w-1/4">
            <div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
              <div className="flex-auto p-4">
                <div className="flex flex-row -mx-3">
                  <div className="flex-none w-2/3 max-w-full px-3">
                    <div>
                      <p className="mb-0 font-sans text-sm font-semibold leading-normal">All Posts</p>
                      <h5 className="mb-0 font-bold">
                        10,430
                        <span className="text-sm leading-normal font-weight-bolder text-lime-500">+2%</span>
                      </h5>
                    </div>
                  </div>
                  <div className="px-3 text-right basis-1/3">
                    <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-r from-[#2196F3] to-[#1976D2]">
                        <Image width={50} height={50} className="w-full p-2" src="/images/landing-page.png" alt="work"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default TodaysPercentage;