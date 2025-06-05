import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
export default function CareerHero() {
  return (
    <div className="section-full content-inner const-about home-about">
      <div className="container">
        <div className="row align-items-center">
         
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 ">
            <div className="content-bx1">
              <div className="section-head style2">
                <h2 className="title main-ti">Build your future with us</h2>
                <p>
                  At SB Engineers, we don’t just build structures, we build
                  careers. We&#39;re always looking for passionate engineers,
                  designers and thinkers who are ready to take on exciting
                  challenges.
                </p>

                <p>
                  We offer an inclusive work environment, ongoing professional
                  development and the opportunity to be part of projects that
                  shape skylines and communities.
                </p>

                <p>
                  If you&#39;re driven, curious and ready to grow, we would love
                  to meet you.
                </p>

               

                {/* <Link
                  href={`/portfolio-grid-2`}
                  className="btn__secondary_in  text-decoration-none"
                  // style={{zIndex:"1000"}}
                >
                  <span className="icon-div-pri">
                    <ArrowRight className="icon-sm-new " />
                  </span>
                  More about Us
                </Link> */}
              </div>
            </div>
          </div>

           <div className="col-lg-6 col-md-6 col-sm-12 col-12 ">
            <div
              className="radius-sm m-b30 home-about-img"
              style={{ borderRadius: "3px" }}
            >
              <Image
                alt=""
                src="/images/about/pic5.jpg"
                width="600"
                height="722"
                style={{ borderRadius: "3px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
