"use client";
import { useState, useRef, useEffect } from "react";
import Card from "./ServiceCardAnimation";

// const projects = [
//   {
//     id: 1,
//     price:"45,000",
//     title: "Static Site",
//     list:[
//       "Lorem ipsum dolor ",
//       "Lorem ipsum dolor ",
//       "Lorem ipsum dolor ",
//       "Lorem ipsum dolor ",
//       "Lorem ipsum dolor ",
//     ],
//     description:
//       "At zingstudio we design websites with your customer in mind, because modern web design is more than just about creating a visually stunning site.",
//     src: "images/Home-Page/web-design.jpg",
//     link: "/web-design",
//     color: " #0e2b5c",
//     animation_delay: "0.3s",
//   },
//   {
//     id: 2,
//     title: "E-Commerce",
//     list:[
//       "Lorem ipsum dolor ",
//       "Lorem ipsum dolor ",
//       "Lorem ipsum dolor ",
//       "Lorem ipsum dolor ",
//       "Lorem ipsum dolor ",
//     ],
//     description:
//       "The modern consumer of today looks for a simple and intuitive online shopping experience that responds to their needs. At zingstudio, our dynamic team...",
//     price: "85,000",
//     src: "images/Home-Page/ecommerce.jpg",
//     link: "/e-commerce",
//     color: " #0e2b5c",
//     animation_delay: "0.6s",
//   },
//   {
//     id: 3,
//     title: "Digital Marketing",
//     list:[
//       "Lorem ipsum dolor ",
//       "Lorem ipsum dolor ",
//       "Lorem ipsum dolor ",
//       "Lorem ipsum dolor ",
//       "Lorem ipsum dolor ",
//     ],
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since...",
//     price: "65,000",
//     src: "images/Home-Page/digital-marketing.jpg",
//     link: "/digital-marketing",
//     color: " #0e2b5c",
//     animation_delay: "0.9s",
//   },
//   {
//     id: 4,
//     title: "E-Commerce Management",
//     list:[
//       "Lorem ipsum dolor ",
//       "Lorem ipsum dolor ",
//       "Lorem ipsum dolor ",
//       "Lorem ipsum dolor ",
//       "Lorem ipsum dolor ",
//     ],
//     description:
//       "It can be overwhelming for most businesses to manage inventory, process orders and address customer queries. At zingstudio, we provide simplified...",
//     price: "75,000",
//     src: "images/Home-Page/ecommerce-managment.jpg",
//     link: "/e-commerce-management",
//     color: " #0e2b5c",
//     animation_delay: "0.12s",
//   },
// ];

