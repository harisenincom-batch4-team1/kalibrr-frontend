import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

const ProtectRoute = (props) => {
  if (Cookies.get("kalibrr") !== undefined) {
    return props.children;
  } else {
    return <Navigate to="/" />;
  }
};

export default ProtectRoute;