
const Price = () => {
  return (
    <section
      className="py-20 bg-top bg-no-repeat xl:bg-contain"
      style={{
        backgroundImage: 'url("metis-assets/backgrounds/intersect.svg")',
      }}
    >
      <div className="container px-4 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="max-w-lg mx-auto mb-4 text-4xl font-bold font-heading">
            <span className="text-blue-600">choose</span>
            <span>your best plan</span>
          </h2>
          <p className="max-w-sm mx-auto text-[14px] text-gray-400">
            Best for freelance developers who need to save their time
          </p>
        </div>
        <div className="flex flex-wrap -mx-3">
          <div className="w-full px-3 mb-6 md:w-1/2 lg:w-1/3">
            <div className="px-4 pt-16 pb-8 text-center bg-white rounded shadow">
              <img
                className="h-20 mx-auto mb-6"
                src="images/people.png"
                alt=""
              />
              <h3 className="mb-2 text-4xl font-bold font-heading">Begginer</h3>
              <span className="text-4xl font-bold text-blue-600 font-heading">
                $32.99
              </span>
              <p className="mt-2 mb-8 text-gray-400">user per month</p>
              <div className="flex flex-col items-center mb-8">
                <ul className="text-gray-400">
                  <li className="flex mb-3">
                    <svg
                      className="w-6 h-6 mr-2 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>3 Emails</span>
                  </li>
                  <li className="flex mb-3">
                    <svg
                      className="w-6 h-6 mr-2 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>1 Datebases</span>
                  </li>
                  <li className="flex mb-3">
                    <svg
                      className="w-6 h-6 mr-2 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Unlimited Domains</span>
                  </li>
                  <li className="flex">
                    <svg
                      className="w-6 h-6 mr-2 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>10 GB Storage</span>
                  </li>
                </ul>
              </div>
              <div>
                <a
                  className="block px-6 py-4 mb-4 text-xs font-semibold leading-none text-center text-white bg-blue-600 rounded sm:inline-block sm:mb-0 sm:mr-3 hover:bg-blue-700"
                  href="#"
                >
                  Start Free Trial
                </a>
                <a
                  className="block px-6 py-4 text-xs font-semibold leading-none text-center text-gray-500 bg-white border border-gray-200 rounded sm:inline-block hover:text-gray-600 hover:border-gray-300"
                  href="#"
                >
                  Purchase
                </a>
              </div>
            </div>
          </div>
          <div className="w-full px-3 mb-6 md:w-1/2 lg:w-1/3">
            <div className="px-4 pt-16 pb-8 text-center text-white bg-gray-800 rounded shadow">
              <img
                className="h-20 mx-auto mb-6"
                src="images/job-interview.png"
                alt=""
              />
              <h3 className="mb-2 text-4xl font-bold font-heading">
                Intermediate
              </h3>
              <span className="text-4xl font-bold font-heading">$55.99</span>
              <p className="mt-2 mb-8">user per month</p>
              <div className="flex flex-col items-center mb-8">
                <ul>
                  <li className="flex items-center mb-3">
                    <svg
                      className="w-6 h-6 mr-2 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>6 Emails</span>
                  </li>
                  <li className="flex items-center mb-3">
                    <svg
                      className="w-6 h-6 mr-2 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>4 Datebases</span>
                  </li>
                  <li className="flex items-center mb-3">
                    <svg
                      className="w-6 h-6 mr-2 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Unlimited Domains</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-6 h-6 mr-2 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>35 GB Storage</span>
                  </li>
                </ul>
              </div>
              <div>
                <a
                  className="block px-6 py-4 mb-4 text-xs font-semibold leading-none text-center text-blue-600 bg-white rounded sm:inline-block sm:mb-0 sm:mr-3 hover:bg-gray-50"
                  href="#"
                >
                  Start Free Trial
                </a>
                <a
                  className="block px-6 py-4 text-xs font-semibold leading-none text-center text-white border border-gray-500 rounded sm:inline-block hover:border-gray-400"
                  href="#"
                >
                  Purchase
                </a>
              </div>
            </div>
          </div>
          <div className="w-full px-3 mb-6 lg:w-1/3">
            <div className="px-4 pt-16 pb-8 text-center bg-white rounded shadow">
              <img
                className="h-20 mx-auto mb-6"
                src="images/team-management.png"
                alt=""
              />
              <h3 className="mb-2 text-4xl font-bold font-heading">
                Professional
              </h3>
              <span className="text-4xl font-bold text-blue-600 font-heading">
                $62.99
              </span>
              <p className="mt-2 mb-8 text-gray-400">user per month</p>
              <div className="flex flex-col items-center mb-8">
                <ul className="text-gray-400">
                  <li className="flex mb-3">
                    <svg
                      className="w-6 h-6 mr-2 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>12 Emails</span>
                  </li>
                  <li className="flex mb-3">
                    <svg
                      className="w-6 h-6 mr-2 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>8 Datebases</span>
                  </li>
                  <li className="flex mb-3">
                    <svg
                      className="w-6 h-6 mr-2 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Unlimited Domains</span>
                  </li>
                  <li className="flex">
                    <svg
                      className="w-6 h-6 mr-2 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>50 GB Storage</span>
                  </li>
                </ul>
              </div>
              <div>
                <a
                  className="block px-6 py-4 mb-4 text-xs font-semibold leading-none text-center text-white bg-blue-600 rounded sm:inline-block sm:mb-0 sm:mr-3 hover:bg-blue-700"
                  href="#"
                >
                  Start Free Trial
                </a>
                <a
                  className="block px-6 py-4 text-xs font-semibold leading-none text-center text-gray-500 bg-white border border-gray-200 rounded sm:inline-block hover:text-gray-600 hover:border-gray-300"
                  href="#"
                >
                  Purchase
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;
