import React from "react";
import { Link } from "react-router-dom";

const Categories = ( { Category } ) => {
  let category = "category"
  return (
    <div className="widget ">
    	<div className="section-title"> 
    		<h5>Categories</h5>
    	</div>
    	<div className="widget-categories">
        {Category.map(cat => (
      		<li key={cat._id}>
              <Link to={`/blog/${category}/${cat._id}`} className="categorie">{cat.name}</Link>
	            <span className="ml-auto">{cat.posts}</span>
	        </li>
        ))
        }
    	</div>
    </div>
  )
};

export default Categories;