import { Helmet } from "react-helmet";
import HeaderTitle from "../../components/dashboard_company/header/HeaderTitle";
import NavbarUserLayout from "../../layouts/DashboardLayoutCompany";

const CompanyDashboardProfile = () => {
  return (
    <NavbarUserLayout>
      <Helmet>
        <title>Profil Perusahaan - Kalibrr</title>
        <link
          rel="shortcut icon"
          href="/assets/favicon.ico"
          type="image/x-icon"
        ></link>
      </Helmet>
      <HeaderTitle title={"Profil Perusahaan"} />
    </NavbarUserLayout>
  );
};

export default CompanyDashboardProfile;
