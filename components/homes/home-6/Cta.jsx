import React from "react";
import Link from "next/link";
export default function Cta() {
  return (
    <div
      className="section-full call-action bg-primary wow fadeIn"
      data-wow-duration="2s"
      data-wow-delay="0.3s"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-9 text-white">
            <h2 className="title">
              Go Solar & Save 10-30%* on Your Energy Rate
            </h2>
            <p className="m-b0">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="col-lg-3 d-flex">
            <Link
              href={`/contact-1`}
              className="site-button btnhover15 white align-self-center outline ms-auto radius-xl outline-2"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
