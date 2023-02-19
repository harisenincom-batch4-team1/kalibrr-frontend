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
import UserDashboardSetting from "./pages/user_dashboard/UserDashboardSetting";
import CompanyDashboardProfile from "./pages/company_dashboard/CompanyDashboardProfile";

import CompanyLogin from "./pages/auth/CompanyLogin";
import CompanyRegister from "./pages/auth/CompanyRegister";
import CompanyDashboardJob from "./pages/company_dashboard/CompanyDashboardJob";
import CompanyDashboardApplicant from "./pages/company_dashboard/CompanyDashboardApplicant";
import CompanyDashboardSetting from "./pages/company_dashboard/CompanyDashboardSetting";

import { JobListProvider } from "./context/joblist-context";
import { UserLoginProvider } from "./context/user-login-context";
import { UserRegisterProvider } from "./context/user-register-context";
import { CompanyJobProvider } from "./context/company-job-context";
import { UserJobApplicationProvider } from "./context/user-job-application";
import { UserSettingProvider } from "./context/user-setting-context";
import { UserProfileProvider } from "./context/user-profile-context";
import { CompanySettingProvider } from "./context/company-setting-context";
import { CompanyLoginProvider } from "./context/company-login-context";
import { CompanyProfileProvider } from "./context/company-profile-context";
import { GlobalProvider } from "./context/global-context";
import { ToastContainer } from "react-toastify";
import ProtectRoute from "./helpers/ProtectRoute";
import AuthPage from "./helpers/AuthPage";

const App = () => {
  return (
    <>
      <ToastContainer />
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            {/* Public Route */}
            <Route path="/" element={<Homepage />} />
            <Route
              path="/job"
              element={
                <JobListProvider>
                  <JobList />
                </JobListProvider>
              }
            />
            <Route
              path="/job/:id"
              element={
                <JobListProvider>
                  <JobDetail />
                </JobListProvider>
              }
            />

            {/* Auth */}
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/user/login"
              element={
                <AuthPage>
                  <UserLoginProvider>
                    <UserLogin />
                  </UserLoginProvider>
                </AuthPage>
              }
            />
            <Route
              path="/user/register"
              element={
                <AuthPage>
                  <UserRegisterProvider>
                    <UserRegister />
                  </UserRegisterProvider>
                </AuthPage>
              }
            />
            <Route
              path="/company/login"
              element={
                <CompanyLoginProvider>
                  <CompanyLogin />
                </CompanyLoginProvider>
              }
            />
            <Route path="/company/register" element={<CompanyRegister />} />

            {/* Protect Route User Dashboard  */}
            <Route
              path="/user/dashboard/profile"
              element={
                <ProtectRoute>
                  <UserProfileProvider>
                    <UserDashboardProfile />
                  </UserProfileProvider>
                </ProtectRoute>
              }
            />
            <Route
              path="/user/dashboard/application"
              element={
                <ProtectRoute>
                  <UserJobApplicationProvider>
                    <UserDashboardApplication />
                  </UserJobApplicationProvider>
                </ProtectRoute>
              }
            />
            <Route
              path="/user/dashboard/setting"
              element={
                <ProtectRoute>
                  <UserSettingProvider>
                    <UserDashboardSetting />
                  </UserSettingProvider>
                </ProtectRoute>
              }
            />

            {/* Protect Route Company Dashboard */}
            <Route
              path="/company/dashboard/profile"
              element={
                <CompanyProfileProvider>
                  <CompanyDashboardProfile />
                </CompanyProfileProvider>
              }
            />
            <Route
              path="/company/dashboard/job"
              element={
                <CompanyJobProvider>
                  <CompanyDashboardJob />
                </CompanyJobProvider>
              }
            />
            <Route
              path="/company/dashboard/applicant"
              element={<CompanyDashboardApplicant />}
            />
            <Route
              path="/company/dashboard/setting"
              element={
                <CompanySettingProvider>
                  <CompanyDashboardSetting />
                </CompanySettingProvider>
              }
            />

            {/* Not Found */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  );
};

export default App;
