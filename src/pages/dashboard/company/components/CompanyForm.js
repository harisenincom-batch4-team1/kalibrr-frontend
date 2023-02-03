import React from 'react'
import { useForm } from "react-hook-form";
import background from "../../../../assets/bgSignup.png"
// import { useState } from 'react'
// import 'react-phone-number-input/style.css'
// import PhoneInput from 'react-phone-number-input'

const CompanyForm = () => {
  // const [value, setValue] = useState()
  // const form = document.getElementById('form');
  // const name = document.getElementById('name');
  // const location = document.getElementById('location');
  // const email = document.getElementById('email');
  // const password = document.getElementById('password');
  // const password2 = document.getElementById('password2');
  // const phone = document.getElementById('phone');
  const {register} = useForm();

  return (
    <div className="bg-cover"
    style= {{ backgroundImage: `url(${background})` }}
    >
    <div className="container mx-auto border rounded-lg pt-60 bg-white" 
          // style={{backgroundImage: `url(${background})` }}
          >
        
        {/* <ol className="flex items-center justify-center place-items-center w-full mx-auto my-10">
        <li className="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800">
          <span className="font-bold flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
          1
          </span>
        </li>
        <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
          <span className="font-bold flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
            2
          </span>
        </li>
        <li className="flex items-center w-full">
          <span className="font-bold flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
            3
          </span>
        </li>
      </ol> */}

      <div className="mx-auto">
        <h1 className="text-center font-semibold text-5xl">
          Hi Recruiter!
        </h1>
        <p className="text-center text-gray-500 text-2xl w-[600px] mx-auto my-6">
          We'd love to know more about you and your company so we can solve your hiring needs together.
        </p>
      </div>

      <div className="mx-20 border bg-[#f7f9fb]">
        <div>
          <p className="font-semibold text-3xl mx-10 my-10">Basic Information</p>
        </div>
        <div className='mx-auto'>
        
        
<form className="mx-10" id="form">

  {/* <input {...register("name")} placeholder="Full Name"/>
  <input type="submit"/> */}
  
  {/* <div class="mb-6">
    <label 
      for="name" 
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
    <input 
      {...register("name")}
      type="text" 
      id="name" 
      class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
      placeholder="" 
      required/>
  </div> */}
  
<div class="mb-6">
    <label 
      for="name" 
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
    <input 
      {...register("name")}
      type="text" 
      id="name" 
      class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
      placeholder="" 
      required/>
  </div>
  <div class="mb-6">
    <label 
      for="location" 
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location</label>
    <input
      {...register("location")}
      type="text" 
      id="location" 
      class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
      placeholder="" 
      required/>
  </div>
  <div class="mb-6">
    <label 
      for="email" 
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input
      {...register("email")}
      type="email" 
      id="email" 
      class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
      placeholder="name@flowbite.com" 
      required/>
  </div>
  <div class="mb-6">
    <label 
      for="password" 
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password
    </label>
    <input 
      {...register("password")}
      type="password" 
      id="password" 
      class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
      required/>
  </div>
  <div class="mb-6">
    <label 
      for="password2" 
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repeat password
    </label>
    <input 
    {...register("password2")}
      type="password" 
      id="password2" 
      class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
      required/>
  </div>
  <div class="mb-6">
    <label 
      for="phone" 
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone
    </label>
    <input 
      {...register("location")}
        type="text" 
        id="phone" 
        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
        placeholder="1234-567-890"
        required/>
  </div>
  <div class="mb-6">
    
    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload file</label>
    <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"/>

  </div>
  
  <div class="flex mb-6 justify-center items-center">
    <div class="flex items-center h-5">
      <input 
        id="terms" 
        type="checkbox" 
        value="" 
        class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" 
        required/>
    </div>
    <label 
      for="terms" 
      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
      I agree with the <a href="/" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>
    </label>
  </div>
  <div className="flex justify-center justify-items-center items-center w-full">
  <button 
  type="submit" 
  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    Register new account
  </button>
  </div>
  
</form>

  
        </div>
        
      </div>

    </div>

    </div>
  )
}

export default CompanyForm