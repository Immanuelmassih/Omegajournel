import React, { Component } from 'react'
import { Link } from "react-router-dom";
import auth, { getCurrentUser , getDetail} from "../../Services/authService";

class Author extends Component {

	logOut() {
		auth.logout()
	}

	state = {
		user : []
	}

	 async getUserDetail ( ) {
	 	console.log ( this.props )
		let { _id } = getCurrentUser()
		let { data : { response } } = await getDetail(_id)
		this.setState({ user : response })
	}

   async componentDidMount() {
      await this.getUserDetail();
   }

	render() {
	
		let classes = this.getProfileBackground()
		return (
			<div className="row">
			{ this.state.user && this.state.user.map(user => (
					<div className="col-lg-12" key={user._id}>
						<div className={classes}>
							<Link to="/profile" className="image">
							   <img src="https://noonpost.netlify.app/html/template/assets/img/author/1.jpg" alt="author" />
							</Link>
							<h6><span>Hi, I'm {user.name}</span></h6>
							<ul className="multi_options">
								<li onClick={this.logOut}>Logout <i className="fas fa-sign-out-alt"></i></li>
								{user.payment && <li><Link to="/post">Create Post <i className="far fa-plus-square"></i></Link></li>}
							</ul>
							<div className="link">{user.postCount} Articles</div>
							{!user.payment && <p> You haven't bought any subscription plan yet, to create and read the private posts 
							<Link className="customLink" to="/subscription">buy</Link> a plan</p>}
						</div>
					</div>
				))
			}
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