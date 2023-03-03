import { Helmet } from "react-helmet";
import { DashboardLayoutCompany } from "layouts";
import { HeaderTitleCompany } from "components/dashboard_company";

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
    </DashboardLayoutCompany>
  );
};
