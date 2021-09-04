import React from 'react'
import Joi from "joi-browser";
import Form from '../../components/common/form'

class Comments extends Form {

	  state = {
	    data: { comment: "" },
	    errors: {}
	  };

	  schema = {
	    comment: Joi.string()
	      .required()
	      .min(6)
	      .label("Comment")
	  };

	  doSubmit = () => {
	    console.log("Submitted");
	    console.log ( this.state.data )
	  };

	render() {
		return (
			<div className="widget mb-50">
		        <div className="title">
		            <h5>3 Comments</h5>
		        </div>
		        <ul className="widget-comments">
		            <li className="comment-item">
		                <img src="https://noonpost.netlify.app/html/template/assets/img/user/1.jpg" alt="" />
		                <div className="content">
		                    <ul className="info list-inline">
		                        <li>Vatsalya</li>
		                        <li className="dot"></li>
		                        <li> January 15, 2021</li>
		                    </ul>
		                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus at doloremque adipisci eum placeat quod
		                        non fugiat aliquid sit similique!
		                    </p>
		                    <div>
		                        <span className="link">
		                            <i className="arrow_back"></i> Reply</span>
		                    </div>
		                </div>
		            </li>
		            <li className="comment-item">
		                <img src="https://noonpost.netlify.app/html/template/assets/img/author/1.jpg" alt="" />
		                <div className="content">
		                    <ul className="info list-inline">
		                        <li>Alok Kumar</li>
		                        <li className="dot"></li>
		                        <li> January 15, 2021</li>
		                    </ul>
		        
		                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus at doloremque adipisci eum placeat quod
		                        non fugiat aliquid sit similique!
		                    </p>
		                    <div>
		                         <span className="link">
		                            <i className="arrow_back"></i> Reply</span>
		                    </div>
		                </div>
		            </li>
		            <li className="comment-item">
		                <img src="https://noonpost.netlify.app/html/template/assets/img/user/2.jpg" alt="" />
		                <div className="content">
		                    <ul className="info list-inline">
		                        <li>Emanuel</li>
		                        <li className="dot"></li>
		                        <li> January 15, 2021</li>
		                    </ul>
		        
		                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus at doloremque adipisci eum placeat quod
		                        non fugiat aliquid sit similique!
		                    </p>
		        
		                    <div>
		                        <span className="link">
		                            <i className="arrow_back"></i> Reply</span>
		                    </div>
		                </div>
		            </li>
		        </ul>
		        <div className="title">
		            <h5>Leave a Reply</h5>
		        </div>
		        <form className="widget-form" onSubmit={this.handleSubmit}>
		            <p>Your email adress will not be published ,Requied fileds are marked*.</p>
		            <div className="alert alert-success contact_msg" role="alert">
		                Your message was sent successfully.
		            </div>
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