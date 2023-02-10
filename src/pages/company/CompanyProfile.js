import NavbarUserLayout from "../user_dashboard/layouts/NavbarUserLayout";
import CompanyBanner from "./components/CompanyBanner";
import CompanyDetails from "./components/CompanyDetails";
import JobOpenings from "./components/JobOpenings";
import RelatedCompany from "./components/RelatedCompany";

const CompanyProfile = () => {
  return (
    <NavbarUserLayout>
      <div className="mx-auto overflow-scroll h-full scrollbar-hide">
        <div>
          <CompanyBanner />
          <CompanyDetails />
          <JobOpenings />
          <RelatedCompany />
        </div>
      </div>
    </NavbarUserLayout>
  );
};

export default CompanyProfile;
