import { Helmet } from "react-helmet";
import CardChangePassword from "../../components/dashboard_company/setting/CardChangePassword";
import CardDeleteAccount from "../../components/dashboard_company/setting/CardDeleteAccount";
import HeaderTitle from "../../components/dashboard_company/header/HeaderTitle";
import NavbarUserLayout from "../../layouts/DashboardLayoutCompany";

const CompanyDashboardSetting = () => {
  return (
    <NavbarUserLayout>
      <Helmet>
        <title>Pengaturan Akun Perusahaan - Kalibrr</title>
        <link
          rel="shortcut icon"
          href="/assets/favicon.ico"
          type="image/x-icon"
        ></link>
      </Helmet>
      <HeaderTitle title={"Pengaturan Akun Perusahaan"} />
      <div className="w-full h-[98%] md:h-[95%] mx-auto md:pb-14 p-2 space-y-2 overflow-hidden overflow-y-scroll scrollbar-hide">
        <CardChangePassword />
        <CardDeleteAccount />
      </div>
    </NavbarUserLayout>
  );
};

export default CompanyDashboardSetting;
