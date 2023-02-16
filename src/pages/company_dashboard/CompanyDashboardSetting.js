import CardChangeEmail from "../../components/dashboard_company/setting/CardChangeEmail";
import CardChangePassword from "../../components/dashboard_company/setting/CardChangePassword";
import CardDeleteAccount from "../../components/dashboard_company/setting/CardDeleteAccount";
import HeaderTitle from "../../components/dashboard_company/header/HeaderTitle";
import NavbarUserLayout from "../../layouts/DashboardLayoutCompany";
import { Helmet } from "react-helmet";

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
      <div className="max-w-full h-[95%] pb-16 mx-auto px-5 py-5 space-y-5 overflow-hidden overflow-y-scroll scrollbar-hide">
        <CardChangeEmail />
        <CardChangePassword />
        <CardDeleteAccount />
      </div>
    </NavbarUserLayout>
  );
};

export default CompanyDashboardSetting;
