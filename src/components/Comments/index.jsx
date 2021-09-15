import React from 'react'
import Joi from "joi-browser";
import Form from '../../components/common/form'
import { getCurrentUser } from "../../Services/authService";
import { CommentPost, PostComments } from '../../Services/comment.service';

class Comments extends Form {

	  state = {
	    data: { postId : "", author : "", comment: "" },
	    Comments : [],
	    errors: {}
	  };

	  async componentDidMount() {
		let { _id } = getCurrentUser()
		const { data } = this.state
		data.postId = this.props.postId 
		data.author = _id
		this.setState({data})
		await this.getComments()
	  }

	async getComments () {
		let { data : { response : Comments } } = await PostComments(this.props.postId)
		    Comments.map(x => {
		    if ( x.date ) {
	            let postDate = new Date(x.date)
	            let Day   = postDate.getDate()
	            let Month = postDate.getMonth() + 1
	            let Year  = postDate.getFullYear()
	            x.date = `${Day}/${Month}/${Year}`
	        }
	        return null
		})
		const { data } = this.state
		data.comment = ""
		this.setState({data})
		this.setState({Comments : Comments})
	}

	  schema = {
	  	postId : Joi.string(),
	  	author : Joi.string(),
	    comment: Joi.string()
	      .required()
	      .min(6)
	      .label("Comment")
	  };

	  doSubmit = async () => {
	  	let { data : { responseCode } } = await CommentPost(this.state.data)
	    if ( responseCode === 200 ) this.getComments()
	  }

	render() {
		let { Comments } = this.state
		return (
			<div className="widget mb-50">
		        <div className="title">
		            {Comments && <h5> { Comments.length } Comments</h5>}
		        </div>
		        <ul className="widget-comments">
		        	{Comments && Comments.map(comment => (
			            <li className="comment-item" key={comment._id}>
			                <img src="https://noonpost.netlify.app/html/template/assets/img/user/1.jpg" alt="" />
			                <div className="content">
			                    <ul className="info list-inline">
			                        <li>{comment.UserDetail.name}</li>
			                        <li className="dot"></li>
			                        <li> {comment.date}</li>
			                    </ul>
			                    <p>{comment.comment}</p>
			                </div>
			            </li>
		            )) }
		        </ul>
		        <div className="title">
		            <h5>Leave a Reply</h5>
		        </div>
		        <form className="widget-form" onSubmit={this.handleSubmit}>
		            <div className="row">
		                <div className="col-md-12">
		                	{this.renderTextarea("comment", "Comment", "textarea" , 5 , 30)}
		                </div>
		                <div className="col-12">
			                {this.renderButton("Post Comment")}
		                </div> 
		            </div>
		        </form>
		    </div>
		)
	}
}

export default Comments