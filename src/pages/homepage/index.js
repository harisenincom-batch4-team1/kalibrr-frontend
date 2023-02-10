import PublicLayout from "../../layouts/PublicLayout";
import HeroSection from "./components/HeroSection";
import HomeNavbar from "./components/HomeNavbar";
import JobCategory from "./components/JobCategory";
import GetHired from "./components/GetHired";

const Homepage = () => {
  return (
    <PublicLayout>
      <HomeNavbar />
      <HeroSection />
      <JobCategory />
      <GetHired />
    </PublicLayout>
  );
};

export default Homepage;
