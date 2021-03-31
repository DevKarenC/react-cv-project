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
        <h1>Experience</h1>
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
        <hr />
      </div>
    );
  }
}

export default Experience;
