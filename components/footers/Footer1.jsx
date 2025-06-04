"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/data/footerLinks";
export default function Footer1() {
  return (
    <footer className="site-footer style1">
      {/* newsletter part */}
      <div className="dlab-newsletter">
        <div className="container">
          <div
            className="ft-contact wow fadeIn"
            data-wow-duration="2s"
            data-wow-delay="0.6s"
          >
            <div className="ft-contact-bx">
              <Image
                alt=""
                src="/images/icon/icon1.png"
                width="55"
                height="55"
              />
              <h4 className="title">Address</h4>
              <p>8901 Marmora Road Chi Minh City, Vietnam</p>
            </div>
            <div className="ft-contact-bx">
              <Image
                alt=""
                src="/images/icon/icon2.png"
                width="55"
                height="55"
              />
              <h4 className="title">Phone</h4>
              <p>8901 Marmora Road Chi Minh City, Vietnam</p>
            </div>
            <div className="ft-contact-bx">
              <Image
                alt=""
                src="/images/icon/icon3.png"
                width="55"
                height="55"
              />
              <h4 className="title">Email Contact</h4>
              <p>8901 Marmora Road Chi Minh City, Vietnam</p>
            </div>
          </div>
        </div>
      </div>
      {/* footer top part */}
      <div
        className="footer-top"
        style={{
          backgroundImage: "url(/images/background/bg2.png)",
          backgroundSize: "contain",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <div className="widget widget_about">
                <h4 className="footer-title">About Industry</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard.
                </p>
                <Link href={`/about-1`} className="readmore">
                  Read More
                </Link>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="widget">
                <h4 className="footer-title">Usefull Link</h4>
                <ul className="list-2">
                  {footerLinks.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="widget widget_subscribe">
                <h4 className="footer-title">Usefull Link</h4>
                <p>
                  If you have any questions. Subscribe to our newsletter to get
                  our latest products.
                </p>
                <form
                  className="dzSubscribe"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="dzSubscribeMsg" />
                  <div className="form-group">
                    <div className="input-group">
                      <input
                        name="dzEmail"
                        required="required"
                        type="email"
                        className="form-control"
                        placeholder="Your Email Address"
                      />
                      <div className="input-group-addon">
                        <button
                          name="submit"
                          value="Submit"
                          type="submit"
                          className="site-button far fa-paper-plane"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer bottom part */}
      <div className="footer-bottom footer-line">
        <div className="container">
          <div className="footer-bottom-in">
            <div className="footer-bottom-logo">
              <Link href={`/`}>
                <img alt="" src="/images/logo-light.png" />
              </Link>
            </div>
            <div className="footer-bottom-social">
              <ul className="dlab-social-icon dez-border">
                <li>
                  <a className="fab fa-facebook-f" href="#" />
                </li>{" "}
                <li>
                  <a className="fab fa-twitter" href="#" />
                </li>{" "}
                <li>
                  <a className="fab fa-linkedin-in" href="#" />
                </li>{" "}
                <li>
                  <a className="fab fa-pinterest-p" href="#" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
