import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home  from './containers/Home';
import Blog  from './containers/Blog';
import Login from './containers/Login';
import Register from './containers/Register';
import Profile from './containers/Profile';
import Contact from './containers/Contact';
import Subscription from './containers/Subscription';
import ForgotPassword from './containers/ForgotPassword';
import CreateEditBlog from './containers/CreateEditBlog';
import ResetAccount from './containers/ResetAccount';
import BlogDetail from './containers/BlogDetail';
import NotFound from './containers/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="content">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/blog/:type/:id" component={Blog} />
            <Route path="/blog" component={Blog} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/profile" component={Profile} />
            <Route path="/subscription" component={Subscription} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/reset-account" component={ResetAccount} />
            <Route path="/contact" component={Contact} />
            <Route path="/post" component={CreateEditBlog} />
            <Route path="/detail/:id" component={BlogDetail} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
