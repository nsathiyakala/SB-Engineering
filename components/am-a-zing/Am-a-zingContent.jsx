"use client";
import { galleryItems } from "@/data/aboutSlides";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonials } from "@/data/testimonials";

import Link from "next/link";
import Image from "next/image";
export default function About() {
  return (
    <>
      <div className="section-full content-inner exhibition-bx">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6 wow fadeInLeft"
              data-wow-duration="2s"
              data-wow-delay="0.3s"
            >
              <div className="relative exhibition-carousel ">
                <Swiper
                  autoplay={{
                    delay: 4000,
                  }}
                  speed={2500}
                  modules={[Pagination, Autoplay]}
                  loop
                  pagination={{
                    clickable: true,
                    el: ".spt5",
                    bulletActiveClass: "active",

                    renderBullet: function (index, className) {
                      return `  <button role="button" class="owl-dot ${className}">
                <span></span>
              </button>`;
                    },
                  }}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    480: {
                      slidesPerView: 1,
                    },
                    991: {
                      slidesPerView: 1,
                    },
                    1000: {
                      slidesPerView: 1,
                    },
                  }}
                  className="exhibition-carousel swiper-after-none owl-carousel owl-none m-b30 w-100 swiper-p-0"
                  style={{ position: "static", margin: "0px" }}
                >
                  {galleryItems.map((item) => (
                    <SwiperSlide key={item.id} className="item">
                      <Image
                        src={item.imgSrc}
                        width={600}
                        height={722}
                        alt={item.altText}
                      />
                    </SwiperSlide>
                  ))}{" "}
                  <div style={{ zIndex: 1 }} className="owl-dots spt5"></div>
                </Swiper>
                <div className="owl-carousel owl-none"></div>
              </div>
            </div>
            <div
              className="col-lg-6 m-b30 wow fadeInRight"
              data-wow-duration="2s"
              data-wow-delay="0.3s"
            >
              <div className="content-bx1">
                <div className="our-story">
                  <h2 className="title text-primary">
                    {/* <b
                      style={{
                        fontFamily: "Playfair Display, serif",
                        fontStyle: "italic",
                        fontWeight: "100",
                      }}
                    > */}{" "}
                    <span className="p-r20"> Am-A-zingstudio</span>
                    {/* </b>{" "} */}
                    Program:
                  </h2>
                  <h4 className="title ">
                    {" "}
                    Empowering women to lead the future
                  </h4>
                  <p>
                    At zingstudio, we strive to create opportunities to uplift
                    women, enabling them to realize their potential and take
                    control of the decisions that shape their lives. We do this
                    through leadership capacity building, digital literacy,
                    skills development and employment, ensuring equal access to
                    opportunities for women to thrive and succeed.
                  </p>
                </div>
                {/* <Link
                href={`/contact-2`}
                className="site-button btnhover10 black m-r10 m-b10"
              >
                Contact us
              </Link>
              <Link
                href={`/portfolio-grid-2`}
                className="site-button btnhover10 black m-b10"
              >
                View portfolio
              </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-full content-inner exhibition-bx bg-gray">
        <div className="container">
          <div className="row align-items-center mt-5">
            <div
              className="col-lg-6 item wow fadeInUp "
              data-wow-duration="2s"
              data-wow-delay="0.3s"
            >
              <div className="testimonial-6">
                <div className="testimonial-text bg-white quote-left quote-right">
                  <p>
                    We believe in supporting women entrepreneurs on their
                    journey to success, that’s why we offer a 10% discount on
                    our services to help them grow their businesses with ease
                    and confidence.
                  </p>
                </div>
                <div className="testimonial-detail clearfix bg-primary text-white">
                  <h4 className="testimonial-name m-tb0">
                    10% disounted cost for Women Entrepreneurs:
                  </h4>
                  <span className="testimonial-position"></span>
                  {/* <div className="testimonial-pic radius">
                    <Image src={elm.image} alt="" width={100} height={100} />
                  </div> */}
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 item wow fadeInUp "
              data-wow-duration="2s"
              data-wow-delay="0.3s"
            >
              <div className="testimonial-6">
                <div className="testimonial-text bg-white quote-left quote-right">
                  <p>
                    We prioritize hiring and providing a supportive platform for
                    women and encouraging those who have taken a career break to
                    restart and thrive in their professional journey.
                  </p>
                </div>
                <div className="testimonial-detail clearfix bg-primary text-white">
                  <h4 className="testimonial-name m-tb0">
                    Turning Career Breaks into Breakthroughs for Women:
                  </h4>
                  <span className="testimonial-position"></span>
                  {/* <div className="testimonial-pic radius">
                    <Image src={elm.image} alt="" width={100} height={100} />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
