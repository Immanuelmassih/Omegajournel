import React from "react";
import { Link } from "react-router-dom";

const Latest = ({ Latests }) => {
  return (
    <div className="widget ">
          <div className="section-title">
              <h5>Latest Posts</h5>
          </div>
          <ul className="widget-latest-posts">
           {Latests.map(post => (
               <li className="last-post" key={post.id}>
                  <div className="image">
                      <Link to={`/detail/${post.id}`}>
                          <img src={post.image} alt="blog_image" />
                      </Link>
                  </div>
                  <div className="nb">{post.number}</div>
                  <div className="content">
                      <p>
                          <Link to={`/detail/${post.id}`}>{post.title}</Link>
                      </p>
                      <small>
                          <span className="icon_clock_alt"></span> {post.date}</small>
                  </div>
              </li>
           ))}
          </ul>
      </div>
  )
};

export default Latest;