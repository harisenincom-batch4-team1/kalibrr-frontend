import React from 'react'
import companyLogo from "../../../../assets/companylogo.png"
import {BsHeart} from 'react-icons/bs';


// const mystyle = {
//     position: "absolute", 
//     inset: "auto", "auto", 0, 0, 
//     margin: 0, 
//     transform: "translate3d (897px, 5637px, 0px)",
// };
const JobOpenings = () => {
  return (
    <div>
        {/* Job Openings */}
        <div className="container rounded-lg mx-auto border my-10">

        {/* Job Search */}

            <div className="flex flex-row mx-auto bg-blue-500">

                <div className="text-white text-xl font-bold my-8 ml-6 basis-1/2">Job Opening at Company</div>
            
<div className="w-full my-auto basis-1/2">
    <form>
        <div className="flex">
            <label for="search-dropdown"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
            Job Function        

            </label>

            <button id="dropdown-button" 
            data-dropdown-toggle="dropdown" 
            className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white dark:border-gray-600" 
            type="button">
                Job function 
                <svg aria-hidden="true" 
                className="w-4 h-4 ml-1" 
                fill="currentColor" 
                viewBox="0 0 20 20" 
                xmlns="http://www.w3.org/2000/svg">
                    <path 
                    fill-rule="evenodd" 
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
                    clip-rule="evenodd">
                    </path>
                </svg>
                </button>

                <div id="dropdown-button" 
                className="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 "
                data-popper-reference-hidden="" 
                data-popper-escaped="" 
                data-popper-placement="top"
                // style={mystyle} 
                >
                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" 
                    aria-labelledby="dropdown-button">
                        <li>
                            <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-left">Pemerah Bisa Ular</button>
                        </li>
                        <li>
                            <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-left">Penentu Jenis Kelamin Ayam</button>
                        </li>
                        <li>
                            <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-left">Petani Eceng Gondok</button>
                        </li>
                        <li>
                            <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-left">Pencicip Makanan Anjing</button>
                        </li>
                    </ul>

                </div>

                <div className="relative w-3/4">
                    <input type="search" 
                    id="search-dropdown" 
                    className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " 
                    placeholder="Search Jobs..." required />
                    <button type="submit" 
                    className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-500 rounded-r-lg border border-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700">
                        <svg aria-hidden="true" 
                        className="w-5 h-5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" 
                            stroke-linejoin="round" 
                            stroke-width="2" 
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z">
                            </path>
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>
                </div>
        </div>
    </form>
</div>

            </div>

            {/* Job Cards */}

    <div className="">
        <div className="container w-full h-48 border">
            <div className="flex flex-row">
                <div className="max-w-sm bg-[#fafafa] mx-6 my-8">
                    <a href="/">
                    <img className="w-20 h-20 content-start object-contain" 
                    src={companyLogo} 
                    alt="Company Logo" />
                    </a>
                </div>
                <div className="mx-6 my-8 grow flex flex-col">
                    <a href="/" className="w-fit">
                        <p className="font-bold hover:underline">Job Title</p>
                    </a>
                    <a href="/" className="w-fit ">
                        <div className="font-bold hover:underline text-blue-600 mt-2 ">Company Name</div>
                    </a>
                    <a href="/" className="w-fit">
                        <p className="hover:underline">Job Location</p>
                    </a>
                    <p className="mt-2 text-gray-700 text-sm">Job Time Posted - Job Last Apply</p>
                    <p className="text-gray-700 text-xs">Last Recruiter Hiring</p>
                </div>
                    <div className="mx-6 my-8"><BsHeart/>
                    </div>
            </div>
        </div>

        <div className="container w-full h-48 border">
            <div className="flex flex-row">
                <div className="max-w-sm bg-[#fafafa] mx-6 my-8">
                    <a href="/">
                    <img className="w-20 h-20 content-start object-contain" 
                    src={companyLogo} 
                    alt="Company Logo" />
                    </a>
                </div>
                <div className="mx-6 my-8 grow flex flex-col">
                    <a href="/" className="w-fit">
                        <p className="font-bold hover:underline">Job Title</p>
                    </a>
                    <a href="/" className="w-fit ">
                        <div className="font-bold hover:underline text-blue-600 mt-2 ">Company Name</div>
                    </a>
                    <a href="/" className="w-fit">
                        <p className="hover:underline">Job Location</p>
                    </a>
                    <p className="mt-2 text-gray-700 text-sm">Job Time Posted - Job Last Apply</p>
                    <p className="text-gray-700 text-xs">Last Recruiter Hiring</p>
                </div>
                    <div className="mx-6 my-8"><BsHeart/>
                    </div>
            </div>
        </div>

        <div className="container w-full h-48 border">
            <div className="flex flex-row">
                <div className="max-w-sm bg-[#fafafa] mx-6 my-8">
                    <a href="/">
                    <img className="w-20 h-20 content-start object-contain" 
                    src={companyLogo} 
                    alt="Company Logo" />
                    </a>
                </div>
                <div className="mx-6 my-8 grow flex flex-col">
                    <a href="/" className="w-fit">
                        <p className="font-bold hover:underline">Job Title</p>
                    </a>
                    <a href="/" className="w-fit ">
                        <div className="font-bold hover:underline text-blue-600 mt-2 ">Company Name</div>
                    </a>
                    <a href="/" className="w-fit">
                        <p className="hover:underline">Job Location</p>
                    </a>
                    <p className="mt-2 text-gray-700 text-sm">Job Time Posted - Job Last Apply</p>
                    <p className="text-gray-700 text-xs">Last Recruiter Hiring</p>
                </div>
                    <div className="mx-6 my-8"><BsHeart/>
                    </div>
            </div>
        </div>

        <div className="container w-full h-48 border">
            <div className="flex flex-row">
                <div className="max-w-sm bg-[#fafafa] mx-6 my-8">
                    <a href="/">
                    <img className="w-20 h-20 content-start object-contain" 
                    src={companyLogo} 
                    alt="Company Logo" />
                    </a>
                </div>
                <div className="mx-6 my-8 grow flex flex-col">
                    <a href="/" className="w-fit">
                        <p className="font-bold hover:underline">Job Title</p>
                    </a>
                    <a href="/" className="w-fit ">
                        <div className="font-bold hover:underline text-blue-600 mt-2 ">Company Name</div>
                    </a>
                    <a href="/" className="w-fit">
                        <p className="hover:underline">Job Location</p>
                    </a>
                    <p className="mt-2 text-gray-700 text-sm">Job Time Posted - Job Last Apply</p>
                    <p className="text-gray-700 text-xs">Last Recruiter Hiring</p>
                </div>
                    <div className="mx-6 my-8"><BsHeart/>
                    </div>
            </div>
        </div>

        <div className="container w-full h-48 border">
            <div className="flex flex-row">
                <div className="max-w-sm bg-[#fafafa] mx-6 my-8">
                    <a href="/">
                    <img className="w-20 h-20 content-start object-contain" 
                    src={companyLogo} 
                    alt="Company Logo" />
                    </a>
                </div>
                <div className="mx-6 my-8 grow flex flex-col">
                    <a href="/" className="w-fit">
                        <p className="font-bold hover:underline">Job Title</p>
                    </a>
                    <a href="/" className="w-fit ">
                        <div className="font-bold hover:underline text-blue-600 mt-2 ">Company Name</div>
                    </a>
                    <a href="/" className="w-fit">
                        <p className="hover:underline">Job Location</p>
                    </a>
                    <p className="mt-2 text-gray-700 text-sm">Job Time Posted - Job Last Apply</p>
                    <p className="text-gray-700 text-xs">Last Recruiter Hiring</p>
                </div>
                    <div className="mx-6 my-8"><BsHeart/>
                    </div>
            </div>
        </div>
    </div>
        </div>

        {/* Pagination */}
    <div className="container mx-auto">
        <div className="flex flex-col place-items-center justify-center">
            <nav aria-label="Page Navigation">
                <ul className="inline-flex items-center -space-x-px">
                    <li>
                        <a href="/" className="block px-3 py-2 ml-0 leading-tight">
                        <span className="sr-only">Previous</span>
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        </a>
                    </li>
                    <li>
                        <button 
                        href="/" 
                        aria-current="page"
                        className="leading-tight z-10 w-12 h-12 border-2 rounded-full font-semibold bg-transparent: focus:bg-blue-300 focus:text-blue-600 hover:bg-blue-700 hover:text-white border-blue-300 text-gray-700 mx-2">
                            1
                        </button>
                    </li>
                    <li>
                        <button 
                        href="/" 
                        className="w-12 h-12 border-2 rounded-full font-semibold bg-transparent: focus:bg-blue-300 focus:text-blue-600 hover:bg-blue-700 hover:text-white border-blue-300 text-gray-700 mx-2">
                            2
                        </button>
                    </li>
                    <li>
                        <button 
                        href="/" 
                        className="w-12 h-12 border-2 rounded-full font-semibold bg-transparent: focus:bg-blue-300 focus:text-blue-600 hover:bg-blue-700 hover:text-white border-blue-300 text-gray-700 mx-2">
                            3
                        </button>
                    </li>
                    <li>
                        <button 
                        href="/" 
                        className="w-12 h-12 border-2 rounded-full font-semibold bg-transparent: focus:bg-blue-300 focus:text-blue-600 hover:bg-blue-700 hover:text-white border-blue-300 text-gray-700 mx-2">
                            4
                        </button>
                    </li>
                    <li>
                        <button 
                        href="/" 
                        className="w-12 h-12 border-2 rounded-full font-semibold bg-transparent: focus:bg-blue-300 focus:text-blue-600 hover:bg-blue-700 hover:text-white border-blue-300 text-gray-700 mx-2">
                            5
                        </button>
                    </li>
                    <li>
                        <a href="/" className="block px-3 py-2 leading-tight">
                            <span className="sr-only">Next</span>
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="flex place-items-center justify-center my-4 text-gray-700">
                5 / 50 jobs
            </div>
        </div>
    </div>        
    </div>
  )
}

export default JobOpenings