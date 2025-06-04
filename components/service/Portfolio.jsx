"use client";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ClientSlider from "../common/ClientSlider";
import { testimonials6 } from "@/data/testimonials";
import Link from "next/link";
import Image from "next/image";

import GallaryWrapper from "../common/GallaryWrapper";

const images = [
  "/images/our-work/pic1.jpg",
  "/images/our-work/pic2.jpg",
  "/images/our-work/pic3.jpg",
  "/images/our-work/pic4.jpg",
  "/images/our-work/pic5.jpg",
  "/images/our-work/pic6.jpg",
  "/images/our-work/pic1.jpg",
  "/images/our-work/pic2.jpg",
  "/images/our-work/pic3.jpg",
  "/images/our-work/pic4.jpg",
  "/images/our-work/pic5.jpg",
  "/images/our-work/pic6.jpg",
];
const images2 = ["/images/banner/bnr5.jpg", "/images/banner/bnr4.jpg"];
export default function Portfolio() {
  return (
    <>
  
      {/* inner page banner END */}
      {/* Breadcrumb row END */}
      <div className="bg-white lightgallery" id="lightgallery">
        
      
        <div className="section-full bg-white content-inner ">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="sort-title clearfix text-center">
                  <h4>Portfolio</h4>
                </div>
                {/* Image Carousel with team member */}
                <div className="section-content box-sort-in m-b30 button-example mt-5">
                  <div className="img-carousel-dots-nav owl-dots-primary-big owl-loaded owl-theme owl-carousel owl-btn-center-lr owl-btn-2 primary owl-drag">
                    <Swiper
                      slidesPerView={4}
                      spaceBetween={30}
                      slidesPerGroup={2}
                      loop
                      autoplay={{
                        delay: 4000,
                      }}
                      speed={2500}
                      modules={[Pagination, Autoplay, Navigation]}
                      navigation={{
                        prevEl: ".snbp31",
                        nextEl: ".snbn31",
                      }}
                      breakpoints={{
                        0: {
                          slidesPerView: 1,
                        },
                        480: {
                          slidesPerView: 2,
                        },
                        1024: {
                          slidesPerView: 3,
                        },
                        1200: {
                          slidesPerView: 4,
                        },
                      }}
                      pagination={{
                        clickable: true,
                        el: ".spt3",
                        bulletActiveClass: "active",
                        renderBullet: function (index, className) {
                          return `  <button role="button" class="owl-dot ${className}">
                <span></span>
              </button>`;
                        },
                      }}
                    >
                      {images.map((elm, i) => (
                        <SwiperSlide key={i}>
                          <div className="item">
                            <div className="ow-carousel-entry">
                              <div className="ow-entry-media dlab-img-effect zoom-slow">
                                <a href="#">
                                  <Image
                                    alt=""
                                    src={elm}
                                    width="700"
                                    height="500"
                                  />
                                </a>
                              </div>
                              <div className="ow-entry-content">
                                <div className="ow-entry-title text-center">
                                  <a href="#">first heading</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                      <div className="owl-dots spt3"></div>
                    </Swiper>{" "}
                    <div className="owl-nav">
                      <button
                        type="button"
                        role="presentation"
                        className="owl-prev snbp31"
                        style={{ zIndex: 1 }}
                      >
                        <i className="ti-arrow-left"></i>
                      </button>
                      <button
                        type="button"
                        role="presentation"
                        className="owl-next snbn31"
                        style={{ zIndex: 1 }}
                      >
                        <i className="ti-arrow-right"></i>
                      </button>
                    </div>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Image Carousel with team member END */}
        </div>
       
        
        
        
          {/* Client logo Carousel END */}
        
        {/* content  END */}
      </div>
    </>
  );
}
