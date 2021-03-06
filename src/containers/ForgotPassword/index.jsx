import React from 'react';
import Joi from "joi-browser";
import Form from '../../components/common/form';
import * as userService from '../../Services/userService';

class ForgotPassword extends Form {

  state = {
    data: { email: "" },
    errors: {}
  };

  schema = {
    email: Joi.string()
      .email()
      .required()
      .label("Email")
  };

  doSubmit = async () => {
    const response = await userService.forgot(this.state.data)
    console.log(response.data);
  };



  render() {
  	return (
      <section className="section pt-55 mb-50">
        <div className="container">
          <div className="sign widget ">
              <div className="section-title">
                  <h5>Forgot Password</h5>
              </div>
              <form onSubmit={this.handleSubmit} className="sign-form widget-form ">
                {this.renderInput("email", "Email")}
                {this.renderButton("Send")}
              </form>
           </div>
        </div>
      </section>
  	)
  }

}

export default ForgotPassword