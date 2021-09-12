import React from "react";
import Joi from "joi-browser";
import Form from '../../components/common/form';
import * as userService from '../../Services/userService';
import auth from "../../Services/authService";

class Login extends Form {

  state = {
    data: { email: "", password: "", remember : false },
    errors: {}
  };

  schema = {
    email: Joi.string()
      .email()
      .required()
      .label("Email"),
    password: Joi.string()
      .required()
      .min(6)
      .label("Password"),
    remember : Joi.boolean()
      .required()
      .label("Remember Me")
  };

  doSubmit = async () =>  {
    try {
      const response = await userService.login(this.state.data)
      const { data : { response : token, responseCode } } = response
       if ( responseCode === 200 ) {
          auth.loginWithJwt(token);
          window.location.href = "/profile"
       }
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
       <section className="section pt-55 mb-50">
        <div className="container">
          <div className="sign widget ">
              <div className="section-title">
                  <h5>Login</h5>
              </div>
              <form className="sign-form widget-form" onSubmit={this.handleSubmit}>
                {this.renderInput("email", "Email")}
                {this.renderInput("password", "Password ", "password")}
                {this.renderCheckbox("remember", "Remember Me")}
                {this.renderButton("Login")}
              </form>
           </div>
        </div>
      </section>
    )
  }
};

export default Login;