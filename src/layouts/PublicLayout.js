import { Navbar, Footer } from "components";
import LoadingBar from "react-top-loading-bar";

export const PublicLayout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between bg-zinc-50">
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
