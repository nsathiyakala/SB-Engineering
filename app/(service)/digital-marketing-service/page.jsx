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
    const DigitalMarketing = [
        {
         head:"Digital Marketing",
         title:"Basic - Digital Marketing",
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
            
         ]
        },
        {
            head:"Digital Marketing",
         title:"Standard -Digital Marketing",
         price: "7299",
         list:[
          "On-Page Optimization - Up to 15 Pages",
          "Competitor Analysis - 3 Competitor",
          "Keyword Research and Analysis",
          "Keyphrase Optimization - 15 Pages",
          "Google Analytics Setup",
          "Google Analytics Configuration",
          "XML Sitemap Creation and Submission",
          "Monthly Performance Reports",
          "Link Building - 50-60",  
         ]
        },
        {
            head:"Digital Marketing",
         title:"PPC - Digital Marketing",
         price: "10,000",
         list:[
             "Administrator Dashboard",
             "Editor Dashboard",
             "Shop Manager Dashboard",
             "Categories",
             "Customers Limit",
             "Secure Online Payment",
             "Multiple Payment Options",
             "Filter Products By Price",
             "Sort Products By Price",
           
         ]
        },
 
     ]

     const formOption  =[
      "Basic",
      "Standard",
    ]
  return (
    <>
      <div className="page-wraper  ">
        <Header17 />
        <HeroSection head={"Digital Marketing"} option={formOption}/>
        <ServiceList data={DigitalMarketing} head={"Digital Marketing"}/>
        <ServiceCta/>
        <Portfolio/>
        <Faq/>
        
        <Footer13 />
      </div>
    </>
  );
}
