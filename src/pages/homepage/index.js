import PublicLayout from "../../layouts/PublicLayout";
import HeroSection from "../../components/homepage/HeroSection";
import JobCategory from "../../components/homepage/JobCategory";
import GetHired from "../../components/homepage/GetHired";
import ExploreJobs from "../../components/homepage/ExploreJob";

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
