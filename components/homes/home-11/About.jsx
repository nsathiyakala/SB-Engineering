import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function About() {
  return (
    <div className="section-full content-inner const-about">
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-lg-6 col-md-6 col-sm-12 col-12 wow bounceInLeft"
            data-wow-duration="2s"
            data-wow-delay="0.3s"
          >
            <div className="radius-sm m-b30">
              <Image
                alt=""
                src="/images/about/pic12.jpg"
                width="600"
                height="722"
              />
            </div>
          </div>
          <div
            className="col-lg-6 col-md-6 col-sm-12 col-12 m-b15 wow bounceInRight"
            data-wow-duration="2s"
            data-wow-delay="0.3s"
          >
            <div className="content-bx1">
              <div className="about-year">
                <span>26</span>
                <p>
                  Years
                  <br />
                  Experience
                  <br />
                  Working
                </p>
              </div>
              <div className="section-head style2">
                <h2 className="title">
                  Great Lessons You Can Learn From Nuclear Plant
                </h2>
                <p>
                  Praesent pharetra orci odio, ut mattis tellus ullamcorper
                  ornare. Suspendisse ullamcorper metus in erat viverra,
                  vehicula pharetra dolor accumsan. In arcu ex, rutrum finibus
                  malesuada vel. Praesent pharetra orci odio, ut mattis tellus
                </p>
              </div>
              <Link
                href={`/portfolio-grid-2`}
                className="site-button btnhover15 m-r10 m-b10"
              >
                View Portfolio
              </Link>
              <Link
                href={`/about-1`}
                className="site-button btnhover15 black m-b10"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
