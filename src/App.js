import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import {
  Homepage,
  JobList,
  JobDetail,
  CompanyLogin,
  CompanyRegister,
  SignUp,
  UserLogin,
  UserRegister,
  UserDashboardApplication,
  UserDashboardProfile,
  UserDashboardSetting,
  CompanyDashboardApplicant,
  CompanyDashboardJob,
  CompanyDashboardProfile,
  CompanyDashboardSetting,
  NotFound,
} from "pages";
import {
  CompanyAuthPage,
  CompanyProtectRoute,
  ScrollToTop,
  UserAuthPage,
  UserProtectRoute,
} from "helpers";
import {
  CompanyJobProvider,
  CompanyLoginProvider,
  CompanyProfileProvider,
  CompanyRegisterProvider,
  CompanySettingProvider,
  GlobalProvider,
  JobListProvider,
  UserJobApplicationProvider,
  UserLoginProvider,
  UserProfileProvider,
  UserRegisterProvider,
  UserSettingProvider,
} from "context";

const App = () => {
  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <ScrollToTop />
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route
              path="/job"
              element={
                <JobListProvider>
                  <JobList />
                </JobListProvider>
              }
            />
            <Route path="/job/:id" element={<JobDetail />} />
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  );
};

export default App;
