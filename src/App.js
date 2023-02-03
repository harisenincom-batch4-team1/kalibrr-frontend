import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import DashboardProfile from "./pages/dashboard/user/DashboardProfile";
import DashboardApplication from "./pages/dashboard/user/DashboardApplication";
import DashboardMessage from "./pages/dashboard/user/DashboardMessage";
import DashboardSaved from "./pages/dashboard/user/DashboardSaved";
import UserLogin from "./pages/auth/UserLogin";
import UserRegister from "./pages/auth/UserRegister";
import SignUp from "./pages/signup/SignUp";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<Homepage />} />

        {/* Protect Route */}
        <Route path="/user/dashboard/profile" element={<DashboardProfile />} />
        <Route path="/user/dashboard/application" element={<DashboardApplication />} />
        <Route path="/user/dashboard/message" element={<DashboardMessage />} />
        <Route path="/user/dashboard/saved" element={<DashboardSaved />} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/user/register" element={<UserRegister />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
