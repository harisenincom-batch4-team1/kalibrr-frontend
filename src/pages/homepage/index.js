import PublicLayout from "../../layouts/PublicLayout";
import HeroSection from "./components/HeroSection";
import JobCategory from "./components/JobCategory";
import GetHired from "./components/GetHired";
import ExploreJobs from "./components/ExploreJob";

const Homepage = () => {
  return (
    <PublicLayout>
      <div className="px-5">
        <HeroSection />
        <JobCategory />
        <GetHired />
        <ExploreJobs />
      </div>
    </PublicLayout>
  );
};

export default Homepage;
