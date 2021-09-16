import React  from 'react';
import Joi from "joi-browser";
import Form from '../../components/common/form';
import { uploadImage } from '../../Services/userService';

class EditProfile extends Form {

  state = {
    data       : { image : {}, authorId : "" },
    errors     : {}
  }

  async componentDidMount() {
    this.state.data.authorId = this.props.match.params.id
    const { data } = this.state
    this.setState({ data })
  }

  PostImage ( event ) {
    this.state.data.image = event.target.files[0]
    const { data } = this.state
    this.setState({ data })
  }

  schema = {
    authorId: Joi.string(),
    image : Joi.object()
      .label("Profile Image")
  };

  doSubmit = async () => { 
    let { data : { responseCode } } = await uploadImage(this.state.data)
    if ( responseCode === 200 ) {
     window.location.href =  `${window.location.origin}/profile`
    }
  };

  render() {
  	return (
      <section className="section pt-55">
        <div className="container-fluid">
          <div className="row mb-20">
	          <div className="col-lg-12 mt-30">
		          <div className="contact">
		              <form onSubmit={this.handleSubmit} className="sign-form widget-form ">
                    <div className="form-group">
                      <label htmlFor="image">Post Image</label>
                      <input type="file" name="image" id="image" onChange={this.PostImage.bind(this)} className="form-control custom_select" />
                    </div>
                    <button className="btn btn-custom">
                      Upload
                    </button>
		              </form>
		          </div>
          	  </div>
          </div>
        </div>
      </section>
  	)
  }

}

export default EditProfile