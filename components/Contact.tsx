import React from 'react';

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center h-auto py-12  object-cover bg-teal-800  text-white" >


<h2 className="uppercase text-[4.5em] font-bold mb-6 mt-8 text-white  leading-tight mx-auto  Poppins mx-5 tracking-wide px-2">Contact Us</h2>
      
      <div className=" rounded px-5 pt-6 pb-8 mb-4">
        
        <form className="w-[360px] md:w-[80vw] xl:w-[65vw]  mx-10">
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border bg-green-50 rounded-sm w-full py-3 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block  text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border bg-green-50 rounded-sm w-full py-3 px-3 text-black eading-tight text-black focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="ex:placeholder@mail.com"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none border bg-green-50 rounded-md min-h-60 w-full py-3 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Your Message"
              rows={4}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-gray-900/70 hover:bg-blue-700 w-full text-slate-200 font-bold py-4 rounded-sm px-4  focus:outline-none focus:shadow-outline  text-lg"
              type="submit"
            >
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;