import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

export const UserProtectRoute = (props) => {
  if (Cookies.get("kalibrr") !== undefined) {
    return props.children;
  } else {
    return <Navigate to="/" />;
  }
};
