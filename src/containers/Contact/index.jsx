import React from "react";
import Form from '../../components/common/form';
import Joi from "joi-browser";

class Contact extends Form {

  state = {
    data: { username : "", email: "", subject: "", message : "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("User Name"),
    email: Joi.string()
      .email()
      .required()
      .label("Email"),
    subject: Joi.string()
      .required()
      .label("Subject"),
    message : Joi.string()
      .required()
      .label("Message")
  };

  doSubmit = () => {
    console.log("Submitted");
    console.log ( this.state.data )
  };


  render() {
    return (
      <section className="section pt-50">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h5>Contact us</h5>
              </div>
            </div>
          </div>
          <div className="row mb-20">
            <div className="col-lg-12 mt-30">
              <div className="contact">
                <form onSubmit={this.handleSubmit} className="contact_form widget-form ">
                  <h6>Feel free to contact any time.</h6>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, repudiandae.</p>
                   {this.renderInput("username", "User Name")}
                   {this.renderInput("email", "Email")}
                   {this.renderInput("subject", "Subject")}
                   {this.renderTextarea("message", "Message", "text", 5 , 30)}
                   {this.renderButton("Send Message")}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
};

export default Contact;