"use client";
import { testimonials } from "@/data/testimonials";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
export default function Testimonials() {
  return (
    <div
      className="section-full overlay-black-middle bg-secondry content-inner-2 wow fadeIn"
      data-wow-duration="2s"
      data-wow-delay="0.2s"
      style={{ backgroundImage: "url(/images/background/map-bg.png)" }}
    >
      <div className="container">
        <div className="section-head text-white text-center">
          <h2 className="title">What People Are Saying</h2>
          <p>
            There are many variations of passages of Lorem Ipsum typesetting
            industry has been the industry's standard dummy text ever since the
            been when an unknown printer.
          </p>
        </div>
        <div className="section-content">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            slidesPerGroup={2}
            loop
            autoplay={{
              delay: 4000,
            }}
            speed={2500}
            modules={[Pagination, Autoplay]}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              480: {
                slidesPerView: 2,
              },
              991: {
                slidesPerView: 2,
              },
              1000: {
                slidesPerView: 3,
              },
            }}
            pagination={{
              clickable: true,
              el: ".spt1",
              bulletActiveClass: "active",
              renderBullet: function (index, className) {
                return `  <button role="button" class="owl-dot ${className}">
                <span></span>
              </button>`;
              },
            }}
            className="testimonial-two-dots owl-carousel owl-none owl-theme owl-dots-primary-full owl-loaded owl-drag"
          >
            {testimonials.map((elm, i) => (
              <SwiperSlide key={i} className="item">
                <div className="testimonial-15 text-white">
                  <div className="testimonial-text quote-left quote-right">
                    <p>{elm.text}</p>
                  </div>
                  <div className="testimonial-detail clearfix">
                    <div className="testimonial-pic radius shadow">
                      <Image src={elm.image} width={100} height={100} alt="" />
                    </div>
                    <strong className="testimonial-name">{elm.name}</strong>
                    <span className="testimonial-position">{elm.position}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="owl-dots spt1"></div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
