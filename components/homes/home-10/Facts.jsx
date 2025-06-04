"use client";

import Counter from "@/components/common/Counter";
import { facts } from "@/data/facts";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";
export default function Facts() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div
        className="section-full text-white bg-img-fix content-inner overlay-black-dark counter-staus-box"
        style={{ backgroundImage: "url(/images/background/bg14.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div
              className="col-lg-4 col-md-12 col-sm-12 wow fadeInLeft"
              data-wow-duration="2s"
              data-wow-delay="0.3s"
            >
              <div className="section-head text-white">
                <a
                  onClick={() => setOpen(true)}
                  className="popup-youtube video play-btn"
                >
                  <span>
                    <i className="fas fa-play" />
                  </span>
                  Play Now
                </a>
                <h2 className="title">
                  We're thriving and building better products
                </h2>
              </div>
            </div>
            <div className="col-lg-8 col-md-12 col-sm-12">
              <div className="row sp20">
                {facts.map((elm, i) => (
                  <div
                    key={i}
                    className="col-md-4 col-sm-4 m-b30 wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay={elm.delay}
                  >
                    <div className="icon-bx-wraper center counter-style-5">
                      <div className="icon-xl m-b20">
                        <span className="icon-cell">
                          <i className={elm.icon} />
                        </span>
                      </div>
                      <div className="icon-content">
                        <div className="dlab-separator bg-primary" />
                        <h2 className="dlab-tilte counter">
                          <Counter max={elm.counter} />
                        </h2>
                        <p>{elm.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="_FRZVScwggM"
        onClose={() => setOpen(false)}
      />{" "}
    </>
  );
}
