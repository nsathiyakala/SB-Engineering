import { posts } from "@/data/blogs";
import Link from "next/link";
import Image from "next/image";
import Pagination from "../common/Pagination";

export default function Blogs8() {
  return (
    <div className="container">
      {/* Blog half image */}
      {posts.slice(0, 4).map((elm, i) => (
        <div key={i} className="blog-post blog-md clearfix">
          <div className="dlab-post-media dlab-img-effect zoom-slow">
            <Link href={`/blog-single/${elm.title}`}>
              <Image alt="" src={elm.imgSrc} width="700" height="500" />
            </Link>
          </div>
          <div className="dlab-post-info">
            <div className="dlab-post-meta">
              <ul>
                <li className="post-date">
                  <strong>
                    {elm.date.day} {elm.date.month}
                  </strong>{" "}
                  <span> {elm.date.year}</span>
                </li>
                <li className="post-author">
                  By <a href="#">{elm.author}</a>
                </li>
              </ul>
            </div>
            <div className="dlab-post-title">
              <h4 className="post-title">
                <Link href={`/blog-single/${elm.title}`}>{elm.title}</Link>
              </h4>
            </div>
            <div className="dlab-post-text">
              <p>{elm.text2}</p>
            </div>
            <div className="dlab-post-readmore">
              <Link
                href={`/blog-single/${elm.title}`}
                title="READ MORE"
                rel="bookmark"
                className="site-button"
              >
                READ MORE
                <i className="ti-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Blog half image END */}
      {/* Pagination  */}
      <div className="pagination-bx clearfix text-center">
        <ul className="pagination">
          <Pagination />
        </ul>
      </div>
      {/* Pagination END */}
    </div>
  );
}
