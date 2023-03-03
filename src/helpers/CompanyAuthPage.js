import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

export const CompanyAuthPage = (props) => {
  if (Cookies.get("kalibrr-company") !== undefined) {
    return <Navigate to="/" />;
  } else {
    return props.children;
  }
};
