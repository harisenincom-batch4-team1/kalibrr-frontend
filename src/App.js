import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Homepage from "./pages/Homepage";
import DashboardProfile from "./pages/dashboard/user/DashboardProfile";
import DashboardApplication from "./pages/dashboard/user/DashboardApplication";
import DashboardMessage from "./pages/dashboard/user/DashboardMessage";
import DashboardSaved from "./pages/dashboard/user/DashboardSaved";
import CompanyProfile from "./pages/dashboard/user/CompanyProfile";
import CompanyRegister from "./pages/dashboard/company/CompanyRegister";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<Homepage />} />
        <Route path="/company/register" element={<CompanyRegister />} />
        

        {/* Protect Route */}
        <Route path="/user/dashboard/profile" element={<DashboardProfile />} />
        <Route path="/user/dashboard/application" element={<DashboardApplication />} />
        <Route path="/user/dashboard/message" element={<DashboardMessage />} />
        <Route path="/user/dashboard/saved" element={<DashboardSaved />} />
        <Route path="/user/company-profile" element={<CompanyProfile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
