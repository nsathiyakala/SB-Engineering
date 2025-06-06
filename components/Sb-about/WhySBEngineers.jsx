import { services5 } from "@/data/services";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function WhySBEngineers() {
  return (
    <>
      <div className="section-full  content-inner whySbEng">
        <div className="container">
          <div className="section-head text-center">
            <h2 className="main-ti">Why SB Engineers</h2>
            <p>
              Backed by decades of experience and adherence to global benchmarks.
            </p>
          </div>
          <div className="section-content row">
            {services5.map((service, index) => (
              <div
                key={index}
                className="col-md-6 col-lg-4 col-sm-12 service-box style3 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay={service.delay}
              >
                <div className="icon-bx-wraper" data-name={service.name}>
                  <div className="icon-lg">
                    {/* <a href="#" className="icon-cell">
                      <img src={service.icon} alt="" className="about-service-image" />
                    </a> */}
                                                      <a href="#" className="icon-cell ">
                                    <i class="flaticon-factory icon-new" />
                                  </a>
                  </div>
                  <div className="icon-content">
                    <h2 className="main-sub-ti m-t0" style={{marginBottom:"10px"}}>{service.title}</h2>
                    <p>{service.description}</p>
                  </div>

                  {/* <div>
                     <Link
                href={`/${service.link}`}
                className="btn__secondary_in  text-decoration-none mt-5"
                // style={{zIndex:"1000"}}
              >
                 <span className="icon-div-pri">
                                    <ArrowRight className="icon-sm-new "/>
                                </span>
                Read More
              </Link>
                  </div> */}

                 
                  <Link
                    href={`/${service.link}`}
                    className="site-button btnhover11 mt-3 readmore-link"
                    style={{display:"inline-block"}}
                  >
                    <span className="icon-div-pri">
                                    <ArrowRight className="icon-sm-new " style={{color:"#000"}}/>
                                </span>
                    {" "}
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
