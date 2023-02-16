import { Helmet } from "react-helmet";
import NavbarUserLayout from "../../layouts/DashboardLayoutCompany";
import HeaderTitle from "../../components/dashboard_company/header/HeaderTitle";

const CompanyDashboardApplicant = () => {
  return (
    <NavbarUserLayout>
      <Helmet>
        <title>Pelamar Perusahaan - Kalibrr</title>
        <link
          rel="shortcut icon"
          href="/assets/favicon.ico"
          type="image/x-icon"
        ></link>
      </Helmet>
      <HeaderTitle title={"Pelamar"} />
    </NavbarUserLayout>
  );
};

export default CompanyDashboardApplicant;
