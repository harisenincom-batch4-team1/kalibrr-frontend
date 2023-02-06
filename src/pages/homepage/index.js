import React from "react";
import HeroSection from "./components/HeroSection";
import HomeNavbar from "./components/HomeNavbar";
import JobCategory from "./components/JobCategory";
import GetHired from "./components/GetHired";

const Homepage = () => {
  return (
    <div>
      <HomeNavbar />
      <HeroSection/>
      <JobCategory/>
      <GetHired/>
      
    </div>
  );
};

export default Homepage;
