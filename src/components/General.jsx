import React from "react";

class General extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      email: "",
      phone: "",
    };
  }

  handleFullNameChange = (e) => {
    this.setState({ fullName: e.target.value });
  };

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handlePhoneChange = (e) => {
    this.setState({ phone: e.target.value });
  };

  render() {
    return (
      <div className="section">
        <h1>General Information </h1>
        {this.props.isSubmitted ? (
          <form>
            <label>Full Name</label>
            <p>{this.state.fullName}</p>
            <label>Email</label>
            <p>{this.state.email}</p>
            <label>Phone</label>
            <p>{this.state.phone}</p>
          </form>
        ) : (
          <form className="edit-input">
            <label>Full Name</label>
            <input
              type="text"
              value={this.state.fullName}
              onChange={this.handleFullNameChange}
            />
            <label>Email</label>
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
            <label>Phone</label>
            <input
              type="text"
              value={this.state.phone}
              onChange={this.handlePhoneChange}
            />
          </form>
        )}
      </div>
    );
  }
}

export default General;
