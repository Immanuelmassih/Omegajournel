import React, { Component } from "react";
import Posts from '../../components/Posts';
import { getHeader } from '../../FakeServices/heade.server'
import { CategoriesList, TagsList } from '../../FakeServices/category.servce'
import { Link } from "react-router-dom";

let radix = false

export class Blog extends Component {
		
		state = {
			blogSortPost : this.Posts().detail,
			posts : this.Posts().posts
		}

	render() {
		  return (
		  	<React.Fragment>
			    <section className="categorie-section">
			        <div className="container-fluid">
			            <div className="row">
			                <div className="col-lg-8">
				                {this.state.blogSortPost  ? 
			                    <div className="categorie-title"> 
			                         <small>
			                            <Link to="/">Home</Link>
			                            <span className="arrow_carrot-right"></span> {this.state.blogSortPost.name}
			                        </small>
			                        <h3>{this.getType()} : <span> {this.state.blogSortPost.name}</span></h3>
			                        <p> {this.state.blogSortPost.description} </p>
			                    </div>: null }
			                </div>
			            </div>
			        </div>
			    </section> 
			  	<section className="categorie-section">
			  		<div className="container-fluid">
			  			<Posts Post={this.state.posts} />
			  		</div>
			  	</section>
			</React.Fragment>
		  )
		};

		  getType ()  {
		  	switch(this.props.match.params.type) {
		  			case "category" :
		  				return "Category";
		  			case "tag" : 
		  				return "Tags"
						 default : 
		  					return ''
		  	}
		  }

		  Posts () {
		  	switch(this.props.match.params.type) {
		  			case "category" :
		  				return {
		  					detail : CategoriesList().find(x => x.id === parseInt(this.props.match.params.id, radix)),
		  					posts  : getHeader()	
		  				} 
		  			case "tag" : 
		  				return {
		  					detail : TagsList().find(x => x.id === parseInt(this.props.match.params.id, radix)),
		  					posts : getHeader()
		  				} 
						 default : 
		  					return {
		  						detail : null,
		  						posts : getHeader()
		  					}
		  	}
		  }

	}



export default Blog;