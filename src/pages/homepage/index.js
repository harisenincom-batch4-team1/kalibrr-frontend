import { Helmet } from "react-helmet";
import { PublicLayout } from "layouts";
import { HeroSection, JobCategory, GetHired, ExploreJobs } from "components";

export const Homepage = () => {


  return (
    <PublicLayout>
      <Helmet>
        <title>Beranda - Kalibrr Temukan Lowongan Kerja</title>
      </Helmet>
      <main className="px-5">
        <HeroSection />
        <JobCategory />
        <GetHired />
        <ExploreJobs />
      </main>
    </PublicLayout>
  );
};
