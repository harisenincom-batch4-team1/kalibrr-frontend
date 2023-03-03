import { Helmet } from "react-helmet";
import { DashboardLayoutCompany } from "layouts";
import { HeaderTitleCompany } from "components/dashboard_company";

export const CompanyDashboardApplicant = () => {
  return (
    <DashboardLayoutCompany>
      <Helmet>
        <title>Pelamar Perusahaan - Kalibrr</title>
        <link
          rel="shortcut icon"
          href="/assets/favicon.ico"
          type="image/x-icon"
        ></link>
      </Helmet>
      <HeaderTitleCompany title={"Pelamar"} />
    </DashboardLayoutCompany>
  );
};
