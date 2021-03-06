import React from "react"
// import './App.css';

const staveCoffeeImg = require('./pictures/stavecoffee.png')
 
function StaveCoffee(props) {
  return (
    <div className='flex flex-col justify-center w-full bg-gray-800 text-white'>
      <h1 className="mt-12 mb-8 text-3xl mx-auto">Stave Coffee Blog</h1>
      <p className="mx-auto">Stave Coffee Blog is a business website with an integrated blog feature</p>
      <div className="flex flex-row justify-around my-4 w-2/3 mx-auto">
        <a className="hover:bg-indigo-600 hover:text-white shadow-lg rounded-lg py-6 px-12 ml-16 animate-pulse transition ease-in-out duration-700" href='https://github.com/93dannyp/stavecoffee'>Visit The Repo</a><br/>
        <a className="hover:bg-indigo-600 hover:text-white shadow-lg rounded-lg py-6 px-12 animate-pulse transition ease-in-out duration-700" href='https://stavecoffee.herokuapp.com/'>Visit The Website</a>
      </div>
      <img className="w-2/3 mx-auto rounded-lg" src={staveCoffeeImg}/>
      <div className="w-2/3 mx-auto my-12">
      <h3 className="text-xl mb-2">About this Project</h3>
      <p>Stave Coffee Blog is a website based off of the business founded by brothers Jordan Loucks and John Loucks.</p>
      <p className="mt-4">This website implements RESTful routing with full CRUD functionality. The app has a MVC structure and uses Mongoose, Node.js, Express, EJS, HTML, CSS. </p>
      <p className="mt-4">The blog is the section of the app with full CRUD functionality. This page is restricted to users with accounts only. You must sign up and then log in to view this page. This is where the user would post a blog about any topic they want (hopefully Stave Coffee related). This page lets the user edit or delete blog posts that only belong to them.</p>
      </div>
    </div>
  )
}

export default StaveCoffee;
