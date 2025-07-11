import React from "react";
import Link from "next/link";

export default function IconBox() {
  return (
    <>
      {/* inner page banner */}
      <div
        className="dlab-bnr-inr overlay-black-middle bg-pt"
        style={{ backgroundImage: "url(/images/banner/bnr4.jpg)" }}
      >
        <div className="container">
          <div className="dlab-bnr-inr-entry">
            <h1 className="text-white">Icon box</h1>
            {/* Breadcrumb row */}
            <div className="breadcrumb-row">
              <ul className="list-inline">
                <li>
                  <Link href={`/`}>Home</Link>
                </li>
                <li>Element</li>
                <li>Icon box</li>
              </ul>
            </div>
            {/* Breadcrumb row END */}
          </div>
        </div>
      </div>
      {/* inner page banner END */}
      {/* Breadcrumb row END */}
      <div className="bg-white">
        {/* content start */}
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>Icon box center aligh</h4>
                </div>
                <div className="section-content box-sort-in p-b0 button-example">
                  <div className="row">
                    <div className="col-md-4 col-lg-4 m-b30">
                      <div className="icon-bx-wraper center">
                        <div className="icon-bx-sm bg-primary m-b20">
                          <a href="#" className="icon-cell">
                            <i className="ti-user" />
                          </a>
                        </div>
                        <div className="icon-content">
                          <h5 className="dlab-tilte text-capitalize">
                            Square Box Center
                          </h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-lg-4 m-b30">
                      <div className="icon-bx-wraper center">
                        <div className="icon-bx-sm radius bg-blue m-b20">
                          <a href="#" className="icon-cell">
                            <i className="ti-ruler-pencil" />
                          </a>
                        </div>
                        <div className="icon-content">
                          <h5 className="dlab-tilte text-capitalize">
                            Circle Box Center
                          </h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-lg-4 m-b30">
                      <div className="icon-bx-wraper center">
                        <div className="icon-bx-sm radius text-red border-2 m-b20">
                          <a href="#" className="icon-cell text-red">
                            <i className="ti-brush-alt" />
                          </a>
                        </div>
                        <div className="icon-content">
                          <h5 className="dlab-tilte text-capitalize">
                            Outline Box Center
                          </h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-full bg-gray content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>Icon box right aligh</h4>
                </div>
                <div className="section-content box-sort-in p-b0 button-example">
                  <div className="row">
                    <div className="col-lg-4 col-md-12 col-sm-12 m-b30">
                      <div className="icon-bx-wraper right">
                        <div className="icon-bx-sm bg-yellow">
                          <a href="#" className="icon-cell">
                            <i className="ti-user" />
                          </a>
                        </div>
                        <div className="icon-content">
                          <h5 className="dlab-tilte text-capitalize">
                            Square Box Right
                          </h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 m-b30">
                      <div className="icon-bx-wraper right">
                        <div className="icon-bx-sm radius bg-pink">
                          <a href="#" className="icon-cell">
                            <i className="ti-ruler-pencil" />
                          </a>
                        </div>
                        <div className="icon-content">
                          <h5 className="dlab-tilte text-capitalize">
                            Circle Box Right
                          </h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 m-b30">
                      <div className="icon-bx-wraper right">
                        <div className="icon-bx-sm radius text-primary border-2">
                          <a href="#" className="icon-cell">
                            <i className="ti-brush-alt" />
                          </a>
                        </div>
                        <div className="icon-content">
                          <h5 className="dlab-tilte text-capitalize">
                            Outline Box Right
                          </h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>Icon box Left aligh</h4>
                </div>
                <div className="section-content box-sort-in p-b0 button-example">
                  <div className="row">
                    <div className="col-lg-4 col-md-12 col-sm-12 m-b30">
                      <div className="icon-bx-wraper left">
                        <div className="icon-bx-sm bg-green">
                          <a href="#" className="icon-cell">
                            <i className="ti-gift" />
                          </a>
                        </div>
                        <div className="icon-content">
                          <h5 className="dlab-tilte text-capitalize">
                            Box Square SM
                          </h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 m-b30">
                      <div className="icon-bx-wraper left">
                        <div className="icon-bx-sm bg-orange radius">
                          <a href="#" className="icon-cell">
                            <i className="ti-headphone" />
                          </a>
                        </div>
                        <div className="icon-content">
                          <h5 className="dlab-tilte text-capitalize">
                            Box Circle SM
                          </h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 m-b30">
                      <div className="icon-bx-wraper left">
                        <div className="icon-bx-sm text-black radius border-2">
                          <a href="#" className="icon-cell text-black">
                            <i className="ti-settings" />
                          </a>
                        </div>
                        <div className="icon-content">
                          <h5 className="dlab-tilte text-capitalize">
                            Box Outline SM
                          </h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-full bg-gray content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>Icon box center aligh</h4>
                </div>
                <div className="section-content box-sort-in p-b0 button-example">
                  <div className="row">
                    <div className="col-md-4 col-lg-4 m-b30">
                      <div className="icon-bx-wraper center">
                        <div className="icon-bx-sm text-primary border-1 m-b20">
                          <a href="#" className="icon-cell">
                            <i className="ti-user" />
                          </a>
                        </div>
                        <div className="icon-content">
                          <h5 className="dlab-tilte text-capitalize">
                            Square Box Center
                          </h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-lg-4 m-b30">
                      <div className="icon-bx-wraper center">
                        <div className="icon-bx-sm radius border-1 text-blue m-b20">
                          <a href="#" className="icon-cell text-blue">
                            <i className="ti-ruler-pencil" />
                          </a>
                        </div>
                        <div className="icon-content">
                          <h5 className="dlab-tilte text-capitalize">
                            Circle Box Center
                          </h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-lg-4 m-b30">
                      <div className="icon-bx-wraper center">
                        <div className="icon-bx-sm text-red border-1 m-b20">
                          <a href="#" className="icon-cell text-red">
                            <i className="ti-brush-alt" />
                          </a>
                        </div>
                        <div className="icon-content">
                          <h5 className="dlab-tilte text-capitalize">
                            Outline Box Center
                          </h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>Icon box</h4>
                </div>
                <div className="section-content box-sort-in p-b0 button-example">
                  <div className="row">
                    <div className="col-lg-4 col-md-12 col-sm-12 m-b30">
                      <div className="icon-bx-wraper left">
                        <div className="icon-bx-xl bg-blue">
                          <a href="#" className="icon-cell">
                            <i className="ti-gift" />
                          </a>
                        </div>
                        <div className="icon-content">
                          <h5 className="dlab-tilte text-capitalize">
                            Box Square Xl
                          </h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 m-b30">
                      <div className="icon-bx-wraper left">
                        <div className="icon-bx-xl bg-yellow radius">
                          <a href="#" className="icon-cell">
                            <i className="ti-headphone" />
                          </a>
                        </div>
                        <div className="icon-content">
                          <h5 className="dlab-tilte text-capitalize">
                            Box Circle Xl
                          </h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 m-b30">
                      <div className="icon-bx-wraper left">
                        <div className="icon-bx-xl text-primary radius border-5">
                          <a href="#" className="icon-cell">
                            <i className="ti-settings" />
                          </a>
                        </div>
                        <div className="icon-content">
                          <h5 className="dlab-tilte text-capitalize">
                            Box Outline Xl
                          </h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="section-content box-sort-in p-b0 button-example">
                  <div className="row">
                    <div className="col-lg-4 col-md-12 col-sm-12 m-b30">
                      <div className="icon-bx-wraper left">
                        <div className="icon-bx-lg bg-blue">
                          <a href="#" className="icon-cell">
                            <i className="ti-gift" />
                          </a>
                        </div>
                        <div className="icon-content">
                          <h5 className="dlab-tilte text-capitalize">
                            Box Square LG
                          </h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 m-b30">
                      <div className="icon-bx-wraper left">
                        <div className="icon-bx-lg bg-yellow radius">
                          <a href="#" className="icon-cell">
                            <i className="ti-headphone" />
                          </a>
                        </div>
                        <div className="icon-content">
                          <h5 className="dlab-tilte text-capitalize">
                            Box Circle LG
                          </h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 m-b30">
                      <div className="icon-bx-wraper left">
                        <div className="icon-bx-lg text-primary radius border-4">
                          <a href="#" className="icon-cell">
                            <i className="ti-settings" />
                          </a>
                        </div>
                        <div className="icon-content">
                          <h5 className="dlab-tilte text-capitalize">
                            Box Outline LG
                          </h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="section-content box-sort-in p-b0 button-example">
                  <div className="row">
                    <div className="col-lg-4 col-md-12 col-sm-12 m-b30">
                      <div className="icon-bx-wraper left">
                        <div className="icon-bx-md bg-blue">
                          <a href="#" className="icon-cell">
                            <i className="ti-gift" />
                          </a>
                        </div>
                        <div className="icon-content">
                          <h5 className="dlab-tilte text-capitalize">
                            Box Square MD
                          </h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 m-b30">
                      <div className="icon-bx-wraper left">
                        <div className="icon-bx-md bg-yellow radius">
                          <a href="#" className="icon-cell">
                            <i className="ti-headphone" />
                          </a>
                        </div>
                        <div className="icon-content">
                          <h5 className="dlab-tilte text-capitalize">
                            Box Circle MD
                          </h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 m-b30">
                      <div className="icon-bx-wraper left">
                        <div className="icon-bx-md text-primary radius border-3">
                          <a href="#" className="icon-cell">
                            <i className="ti-settings" />
                          </a>
                        </div>
                        <div className="icon-content">
                          <h5 className="dlab-tilte text-capitalize">
                            Box Outline MD
                          </h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="section-content box-sort-in p-b0 button-example">
                  <div className="row">
                    <div className="col-lg-4 col-md-12 col-sm-12 m-b30">
                      <div className="icon-bx-wraper left">
                        <div className="icon-bx-sm bg-blue">
                          <a href="#" className="icon-cell">
                            <i className="ti-gift" />
                          </a>
                        </div>
                        <div className="icon-content">
                          <h5 className="dlab-tilte text-capitalize">
                            Box Square SM
                          </h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 m-b30">
                      <div className="icon-bx-wraper left">
                        <div className="icon-bx-sm bg-yellow radius">
                          <a href="#" className="icon-cell">
                            <i className="ti-headphone" />
                          </a>
                        </div>
                        <div className="icon-content">
                          <h5 className="dlab-tilte text-capitalize">
                            Box Circle SM
                          </h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 m-b30">
                      <div className="icon-bx-wraper left">
                        <div className="icon-bx-sm text-primary radius border-2">
                          <a href="#" className="icon-cell">
                            <i className="ti-settings" />
                          </a>
                        </div>
                        <div className="icon-content">
                          <h5 className="dlab-tilte text-capitalize">
                            Box Outline SM
                          </h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="section-content box-sort-in p-b0 button-example">
                  <div className="row">
                    <div className="col-lg-4 col-md-12 col-sm-12 m-b30">
                      <div className="icon-bx-wraper left">
                        <div className="icon-bx-xs bg-blue">
                          <a href="#" className="icon-cell">
                            <i className="ti-gift" />
                          </a>
                        </div>
                        <div className="icon-content">
                          <h5 className="dlab-tilte text-capitalize">
                            Box Square XS
                          </h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 m-b30">
                      <div className="icon-bx-wraper left">
                        <div className="icon-bx-xs bg-yellow radius">
                          <a href="#" className="icon-cell">
                            <i className="ti-headphone" />
                          </a>
                        </div>
                        <div className="icon-content">
                          <h5 className="dlab-tilte text-capitalize">
                            Box Circle XS
                          </h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 m-b30">
                      <div className="icon-bx-wraper left">
                        <div className="icon-bx-xs text-primary radius border-1">
                          <a href="#" className="icon-cell">
                            <i className="ti-settings" />
                          </a>
                        </div>
                        <div className="icon-content">
                          <h5 className="dlab-tilte text-capitalize">
                            Box Outline XS
                          </h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-full bg-gray content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>Icon box</h4>
                </div>
                <div className="section-content box-sort-in p-b0 button-example">
                  <div className="row">
                    <div className="col-lg-4 col-md-12 col-sm-12 m-b30">
                      <div className="icon-bx-wraper left">
                        <div className="icon-xl text-primary">
                          <a href="#" className="icon-cell text-yellow">
                            <i className="ti-apple" />
                          </a>
                        </div>
                        <div className="icon-content">
                          <h5 className="dlab-tilte text-capitalize">
                            Icon Box XL
                          </h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 m-b30">
                      <div className="icon-bx-wraper left">
                        <div className="icon-lg text-primary radius">
                          <a href="#" className="icon-cell text-blue">
                            <i className="ti-twitter" />
                          </a>
                        </div>
                        <div className="icon-content">
                          <h5 className="dlab-tilte text-capitalize">
                            Icon Box LG
                          </h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 m-b30">
                      <div className="icon-bx-wraper left">
                        <div className="icon-md text-primary radius">
                          <a href="#" className="icon-cell text-pink">
                            <i className="ti-control-play" />
                          </a>
                        </div>
                        <div className="icon-content">
                          <h5 className="dlab-tilte text-capitalize">
                            Icon Box MD
                          </h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="section-content box-sort-in p-b0 button-example">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 m-b30">
                      <div className="icon-bx-wraper left">
                        <div className="icon-sm text-primary radius">
                          <a href="#" className="icon-cell text-red">
                            <i className="ti-video-clapper" />
                          </a>
                        </div>
                        <div className="icon-content">
                          <h5 className="dlab-tilte text-capitalize">
                            Icon Box SM
                          </h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 m-b30">
                      <div className="icon-bx-wraper left">
                        <div className="icon-xs text-primary radius">
                          <a href="#" className="icon-cell text-orange">
                            <i className="ti-gift" />
                          </a>
                        </div>
                        <div className="icon-content">
                          <h5 className="dlab-tilte text-capitalize">
                            Icon Box XS
                          </h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>Icon box center and right aligh</h4>
                </div>
                <div className="section-content box-sort-in p-b0 button-example">
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12 m-b30">
                      <div className="icon-bx-wraper center">
                        <div className="icon-sm text-orange m-b20">
                          <a href="#" className="icon-cell text-orange">
                            <i className="ti-ruler-pencil" />
                          </a>
                        </div>
                        <div className="icon-content">
                          <h5 className="dlab-tilte text-capitalize">
                            Icon Box Center
                          </h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 m-b30">
                      <div className="icon-bx-wraper right">
                        <div className="icon-sm text-blue">
                          <a href="#" className="icon-cell text-blue">
                            <i className="ti-brush-alt" />
                          </a>
                        </div>
                        <div className="icon-content">
                          <h5 className="dlab-tilte text-capitalize">
                            Icon Box Right
                          </h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 m-b30">
                      <div className="icon-bx-wraper center">
                        <div className="icon-sm text-orange m-b20">
                          <a href="#" className="icon-cell text-orange">
                            <i className="ti-ruler-pencil" />
                          </a>
                        </div>
                        <div className="icon-content">
                          <h5 className="dlab-tilte text-capitalize">
                            Icon Box Center
                          </h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* content END */}
      </div>
    </>
  );
}
