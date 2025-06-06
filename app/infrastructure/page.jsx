import Footer25 from "@/components/footers/Footer25";
import Header19 from "@/components/headers/Header19";

import InfrastructureBanner from "@/components/Sb-about/InfrastructureBanner";
import InfrastructureSec from "@/components/Sb-about/InfrastructureSec";

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
         
         <InfrastructureBanner/>

        <InfrastructureSec/>




        </div>
        <div className="footertop">
          <Footer25 />
        </div>
        
      </div>
    </>
  );
}
