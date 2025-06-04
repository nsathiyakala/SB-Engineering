import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Service() {
  return (
    <div className="content-block">
      {/* Content Section */}
      <div className="section-full">
        <div className="row spno about-industry">
          <div
            className="col-lg-8 wow fadeIn"
            data-wow-duration="2s"
            data-wow-delay="0.2s"
          >
            <div className="dlab-post-media dlab-img-effect zoom">
              <Image
                alt=""
                className="img-cover"
                src="/images/services/web-design.jpg"
                width="900"
                height="550"
              />
            </div>
          </div>
          <div
            className="col-lg-4 bg-white wow fadeIn"
            data-wow-duration="2s"
            data-wow-delay="0.4s"
          >
            <div className="service-box style2">
              <div>
                <h2 className="title text-black">
                  <span>Web </span> <br />
                  Design
                </h2>
                <p>
                  At zingstudio we design websites with your customer in mind,
                  because modern web design is more than just about creating a
                  visually stunning site.
                </p>
                <Link
                  href={`/web-design-service`}
                  className="site-button outline outline-2 btnhover11"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>

          <div
            className="col-lg-4 wow fadeIn"
            data-wow-duration="2s"
            data-wow-delay="0.6s"
          >
            <div className="dlab-post-media dlab-img-effect zoom">
              <Image
                alt=""
                className="img-cover"
                src="/images/services/saas-platform.jpg"
                width="900"
                height="550"
              />
            </div>
          </div>
          <div
            className="col-lg-4 bg-primary text-white wow fadeIn"
            data-wow-duration="2s"
            data-wow-delay="0.8s"
          >
            <div className="service-box style2">
              <div>
                <h2 className="title">
                  <span>Digital </span> <br />
                  Marketing
                </h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe earum tenetur expedita, consequatur facilis voluptatibus hic sit, cumque assumenda 
                </p>
                <Link
                  href={`/digital-marketing-service`}
                  className="site-button outline white outline-2 btnhover11"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
          
           <div
            className="col-lg-4 wow fadeIn"
            data-wow-duration="2s"
            data-wow-delay="0.2s"
          >
            <div className="dlab-post-media dlab-img-effect zoom">
              <Image
                alt=""
                className="img-cover"
                src="/images/services/open-source-development.jpg"
                width="900"
                height="550"
              />
            </div>
          </div>

        {/*  <div
            className="col-lg-4 bg-primary text-white wow fadeIn"
            data-wow-duration="2s"
            data-wow-delay="0.4s"
          >
            <div className="service-box style2">
              <div>
                <h2 className="title">
                  <span>Saas </span> <br />
                  Platform
                </h2>
                <p>
                  We offer to jump start your e-commerce brand online with some
                  of the leading Saas platforms that offer your quicker turn
                  around, robust and feature rich e-commerce website.
                </p>
                <Link
                  href={`/e-commerce`}
                  className="site-button outline white outline-2 btnhover11"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 wow fadeIn"
            data-wow-duration="2s"
            data-wow-delay="0.6s"
          >
            <div className="dlab-post-media dlab-img-effect zoom">
              <Image
                alt=""
                className="img-cover"
                src="/images/services/e-commerce-managment.jpg"
                width="900"
                height="550"
              />
            </div>
          </div>
          <div
            className="col-lg-4 bg-primary text-white wow fadeIn"
            data-wow-duration="2s"
            data-wow-delay="0.8s"
          >
            <div className="service-box style2">
              <div>
                <h2 className="title">
                  <span>Open-source </span> <br />
                  Development
                </h2>
                <p>
                  Open-source Development Open Source commerce development is
                  the order of the way in Ecommerce development. The open source
                  platforms offer a host os flexible and beneficial features...
                </p>
                <Link
                  href={`/e-commerce`}
                  className="site-button outline white outline-2 btnhover11"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div> */}

          <div
            className="col-lg-4 bg-white wow fadeIn"
            data-wow-duration="2s"
            data-wow-delay="0.2s"
          >
            <div className="service-box style2">
              <div>
                <h2 className="title text-black">
                  <span>Academy</span> 
                  {/* <br /> Optimization */}
                </h2>
                <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe earum tenetur expedita, consequatur facilis voluptatibus hic sit, cumque assumenda 
                </p>
                <Link
                  href={`/academy-service`}
                  className="site-button outline outline-2 btnhover11"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>



          <div
            className="col-lg-8 wow fadeIn"
            data-wow-duration="2s"
            data-wow-delay="0.4s"
          >
            <div className="dlab-post-media dlab-img-effect zoom">
              <Image
                alt=""
                className="img-cover"
                src="/images/services/seo.jpg"
                width="900"
                height="550"
              />
            </div>
          </div>

          {/* <div
            className="col-lg-4 bg-primary text-white wow fadeIn"
            data-wow-duration="2s"
            data-wow-delay="0.4s"
          >
            <div className="service-box style2">
              <div>
                <h2 className="title">
                  <span>Academy</span>
                  <br />
                  Marketing 
                </h2>
                <p>
                  At zingstudio, our competent team specializes in providing
                  innovative, result-driven and cost-effective social media
                  marketing services in India designed to improve your
                  performance and maximize ROI.
                </p>
                <Link
                  href={`/social-media-marketing`}
                  className="site-button outline white outline-2 btnhover11"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 wow fadeIn"
            data-wow-duration="2s"
            data-wow-delay="0.6s"
          >
            <div className="dlab-post-media dlab-img-effect zoom">
              <Image
                alt=""
                className="img-cover"
                src="/images/services/linkedln-marketing.jpg"
                width="900"
                height="550"
              />
            </div>
          </div>
          <div
            className="col-lg-4 bg-primary text-white wow fadeIn"
            data-wow-duration="2s"
            data-wow-delay="0.8s"
          >
            <div className="service-box style2">
              <div>
                <h2 className="title">
                  <span>Pay Per </span>
                  <br />
                  Click
                </h2>
                <p>
                  PPC advertising takes advantage of high-competition keywords
                  to drive targeted traffic to your website cost-effectively,
                  maximizingstudio returns on your marketing spend.
                </p>
                <Link
                  href={`/pay-per-click`}
                  className="site-button outline white outline-2 btnhover11"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>

          <div
            className="col-lg-4 wow fadeIn"
            data-wow-duration="2s"
            data-wow-delay="0.6s"
          >
            <div className="dlab-post-media dlab-img-effect zoom">
              <Image
                alt=""
                className="img-cover"
                src="/images/services/social-media-marketing.jpg"
                width="900"
                height="550"
              />
            </div>
          </div>
          <div
            className="col-lg-4 bg-primary text-white wow fadeIn"
            data-wow-duration="2s"
            data-wow-delay="0.8s"
          >
            <div className="service-box style2">
              <div>
                <h2 className="title">
                  <span>LinkedIn </span> <br />
                  Marketing
                </h2>
                <p>
                  At zingstudio, we specialize in providing creative LinkedIn
                  marketing services that elevate your business profile into a
                  dynamic hub to attract professionals and spark meaningful
                  conversations.
                </p>
                <Link
                  href={`/linkedin-marketing`}
                  className="site-button outline white outline-2 btnhover11"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 wow fadeIn"
            data-wow-duration="2s"
            data-wow-delay="0.2s"
          >
            <div className="dlab-post-media dlab-img-effect zoom">
              <Image
                alt=""
                className="img-cover"
                src="/images/services/pay-per-click.jpg"
                width="900"
                height="550"
              />
            </div>
          </div>

          <div
            className="col-lg-8 wow fadeIn"
            data-wow-duration="2s"
            data-wow-delay="0.2s"
          >
            <div className="dlab-post-media dlab-img-effect zoom">
              <Image
                alt=""
                className="img-cover"
                src="/images/services/lead-generation-camp.jpg"
                width="900"
                height="550"
              />
            </div>
          </div>
          <div
            className="col-lg-4 bg-white wow fadeIn"
            data-wow-duration="2s"
            data-wow-delay="0.4s"
          >
            <div className="service-box style2">
              <div>
                <h2 className="title text-black">
                  <span>Lead Generation </span> <br />
                  Campaigns
                </h2>
                <p>
                  At zingstudio, we specialize in providing reliable,
                  high-impact and cost-effective lead generation solutions
                  customized to meet the specific business needs and budget.
                </p>
                <Link
                  href={`/lead-generation-compaigns`}
                  className="site-button outline outline-2 btnhover11"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      {/* Content Section End */}
    </div>
  );
}
