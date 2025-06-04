"use client";
import { portfolioData } from "@/data/projects";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";

export default function HomeProjects() {
  const portfolioData = [
    {
      id: 35,
      image: "/images/home/projects/1.png",
      title: "Ocean Freight and Shipping",
      description:
        "There are many variations of passages of Lorem Ipsum typesetting industry has been the industry.",
      delay: "0.3s",
    },
    {
      id: 36,
      image: "/images/home/projects/2.png",
      title: "Ocean Freight and Shipping",
      description:
        "There are many variations of passages of Lorem Ipsum typesetting industry has been the industry.",
      delay: "0.6s",
    },
    {
      id: 37,
      image: "/images/home/projects/3.png",
      title: "Ocean Freight and Shipping",
      description:
        "There are many variations of passages of Lorem Ipsum typesetting industry has been the industry.",
      delay: "0.9s",
    },
    {
      id: 38,
      image: "/images/home/projects/3.png",
      title: "Ocean Freight and Shipping",
      description:
        "There are many variations of passages of Lorem Ipsum typesetting industry has been the industry.",
      delay: "0.9s",
    },
    {
      id: 39,
      image: "/images/home/projects/3.png",
      title: "Ocean Freight and Shipping",
      description:
        "There are many variations of passages of Lorem Ipsum typesetting industry has been the industry.",
      delay: "0.9s",
    },
  ];

  return (
    <div className="section-full bg-white mb-5 ">
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        slidesPerGroup={1}
        loop
        // autoplay={{
        //   delay: 4000,
        // }}
        speed={2500}
        centeredSlides
        modules={[Pagination, Autoplay, Navigation]}
        navigation={{
          prevEl: ".snbp34",
          nextEl: ".snbn34",
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 2,
          },
        }}
        className="project-carousel centeredSlides owl-btn-center-lr owl-carousel"
      >
        {portfolioData.map((portfolioItem, index) => (
          <SwiperSlide
            className="item wow fadeInUp"
            data-wow-duration="2s"
            data-wow-delay={portfolioItem.delay}
            key={index}
          >
            <div className="dlab-box portfolio-style1">
              <div className="dlab-media dlab-img-overlay1 dlab-img-effect">
                <Link href={`/services-details/${portfolioItem.title}`}>
                  <Image
                    src={portfolioItem.image}
                    width={700}
                    height={500}
                    alt={portfolioItem.title}
                  />
                </Link>
              </div>
              {/* <div className="portfolio-info">
                <h4 className="title">
                  <Link href={`/services-details/${portfolioItem.title}`}>
                    {portfolioItem.title}
                  </Link>
                </h4>
                <p>{portfolioItem.description}</p>
              </div> */}
            </div>
          </SwiperSlide>
        ))}

        <div className="owl-nav">
          <button
            type="button"
            role="presentation"
            className="owl-prev snbp34"
            style={{ zIndex: 1 ,
                background:"#fdb900",
                padding:"10px 14px",
                borderRadius:"50%"
            }}
          >
            <i className="ti-arrow-left text-primary" style={{fontWeight:"700"}}  />
          </button>
          <button
            type="button"
            role="presentation"
            className="owl-next snbn34"
            style={{ zIndex: 1 ,
                background:"#fdb900",
                padding:"10px 14px",
                borderRadius:"50%"
            }}
          >
            <i className="ti-arrow-right text-primary" style={{fontWeight:"700"}} />
          </button>
        </div>
      </Swiper>
    </div>
  );
}
