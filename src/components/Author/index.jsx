import React, { Component } from 'react'
import { Link } from "react-router-dom";

class Author extends Component {

	render() {

		let classes = this.getProfileBackground()

		return (
			<div className="row">
				<div className="col-lg-12">
					<div className={classes}>
						<Link to="/profile" className="image">
						   <img src="https://noonpost.netlify.app/html/template/assets/img/author/1.jpg" alt="author" />
						</Link>
						<h6><span>Hi, I'm David Smith</span></h6>
						<div className="link">13 Articles</div>
						<p> I'm David Smith, husband and father , I love Photography,travel and nature. I'm working as a writer and blogger with experience of 5 years until now.</p>
					</div>
				</div>
			</div>
		)
	}

	getProfileBackground () {
		let classes = "widget-author ";
		classes += this.props.Profile  ? "inner-width" : "widget"
		return classes
	}

}


export default Author