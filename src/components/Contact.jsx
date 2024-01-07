import React from "react";

const Contact = () => {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <div className="max-w-md mb-8 mx-auto">
            <span className="text-sm text-gray-400">Contact Us</span>
            <h2 className="mt-2 text-4xl font-bold font-heading">
              We will be glad to hear from you!
            </h2>
          </div>
          <div>
            <form>
              <div className="mb-4">
                <input
                  className="w-full p-4 text-xs font-semibold leading-none bg-gray-50 rounded outline-none"
                  type="text"
                  placeholder="Subject"
                />
              </div>
              <div className="mb-4">
                <input
                  className="w-full p-4 text-xs font-semibold leading-none bg-gray-50 rounded outline-none"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div className="mb-4">
                <input
                  className="w-full p-4 text-xs font-semibold leading-none bg-gray-50 rounded outline-none"
                  type="email"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-4">
                <textarea
                  className="w-full h-24 p-4 text-xs font-semibold leading-none resize-none bg-gray-50 rounded outline-none"
                  type="text"
                  placeholder="Message..."
                  defaultValue={""}
                />
              </div>
              <div className="flex justify-between items-center">
                <button
                  className="py-4 px-8 text-sm text-white font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
