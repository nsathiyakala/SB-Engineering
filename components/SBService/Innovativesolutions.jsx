import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
export default function Innovativesolutions({innovativesolutions}) {
  return (
    <div className="section-full content-inner bg-white">
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-lg-6 col-md-12 m-b30 wow fadeInLeft"
            data-wow-duration="2s"
            data-wow-delay="0.3s"
          >
            <div className="our-story">
              <h2 className="main-ti" dangerouslySetInnerHTML={{__html:innovativesolutions?.title}}>
               
              </h2>

              <p dangerouslySetInnerHTML={{__html:innovativesolutions?.content1}}></p>

             {innovativesolutions?.content2 && <p dangerouslySetInnerHTML={{__html:innovativesolutions?.content2}}></p>}

              {/* <Link
                href={`/portfolio-grid-2`}
                className="btn__secondary_in  text-decoration-none "
                // style={{zIndex:"1000"}}
              >
                <span className="icon-div-pri">
                  <ArrowRight className="icon-sm-new " />
                </span>
                More About Us
              </Link> */}
            </div>
          </div>
          <div
            className="col-lg-6 col-md-12 m-b30 our-story-thum wow fadeInRight"
            data-wow-duration="2s"
            data-wow-delay="0.3s"
          >
            <Image
              className="radius-sm"
              alt=""
              src={innovativesolutions?.img}
              width="600"
              height="722"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
