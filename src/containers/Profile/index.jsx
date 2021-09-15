import React, { Component } from "react";
import Posts from '../../components/Posts';
import Author from '../../components/Author';
import { getCurrentUser, getDetail } from '../../Services/authService';

class Profile extends Component {

		state = {
			user       : []
		}

	async componentDidMount() {
      await this.getUserDetail();
   }


	async getUserDetail ( ) {
		let { _id } = getCurrentUser()
		let { data : { response } } = await getDetail(_id)
		this.setState({ user : response })
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
		  			<Posts Post={this.state.posts} from={3} />
		  		</div>
		  		</div>
		  		</div>
		  	</section>
	  	</React.Fragment>
	  )
	}
};

export default Profile;