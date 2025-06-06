import ClientSlider from "@/components/common/ClientSlider";
import Footer2 from "@/components/footers/Footer2";
import Header17 from "@/components/headers/Header17";
import Cta from "@/components/homes/home-13/Cta";
import Testimonials from "@/components/homes/home-10/Testimonials";
import Portfolio from "@/components/homes/home-12/Portfolio";
import Blog1 from "@/components/homes/home-15/Blog1";
import Hero from "@/components/homes/home-7/Hero";
import Service from "@/components/homes/home-2/Service";
import Projects2 from "@/components/homes/home-5/Projects2";
import HomeServiceAnimation from "@/components/service/HomeServiceAnimation";
import HomeService from "@/components/service/HomeServices";
import React from "react";
import Testimonial from "@/components/homes/home-5/Testimonials";
import Footer13 from "@/components/footers/Footer13";
import Am_a_zingstudio from "@/components/service/Am-a-zingstudio";
import Academy from "@/components/service/Academy";
import Header16 from "@/components/headers/Header16";
import Header11 from "@/components/headers/Header11";
import Header1 from "@/components/headers/Header1";
import Header14 from "@/components/headers/Header14";

export const metadata = {
  title: "Home || zingstudio",
  description: ""
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header14 />
        <div className="page-content bg-white">
          <Hero />
          {/* <div className="content-block p-t50 p-b50 bg-gray">
            <ClientSlider />
          </div> */}

          <div className="content-block home-service-section bg-gray">
            <HomeServiceAnimation />
          </div>

          <Projects2 />

          {/* <div className="content-block p-t20 p-b80 home-our-vision-section">
            <Testimonials />
          </div> */}

          

          <Am_a_zingstudio/>
          
          <Academy/>

          {/* <Testimonial /> */}
        </div>
        <Cta />
        {/* <Footer2 contactSection="false" /> */}
        <Footer13 />
      </div>
    </>
  );
}
