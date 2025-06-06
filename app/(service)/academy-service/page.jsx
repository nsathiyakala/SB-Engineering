import React from "react";

import Header17 from "@/components/headers/Header17";
import Footer13 from "@/components/footers/Footer13";
import HeroSection from "@/components/service/heroSection";
import ServiceList from "@/components/service/serviceList";
import ServiceCta from "@/components/service/ServiceCta";
import Portfolio from "@/components/service/Portfolio";
import Faq from "@/components/faq/Faq3";

export const metadata = {
  title: "Web Design || zingstudio",
  description: ""
};
export default function page() {
    const Academy = [
        {
         head:"Academy",
         title:"Digital Marketing - Academy",
         price: "25,999",
         list:[
          "On-Page Optimization - Up to 10 Pages",
          "Competitor Analysis - 1 Competitor",
          "Keyword Research and Analysis",
          "Keyphrase Optimization - 10 Pages",
          "Google Analytics Setup",
          "Google Analytics Configuration",
          "XML Sitemap Creation and Submission",
          "Monthly Performance Reports",
          "Link Building - 30",
            
         ],
         link:""
        },
        {
            head:"Web Design",
         title:"SEO - Academy",
         price: "8500",
         list:[
          "On-Page Optimization - Up to 10 Pages",
          "Competitor Analysis - 1 Competitor",
          "Keyword Research and Analysis",
          "Keyphrase Optimization - 10 Pages",
          "Google Analytics Setup",
          "Google Analytics Configuration",
          "XML Sitemap Creation and Submission",
          "Monthly Performance Reports",
          "Link Building - 30",
            
         ],
         link:""
        },
        {
            head:"Web Design",
         title:"SMM - Academy",
         price: "7299",
         list:[
          "On-Page Optimization - Up to 10 Pages",
          "Competitor Analysis - 1 Competitor",
          "Keyword Research and Analysis",
          "Keyphrase Optimization - 10 Pages",
          "Google Analytics Setup",
          "Google Analytics Configuration",
          "XML Sitemap Creation and Submission",
          "Monthly Performance Reports",
          "Link Building - 30",
            
         ],

         link:""
        },
 
     ]
     const formOption  =[
      "Digital Marketing",
      "SEO",
      "SMM"
    ]
  return (
    <>
      <div className="page-wraper  ">
        <Header17 />
        <HeroSection head={"Academy"} option={formOption}/>
        <ServiceList data={Academy} head={"Academy"}/>
        <ServiceCta/>
        <Portfolio/>
        <Faq/>
        
        <Footer13 />
      </div>
    </>
  );
}
