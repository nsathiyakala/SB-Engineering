import Footer15 from "@/components/footers/Footer15";
import Link from "next/link";
import Header1 from "@/components/headers/Header1";

import Portfolio2 from "@/components/portfolio/Portfolio2";
import React from "react";
import Header17 from "@/components/headers/Header17";
import Footer2 from "@/components/footers/Footer2";
import Footer13 from "@/components/footers/Footer13";
import Cta from "@/components/homes/home-13/Cta";


export const metadata = {
  title:
    "Portfolio || zingstudio",
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
            style={{ backgroundImage: "url(/images/portfolio/banner.jpg)" }}
          >
            <div className="container">
              <div className="dlab-bnr-inr-entry">
                <h1 className="text-white">Portfolio</h1>
                {/* Breadcrumb row */}
                <div className="breadcrumb-row">
                  <ul className="list-inline">
                    <li>
                      <Link href={`/`}>Home</Link>
                    </li>
                    <li>Portfolio</li>
                  </ul>
                </div>
                {/* Breadcrumb row END */}
              </div>
            </div>
          </div>

          <div className="content-block">
            <Portfolio2 />
          </div>
        </div>
        <Cta/>
        {/* <Footer2  contactSection="true" /> */}
        <Footer13 />
      </div>
    </>
  );
}
