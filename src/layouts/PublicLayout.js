import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoadingBar from "react-top-loading-bar";

const PublicLayout = ({ children }) => {
  return (
    <div>
      <LoadingBar
        className="absolute"
        color="#1C64F2"
        height={3}
        progress={100}
      />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default PublicLayout;
