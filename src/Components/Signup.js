import React from "react";
import Joi from "joi-browser";
import Cardback from "../images/Cardback.jpg";

const pattern = "^[a-zA-Z0-9]{3,30}$";

const Signin =() => {
  const [ customerData, setCustomerData] = useState({
    firstName: "",
    lastName: "",
    Email:"",
    Password:"",
    errors: {},
})

  schema = {
    CustomerName: Joi.string().required().label("Customer Name"),
    LastName: Joi.string().required().label("Last Name"),
    Total: Joi.number().integer().min(1000).max(10000),
    Password: Joi.string().regex(RegExp(pattern)).required().min(8).max(20),
    Email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    }),
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

    setCustomerData( {...customerData, [e.target.name]: [e.target.value] } )
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
        style={{ marginTop: "2%", marginBottom: "2%", marginLeft: "25%" }}
        className="col-6"
      >
        <h1>Sign up</h1>
        <h4> Serving you magic! </h4>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="CustomerName">First Name</label>
            <input
              id="CustomerName"
              name="CustomerName"
              value={this.state.data.CustomerName}
              onChange={this.handleChange}
              className="form-control"
            />
          </div>
          {this.state.errors.CustomerName && (
            <div className="alert alert-danger">
              {this.state.errors.CustomerName}
            </div>
          )}
          <div className="form-group">
            <label htmlFor="LastName">LastName</label>
            <input
              id="LastName"
              name="LastName"
              value={this.state.data.LastName}
              onChange={this.handleChange}
              className="form-control"
            />
          </div>
          {this.state.errors.LastName && (
            <div className="alert alert-danger">
              {this.state.errors.LastName}
            </div>
          )}

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
            <div className="alert alert-danger">{this.state.errors.Email}</div>
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
            className="btn btn-outline-dark mt-2"
            style={{ marginLeft: "42%" }}
          >
            Proceed
          </button>
        </form>
      </div>
    );
  }
}

export default Signin;
