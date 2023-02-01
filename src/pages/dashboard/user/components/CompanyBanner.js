import React from 'react'
import companyBanner from "../../../../assets/banner.jpg"
import companyLogo from "../../../../assets/companylogo.png"

const CompanyBanner = () => {
    return (
    <div>
        {/* banner */}
        <div className="container border rounded-lg mx-auto mt-6">

            <div className="container mx-auto w-full content-center bg-[#fafafa] object-center">
                <img    src={companyBanner} 
                        alt="Company Banner" 
                        className="w-full h-96 object-cover" />
            </div>

            <div className="flex flex-col mx-auto my-6 w-full text-[#3d464d]">
                <div className="flex flex-row justify-between">
                    <div className=''> 
                        <div className="mx-6"><h1 className="text-4xl font-mono font-bold">Company Name</h1></div>
                        <div className="mt-4 mx-6"><h1 className="text-2xl font-mono font-thin text-gray-700">Verified Company</h1></div>
                        <div className="mt-4 mx-6"><p className="font-semibold ">Office Address</p></div>
                        <div className="mt-4 mx-6 w-full text-lg text-gray-700"><p>No. 2, Jalan Dr.Ide Anak Agung Gde Agung Kav. E 4.2, RT.5/RW.2, Kuningan, Kuningan Tim., Kecamatan Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12950, Indonesia </p></div>  
                    </div>

                    <div className=""> 
                        <div className="max-w-sm bg-[#fafafa] border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mx-6 mt-4">
                            <a href="/" className="w-fit ">
                                <img    className="max-w-fit w-52 h-36 content-center object-contain hover:shadow-xl" 
                                        src={companyLogo} 
                                        alt="Company Logo"/>
                            </a>
                        </div>
                        <div className="max-w-sm mx-6 text-center" >
                            <a href="/" className="w-fit text-center text-blue-600 hover:underline">Report this company</a>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 mx-6 mt-6">
                    <div className="font-semibold">Industry</div>
                    <div className="font-semibold">Website</div>
                    <div className="">
                        <a href="/">
                            <span className="text-blue-600 hover:underline">Company Industry</span></a>
                    </div>
                    <div className="">
                        <a href="/"><span className="text-blue-600 hover:underline">Company Site</span></a>
                    </div>
                </div>

            </div>

        
        
        
        
        
        </div>

        
    </div>
    )
}

export default CompanyBanner