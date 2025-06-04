import React from "react";
import Link from "next/link";
export default function Banner() {
  return (
    <div
      className="dlab-bnr-inr overlay-black-middle text-center bg-pt"
      style={{ backgroundImage: "url(/images/about-us/banner.jpg)" }}
    >
      <div className="container">
        <div className="dlab-bnr-inr-entry align-m text-center">
          <h1 className="text-white">About us</h1>
          {/* Breadcrumb row */}
          <div className="breadcrumb-row">
            <ul className="list-inline">
              <li>
                <Link href={`/`}>Home</Link>
              </li>
              <li>About us</li>
            </ul>
          </div>
          {/* Breadcrumb row END */}
        </div>
      </div>
    </div>
  );
}
