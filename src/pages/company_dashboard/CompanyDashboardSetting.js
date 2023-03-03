import { Helmet } from "react-helmet";
import { DashboardLayoutCompany } from "layouts";
import {
  CardChangePasswordCompany,
  CardDeleteAccountCompany,
  HeaderTitleCompany,
} from "components/dashboard_company";

export const CompanyDashboardSetting = () => {
  return (
    <DashboardLayoutCompany>
      <Helmet>
        <title>Pengaturan Akun Perusahaan - Kalibrr</title>
        <link
          rel="shortcut icon"
          href="/assets/favicon.ico"
          type="image/x-icon"
        ></link>
      </Helmet>
      <HeaderTitleCompany title={"Pengaturan Akun Perusahaan"} />
      <div className="w-full h-[98%] md:h-[95%] mx-auto md:pb-14 p-2 space-y-2 overflow-hidden overflow-y-scroll scrollbar-hide">
        <CardChangePasswordCompany />
        <CardDeleteAccountCompany />
      </div>
    </DashboardLayoutCompany>
  );
};
