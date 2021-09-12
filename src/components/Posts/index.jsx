import React, { Component } from 'react'
import { Link } from "react-router-dom"
import Pagination from '../common/paginate'
import { paginate } from '../../utils/pagination.js'

export class Posts extends Component  {

   state = {
   data : this.props.Post,
	 currentPage: 1,
	 pageSize: 6
   }

   handlePageChange = page => {
     this.setState({ currentPage: page });
   }

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      data
    } = this.state;
    
    const postsList = paginate(data, currentPage, pageSize);
    return { postsList };
   };


	render () {

		const { postsList }	= this.getPagedData()

		return (
			<div className="row">
				{ postsList.map(blog => (
				 <div className="col-lg-6 col-md-6" key={blog.id}>
			        <div className="post-card">
			            <div className="post-card-image">
			               <Link to={`/detail/${blog.id}`}>
			               	<img src={blog.image} alt="post" />
			               </Link>
			            </div>
			            <div className="post-card-content">
			                <Link to={`/detail/${blog.id}`} className="categorie">{blog.category} {blog.id}</Link>
			                <h5>
			                    <Link to={`/detail/${blog.id}`}>{blog.title}</Link>
			                </h5>
			                <p>{blog.description}</p>
			                <div className="post-card-info">
			                    <ul className="list-inline">
			                        <li>
			                            <Link to="/profile">
			                                <img src={blog.authorImg} alt="author" />
			                            </Link>
			                        </li>
			                        <li>
			                            <Link to="/profile">{blog.author}</Link>
			                        </li>
			                        <li className="dot"></li>
			                        <li>{blog.date}</li>
			                    </ul>
			                </div>
			            </div>
			        </div>
			    </div>
				)) }
			    <Pagination
		            itemsCount={this.props.Post.length}
		            pageSize={this.state.pageSize}
		            currentPage={this.state.currentPage}
		            onPageChange={this.handlePageChange}
		        />
			</div>
		)
	}
}

export default Posts