import React, { Component } from "react";
import Joi        from "joi-browser";
import Input      from "./input";
import Select     from "./select";
import Textarea   from "./textarea";
import Checkbox   from "./checkbox";
import { Editor } from '@tinymce/tinymce-react';

class Form extends Component {
  state = {
    data: {},
    errors: {}
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {

    const errors = { ...this.state.errors }
    const errorMessage = this.validateProperty(input)
    if (errorMessage) errors[input.name] = errorMessage
    else delete errors[input.name];

    const data = { ...this.state.data }
    data[input.name] = input.value
    this.setState({ data, errors })

  }

  handleCheckBox = ( e ) => {
    let { name, checked : value } = e.target
    let checkBox = {
      name, value
    }
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(checkBox);

    if (errorMessage) errors[checkBox.name] = errorMessage;
    else delete errors[checkBox.name];

    let data = { ...this.state.data };
    data[checkBox.name] = checkBox.value;
    this.setState({ data, errors })
  }

  handleEditor = ( e ) => {
    let wyswyg = {}
    let name = "description"
    let value = e
    wyswyg = {name,value}
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(wyswyg);

    if (errorMessage) errors[wyswyg.name] = errorMessage;
    else delete errors[wyswyg.name];

    let data = { ...this.state.data };
    data[wyswyg.name] = wyswyg.value;
    this.setState({ data, errors })
  }

  renderButton(label) {
    return (
      <button className="btn btn-custom" disabled={this.validate()}>
        {label}
      </button>
    );
  }

  renderSelect(name, label, options) {
    const { data, errors } = this.state;
    return (
      <Select
        name={name}
        value={data[name]}
        label={label}
        options={options}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  renderInput(name, label, type = "text", className = "form-control") {
    const { data, errors } = this.state;

    return (
      <Input
        type={type}
        name={name}
        value={data[name]}
        className={className}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  renderTextarea(name, label, type = "text", rows, cols) {
    const { data, errors } = this.state;

    return (
      <Textarea
        type={type}
        name={name}
        value={data[name]}
        label={label}
        rows={rows}
        cols={cols}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  renderCheckbox(name, label, type = "checkbox") {
    const { data, errors } = this.state;

    return (
      <Checkbox
        type={type}
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleCheckBox}
        error={errors[name]}
      />
    );
  }

  renderWYSWYG(name, label, type = "checkbox") {
    const { data, errors } = this.state;

    return (
      <div className="form-group">
        <Editor
           apiKey={"87c8sx9fthrt84snhs7ph822j95ujo3jhhgc3z8olgvh23x0"}
           value={data[name]}
           error={errors[name]}
           init={{
             height: 300,
             menubar: true,
             plugins: [
               'advlist autolink lists link image charmap print preview anchor',
               'searchreplace visualblocks code fullscreen',
               'insertdatetime media table paste code help wordcount'
             ],
             toolbar: 'undo redo | formatselect | ' +
             'bold italic backcolor | alignleft aligncenter ' +
             'alignright alignjustify | bullist numlist outdent indent | ' +
             'removeformat | help',
             content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
           }}
           onEditorChange={this.handleEditor}
         />
       </div>
    );
  }

}

export default Form;