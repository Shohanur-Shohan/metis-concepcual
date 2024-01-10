import Image from "next/image";
import React from "react";

const AboutInfo = () => {
  return (
    <div className="w-full py-[100px] sm:pt-[6rem] md:pt-5 lg:py-[100px]">
      <div className="container px-2 mx-auto">
        {/* <!-- Grid --> */}
        <div className="gap-8 lg:grid md:grid-cols-2 md:gap-8 xl:gap-20 md:items-center">
          <div>
              <div className="mt-[0px] md:mt-[100px] lg:mt-[0px] mx-auto mb-8 text-center w-full lg:mx-0 lg:text-left">
                <h1 className="py-2 mb-5 text-[2rem] font-bold md:text-6xl lg:text-5xl xl:text-5xl">Make your  <span className="text-blue-600">life easier </span>
                <br></br>for marketing sales and support</h1>             
                <h1></h1>
              </div>
      
            {/* <!-- Buttons --> */}
            <div className="grid justify-center w-full gap-3 mt-7 sm:inline-flex lg:justify-start mb-[70px] lg:mb-0">
              <a className="inline-flex items-center justify-center px-4 py-3 text-sm font-semibold text-white bg-blue-600 border border-transparent rounded-lg gap-x-2 hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                Learn More
                <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </a>
            </div>
            {/* <!-- End Buttons --> */}
          </div>
          {/* <!-- End Col --> */}
      
          <div className="relative">
            <Image width={800} height={800} className="w-full rounded-md" src="/images/metis-dashboard-square.png" alt="Image Description"/>
            <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 w-full h-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6 dark:from-slate-800 dark:via-slate-900/0 dark:to-slate-900/0"></div>
      
            <div className="absolute bottom-0 start-0">
              <svg className="w-2/3 h-auto text-white ms-auto dark:text-slate-900" width="630" height="451" viewBox="0 0 630 451" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="531" y="352" width="99" height="99" fill="currentColor"/>
                <rect x="140" y="352" width="106" height="99" fill="currentColor"/>
                <rect x="482" y="402" width="64" height="49" fill="currentColor"/>
                <rect x="433" y="402" width="63" height="49" fill="currentColor"/>
                <rect x="384" y="352" width="49" height="50" fill="currentColor"/>
                <rect x="531" y="328" width="50" height="50" fill="currentColor"/>
                <rect x="99" y="303" width="49" height="58" fill="currentColor"/>
                <rect x="99" y="352" width="49" height="50" fill="currentColor"/>
                <rect x="99" y="392" width="49" height="59" fill="currentColor"/>
                <rect x="44" y="402" width="66" height="49" fill="currentColor"/>
                <rect x="234" y="402" width="62" height="49" fill="currentColor"/>
                <rect x="334" y="303" width="50" height="49" fill="currentColor"/>
                <rect x="581" width="49" height="49" fill="currentColor"/>
                <rect x="581" width="49" height="64" fill="currentColor"/>
                <rect x="482" y="123" width="49" height="49" fill="currentColor"/>
                <rect x="507" y="124" width="49" height="24" fill="currentColor"/>
                <rect x="531" y="49" width="99" height="99" fill="currentColor"/>
              </svg>
            </div>
        
          </div>
        
        </div>
        
      </div>
    </div>
  );
};

export default AboutInfo;
