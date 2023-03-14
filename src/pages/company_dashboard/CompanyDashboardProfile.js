import { Helmet } from "react-helmet";
import { DashboardLayoutCompany } from "layouts";
import { CardBasicInformationCompany } from "components/dashboard_company/profile";
import { HeaderTitleCompany } from "components/dashboard_company/header";

export const CompanyDashboardProfile = () => {
  return (
    <DashboardLayoutCompany>
      <Helmet>
        <title>Profil Perusahaan - Kalibrr</title>
        <link
          rel="shortcut icon"
          href="/assets/favicon.ico"
          type="image/x-icon"
        ></link>
      </Helmet>
      <HeaderTitleCompany title={"Profil Perusahaan"} />
      <div className="max-w-full h-[95%] pb-16 mx-auto p-2 space-y-2 overflow-hidden overflow-y-scroll scrollbar-hide">
        <CardBasicInformationCompany />
      </div>
    </DashboardLayoutCompany>
  );
};
