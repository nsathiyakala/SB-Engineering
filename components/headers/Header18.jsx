"use client";

import React from "react";
import Nav from "./component/Nav";
import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "@/data/socials";
import { headerLinks } from "@/data/headerLinks";
import { toggleMobileMenu } from "@/utlis/toggleMobileMenu";
export default function Header18() {
  return (
    <header className="site-header header-transparent mo-left header navstyle1 bg-dark dz-header">
      <div className="top-bar">
        <div className="container-fluid">
          <div className="row d-flex justify-content-between align-items-center">
            <div className="dlab-topbar-left">
              <ul>
                {headerLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="dlab-topbar-right">
              <Link
                href={`/contact-1`}
                className="site-button btnhover17 radius-no"
              >
                GET A QUOTE
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* main header */}
      <div className="sticky-header main-bar-wraper navbar-expand-lg">
        <div className="main-bar clearfix">
          <div className="container-fluid clearfix">
            {/* website logo */}
            <div className="logo-header mostion logo-white">
              <Link href={`/`}>
                <img
                  alt=""
                  src="/images/logo-white-7.png"
                  width="258"
                  height="75"
                />
              </Link>
            </div>
            {/* nav toggle button */}
            <button
              className="navbar-toggler collapsed navicon justify-content-end"
              type="button"
              onClick={toggleMobileMenu}
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span />
              <span />
              <span />
            </button>
            {/* extra nav */}
            <div className="extra-nav">
              <div className="extra-cell">
                <button
                  id="quik-search-btn"
                  type="button"
                  className="site-button-link"
                >
                  <i className="la la-search" />
                </button>
              </div>
            </div>
            {/* Quik search */}

            {/* main nav */}
            <div
              className="header-nav navbar-collapse collapse justify-content-end"
              id="navbarNavDropdown"
            >
              <div className="logo-header d-md-block d-lg-none">
                <Link href={`/`}>
                  <img
                    alt=""
                    src="/images/logo-7.png"
                    width="258"
                    height="75"
                  />
                </Link>
              </div>
              <ul className="nav navbar-nav">
                <Nav />
              </ul>
              <div className="dlab-social-icon">
                <ul>
                  {socialLinks.map((elm, i) => (
                    <React.Fragment key={i}>
                      <li>
                        <a
                          className={`site-button sharp  ${elm.className}`}
                          href={elm.href}
                        />
                      </li>{" "}
                    </React.Fragment>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* main header END */}
    </header>
  );
}
