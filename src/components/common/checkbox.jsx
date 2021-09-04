import React from "react";
import { Link } from "react-router-dom";

const Checkbox = ({ name, label, error, ...rest }) => {
  return (
    <div className="sign-controls form-group">
      <div className="custom-control custom-checkbox">
        <input {...rest} className="custom-control-input" name={name} id={name} />
        <label className="custom-control-label" htmlFor={name}>{label}</label>
      </div>
      {name === "remember" && <Link to="/forgot-password" className="btn-link  ml-auto">Forgot Password?</Link>}      
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Checkbox;