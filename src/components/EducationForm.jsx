import React from "react";

class EducationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      school: "",
      major: "",
      degree: "",
      graduationDate: "",
    };
  }

  handleSchoolChange = (e) => {
    this.setState({ school: e.target.value });
  };

  handleMajorChange = (e) => {
    this.setState({ major: e.target.value });
  };

  handleDegreeChange = (e) => {
    this.setState({ degree: e.target.value });
  };

  handleGraduationDateChange = (e) => {
    this.setState({ graduationDate: e.target.value });
  };

  render() {
    return (
      <React.Fragment>
        {this.props.isSubmitted ? (
          <div className="view-input">
            <label>School</label>
            <p>{this.state.school}</p>
            <br />
            <label>Major</label>
            <p>{this.state.major}</p>
            <br />
            <label>Degree</label>
            <p>{this.state.degree}</p>
            <br />
            <label>Graduation Month/Year</label>
            <p>{this.state.graduationDate}</p>
          </div>
        ) : (
          <div className="edit-input">
            <label>School</label>
            <input
              type="text"
              value={this.state.school}
              onChange={this.handleSchoolChange}
            />
            <label>Major</label>
            <input
              type="text"
              value={this.state.major}
              onChange={this.handleMajorChange}
            />
            <label>Degree</label>
            <input
              type="text"
              value={this.state.degree}
              onChange={this.handleDegreeChange}
            />
            <label>Graduation Date</label>
            <input
              type="date"
              value={this.state.graduationDate}
              onChange={this.handleGraduationDateChange}
            />
          </div>
        )}
        <hr />
      </React.Fragment>
    );
  }
}

export default EducationForm;
