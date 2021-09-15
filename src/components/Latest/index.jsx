import React from "react";
import { Link } from "react-router-dom";

const Latest = ({ Latests }) => {
    Latests.map(x => {
     if ( x.private === false ) {
      let postDate = new Date(x.date)
      let Day   = postDate.getDate()
      let Month = postDate.getMonth() + 1
      let Year  = postDate.getFullYear()
      x.date = `${Day}/${Month}/${Year}`
     }
    return null
    }
  )
  return (
    <div className="widget ">
          <div className="section-title">
              <h5>Latest Posts</h5>
          </div>
          <ul className="widget-latest-posts">
           {Latests.map(post => (
               <li className="last-post" key={post._id}>
                  <div className="image">
                      <Link to={`/detail/${post._id}`}>
                          <img src="https://noonpost.netlify.app/html/template/assets/img/latest/3.jpg" alt="blog_image" />
                      </Link>
                  </div>
                  <div className="content">
                      <p>
                          <Link to={`/detail/${post._id}`}>{post.title}</Link>
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