"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { galleryBoxes2 } from "@/data/gallery";

import GallaryWrapper from "@/components/common/GallaryWrapper";
import { ArrowRight, Check } from "lucide-react";
export default function ServiceExtpertise({serviceContent}) {
//   const images = 
//     {
//       id: 1,
//       colClass: "col-lg-12 col-md-12 col-sm-12 p-lr0",
//       imgSrc: "/images/gallery/food/pic7.jpg",
//       imgWidth: 818,
//       imgHeight: 400,
//     }
   



  return (
    <div className="section-full expertise-sec">
      <div className="row m-lr0">
        <div
          className="col-xl-6 col-lg-12 p-lr0 wow bounceInLeft"
          data-wow-duration="2s"
          data-wow-delay="0.3s"
        >
            <Image
                          className="img-cover"
                          alt=""
                          src={serviceContent?.img}
                          width="600"
                          height="400"
                          style={{objectFit:"cover"}}
                        />
         
          {/* <GallaryWrapper>
            <div className="row m-a0 lightgallery img-hi">
              {images.map((box) => (
                <div key={box.id} className={box.colClass}>
                  <div className="dlab-box overlay-gallery-bx1">
                    <div className="dlab-thum dlab-img-overlay1 primary">
                      <a>
                        <Image
                          className="img-cover"
                          alt=""
                          src={box.imgSrc}
                          width={box.imgWidth}
                          height={box.imgHeight}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>{" "}
          </GallaryWrapper> */}
        </div>
        <div
          className="col-xl-6 col-lg-12 p-lr0 d-flex dis-tbl latest-project-info bg-primary wow bounceInRight"
          data-wow-duration="2s"
          data-wow-delay="0.3s"
        >
          <div className="text-white align-self-center">
            <h2
              className="main-ti"
              dangerouslySetInnerHTML={{ __html: serviceContent?.title }}
            ></h2>
            <ul>
              {serviceContent?.list?.map((li) => (
                <p className="expertise-p">
                  <span
                    className="icon-div-pri"
                    style={{ padding: "0 6px", backgroundColor: "#fdd104" }}
                  >
                    <Check
                      className="icon-sm-new "
                      style={{
                        color: "#000",
                        width: "12px",
                        height: "15px",
                        fontWeight: "700",
                      }}
                    />
                  </span>{" "}
                  <span style={{ color: "#fff", fontWeight: "400" }}>
                    {li}
                  </span>{" "}
                </p>
              ))}
            </ul>
            {/* <Link
              href={`/project-portfolio`}
              className="btn__secondary_in  text-decoration-none "
              style={{ display: "inline-block" }}
            >
              <span className="icon-div-pri">
                <ArrowRight className="icon-sm-new " />
              </span>
              More About Us
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}
