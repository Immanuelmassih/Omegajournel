import React  from 'react';
import Joi from "joi-browser";
import Form from '../../components/common/form';

class CreateEditBlog extends Form {

  state = {
  	categories : [{ _id : 1, name : "React"},{ _id : 2, name : "Angular"},{ _id : 3, name : "Vue" }], 
  	tags : [{ _id : 1, name : "React"},{ _id : 2, name : "Angular"},{ _id : 3, name : "Vue" }], 
    data: { title : "", image : "", category : "", tag : "", description : "" },
    errors: {}
  };

  schema = {
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

  doSubmit = () => {
    console.log("Submitted");
    console.log ( this.state.data )
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
		                {this.renderInput("title", "Post Title")}
		                {this.renderInput("image", "Post Image", "file", "form-control custom_select")}
		                {this.renderSelect("category", "Post Category", this.state.categories)}
		                {this.renderSelect("tag", "Tag Category", this.state.tags)}
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