const projects = [
  {
    id: 1,
    service_name: "Web Development",
    service: [
      {
        id: 1,
        price: "8750",
        title: "Static Web Design",
        list: [
          "Custom Layout",
          "10 Static Page(HTML/PHP)",
          "Enquiry Form",
          "Free Website Maintenance",
        ],
        link: "/web-design-service",
        color: "#0e2b5c",
        animation_delay: "0.12s",
        description:"Lorem ipsum dolor sit amet adipiscing elit sed do eiusmod tempors labore et dolore magna siad enim aliqua"
      },
      {
        id: 2,
        price: "8750",
        title: "Dynamic Web Design",
        list: [
          "Administrator Dashboard",
             "Editor Dashboard",
             "20 Page Responsive Website",
             "1 Basic Contact/Enquiry Form"
        ],
        link: "/web-design-service",
        color: "#0e2b5c",
        animation_delay: "0.12s",
         description:"Lorem ipsum dolor sit amet adipiscing elit sed do eiusmod tempors labore et dolore magna siad enim aliqua"
      },
      {
        id: 3,
        price: "25,850",
        title: "E-commerce Web Design",
        list: [
         "Administrator Dashboard",
             "Categories",
             "Customers Limit",
             "Secure Online Payment"
        ],
        link: "/web-design-service",
        color: "#0e2b5c",
        animation_delay: "0.12s",
         description:"Lorem ipsum dolor sit amet adipiscing elit sed do eiusmod tempors labore et dolore magna siad enim aliqua"
      },
    ],
  },
  {
    id: 2,
    service_name: "Digital Marketing",
    service: [
      {
        id: 1,
        price: "10,000",
        title: "Basic",
        list: [
          "On-Page Optimization - Up to 10 Pages",
          "Competitor Analysis - 1 Competitor",
          "Keyphrase Optimization - 10 Pages",
          "Link Building - 30",
        ],
        link: "/digital-marketing-service",
        color: "#0e2b5c",
        animation_delay: "0.12s",
         description:"Lorem ipsum dolor sit amet adipiscing elit sed do eiusmod tempors labore et dolore magna siad enim aliqua"
      },
      {
        id: 2,
        price: "20,000",
        title: "<div style=line-height:38px;>Digital <br/> Marketing<div/>",
        list: [
          "On-Page Optimization - Up to 15 Pages",
          "Competitor Analysis - 3 Competitor",
          "Keyphrase Optimization - 15 Pages",
          "Link Building - 50-60",
        ],
        link: "/digital-marketing-service",
        color: "#0e2b5c",
        animation_delay: "0.12s",
         description:"Lorem ipsum dolor sit amet adipiscing elit sed do eiusmod tempors labore et dolore magna siad enim aliqua"
      },
      {
        id: 2,
        price: "20,000",
        title: "Standard",
        list: [
          "On-Page Optimization - Up to 15 Pages",
          "Competitor Analysis - 3 Competitor",
          "Keyphrase Optimization - 15 Pages",
          "Link Building - 50-60",
        ],
        link: "/digital-marketing-service",
        color: "#0e2b5c",
        animation_delay: "0.12s",
         description:"Lorem ipsum dolor sit amet adipiscing elit sed do eiusmod tempors labore et dolore magna siad enim aliqua"
      },
    ],
  },
  {
    id: 3,
    service_name: "Academy",
    service: [
      {
        id: 1,
        price: "25,999",
        title: "Digital Marketing - Academy",
        list: [
          "Lorem ipsum dolor sit amet",
          "Lorem ipsum dolor sit amet",
          "Lorem ipsum dolor sit amet",
          "Lorem ipsum dolor sit amet",
        ],
        link: "/academy-service",
        color: "#0e2b5c",
        animation_delay: "0.12s",
         description:"Lorem ipsum dolor sit amet adipiscing elit sed do eiusmod tempors labore et dolore magna siad enim aliqua"
      },
      {
        id: 2,
        price: "8500",
        title: "SEO - Academy",
        list: [
          "Lorem ipsum dolor sit amet",
          "Lorem ipsum dolor sit amet",
          "Lorem ipsum dolor sit amet",
          "Lorem ipsum dolor sit amet",
        ],
        link: "/academy-service",
        color: "#0e2b5c",
        animation_delay: "0.12s",
         description:"Lorem ipsum dolor sit amet adipiscing elit sed do eiusmod tempors labore et dolore magna siad enim aliqua"
      },
      {
        id: 3,
        price: "7299",
        title: "SMM - Academy",
        list: [
          "Lorem ipsum dolor sit amet",
          "Lorem ipsum dolor sit amet",
          "Lorem ipsum dolor sit amet",
          "Lorem ipsum dolor sit amet",
        ],
        link: "/academy-service",
        color: "#0e2b5c",
        animation_delay: "0.12s",
         description:"Lorem ipsum dolor sit amet adipiscing elit sed do eiusmod tempors labore et dolore magna siad enim aliqua"
      },
    ],
  },
  // {
  //   id: 4,
  //   service_name: "Mobile Development",
  //   service: [
  //     {
  //       id: 1,
  //       price: "45,000",
  //       title: "iOS application - Mobile Development",
  //       list: [
  //         "Lorem ipsum dolor sit amet",
  //         "Lorem ipsum dolor sit amet",
  //         "Lorem ipsum dolor sit amet",
  //         "Lorem ipsum dolor sit amet",
  //       ],
  //       link: "/web-design",
  //       color: "#0e2b5c",
  //       animation_delay: "0.12s",
  //        description:"Lorem ipsum dolor sit amet adipiscing elit sed do eiusmod tempors labore et dolore magna siad enim aliqua"
  //     },
  //     {
  //       id: 2,
  //       price: "50,000",
  //       title: "Android application - Mobile Development",
  //       list: [
  //         "Lorem ipsum dolor sit amet",
  //         "Lorem ipsum dolor sit amet",
  //         "Lorem ipsum dolor sit amet",
  //         "Lorem ipsum dolor sit amet",
  //       ],
  //       link: "/web-design",
  //       color: "#0e2b5c",
  //       animation_delay: "0.12s",
  //        description:"Lorem ipsum dolor sit amet adipiscing elit sed do eiusmod tempors labore et dolore magna siad enim aliqua"
  //     },
  //     {
  //       id: 3,
  //       price: "25,000",
  //       title: "React Native applications - Mobile Development",
  //       list: [
  //         "Lorem ipsum dolor sit amet",
  //         "Lorem ipsum dolor sit amet",
  //         "Lorem ipsum dolor sit amet",
  //         "Lorem ipsum dolor sit amet",
  //       ],
  //       link: "/web-design",
  //       color: "#0e2b5c",
  //       animation_delay: "0.12s",
  //        description:"Lorem ipsum dolor sit amet adipiscing elit sed do eiusmod tempors labore et dolore magna siad enim aliqua"
  //     },
  //   ],
  // },
  // {
  //   id: 5,
  //   service_name: "Integrated Branding Solutions",
  //   service: [
  //     {
  //       id: 1,
  //       price: "45,000",
  //       title: "Brand Identity -Integrated Branding Solutions",
  //       list: [
  //         "Lorem ipsum dolor sit amet",
  //         "Lorem ipsum dolor sit amet",
  //         "Lorem ipsum dolor sit amet",
  //         "Lorem ipsum dolor sit amet",
  //       ],
  //       link: "/web-design",
  //       color: "#0e2b5c",
  //       animation_delay: "0.12s",
  //        description:"Lorem ipsum dolor sit amet adipiscing elit sed do eiusmod tempors labore et dolore magna siad enim aliqua"
  //     },
  //     {
  //       id: 2,
  //       price: "50,000",
  //       title: "CRM Implementation - Integrated Branding Solutions",
  //       list: [
  //         "Lorem ipsum dolor sit amet",
  //         "Lorem ipsum dolor sit amet",
  //         "Lorem ipsum dolor sit amet",
  //         "Lorem ipsum dolor sit amet",
  //       ],
  //       link: "/web-design",
  //       color: "#0e2b5c",
  //       animation_delay: "0.12s",
  //        description:"Lorem ipsum dolor sit amet adipiscing elit sed do eiusmod tempors labore et dolore magna siad enim aliqua"
  //     },
  //     {
  //       id: 3,
  //       price: "25,000",
  //       title: "Brand Promotion Concepts - Integrated Branding Solutions",
  //       list: [
  //         "Lorem ipsum dolor sit amet",
  //         "Lorem ipsum dolor sit amet",
  //         "Lorem ipsum dolor sit amet",
  //         "Lorem ipsum dolor sit amet",
  //       ],
  //       link: "/web-design",
  //       color: "#0e2b5c",
  //       animation_delay: "0.12s",
  //        description:"Lorem ipsum dolor sit amet adipiscing elit sed do eiusmod tempors labore et dolore magna siad enim aliqua"
  //     },
  //   ],
  // },
  
];


