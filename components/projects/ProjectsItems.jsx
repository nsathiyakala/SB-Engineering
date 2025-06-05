"use client";
import { projects } from "@/data/projects";
import { Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
export default function ProjectsItems() {
  return (
    <div
      className="section-full content-inner-2  wow fadeInUp project-port"
      data-wow-duration="2s"
      data-wow-delay="0.4s"
    >
      <div className="container">
              <div className="text-center">
                    
                    <h2 className="main-ti "> Our Project</h2>
                    <p>We have successfully delivered projects across diverse sectors, they
            reflect our commitment to quality, efficiency and futuristic
            engineering. We take pride in our ability to bring visionary ideas
            to life, delivering value-driven solutions that exceed client
            expectations and set new benchmarks in the built environment.</p>
                </div>
        
        <div className="row">
          <div className="fw-swiper  fw2 col-lg-12 col-md-12 position-relative">
            <Swiper
              slidesPerView={4}
              spaceBetween={10}
              slidesPerGroup={1}
              loop
              pagination={{
          clickable: true,
          el: ".sph2",
        }}
              //   autoplay={{
              //     delay: 4000,
              //   }}
              speed={2500}
              modules={[Pagination, Autoplay]}
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
              className="img-carousel-dots-nav owl-theme owl-dots-none owl-carousel owl-btn-center-lr owl-btn-3 relative"
            >
              {projects.map((item, index) => (
                <SwiperSlide className="item" key={index}>
                  <div className="dlab-box project-bx">
                    <div className="dlab-media radius-sm dlab-img-overlay1 dlab-img-effect zoom">
                      <Link href={`/portfolio-details/${item.title}`}>
                        <Image
                          src={item.imgSrc}
                          width={500}
                          height={900}
                          alt={item.title}
                        />
                      </Link>
                    </div>
                    <div className="dlab-info">
                      <h5 className="dlab-title">
                        <Link href={`/portfolio-details/${item.title}`}>
                          {item.title}
                        </Link>
                      </h5>
                      <p>{item?.description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              <div
                style={{
                  position: "absolute",
                  bottom: "8px",
                  zIndex: "1",
                  left: "calc(50% - 56px)",
                }}
                className="swiper-pagination style-1 swiper-pagination-bullets swiper-pagination-horizontal sph2"
              ></div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
