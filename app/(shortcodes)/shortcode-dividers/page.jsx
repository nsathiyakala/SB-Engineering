import Footer15 from "@/components/footers/Footer15";
import Header1 from "@/components/headers/Header1";
import Dividers from "@/components/shortcodes/Dividers";
import React from "react";

export const metadata = {
  title:
    "Shortcode Dividers || Industry - Factory & Industrial React Nextjs Template",
  description: ""
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header1 />
        <div className="page-content bg-white">
          <Dividers />
        </div>
        <Footer15 />
      </div>
    </>
  );
}