export default function HomeServiceAnimation() {
  const [activeCard, setActiveCard] = useState(null);
  const cardRefs = useRef([]);

  // Create the IntersectionObserver to detect when each card enters the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Get the card ID from the data-id attribute of the element
            setActiveCard(entry.target.getAttribute("data-id"));
          }
        });
      },
      {
        threshold: 0.5, // Trigger when at least 50% of the card is in view
      }
    );

    cardRefs.current.forEach((card) => {
      observer.observe(card); // Observe each card element
    });

    // Cleanup the observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);
  const groupedSlides = projects.flatMap((project) =>
    project.service.map((service) => ({ ...service, group: project.service_name }))
  );
  

  return (
    <>
      {" "}
      <div className="section-head style2 text-center pt-5 mb-3 homeservice-heading">
        <h2 className="title m-b10">Our Services</h2>
        <p>
          Our team has rich experience and technical mastery to develop
          tailor-made, agile solutions offering the best features with enhanced
          user experience to meet your brand’s objectives. Repute delivers the
          best solutions to facilitate your customers to have a joyful and
          memorable digital experience.
        </p>
      </div>
      <main className="main ">
        {" "}
        <div className="container">
      
          {
            projects.map((projects,i)=>(
              // projects.service.map((project, i) => { console.log(project);
              
                // return  
                <Card
                key={projects.id}
                {...projects}
                i={i}
                activeCard={activeCard}
                data={projects}
                cardRef={(el) => (cardRefs.current[i] = el)}
              />
            // })
            ))
          }
        </div>
      {/* <div className="container">
  {groupedSlides.map((service, index) => (
    <div key={service.id} className={`slide slide-group-${Math.floor(index / 3)}`}>
      <Card
        {...service}
        i={index}
        activeCard={activeCard}
        cardRef={(el) => (cardRefs.current[index] = el)}
      />
    </div>
  ))}
</div> */}


        <div className="home-services-section-2nd-bg"></div>
      </main>
    </>
  );
}
