import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

export const UserAuthPage = (props) => {
  if (Cookies.get("kalibrr") !== undefined) {
    return <Navigate to="/" />;
  } else {
    return props.children;
  }
};
