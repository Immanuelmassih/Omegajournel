import React  from 'react';
import Joi from "joi-browser";
import Form from '../../components/common/form';
import { categoryList } from '../../Services/category.servce';
import { tagList } from '../../Services/tag.service';
import { create, Upload } from '../../Services/posts.service';
import { getCurrentUser } from '../../Services/authService';

class CreateEditBlog extends Form {

  state = {
  	categories : [], 
  	tags       : [], 
    data       : { status: false, title : "", image : "", category : "", tag : "", description : "", authorId : getCurrentUser()._id, author : getCurrentUser().name },
    errors     : {}
  }

  async componentDidMount() {
    await this.categories();
  }

  async categories() {
    const { data } = await categoryList()
    let response = await tagList()
    this.setState({ categories : data })
    this.setState({ tags : response.data })
  }

  schema = {
    authorId: Joi.string(),
    author: Joi.string(),
    status : Joi.boolean()
      .label("Make post Private"),
    title: Joi.string()
      .required()
      .label("Post Title"),
    image : Joi.string()
      .required()
      .label("Post Image"),
    category : Joi.string()
      .required()
      .label("Post Category"),
    tag : Joi.string()
       .required()
       .label("Post Tag"),
    description : Joi.string()
       .required()
       .label("Post Description")
  };

  doSubmit = async () => {
    let response  = await create(this.state.data)
    let imgUpload = await Upload(this.state)
    console.log ( response )
    console.log ( imgUpload )
  };

  handleEditorChange = ( e ) => {
    console.log ( e.target.getContent() )
  }

  render() {
  	return (
      <section className="section pt-55">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
                <div className="section-title">
                    <h5>New post</h5>
                </div>
            </div>
          </div>
          <div className="row mb-20">
	          <div className="col-lg-12 mt-30">
		          <div className="contact">
		              <form onSubmit={this.handleSubmit} className="sign-form widget-form ">
                    {this.renderCheckbox("status", "Make post private")}
		                {this.renderInput("title", "Post Title")}
		                {this.renderInput("image", "Post Image", "file", "form-control custom_select")}
		                {this.renderSelect("category", "Post Category", this.state.categories)}
		                {this.renderSelect("tag", "Post Tag", this.state.tags)}
                    {this.renderWYSWYG("description", "Messgae")}
		                {this.renderButton("Save")}
		              </form>
		          </div>
          	  </div>
          </div>
        </div>
      </section>
  	)
  }

}

export default CreateEditBlog