import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

const CompanyAuthPage = (props) => {
  if (Cookies.get("kalibrr-company") !== undefined) {
    return <Navigate to="/" />;
  } else {
    return props.children;
  }
};

export default CompanyAuthPage;
