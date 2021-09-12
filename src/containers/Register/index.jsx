import React from "react";
import Form from '../../components/common/form';
import Joi from "joi-browser";
import { Link } from "react-router-dom";
import * as userService from '../../Services/userService';
import auth from "../../Services/authService";

class Register extends Form {


  state = {
    data: { name : "", email: "", password: "", terms : false },
    errors: {}
  };

  schema = {
    name: Joi.string()
      .required()
      .label("User Name"),
    email: Joi.string()
      .email()
      .required()
      .label("Email"),
    password: Joi.string()
      .required()
      .min(6)
      .label("Password"),
    terms : Joi.boolean()
      .required()
      .label("Agree to our terms & conditions")
  };

  doSubmit  = async () => {
    try {
      const response = await userService.register(this.state.data);
      const { data : { response : token } } = response
      auth.loginWithJwt(token);
      window.location.href = "/subscription"
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
                  <h5>Sign Up</h5>
              </div>
              <form className="sign-form widget-form" onSubmit={this.handleSubmit}>
                {this.renderInput("name", "User Name")}
                {this.renderInput("email", "Email")}
                {this.renderInput("password", "Password ", "password")}
                {this.renderCheckbox("terms", "Agree to our terms & conditions ")}
                {this.renderButton("Sign Up")}
                <p className="form-group text-center">Already have an account? <Link to="/login" className="btn-link">Login</Link></p>
              </form>
           </div>
        </div>
      </section>
    )
  }
};

export default Register;