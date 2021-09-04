import React, { Component } from "react";
import Posts from '../../components/Posts';
import Author from '../../components/Author';
import { getPosts } from '../../FakeServices/posts.service';

class Profile extends Component {

		state = {
			posts      : getPosts()
		}

	render() {
	  return (
	  	<React.Fragment>
		  	<section className="section author full-space mb-40 pt-55">
		  		<div className="container-fluid">
		  			<Author Profile={true} />
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