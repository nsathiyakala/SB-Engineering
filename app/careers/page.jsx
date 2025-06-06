import Footer25 from "@/components/footers/Footer25";
import Header19 from "@/components/headers/Header19";
import CareerBanner from "@/components/Sb-about/CareerBanner";
import CareerForm from "@/components/Sb-about/CareerForm";
import CareerHero from "@/components/Sb-about/CareerHero";
import { LucidePhone, MailIcon, Phone, PhoneCall, PhoneIcon, Timer } from "lucide-react";

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

          <CareerBanner/>

          <CareerHero/>

            <CareerForm/>
            

           

            
         

        </div>
        <div className="footertop">
          <Footer25 />
        </div>
        
      </div>
    </>
  );
}
