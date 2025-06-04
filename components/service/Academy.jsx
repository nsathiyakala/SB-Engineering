import { services5 } from "@/data/services";
import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Academy() {
  return (
    <>
      <div className="section-full content-inner academy" style={{backgroundImage: "url(/images/element-5.png)", backgroundRepeat:"no-repeat"}}>
        <div className="container">
          <div className="section-head text-center">
            <h2 className="title">Zing Academy</h2>
            <h4 className="mt-4 mb-0">
              Nurturing an environment that is inclusive and full of
              possibilities
            </h4>
            <p>
              At Zing Studio, we are committed to empowering the next generation
              of digital experts through our immersive training programs. Our
              courses are meticulously designed to equip you with cutting-edge
              skills and knowledge, ensuring that you can grow and thrive in
              your career.
            </p>
          </div>
          <div className="section-content box-sort-in button-example p-b0">
            <div className="row">
              <div className="col-md-12 col-lg-12">
                <div className="blog-post blog-md clearfix border-1 br-col-b1 radius-sm">
                  <div className="dlab-post-media dlab-img-effect zoom-slow">
                    {/* <a href="#"> */}
                      <Image
                        alt=""
                        src="/images/blog/grid/pic1.jpg"
                        width="700"
                        height="500"
                      />
                    {/* </a> */}
                  </div>
                  <div className="dlab-post-info">
                    <div className="dlab-post-title">
                      <h4 className="post-title">3 Months On-Job Training</h4>
                    </div>
                    <div className="dlab-post-text">
                      <p className="p-r15">
                        Acquire real-world experience by developing campaigns,
                        optimizing websites, and creating engaging social media
                        content under the guidance of expert mentors.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="col-md-12 col-lg-12">
                      <div className="blog-post blog-md clearfix border-1 br-col-b1 radius-sm">
                        
                        <div className="dlab-post-info">
                          
                          <div className="dlab-post-title">
                            <h4 className="post-title">
                              <a  href="#">3 Months Paid Internship</a>
                            </h4>
                          </div>
                          <div className="dlab-post-text">
                            <p className="p-r15">
                              Lorem Ipsum is simply dummy text of the printing
                              Fine-tune your digital skills and gain valuable industry experience
                            </p>
                          </div>
                          
                        </div>

                        <div className="dlab-post-media dlab-img-effect zoom-slow">
                          <a href="#">
                            <Image
                              alt=""
                              src="/images/blog/grid/pic2.jpg"
                              width="700"
                              height="500"
                            />
                          </a>
                        </div>
                      </div>
                    </div> */}
              <div className="col-md-12 col-lg-12">
                <div className="blog-post blog-md clearfix border-1 br-col-b1 radius-sm">
                  <div className="dlab-post-info">
                    <div className="dlab-post-title">
                      <h4 className="post-title">
                        Exclusive Discount for Female Students:
                      </h4>
                    </div>
                    <div className="dlab-post-text">
                      <p className="p-r15">
                        Women students pursuing our academy courses receive a
                        flat 15% discount to support their career aspirations
                        and skill-building journey.
                      </p>
                    </div>
                  </div>
                  <div className="dlab-post-media dlab-img-effect zoom-slow">
                    {/* <a href="#"> */}
                      <Image
                        alt=""
                        src="/images/blog/grid/pic1.jpg"
                        width="700"
                        height="500"
                      />
                    {/* </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <button
              style={{
                background: "#1A43BF",
                color: "white",
                padding: "10px 20px",
                // borderRadius:"5px",
                border: "none",
                cursor: "pointer",
              }}
            >
              <a href="/academy" className="text-white">
                View More
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
