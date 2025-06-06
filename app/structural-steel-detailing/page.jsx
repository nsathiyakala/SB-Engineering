import Innovativesolutions from "@/components/SBService/Innovativesolutions";
import Footer25 from "@/components/footers/Footer25";
import Header19 from "@/components/headers/Header19";
import React from "react";
import ServiceBanner from "@/components/SBService/ServiceBanner";
import ServiceExtpertise from "@/components/SBService/ServiceExtpertise";
import AddedValue from "@/components/SBService/AddedValue";

export const metadata = {
  title: "About",
  description: ""
};
export default function page() {

    const banner ={
        title:"Structural Steel Detailing",
        link:"structural-steel-detailing"
    }

    const innovativesolutions ={
        title:"Innovative solutions for sustainable impact",
         content1:"At SB Engineers, our expertise and client-centric approach enable us to deliver cutting-edge architectural design solutions that include the entire project lifecycle, from initial planning and conceptualization to final completion. With a strong focus on sustainability, we ensure our architectural designs are best-in-class, environmentally responsible and future-ready.",
         content2:"We work closely with clients to understand their vision and objectives, translating them into innovative, practical designs that optimize space, functionality and aesthetics. Whether you are embarking on a new development or redesigning an existing space, we deliver architectural designs tailored to your unique project goals.",
         img:"/images/about/event/about3.jpg"
    }


      const serviceContent = {
        title: "Our architectural design expertise covers",
         img:"/images/about/about3.jpg",
        list: [
          "Master Planning & Urban Design",
          "Residential",
          "Retail",
          "Industrial and Commercial",
          "Hospitality",
          "Sports, Leisure &amp; Culture",
          "Education",
          "Healthcare",
          "Public Realm &amp; Landscaping",
          "Interior Design",
        ],
      };

      const addedValue={
        title:"How we add value",
         content1:"Our architectural design services go beyond aesthetics. We integrate sustainable design principles to lower environmental impact and operational costs. We prioritize open communication and teamwork through each phase of the process, ensuring that your project is delivered on time, within budget and complies with industry benchmarks.",
        
         img:"/images/about/event/about3.jpg"
      }
  return (
    <>
      <div className="page-wraper  ">
        <Header19 />
        <div className="page-content bg-white">
         
         <ServiceBanner banner={banner}/>
          <Innovativesolutions innovativesolutions={innovativesolutions}/>

        <ServiceExtpertise serviceContent={serviceContent} />

        <AddedValue addedValue={addedValue}/>




        </div>
        <div className="footertop">
          <Footer25 />
        </div>
        
      </div>
    </>
  );
}
