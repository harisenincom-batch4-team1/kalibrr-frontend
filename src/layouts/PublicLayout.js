import Navbar from "../components/Navbar";
import Footer from "../components/footers/Footer";
import LoadingBar from "react-top-loading-bar";

const PublicLayout = ({ children }) => {
  return (
    <div className="flex h-screen flex-col justify-between bg-zinc-50">
      <LoadingBar
        className="absolute"
        color="#1C64F2"
        height={2}
        progress={100}
      />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default PublicLayout;
