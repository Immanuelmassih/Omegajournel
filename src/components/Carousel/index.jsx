import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from "react-router-dom";

const Carousel = ( { slider }) => {
	slider.map(x => {
		 if ( x.private === false ) {
		 	let postDate = new Date(x.date)
		 	let Day   = postDate.getDate()
			let Month = postDate.getMonth() + 1
			let Year  = postDate.getFullYear()
			let Time  = postDate.getHours()
			let min   = postDate.getMinutes()
			x.date = `${Day}/${Month}/${Year}`
			x['time'] = `${Time}:${min}`
		 }
		return null
	  }
	)
	return (
	  <section className="section carousel-hero">	
	   { slider.length > 0 &&
		 <OwlCarousel className='owl-theme' loop margin={10} items={1} dots={false} nav>
	      {slider.map(item => (
		      <div className="hero d-flex align-items-center" key={item._id} style={{backgroundImage: `url(${item.image})`}}>
		      	<div className="container-fluid">
	               <div className="row">
	                  <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
		                  <div className="hero-content">
	                        <a href="blog-grid.html" className="categorie">{item.category_info.name}</a>
	                        <h2><Link to={`/detail/${item.id}`}>{item.title} </Link></h2>
	                         <div className="post-card-info">
	                            <ul className="list-inline">
	                                <li><a href="author.html"><img src="{item.authorImg}" alt="" /></a></li>
	                                <li><a href="author.html">{item.authorName}</a></li>
	                                <li className="dot"></li>
	                                <li>{item.date}</li>
	                                <li className="dot"></li>
	                                <li>{item.time}</li>
	                            </ul>
	                        </div> 
	                    </div>
	                  </div>
	              </div>
	            </div>
		      </div>
	      ))}
	      </OwlCarousel>
	    }
      </section>
	)
}

export default Carousel