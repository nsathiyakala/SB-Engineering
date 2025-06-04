import React from "react";
import Link from "next/link";
export default function ServiceCta() {
  return (
    <div
      className="section-full call-action bg-primary wow fadeIn"
      data-wow-duration="2s"
      data-wow-delay="0.3s"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-9 text-white">
            <h2 className="title">Now sure which package is the best for you?</h2>
            <p className="m-b0">
            Get a free and detailed consultation form and an ABS e-commerce website development expert. This 10-20 minutes phone call or video consultation will give us a better understanding of your requirements and help provide you with the best solution.
            </p>
          </div>
          <div className="col-lg-3 d-flex">
            <Link
              href={`/contact-1`}
              className="site-button btnhover13 white align-self-center outline ms-auto outline-2"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}