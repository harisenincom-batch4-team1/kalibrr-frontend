import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

const AuthPage = (props) => {
  if (Cookies.get("kalibrr") !== undefined) {
    return <Navigate to="/" />;
  } else {
    return props.children;
  }
};

export default AuthPage;
