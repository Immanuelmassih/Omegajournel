import React, { Component } from "react";
import Posts from '../../components/Posts';
import { categoryDetails } from '../../Services/category.servce'
import { Link } from "react-router-dom";


export class Blog extends Component {
		
		state = {
			blogSortPost : [],
		}

	   async componentDidMount() {
	    await this.getCategory();
	   }

	   async getCategory () {
	   	if ( this.match ) {
	   	  let { data : { response } } = await categoryDetails(this.props.match.params.id)
	   	  this.setState({ blogSortPost :  response})
	   	}
	   }


	render() {
		  return (
		  	<React.Fragment>
			    <section className="categorie-section">
			        <div className="container-fluid">
			            <div className="row">
			                <div className="col-lg-8">
				                {this.state.blogSortPost.length > 0 && this.state.blogSortPost.map(blog => (
				                    <div className="categorie-title" key={blog._id}> 
				                         <small>
				                            <Link to="/">Home</Link>
				                            <span className="arrow_carrot-right"></span> {blog.name}
				                        </small>
				                        <h3>{this.getType()} : <span> {blog.name}</span></h3>
				                        <p>Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Minima, mollitia? </p>
				                    </div>
				                  ))
			                     }
			                </div>
			            </div>
			        </div>
			    </section> 
			  	<section className="categorie-section">
			  		<div className="container-fluid">
			  			<Posts Post={this.props.match.params} from={2} />
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
	}



export default Blog;