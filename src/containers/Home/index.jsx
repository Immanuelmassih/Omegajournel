import React, { Component } from "react";
import Carousel from '../../components/Carousel'
import Posts from '../../components/Posts'
import Latest from '../../components/Latest'
import Categories from '../../components/Categories'
import Tags from '../../components/Tags'
import { getHeader } from '../../FakeServices/heade.server'
import { CategoriesList, TagsList } from '../../FakeServices/category.servce'
import { getLatest } from '../../FakeServices/latest.service'
import { getPosts } from '../../FakeServices/posts.service'

class Home extends Component {

	state = {
		slider     : getHeader(),
		categories : CategoriesList(),
		tags       : TagsList(),
		latest     : getLatest(),
		posts      : getPosts()
	}

	render() {
	  return (
	  	<React.Fragment>
		  	<Carousel slider={this.state.slider} />
		  	<section className="categorie-section">
		  		<div className="container-fluid">
			  		<div className="row">
				  		<div className="col-lg-8 mt-30">
				  			<Posts Post={this.state.posts} />
				  		</div>
				  		<div className="col-lg-4 max-width">
				  			<Latest Latests={this.state.latest} />
				  			<Categories Category={this.state.categories} />
				  			<Tags Tag={this.state.tags} />
				  		</div>
			  		</div>
		  		</div>
		  	</section>
	  	</React.Fragment>
	  )
	}
}

export default Home;