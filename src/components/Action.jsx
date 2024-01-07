import React from "react";

const Action = () => {
  return (
    <section className="pt-20 pb-24 bg-blue-600">
      <div className="max-w-xl mx-auto text-center">
        <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-blue-500 rounded-xl">
          Lorem ipsum
        </span>
        <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl font-heading">
          Lorem ipsum dolor sit amet consectetur
        </h2>
        <div className="mt-6">
          <a
            className="inline-block px-8 py-4 text-xs font-semibold leading-none text-blue-600 transition duration-300 bg-white border rounded hover:bg-blue-600 hover:text-white hover:border-white"
            href="#"
          >
            Check Now
          </a>
        </div>
      </div>
    </section>
  );
}; 

export default Action;
