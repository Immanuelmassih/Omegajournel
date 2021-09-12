import React, { Component } from "react";
import Posts from '../../components/Posts';
import Author from '../../components/Author';
import { getPosts } from '../../Services/posts.service';
import { getCurrentUser } from '../../Services/authService';

class Profile extends Component {

		state = {
			posts      : getPosts(),
			user       : getCurrentUser()
		}

	render() {
	  return (
	  	<React.Fragment>
		  	<section className="section author full-space mb-40 pt-55">
		  		<div className="container-fluid">
		  			<Author Profile={true} user={this.state.user} />
		  		</div>
		  	</section>
		  	<section className="categorie-section">
		  		<div className="container-fluid">
		  		<div className="row">
		  		<div className="col-lg-12 mt-30">
		  			<Posts Post={this.state.posts} />
		  		</div>
		  		</div>
		  		</div>
		  	</section>
	  	</React.Fragment>
	  )
	}
};

export default Profile;