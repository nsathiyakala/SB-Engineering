
import Footer25 from "@/components/footers/Footer25";
import Header19 from "@/components/headers/Header19";

import WhySbBanner from "@/components/Sb-about/WhySbBanner";
import WhySBEngineers from "@/components/Sb-about/WhySBEngineers";
import React from "react";

export const metadata = {
  title: "About",
  description: ""
};
export default function page() {

     const services5 = [
  {
    id: 83,
    name: "01",
    icon: "/images/about-us/web-design.png",
    title: "Web Design",
    description:
      "At Zing Studio we design websites with your customer in mind, because modern web design is more than just about creating a visually stunning site.",
    delay: "0.2s",
    link: "web-design-service",
  },
  {
    id: 83,
    name: "02",
    icon: "/images/about-us/web-design.png",
    title: "Digital Marketing",
    description:
      "At Zing Studio we design websites with your customer in mind, because modern web design is more than just about creating a visually stunning site.",
    delay: "0.2s",
    link: "digital-marketing-service",
  },
  {
    id: 83,
    name: "03",
    icon: "/images/about-us/web-design.png",
    title: "Academy",
    description:
      "At Zing Studio we design websites with your customer in mind, because modern web design is more than just about creating a visually stunning site.",
    delay: "0.2s",
    link: "academy-service",
  },
  
];
  return (
    <>
      <div className="page-wraper  ">
        <Header19 />
        <div className="page-content bg-white">
         
         <WhySbBanner/>

        

        <WhySBEngineers/>



        </div>
        <div className="footertop">
          <Footer25 />
        </div>
        
      </div>
    </>
  );
}
