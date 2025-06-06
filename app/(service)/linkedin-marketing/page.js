import Footer15 from "@/components/footers/Footer15";
import Link from "next/link";
import Header1 from "@/components/headers/Header1";
import ProjectDetails from "@/components/portfolio/ProjectDetails";
import React from "react";
import { allProjects } from "@/data/projects";
import WebDesignDetails from "@/components/service/WebDesignDetails";
import SeoDetails from "@/components/service/SeoDetails";
import SmmDetails from "@/components/service/SmmDetails";
import PpcDetails from "@/components/service/PpcDetails";
import LinkedInMarketingDetails from "@/components/service/LinkedInMarketingDetails";
import Footer2 from "@/components/footers/Footer2";
import Header17 from "@/components/headers/Header17";
import Footer13 from "@/components/footers/Footer13";

export const metadata = {
  title: "LinkedIn Marketing || zingstudio",
  description: ""
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header17 />
        <div className="page-content bg-white">
          <div
            className="dlab-bnr-inr overlay-black-middle bg-pt"
            style={{
              backgroundImage:
                "url(/images/services/linkedIn-marketing/banner.jpg)",
            }}
          >
            <div className="container">
              <div className="dlab-bnr-inr-entry">
                <h1 className="text-white">LinkedIn Marketing</h1>
                {/* Breadcrumb row */}
                <div className="breadcrumb-row">
                  <ul className="list-inline">
                    <li>
                      <Link href={`/`}>Home</Link>
                    </li>
                    <li>
                      {" "}
                      <Link href={`/services`}>service</Link>
                    </li>
                    <li>LinkedIn Marketing</li>
                  </ul>
                </div>
                {/* Breadcrumb row END */}
              </div>
            </div>
          </div>

          <div className="content-block">
            <LinkedInMarketingDetails />
          </div>
        </div>
        {/* <Footer2  contactSection="true"/> */}
        <Footer13 />
      </div>
    </>
  );
}
