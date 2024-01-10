
const Overview = () => {
    return (
        <div className="w-full max-w-full px-3 md:w-1/2 md:flex-none lg:w-1/3 lg:flex-none">
            <div className="border-black/12.5 shadow-soft-xl relative flex h-full min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
              <div className="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid bg-white p-4 pb-0">
                <h6 className="mb-1 font-semibold text-[#344767]">Orders overview</h6>
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" x="0" y="0" viewBox="0 0 16 16"><g><linearGradient id="a" x1="3.814" x2="12.186" y1="3.776" y2="12.147" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#87f1fc"></stop><stop offset=".256" stopColor="#7fd4fb"></stop><stop offset=".529" stopColor="#78bcfb"></stop><stop offset=".784" stopColor="#74aefa"></stop><stop offset="1" stopColor="#73a9fa"></stop></linearGradient><path fill="url(#a)" d="M13.91 5.5a1.944 1.944 0 0 1 0 2.79 2.01 2.01 0 0 1-2.82 0L10 7.22v6.31a2 2 0 0 1-4 0V7.22L4.91 8.29a2.01 2.01 0 0 1-2.82 0 1.944 1.944 0 0 1 0-2.79l4.5-4.42a2.004 2.004 0 0 1 2.82 0z"></path></g></svg>
                    <p className="text-sm leading-normal"><span className="font-semibold">24%</span> this month</p>
                    </div>
              </div>
              <div className="flex-auto p-4 mt-5">
                <div className="before:border-r-solid relative before:absolute before:top-0 before:left-4 before:h-full before:border-r-2 before:border-r-slate-100 before:content-[''] before:lg:-ml-px">
                  <div className="relative mb-4 mt-0 after:clear-both after:table after:content-['']">
                    <span className="w-6.5 h-6.5 text-base absolute left-4 z-10 inline-flex -translate-x-1/2 items-center justify-center rounded-full bg-white text-center font-semibold">
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" className="relative z-10 leading-none text-transparent ni ni-bell-55 leading-pro bg-gradient-to-tl from-green-600 to-lime-400 bg-clip-text fill-transparent" viewBox="0 0 512 512"><g><linearGradient id="a" x1="171" x2="341" y1="342.58" y2="172.58" gradientTransform="matrix(1 0 0 -1 0 513.58)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#2492ff"></stop><stop offset="1" stopColor="#0043ae"></stop></linearGradient><path fill="url(#a)" d="M341 341c-46.9 46.9-123.1 46.9-170 0s-46.9-123.1 0-170 123.1-46.9 170 0 46.9 123.1 0 170z"></path></g></svg>
                    </span>
                    <div className="ml-[30px] pt-1.4 lg:max-w-120  relative -top-1.5 w-auto">
                      <h6 className="mb-0 text-sm font-semibold leading-normal text-slate-700">$2400, Design changes</h6>
                      <p className="mt-1 mb-0 text-xs font-semibold leading-tight text-slate-400">22 DEC 7:20 PM</p>
                    </div>
                  </div>
                  <div className="relative mb-4 after:clear-both after:table after:content-['']">
                    <span className="w-6.5 h-6.5 text-base absolute left-4 z-10 inline-flex -translate-x-1/2 items-center justify-center rounded-full bg-white text-center font-semibold">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" className="relative z-10 leading-none text-transparent ni ni-bell-55 leading-pro bg-gradient-to-tl from-green-600 to-lime-400 bg-clip-text fill-transparent" viewBox="0 0 512 512"><g><linearGradient id="a" x1="171" x2="341" y1="342.58" y2="172.58" gradientTransform="matrix(1 0 0 -1 0 513.58)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#2492ff"></stop><stop offset="1" stopColor="#0043ae"></stop></linearGradient><path fill="url(#a)" d="M341 341c-46.9 46.9-123.1 46.9-170 0s-46.9-123.1 0-170 123.1-46.9 170 0 46.9 123.1 0 170z"></path></g></svg>
                    </span>
                    <div className="ml-[30px] pt-1.4 lg:max-w-120 relative -top-1.5 w-auto">
                      <h6 className="mb-0 text-sm font-semibold leading-normal text-slate-700">New order #1832412</h6>
                      <p className="mt-1 mb-0 text-xs font-semibold leading-tight text-slate-400">21 DEC 11 PM</p>
                    </div>
                  </div>
                  <div className="relative mb-4 after:clear-both after:table after:content-['']">
                    <span className="w-6.5 h-6.5 text-base absolute left-4 z-10 inline-flex -translate-x-1/2 items-center justify-center rounded-full bg-white text-center font-semibold">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" className="relative z-10 leading-none text-transparent ni ni-bell-55 leading-pro bg-gradient-to-tl from-green-600 to-lime-400 bg-clip-text fill-transparent" viewBox="0 0 512 512"><g><linearGradient id="a" x1="171" x2="341" y1="342.58" y2="172.58" gradientTransform="matrix(1 0 0 -1 0 513.58)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#2492ff"></stop><stop offset="1" stopColor="#0043ae"></stop></linearGradient><path fill="url(#a)" d="M341 341c-46.9 46.9-123.1 46.9-170 0s-46.9-123.1 0-170 123.1-46.9 170 0 46.9 123.1 0 170z"></path></g></svg>
                    </span>
                    <div className="ml-[30px] pt-1.4 lg:max-w-120 relative -top-1.5 w-auto">
                      <h6 className="mb-0 text-sm font-semibold leading-normal text-slate-700">Server payments for April</h6>
                      <p className="mt-1 mb-0 text-xs font-semibold leading-tight text-slate-400">21 DEC 9:34 PM</p>
                    </div>
                  </div>
                  <div className="relative mb-4 after:clear-both after:table after:content-['']">
                    <span className="w-6.5 h-6.5 text-base absolute left-4 z-10 inline-flex -translate-x-1/2 items-center justify-center rounded-full bg-white text-center font-semibold">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" className="relative z-10 leading-none text-transparent ni ni-bell-55 leading-pro bg-gradient-to-tl from-green-600 to-lime-400 bg-clip-text fill-transparent" viewBox="0 0 512 512"><g><linearGradient id="a" x1="171" x2="341" y1="342.58" y2="172.58" gradientTransform="matrix(1 0 0 -1 0 513.58)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#2492ff"></stop><stop offset="1" stopColor="#0043ae"></stop></linearGradient><path fill="url(#a)" d="M341 341c-46.9 46.9-123.1 46.9-170 0s-46.9-123.1 0-170 123.1-46.9 170 0 46.9 123.1 0 170z"></path></g></svg>
                    </span>
                    <div className="ml-[30px] pt-1.4 lg:max-w-120 relative -top-1.5 w-auto">
                      <h6 className="mb-0 text-sm font-semibold leading-normal text-slate-700">New card added for order #4395133</h6>
                      <p className="mt-1 mb-0 text-xs font-semibold leading-tight text-slate-400">20 DEC 2:20 AM</p>
                    </div>
                  </div>
                  <div className="relative mb-4 after:clear-both after:table after:content-['']">
                    <span className="w-6.5 h-6.5 text-base absolute left-4 z-10 inline-flex -translate-x-1/2 items-center justify-center rounded-full bg-white text-center font-semibold">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" className="relative z-10 leading-none text-transparent ni ni-bell-55 leading-pro bg-gradient-to-tl from-green-600 to-lime-400 bg-clip-text fill-transparent" viewBox="0 0 512 512"><g><linearGradient id="a" x1="171" x2="341" y1="342.58" y2="172.58" gradientTransform="matrix(1 0 0 -1 0 513.58)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#2492ff"></stop><stop offset="1" stopColor="#0043ae"></stop></linearGradient><path fill="url(#a)" d="M341 341c-46.9 46.9-123.1 46.9-170 0s-46.9-123.1 0-170 123.1-46.9 170 0 46.9 123.1 0 170z"></path></g></svg>
                    </span>
                    <div className="ml-[30px] pt-1.4 lg:max-w-120 relative -top-1.5 w-auto">
                      <h6 className="mb-0 text-sm font-semibold leading-normal text-slate-700">Unlock packages for development</h6>
                      <p className="mt-1 mb-0 text-xs font-semibold leading-tight text-slate-400">18 DEC 4:54 AM</p>
                    </div>
                  </div>
                  <div className="relative mb-0 after:clear-both after:table after:content-['']">
                    <span className="w-6.5 h-6.5 text-base absolute left-4 z-10 inline-flex -translate-x-1/2 items-center justify-center rounded-full bg-white text-center font-semibold">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" className="relative z-10 leading-none text-transparent ni ni-bell-55 leading-pro bg-gradient-to-tl from-green-600 to-lime-400 bg-clip-text fill-transparent" viewBox="0 0 512 512"><g><linearGradient id="a" x1="171" x2="341" y1="342.58" y2="172.58" gradientTransform="matrix(1 0 0 -1 0 513.58)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#2492ff"></stop><stop offset="1" stopColor="#0043ae"></stop></linearGradient><path fill="url(#a)" d="M341 341c-46.9 46.9-123.1 46.9-170 0s-46.9-123.1 0-170 123.1-46.9 170 0 46.9 123.1 0 170z"></path></g></svg>
                    </span>
                    <div className="ml-[30px] pt-1.4 lg:max-w-120 relative -top-1.5 w-auto">
                      <h6 className="mb-0 text-sm font-semibold leading-normal text-slate-700">New order #9583120</h6>
                      <p className="mt-1 mb-0 text-xs font-semibold leading-tight text-slate-400">17 DEC</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    );
};

export default Overview;