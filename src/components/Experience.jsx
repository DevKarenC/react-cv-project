import React from "react";

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: "",
      position: "",
      employmentDates: "",
      responsibilities: "",
    };
  }

  handleCompanyNameChange = (e) => {
    this.setState({ companyName: e.target.value });
  };

  handlePositionChange = (e) => {
    this.setState({ position: e.target.value });
  };

  handleEmploymentDatesChange = (e) => {
    this.setState({ employmentDates: e.target.value });
  };

  handleGraduationDateChange = (e) => {
    this.setState({ graduationDate: e.target.value });
  };

  render() {
    return (
      <div>
        <div className="heading">
          <h1>Experience</h1>
          <button className="add-section">+</button>
        </div>
        {this.props.isSubmitted ? (
          <form>
            <label>Company Name</label>
            <p>{this.state.companyName}</p>
            <label>Position Title</label>
            <p>{this.state.position}</p>
            <label>Employment Dates</label>
            <p>{this.state.employmentDates}</p>
            <label>Responsibilities</label>
            <p>{this.state.responsibilities}</p>
          </form>
        ) : (
          <form>
            <label>
              Company Name
              <input
                type="text"
                value={this.state.companyName}
                onChange={this.handleCompanyNameChange}
              />
            </label>
            <label>
              Position Title{" "}
              <input
                type="text"
                value={this.state.position}
                onChange={this.handlePositionChange}
              />
            </label>
            <label>
              Employment Dates{" "}
              <input
                type="text"
                value={this.state.employmentDates}
                onChange={this.handleEmploymentDatesChange}
              />
            </label>
            <label>
              Responsibilities
              <input
                type="text"
                value={this.state.responsibilities}
                onChange={this.handleResponsibilitiesChange}
              />
            </label>
          </form>
        )}
        <hr />
      </div>
    );
  }
}

export default Experience;
