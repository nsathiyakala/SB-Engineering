import React from "react";
import Link from "next/link";
export default function Cta2() {
  return (
    <div
      className="section-full call-action bg-primary wow fadeIn"
      data-wow-duration="2s"
      data-wow-delay="0.9s"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-9 text-white">
            <h2 className="title">Amazing things happen to your business</h2>
            <p className="m-b0">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="col-lg-3 d-flex">
            <Link
              href={`/contact-2`}
              className="site-button white align-self-center outline ms-auto outline-2 btnhover14"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
