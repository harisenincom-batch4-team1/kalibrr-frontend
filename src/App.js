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
import { CompanyLoginProvider } from "./context/company-login-context";
import { CompanyRegisterProvider } from "./context/company-register-context";
import { CompanyJobProvider } from "./context/company-job-context";
import { UserJobApplicationProvider } from "./context/user-job-application";
import { UserSettingProvider } from "./context/user-setting-context";
import { UserProfileProvider } from "./context/user-profile-context";
import { CompanySettingProvider } from "./context/company-setting-context";
import { CompanyProfileProvider } from "./context/company-profile-context";
import { GlobalProvider } from "./context/global-context";
import { ToastContainer } from "react-toastify";
import UserProtectRoute from "./helpers/UserProtectRoute";
import UserAuthPage from "./helpers/UserAuthPage";
import CompanyProtectRoute from "./helpers/CompanyProtectRoute";
import CompanyAuthPage from "./helpers/CompanyAuthPage";

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
                <UserAuthPage>
                  <UserLoginProvider>
                    <UserLogin />
                  </UserLoginProvider>
                </UserAuthPage>
              }
            />
            <Route
              path="/user/register"
              element={
                <UserAuthPage>
                  <UserRegisterProvider>
                    <UserRegister />
                  </UserRegisterProvider>
                </UserAuthPage>
              }
            />
            <Route
              path="/company/login"
              element={
                <CompanyAuthPage>
                  <CompanyLoginProvider>
                    <CompanyLogin />
                  </CompanyLoginProvider>
                </CompanyAuthPage>
              }
            />
            <Route
              path="/company/register"
              element={
                <CompanyAuthPage>
                  <CompanyRegisterProvider>
                    <CompanyRegister />
                  </CompanyRegisterProvider>
                </CompanyAuthPage>
              }
            />

            {/* Protect Route User Dashboard  */}
            <Route
              path="/user/dashboard/profile"
              element={
                <UserProtectRoute>
                  <UserProfileProvider>
                    <UserDashboardProfile />
                  </UserProfileProvider>
                </UserProtectRoute>
              }
            />
            <Route
              path="/user/dashboard/application"
              element={
                <UserProtectRoute>
                  <UserJobApplicationProvider>
                    <UserDashboardApplication />
                  </UserJobApplicationProvider>
                </UserProtectRoute>
              }
            />
            <Route
              path="/user/dashboard/setting"
              element={
                <UserProtectRoute>
                  <UserSettingProvider>
                    <UserDashboardSetting />
                  </UserSettingProvider>
                </UserProtectRoute>
              }
            />

            {/* Protect Route Company Dashboard */}
            <Route
              path="/company/dashboard/profile"
              element={
                <CompanyProfileProvider>
                  <CompanyProtectRoute>
                    <CompanyDashboardProfile />
                  </CompanyProtectRoute>
                </CompanyProfileProvider>
              }
            />
            <Route
              path="/company/dashboard/job"
              element={
                <CompanyJobProvider>
                  <CompanyProtectRoute>
                    <CompanyDashboardJob />
                  </CompanyProtectRoute>
                </CompanyJobProvider>
              }
            />
            <Route
              path="/company/dashboard/applicant"
              element={
                <CompanyProtectRoute>
                  <CompanyProtectRoute>
                    <CompanyDashboardApplicant />
                  </CompanyProtectRoute>
                </CompanyProtectRoute>
              }
            />
            <Route
              path="/company/dashboard/setting"
              element={
                <CompanySettingProvider>
                  <CompanyProtectRoute>
                    <CompanyDashboardSetting />
                  </CompanyProtectRoute>
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
