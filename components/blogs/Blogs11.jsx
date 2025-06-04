import { posts } from "@/data/blogs";
import Link from "next/link";
import Image from "next/image";
import Pagination from "../common/Pagination";

export default function Blogs11() {
  return (
    <div className="container max-w900">
      {/* Blog large img */}

      {posts.slice(0, 6).map((elm, i) => (
        <div key={i} className="blog-post blog-lg blog-rounded">
          <div className="blog-post blog-grid blog-rounded blog-effect1">
            <div className="dlab-post-media dlab-img-effect">
              <Link href={`/blog-single/${elm.title}`}>
                <Image alt="" src={elm.imgSrc} width="700" height="500" />
              </Link>
            </div>
            <div className="dlab-info p-a20 border-1">
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
                <p>{elm.text}</p>
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
        </div>
      ))}
      {/* Blog large img END */}
      {/* Pagination start */}
      <div className="pagination-bx clearfix text-center">
        <ul className="pagination">
          <Pagination />
        </ul>
      </div>
      {/* Pagination END */}
    </div>
  );
}
