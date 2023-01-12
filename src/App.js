import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import DashboardProfile from "./pages/dashboard/user/DashboardProfile";
import DashboardApplication from "./pages/dashboard/user/DashboardApplication";
import DashboardMessage from "./pages/dashboard/user/DashboardMessage";
import DashboardSaved from "./pages/dashboard/user/DashboardSaved";
import DashboardUserSetting from "./pages/dashboard/user/DashboardUserSetting";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<Homepage />} />

        {/* Protect Route */}
        <Route path="/user/dashboard/profile" element={<DashboardProfile />} />
        <Route
          path="/user/dashboard/application"
          element={<DashboardApplication />}
        />
        <Route path="/user/dashboard/message" element={<DashboardMessage />} />
        <Route path="/user/dashboard/saved" element={<DashboardSaved />} />
        <Route
          path="/user/dashboard/setting"
          element={<DashboardUserSetting />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
