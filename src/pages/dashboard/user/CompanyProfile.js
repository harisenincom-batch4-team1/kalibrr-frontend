import React from 'react'
import CompanyBanner from './components/CompanyBanner'
import CompanyDetails from './components/CompanyDetails'
import JobOpenings from './components/JobOpenings'
import RelatedCompany from './components/RelatedCompany'
import NavbarUserLayout from './components/NavbarUserLayout'

const CompanyProfile = () => {
return (
    <NavbarUserLayout>
        <div className='mx-auto overflow-scroll h-full scrollbar-hide'> 
        <div>
        <CompanyBanner/>
        <CompanyDetails/>
        <JobOpenings/>
        <RelatedCompany/>
        </div>
        
        
        {/* <CompanyDetails/>
        <JobOpenings/>
        <RelatedCompany/> */}
    </div>
    </NavbarUserLayout>
)
}

export default CompanyProfile