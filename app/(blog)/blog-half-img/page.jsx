import Link from "next/link";
import Blogs8 from "@/components/blogs/Blogs8";
import Footer15 from "@/components/footers/Footer15";
import Header1 from "@/components/headers/Header1";
import React from "react";

export const metadata = {
  title:
    "Blog Half Image || Industry - Factory & Industrial React Nextjs Template",
  description: ""
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header1 />
        <div className="page-content bg-white">
          {" "}
          <div
            className="dlab-bnr-inr overlay-black-middle bg-pt"
            style={{ backgroundImage: "url(/images/banner/bnr1.jpg)" }}
          >
            <div className="container">
              <div className="dlab-bnr-inr-entry">
                <h1 className="text-white">Blog Half Image</h1>
                {/* Breadcrumb row */}
                <div className="breadcrumb-row">
                  <ul className="list-inline">
                    <li>
                      <Link href={`/`}>Home</Link>
                    </li>
                    <li>Blog Half Image</li>
                  </ul>
                </div>
                {/* Breadcrumb row END */}
              </div>
            </div>
          </div>
          <div className="content-area">
            <Blogs8 />
          </div>
        </div>
        <Footer15 />
      </div>
    </>
  );
}
