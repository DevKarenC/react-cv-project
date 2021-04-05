import React from "react";

class ExperienceForm extends React.Component {
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

  handleResponsibilitiesChange = (e) => {
    this.setState({ responsibilities: e.target.value });
  };

  render() {
    return (
      <React.Fragment>
        {this.props.isSubmitted ? (
          <React.Fragment>
            <label>Company Name</label>
            <p>{this.state.companyName}</p>
            <label>Position Title</label>
            <p>{this.state.position}</p>
            <label>Employment Dates</label>
            <p>{this.state.employmentDates}</p>
            <label>Responsibilities</label>
            <p>{this.state.responsibilities}</p>
          </React.Fragment>
        ) : (
          <div className="edit-input">
            <label>Company Name</label>
            <input
              type="text"
              value={this.state.companyName}
              onChange={this.handleCompanyNameChange}
            />
            <label>Position Title </label>
            <input
              type="text"
              value={this.state.position}
              onChange={this.handlePositionChange}
            />
            <label>Employment Dates </label>
            <input
              type="date"
              value={this.state.employmentDates}
              onChange={this.handleEmploymentDatesChange}
            />
            <label>Responsibilities</label>
            <textarea
              rows="8"
              value={this.state.responsibilities}
              onChange={this.handleResponsibilitiesChange}
            ></textarea>
          </div>
        )}
        <hr />
      </React.Fragment>
    );
  }
}

export default ExperienceForm;
