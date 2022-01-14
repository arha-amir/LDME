import React from "react";
import Joi from "joi-browser";
const pattern =
  /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!#.])[A-Za-z\d$@$!%*?&.]{8,20}/;

class Signin extends React.Component {
  state = {
    data: {
      Email: "",
      Password: "",
    },
    errors: {},
  };

  schema = {
    Email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    }),
    Password: Joi.string().regex(RegExp(pattern)).required().min(8).max(20),
  };

  validate = () => {
    const result = Joi.validate(this.state.data, this.schema, {
      abortEarly: false,
    });
    if (!result.error) return null;

    const errors = {};
    result.error.details.map((result) => {
      errors[result.path] = result.message;
    });

    return errors;
  };

  validateProperty = (input) => {
    const currentValue = { [input.name]: input.value };
    const currentSchema = { [input.name]: this.schema[input.name] };
    const result = Joi.validate(currentValue, currentSchema);
    return result.error ? result.error.details[0].message : null;
  };

  handleChange = (e) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(e.currentTarget);
    if (errorMessage) errors[e.currentTarget.name] = errorMessage;
    else delete errors[e.currentTarget.name];

    const data = { ...this.state.data };
    data[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ data, errors });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
  };

  render() {
    return (
      <div
        className="row"
        style={{ marginLeft: "400px", marginTop: "50px", marginBottom: "50px" }}
      >
        <div className="col-6">
          <h1>Sign in</h1>
          <h4> Serving you magic! </h4>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="Email">Email</label>
              <input
                id="Email"
                name="Email"
                value={this.state.data.Email}
                onChange={this.handleChange}
                className="form-control"
              />
            </div>
            {this.state.errors.Email && (
              <div className="alert alert-danger">
                {this.state.errors.Email}
              </div>
            )}
            <div className="form-group">
              <label htmlFor="Password">Password</label>
              <input
                id="Password"
                name="Password"
                value={this.state.data.Password}
                onChange={this.handleChange}
                className="form-control"
              />
            </div>
            {this.state.errors.Password && (
              <div className="alert alert-danger">
                {this.state.errors.Password}
              </div>
            )}
            <button
              disabled={this.validate()}
              id="navcolor"
              className="btn btn-outline-light me-2 me-lg-2 me-md-2 me-xl-2 me-xxl-2 mt-3"
              style={{ marginLeft: "200px" }}
            >
              Proceed
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Signin;
