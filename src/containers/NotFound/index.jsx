import React from "react";
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <section className="section pt-55 mb-50">
        <div className="container-fluid">
            <div className="page404  widget">
                <div className="content">
                    <h1>404</h1>
                    <h3>Page Not Found.</h3>
                    <p>It looks like nothing was found at this location. </p>
                    <Link to="/" className="btn-custom">Go back to Home</Link>
                </div>
            </div>
        </div>
    </section>
  )
};

export default NotFound;