import React from "react"
import Twitter from "./TwitterContainer";
import Medium from "./MediumContainer";
 
function About(props) {
  return (
    <div className="sm:h-screen flex flex-col sm:flex-row content-start bg-gradient-to-b from-gray-300 to-gray-900">
      <div className="flex flex-col sm:w-1/4 my-2 sm:mx-1 sm:ml-1 p-4 bg-white rounded-md">
        <h1 className="text-xl font-semibold">bio</h1>
        <p className="py-1 font-semibold">Hi, I'm Daniel.</p>
        <small className="">I'm a small business owner who designs and builds websites that make the internet a better place.</small>
        <div className="my-8 flex flex-col">
          <p className="font-semibold">Connect with me.</p>
            <a className="text-blue-400 underline hover:text-blue-400 hover:semibold hover:bg-blue-100 -mx-2 px-2 py-4 rounded-md hover:text-xl transition ease-in-out duration-700 underline" href="https://twitter.com/danielperkinsii">Twitter</a>
            <a className="text-blue-400 underline hover:text-green-600 hover:semibold hover:bg-green-100 -mx-2 px-2 py-4 rounded-md hover:text-xl transition ease-in-out duration-700 underline" href="https://github.com/danielperkinsii">GitHub</a>
            <a className="text-blue-400 underline hover:text-blue-700 hover:semibold hover:bg-blue-100 -mx-2 px-2 py-4 rounded-md hover:text-xl transition ease-in-out duration-700 underline" href="https://www.linkedin.com/in/daniel-perkins-b477871a7/">LinkedIn</a>
            <a className="text-blue-400 underline hover:text-pink-600 hover:semibold hover:bg-pink-100 hover:text-xl transition ease-in-out duration-700 -mx-2 px-2 py-4 rounded-md underline" href="https://www.instagram.com/93dannyp/">Instagram</a>
        </div>
      </div>
      <div className="flex w-full content-start flex overflow-hidden">
        <div className="flex flex-col sm:flex-row justify-end w-full overflow-y-auto">
          <div className="flex flex-col w-full sm:w-2/3 sm:my-2 sm:mb-2 sm:mx-1 p-4 bg-white rounded-md">
            <h1 className="text-xl font-semibold">blog</h1>
            <Medium />
          </div>
          <div className="flex flex-col w-full sm:w-1/3 my-2 sm:mb-2 sm:mx-1 py-4 sm:pr-1 bg-white rounded-md">
            <a href="https://twitter.com/danielperkinsii" className="text-xl text-blue-400 mx-auto font-semibold w-full transition ease-in-out duration-700 underline">@danielperkinsii</a>
            <Twitter />
          </div>
        </div>
      </div>
    </div>
  )
}
 
export default About;
