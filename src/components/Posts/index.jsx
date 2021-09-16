import React, { Component } from 'react'
import { Link } from "react-router-dom"
import Pagination from '../common/paginate'
import { paginate } from '../../utils/pagination.js'
import { carousel, getCategoryPosts, getTagPosts, deleteElectedPost } from '../../Services/posts.service'
export class Posts extends Component  {

   state = {
     data : [],
	   currentPage: 1,
	   pageSize: 6
   }

   handlePageChange = page => {
     this.setState({ currentPage: page });
   }


   async componentDidMount() {
    await this.getPosts();
   } 

   async getPosts  ( ) {
   	let { from } = this.props
   	if ( from === 1 || from === 3 ) {
	   	if (this.props.Post) {
	   		this.props.Post[0].postList.map(x => 
	   		  x['category_info'] = this.props.Post[0].category_info.find(y => y._id === x.category)
	   		)
	   		this.props.Post[0].postList.map(x => x.date = this.formateDate(x.date))
	   		this.setState({ data : this.props.Post[0].postList })
	   	} else {
		   	let { data : { response } } = await carousel()
		   	response.map(x => x.date = this.formateDate(x.date))
		   	this.setState({ data : response })
	   	}
   	}
   	if ( from === 2 ) {
   		let { type } = this.props.Post
   		if ( type === 'category' ) {
   			let { data : { response } } = await getCategoryPosts(this.props.Post.id)
   			response.map(x => x.date = this.formateDate(x.date))
   			this.setState({ data : response })
   		}
   		if ( type === 'tag' ) {
   			let { data : { response } } = await getTagPosts(this.props.Post.id)
   			response.map(x => x.date = this.formateDate(x.date))
   			this.setState({ data : response })
   		}
   		if ( !type ) {
   			let { data : { response } } = await carousel()
		   	response.map(x => x.date = this.formateDate(x.date))
	   	  this.setState({ data : response })
   		}
   	}
  }


  formateDate = ( date ) => {
  	 let postDate = new Date(date)
     let Day   = postDate.getDate()
     let Month = postDate.getMonth() + 1
     let Year  = postDate.getFullYear()
     date = `${Day}/${Month}/${Year}`
  	 return date
  }


  getPagedData = () => {
    const { pageSize, currentPage, data } = this.state
    const postsList = paginate(data, currentPage, pageSize)
    return { postsList }
   }

   deletePost = async (id) => {
   	let { data : { responseCode } } = await deleteElectedPost(id)
   	if ( responseCode === 200 ) {
	   	let remainingPosts = this.state.data.filter(x => x._id !== id)
	   	this.setState({ data : remainingPosts })
   	}
   }

	render () {
		const { postsList }	= this.getPagedData()
		return (
			<div className="row">
				{ postsList.length > 0 && postsList.map(blog => (
				 <div className="col-lg-6 col-md-6" key={blog._id}>
			        <div className="post-card">
			            <div className="post-card-image">
			               <Link to={`/detail/${blog._id}`}>
			               	<img src="https://noonpost.netlify.app/html/template/assets/img/hero/1.jpg" alt="post" />
			               </Link>
			            </div>
			            <div className="post-card-content">
			                <Link to={`/detail/${blog._id}`} className="categorie">{blog.category_info.name}</Link>
			                <h5>
			                    <Link to={`/detail/${blog._id}`}>{blog.title}</Link>
			                </h5>
			                
			                <div className="post-card-info">
			                    <ul className="list-inline">
			                        <li>
			                            <Link to="/profile">
			                                <img src="https://noonpost.netlify.app/html/template/assets/img/author/1.jpg" alt="author" />
			                            </Link>
			                        </li>
			                        <li>
			                            <Link to="/profile">{blog.authorName}</Link>
			                        </li>
			                        <li className="dot"></li>
			                        <li>{blog.date}</li>
			                        {this.props.from === 3 && <li onClick={() => this.deletePost(blog._id)}><i className="fas fa-trash-alt ml-2"></i></li>}
			                    </ul>
			                </div>
			            </div>
			        </div>
			    </div>
				)) }
			    <Pagination
		            itemsCount={this.state.data.length}
		            pageSize={this.state.pageSize}
		            currentPage={this.state.currentPage}
		            onPageChange={this.handlePageChange}
		        />
			</div>
		)
	}
}

export default Posts