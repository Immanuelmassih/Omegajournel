import React from 'react';
import Joi from "joi-browser";
import Form from '../../components/common/form';

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
      .label("Vonfirm Password")
  };

  doSubmit = () => {
    console.log("Submitted");
    console.log ( this.state.data )
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