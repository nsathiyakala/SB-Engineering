import React from "react";
import Image from "next/image";
export default function PpcDetails() {
  return (
    <div className="section-full content-inner bg-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 m-b30">
            <div className="our-story">
              <h2 className="title">
                Pay Per
                <span className="text-primary"> Click </span>
              </h2>
              <h4 className="title">
                PPC advertising takes advantage of high-competition keywords to
                drive targeted traffic to your website cost-effectively,
                maximizingstudio returns on your marketing spend.
              </h4>
            </div>
            <p>
              At zingstudio, we specialize in transforming your modest
              marketing budgets into exceptional digital strategies. Our
              comprehensive range of PPC services which include Paid Search Ads,
              Display Ads, Social Advertising, PPC Remarketing, Video
              Advertising, etc., are tailored to meet the specific needs of both
              small and large businesses.
            </p>
            <p>
              Effective Pay-Per-Click advertising delivers immediate results,
              enabling your small business to quickly improve its SERP rankings
              for competitive keywords. If implemented as part of a
              comprehensive web strategy, PPC advertising can effectively bring
              targeted traffic to your site, delivering optimal outcomes for
              your business at an affordable price.
            </p>
            <div className="row widget widget_getintuch widget_getintuch-pro-details m-lr0">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 p-lr0">
                <div className="pro-details">
                  <i className="ti ti-user" />
                  <strong>CLIENT</strong> Martin Stewart
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 p-lr0">
                <div className="pro-details">
                  <i className="ti ti-location-pin" />
                  <strong>LOCATION</strong>London, UK
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 p-lr0">
                <div className="pro-details">
                  <i className="ti ti-ruler-alt-2" />
                  <strong>SIZE</strong>1,200m<sup>2</sup>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 p-lr0">
                <div className="pro-details">
                  <i className="ti ti-home" />
                  <strong>TYPE</strong>Residential Project
                </div>
              </div>
            </div>
            <h3 className="text-black font-weight-600 m-b15">Scoope Of Work</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the when an printer took a galley of type and scrambled
              it to make.
            </p>
            <div className="row">
              <div className="col-lg-12">
                <div className="icon-bx-wraper m-b30 left">
                  <div className="icon-md">
                    <a href="#" className="icon-cell text-primary">
                      <i className="flaticon-factory" />
                    </a>
                  </div>
                  <div className="icon-content">
                    <h5 className="dlab-tilte">Material Engineering</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod..
                    </p>
                  </div>
                </div>
                <div className="icon-bx-wraper m-b30 left">
                  <div className="icon-md">
                    <a href="#" className="icon-cell text-primary">
                      <i className="flaticon-settings" />
                    </a>
                  </div>
                  <div className="icon-content">
                    <h5 className="dlab-tilte">Chemical Research</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod..
                    </p>
                  </div>
                </div>
                <div className="icon-bx-wraper left">
                  <div className="icon-md">
                    <a href="#" className="icon-cell text-primary">
                      <i className="flaticon-worker" />
                    </a>
                  </div>
                  <div className="icon-content">
                    <h5 className="dlab-tilte">Petroleum Engineering</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod..
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-12 m-b30">
                <Image
                  alt=""
                  src="/images/services/pay-per-click/img-1.jpg"
                  width="1000"
                  height="674"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 m-b30">
                <Image
                  alt=""
                  src="/images/services/pay-per-click/img-2.jpg"
                  width="500"
                  height="357"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 m-b30">
                <Image
                  alt=""
                  src="/images/services/pay-per-click/img-3.jpg"
                  width="500"
                  height="357"
                />
              </div>
              <div className="col-lg-12 m-b30">
                <Image
                  alt=""
                  src="/images/services/pay-per-click/img-4.jpg"
                  width="700"
                  height="479"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
