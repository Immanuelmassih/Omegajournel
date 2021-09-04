import React from "react";
import Joi from "joi-browser";
import Form from '../../components/common/form';
import { UserLogin } from '../../FakeServices/user.service';

class Login extends Form {

  state = {
    data: { email: "", password: "", remember : "" },
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
    console.log("Submitted");
    let users =  await UserLogin()
    const { data } = this.state
    let user = users.filter(x => x.email === data.email && data.password)
    console.log ( user )
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