import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserDashboardProfile from "./pages/user_dashboard/UserDashboardProfile";
import UserDashboardApplication from "./pages/user_dashboard/UserDashboardApplication";
import UserDashboardMessage from "./pages/user_dashboard/UserDashboardMessage";
import UserDashboardSaved from "./pages/user_dashboard/UserDashboardSaved";
import UserDashboardSetting from "./pages/user_dashboard/UserDashboardSetting";
import CompanyDashboardProfile from "./pages/company_dashboard/CompanyDashboardProfile";
import CompanyDashboardJob from "./pages/company_dashboard/CompanyDashboardJob";
import CompanyDashboardApplicant from "./pages/company_dashboard/CompanyDashboardApplicant";
import CompanyDashboardMessage from "./pages/company_dashboard/CompanyDashboardMessage";
import CompanyDashboardSetting from "./pages/company_dashboard/CompanyDashboardSetting";
import CompanyProfile from "./pages/company/CompanyProfile";
import CompanyRegister from "./pages/company/CompanyRegister";
import UserLogin from "./pages/auth/UserLogin";
import UserRegister from "./pages/auth/UserRegister";
import SignUp from "./pages/signup/SignUp";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<Home />} />
        <Route path="/company/register" element={<CompanyRegister />} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/user/register" element={<UserRegister />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Protect Route User Dashboard  */}
        <Route path="/user/dashboard/profile" element={<UserDashboardProfile />} />
        <Route path="/user/dashboard/application" element={<UserDashboardApplication />} />
        <Route path="/user/dashboard/message" element={<UserDashboardMessage />} />
        <Route path="/user/dashboard/saved" element={<UserDashboardSaved />} />
        <Route path="/user/dashboard/setting" element={<UserDashboardSetting />} />
        <Route path="/user/company-profile" element={<CompanyProfile />} />

        {/* Protect Route Company Dashboard */}
        <Route path="/company/dashboard/profile" element={<CompanyDashboardProfile />} />
        <Route path="/company/dashboard/job" element={<CompanyDashboardJob />} />
        <Route path="/company/dashboard/applicant" element={<CompanyDashboardApplicant />}/>
        <Route path="/company/dashboard/message" element={<CompanyDashboardMessage />} />
        <Route path="/company/dashboard/setting" element={<CompanyDashboardSetting />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
