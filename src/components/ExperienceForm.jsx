import React from "react";

class ExperienceForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: "",
      position: "",
      employmentDatesFrom: "",
      employmentDatesTo: "",
      currentJob: "",
      responsibilities: "",
    };
  }

  handleCompanyNameChange = (e) => {
    this.setState({ companyName: e.target.value });
  };

  handlePositionChange = (e) => {
    this.setState({ position: e.target.value });
  };

  handleEmploymentDatesFromChange = (e) => {
    this.setState({ employmentDatesFrom: e.target.value });
  };

  handleEmploymentDatesToChange = (e) => {
    this.setState({ employmentDatesTo: e.target.value });
  };

  handleCurrentJob = (e) => {
    this.setState({ currentJob: e.target.checked });
  };

  handleResponsibilitiesChange = (e) => {
    this.setState({ responsibilities: e.target.value });
  };

  render() {
    return (
      <React.Fragment>
        {this.props.isSubmitted ? (
          <div className="view-input">
            <label>Company Name</label>
            <p>{this.state.companyName}</p>
            <br />
            <label>Position Title</label>
            <p>{this.state.position}</p>
            <br />
            <label>Employment Dates (From)</label>
            <p>{this.state.employmentDatesFrom}</p>
            <br />
            <label>Employment Dates (To)</label>
            <p>{this.state.employmentDatesTo}</p>
            <br />
            <label>Currently Working</label>
            <p>{this.state.currentJob ? "Yes" : "No"}</p>
            <br />
            <label>Responsibilities</label>
            <p>{this.state.responsibilities}</p>
          </div>
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
            <label>Employment Dates (From)</label>
            <input
              type="date"
              value={this.state.employmentDatesFrom}
              onChange={this.handleEmploymentDatesFromChange}
            />
            <label>Employment Dates (To)</label>
            <input
              type="date"
              value={this.state.employmentDatesTo}
              onChange={this.handleEmploymentDatesToChange}
            />
            <label>
              Currently Working
              <input
                type="checkbox"
                onChange={this.handleCurrentJob}
                checked={this.state.currentJob}
              />
            </label>
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
