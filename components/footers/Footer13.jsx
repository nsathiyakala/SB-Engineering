"use client";

import React from "react";
import Link from "next/link";
import { footerLinks2, socialLinks } from "@/data/footerLinks";
export default function Footer13() {
  return (
    <footer className="site-footer footer-gray-1">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-3 col-md-6 col-sm-6 wow fadeIn"
              data-wow-delay="0.2s"
            >
              <div className="widget border-0">
                <h6 className="m-b20 font-weight-300 text-uppercase">
                  Quick Links
                </h6>
                <ul className="list-2">
                  {footerLinks2.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6 wow fadeIn"
              data-wow-delay="0.4s"
            >
              <div className="widget">
                <h6 className="m-b20 font-weight-300 text-uppercase">
                  Newsletter
                </h6>
                <div className="subscribe-form form-white m-b20 m-t30">
                  <form
                    className="dzSubscribe"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div className="dzSubscribeMsg" />
                    <div className="input-group">
                      <input
                        name="dzEmail"
                        required="required"
                        className="form-control radius-no"
                        placeholder="Your Email Id"
                        type="email"
                      />
                      <span className="input-group-btn">
                        <button
                          name="submit"
                          value="Submit"
                          type="submit"
                          className="site-button btnhover13 radius-no"
                        >
                          SEND
                        </button>
                      </span>
                    </div>
                  </form>
                </div>
                <h6 className="m-b10 font-weight-300 text-uppercase">
                  Connect with us
                </h6>
                <ul className="list-inline m-a0">
                  {socialLinks.map((link, index) => (
                    <React.Fragment key={index}>
                      <li>
                        <a
                          href={link.href}
                          className={`site-button btnhover13 sharp ${link.className}`}
                        >
                          <i className={link.iconClass} />
                        </a>
                      </li>{" "}
                    </React.Fragment>
                  ))}
                </ul>
              </div>
            </div>
            <div
              className="col-lg-5 col-md-12 col-sm-12 wow fadeIn"
              data-wow-delay="0.6s"
            >
              <div className="icon-bx-wraper bx-style-1 m-b15 p-a30 radius-sm br-col-w1 bg-tpw1">
                <h5 className="font-weight-500">
                  Business, E-Commerce, Digital Marketing, Ideas or Just a
                  Coffee
                </h5>
                <p>
                  Fuel your ambition with expertise in Business, E-Commerce, and
                  Digital Marketing. Spark fresh ideas or simply enjoy a
                  conversation over coffee. Let’s turn your vision into
                  reality—one idea at a time!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer bottom part */}
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6 text-left">
              <span>
                Copyright ©{" "}
                <span className="current-year">{new Date().getFullYear()}</span>
                <a href="#" target="_blank">
                  zingstudio
                </a>{" "}
                . all rights reserved.
              </span>
            </div>
            <div className="col-md-6 col-sm-6 text-right">
              <div className="widget-link">
                <ul>
                  <li>
                    <Link href={`/help-desk`}> Help Desk</Link>
                  </li>
                  <li>
                    <Link href={`/privacy-policy`}> Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
