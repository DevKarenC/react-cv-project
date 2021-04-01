import React from "react";

class General extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
    };
  }

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handlePhoneChange = (e) => {
    this.setState({ phone: e.target.value });
  };

  render() {
    return (
      <div>
        <h1>General Information </h1>
        {this.props.isSubmitted ? (
          <form>
            <label>Name</label>
            <p>{this.state.name}</p>
            <label>Email</label>
            <p>{this.state.email}</p>
            <label>Phone</label>
            <p>{this.state.phone}</p>
          </form>
        ) : (
          <form>
            <label>
              Name
              <input
                type="text"
                value={this.state.name}
                onChange={this.handleNameChange}
              />
            </label>
            <label>
              Email
              <input
                type="text"
                value={this.state.email}
                onChange={this.handleEmailChange}
              />
            </label>
            <label>
              Phone
              <input
                type="text"
                value={this.state.phone}
                onChange={this.handlePhoneChange}
              />
            </label>
          </form>
        )}
        <hr />
      </div>
    );
  }
}

export default General;
