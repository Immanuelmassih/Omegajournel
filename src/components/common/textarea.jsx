import React from "react";

const Textarea = ({ name, label, options, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <textarea name={name} id={name} {...rest} className="form-control" placeholder={label}></textarea>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Textarea;