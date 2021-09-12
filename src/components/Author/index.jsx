import React, { Component } from 'react'
import { Link } from "react-router-dom";
import auth from "../../Services/authService";

class Author extends Component {

	logOut() {
		auth.logout()
	}

	render() {
	
		let classes = this.getProfileBackground()

		return (
			<div className="row">
				<div className="col-lg-12">
					<div className={classes}>
						<Link to="/profile" className="image">
						   <img src="https://noonpost.netlify.app/html/template/assets/img/author/1.jpg" alt="author" />
						</Link>
						<h6><span>Hi, I'm {this.props.user.name}</span></h6>
						<ul className="multi_options">
							<li onClick={this.logOut}>Logout <i className="fas fa-sign-out-alt"></i></li>
							{this.props.user.payment && <li><Link to="/post">Create Post <i className="far fa-plus-square"></i></Link></li>}
						</ul>
						<div className="link">13 Articles</div>
						{!this.props.user.payment && <p> You haven't bought any subscription plan yet, to create and read the private posts 
						<Link className="customLink" to="/subscription">buy</Link> a plan</p>}
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