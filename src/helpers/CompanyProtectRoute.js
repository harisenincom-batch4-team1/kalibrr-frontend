import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

export const CompanyProtectRoute = (props) => {
  if (Cookies.get("kalibrr-company") !== undefined) {
    return props.children;
  } else {
    return <Navigate to="/" />;
  }
};
