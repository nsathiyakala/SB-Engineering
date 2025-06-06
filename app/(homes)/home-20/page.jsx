import Footer2 from "@/components/footers/Footer2";
import Footer25 from "@/components/footers/Footer25";
import Header19 from "@/components/headers/Header19";
import HomeAbout from "@/components/Homepage/HomeAbout";
import HomeBlog from "@/components/Homepage/HomeBlog";
import HomeBuildSec from "@/components/Homepage/HomeBuildSec";
import HomeClients from "@/components/Homepage/HomeClients";
import HomeProjects from "@/components/Homepage/HomeProjects";
import Service from "@/components/homes/home-2/Service";
import Hero from "@/components/homes/home-20/Hero";
import React from "react";

export const metadata = {
  title: "Home 20 || Industry - Factory & Industrial React Nextjs Template",
  description: ""
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header19 />
        <div className="page-content bg-white">
          <Hero />

          <HomeAbout />

          <HomeBuildSec/>

          <HomeBlog/>

          <HomeProjects/>

          <HomeClients/>

          <div className="dlab-divider bg-gray-dark tb10 mt-5" />

        </div>
        <div className="footertop">
          <Footer25 />
        </div>
        
      </div>
    </>
  );
}
