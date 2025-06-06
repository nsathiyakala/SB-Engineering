import Footer25 from "@/components/footers/Footer25";
import Header19 from "@/components/headers/Header19";

import AboutBanner from "@/components/Sb-about/AboutBanner";
import AboutSec from "@/components/Sb-about/AboutSec";
import VisionMissionSec from "@/components/Sb-about/VisionMissionSec";
import React from "react";

export const metadata = {
  title: "About",
  description: ""
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header19 />
        <div className="page-content bg-white">
         
         <AboutBanner/>

        <AboutSec/>

        <VisionMissionSec/>



        </div>
        <div className="footertop">
          <Footer25 />
        </div>
        
      </div>
    </>
  );
}
