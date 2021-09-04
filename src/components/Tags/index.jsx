import React from 'react';
import { Link } from "react-router-dom";

const Tags = ({Tag}) => {
	let tags = "tag"
	return (
		<div className="widget">
	        <div className="section-title">
	            <h5>Tags</h5>
	        </div>
	        <div className="widget-tags">
	            <ul className="list-inline">
	            {Tag.map(tag => (
	            	<li key={tag.id}>
	                    <Link to={`/blog/${tags}/${tag.id}`}>{tag.name}</Link>
	                </li>
	            	))}
	            </ul>
	        </div>
	    </div>
	)
}

export default Tags

