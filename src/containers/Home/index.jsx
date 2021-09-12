import React, { Component } from "react";
import Carousel from '../../components/Carousel'
import Posts from '../../components/Posts'
import Latest from '../../components/Latest'
import Categories from '../../components/Categories'
import Tags from '../../components/Tags'
import { categoryList } from '../../Services/category.servce';
import { tagList } from '../../Services/tag.service';
import { getLatest } from '../../Services/latest.service'
import { carousel, getPosts } from '../../Services/posts.service'

class Home extends Component {

	state = {
		slider     : [],
		categories : [],
		tags       : [],
		latest     : getLatest(),
		posts      : getPosts()
	}

   async componentDidMount() {
    await this.getCatTags();
   } 

   async getCatTags () {
   	 let cat       = await categoryList()
   	 let tag       = await tagList()
   	 let { data : { response } }  = await carousel()
   	 this.setState({categories : cat.data })
   	 this.setState({tags       : tag.data })
	 this.setState({slider     : response })
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