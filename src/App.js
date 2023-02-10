import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./pages/homepage";
import JobList from "./pages/job/JobList";
import JobDetail from "./pages/job/JobDetail";
import NotFound from "./pages/not_found";

import SignUp from "./pages/auth/SignUp";
import UserLogin from "./pages/auth/UserLogin";
import UserRegister from "./pages/auth/UserRegister";
import UserDashboardProfile from "./pages/user_dashboard/UserDashboardProfile";
import UserDashboardApplication from "./pages/user_dashboard/UserDashboardApplication";
import UserDashboardMessage from "./pages/user_dashboard/UserDashboardMessage";
import UserDashboardSaved from "./pages/user_dashboard/UserDashboardSaved";
import UserDashboardSetting from "./pages/user_dashboard/UserDashboardSetting";
import CompanyDashboardProfile from "./pages/company_dashboard/CompanyDashboardProfile";

import CompanyLogin from "./pages/auth/CompanyLogin";
import CompanyRegister from "./pages/auth/CompanyRegister";
import CompanyDashboardJob from "./pages/company_dashboard/CompanyDashboardJob";
import CompanyDashboardApplicant from "./pages/company_dashboard/CompanyDashboardApplicant";
import CompanyDashboardMessage from "./pages/company_dashboard/CompanyDashboardMessage";
import CompanyDashboardSetting from "./pages/company_dashboard/CompanyDashboardSetting";
import CompanyProfile from "./pages/company/CompanyProfile";

import { JobListProvider } from "./context/joblist-context";
import { UserLoginProvider } from "./context/user-login-context";
import { UserRegisterProvider } from "./context/user-register-context";
import { CompanyJobProvider } from "./context/company-job-context";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<Homepage />} />
        <Route path="/job" element={
          <JobListProvider>
            <JobList />
          </JobListProvider>
        } />
        <Route path="/job/:id" element={
          <JobListProvider>
            <JobDetail />
          </JobListProvider>}
        />

        {/* Auth */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/user/login" element={
          <UserLoginProvider>
            <UserLogin />
          </UserLoginProvider>
        } />
        <Route path="/user/register" element={
          <UserRegisterProvider>
            <UserRegister />
          </UserRegisterProvider>
        } />
        <Route path="/company/login" element={<CompanyLogin />} />
        <Route path="/company/register" element={<CompanyRegister />} />

        {/* Protect Route User Dashboard  */}
        <Route path="/user/dashboard/profile" element={<UserDashboardProfile />} />
        <Route path="/user/dashboard/job" element={<JobList /> } />
        <Route path="/user/dashboard/job/:id" element={<JobDetail />} />
        <Route path="/user/dashboard/application" element={<UserDashboardApplication />} />
        <Route path="/user/dashboard/message" element={<UserDashboardMessage />} />
        <Route path="/user/dashboard/saved" element={<UserDashboardSaved />} />
        <Route path="/user/dashboard/setting" element={<UserDashboardSetting />} />
        <Route path="/user/company-profile" element={<CompanyProfile />} />

        {/* Protect Route Company Dashboard */}
        <Route path="/company/dashboard/profile" element={<CompanyDashboardProfile />} />
        <Route path="/company/dashboard/job" element={
          <CompanyJobProvider>
            <CompanyDashboardJob />
          </CompanyJobProvider>
        } />
        <Route path="/company/dashboard/applicant" element={<CompanyDashboardApplicant />} />
        <Route path="/company/dashboard/message" element={<CompanyDashboardMessage />} />
        <Route path="/company/dashboard/setting" element={<CompanyDashboardSetting />} />

        {/* Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
