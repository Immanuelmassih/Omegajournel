import React from 'react';
import Joi from "joi-browser";
import Form from '../../components/common/form';
import * as userService from '../../Services/userService';

class ResetAccount extends Form {

  state = {
    data: { password: "", ConfirmPassword : "" },
    errors: {}
  };

  schema = {
    password: Joi.string()
      .required()
      .label("Password"),
    ConfirmPassword: Joi.string()
      .required()
      .label("Confirm Password")
  };

  doSubmit = async () => {
    const form = { password : this.state.data.password, ConfirmPassword : this.state.data.ConfirmPassword, id : this.props.match.params.id }
    const response = await userService.reset(form)
    console.log ( response.data )
  };

  render() {
  	return (
      <section className="section pt-55 mb-50">
        <div className="container">
          <div className="sign widget ">
              <div className="section-title">
                  <h5>Reset Account</h5>
              </div>
              <form onSubmit={this.handleSubmit} className="sign-form widget-form ">
                {this.renderInput("password", "Password", "password")}
                {this.renderInput("ConfirmPassword", "Confirm Password")}
                {this.renderButton("Save")}
              </form>
           </div>
        </div>
      </section>
  	)
  }

}

export default ResetAccount