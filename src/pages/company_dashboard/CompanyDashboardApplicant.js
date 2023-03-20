import { Helmet } from "react-helmet";
import { DashboardLayoutCompany } from "layouts";
import { HeaderTitleCompany } from "components/dashboard_company";
import { CardApplicant } from "components/dashboard_company";

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
      <div
        className="max-w-full mx-auto gap-2 sm:pr-0 rounded-lg overflow-hidden overflow-y-scroll overflow-x-scroll scrollbar-hide"
      >
        <CardApplicant />
      </div>
    </DashboardLayoutCompany>
  );
};
