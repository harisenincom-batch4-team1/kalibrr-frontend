import CompanyBanner from "./components/CompanyBanner";
import CompanyDetails from "./components/CompanyDetails";
import JobOpenings from "./components/JobOpenings";
import RelatedCompany from "./components/RelatedCompany";

const CompanyProfile = () => {
  return (
    <div>
      <CompanyBanner />
      <CompanyDetails />
      <JobOpenings />
      <RelatedCompany />
      {/* 
        <CompanyDetails/>
        <JobOpenings/>
        <RelatedCompany/> 
      */}
    </div>
  );
};

export default CompanyProfile;
