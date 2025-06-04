import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function HomeAbout() {
  return (
    <div className="section-full content-inner const-about home-about">
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-lg-6 col-md-6 col-sm-12 col-12 "
           
          >
            <div className="radius-sm m-b30 ">
              <Image
                alt=""
                src="/images/about/pic11.jpg"
                width="600"
                height="722"
              />
            </div>
          </div>
          <div
            className="col-lg-6 col-md-6 col-sm-12 col-12 "
           
          >
            <div className="content-bx1">
              <div className="section-head style2">
                <p className="upper-cap">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                <h2 className="title main-ti">About SB Engineers</h2>
                <p>
                  SB Engineers is a premier engineering design firm dedicated to
                  delivering innovative and sustainable solutions. With a team
                  of highly skilled and caring employees we excellence and
                  innovation, we provide unparalleled engineering design
                  services across various industries.
                </p>

                <div className=" bg-white ">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                       
                        <div className="section-content box-sort-in p-b0 button-example">
                          <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12 p-0">
                              <div className="icon-bx-wraper left d-flex align-items-center">
                                <div className="icon-bx-md me-3">
                                  <a href="#" className="icon-cell ">
                                    <i class="flaticon-factory icon-new" />
                                  </a>
                                </div>
                                <div className="icon-content">
                                  <h5 className="dlab-tilte text-capitalize icon-ti">
                                    Visionary Solutions <br />
                                    Lasting Impact
                                  </h5>
                                 
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 m-b30">
                              <div className="icon-bx-wraper left d-flex align-items-center">
                                <div className="icon-bx-md me-3 ">
                                  <a href="#" className="icon-cell">
                                    <i class="flaticon-factory icon-new" />
                                  </a>
                                </div>
                                <div className="icon-content">
                                  <h5 className="dlab-tilte text-capitalize icon-ti">
                                   Accurate Processes <br />
                                   Testing Guaruntee
                                  </h5>
                                
                                </div>
                              </div>
                            </div>
                            
                          </div>
                        </div>


               
              
                      </div>
                    </div>
                  </div>
                </div>

                 <Link
                href={`/portfolio-grid-2`}
                className="btn__secondary_in  text-decoration-none"
                // style={{zIndex:"1000"}}
              >
                More about Us
              </Link>
              </div>

              
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
