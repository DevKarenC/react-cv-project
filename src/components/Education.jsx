import React from "react";

class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schoolName: "",
      major: "",
      degree: "",
      graduationDate: "",
    };
  }

  handleSchoolNameChange = (e) => {
    this.setState({ schoolName: e.target.value });
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
      <div>
        <h1>Education</h1>
        <form>
          <label>
            School Name
            <input
              type="text"
              value={this.state.schoolName}
              onChange={this.handleSchoolNameChange}
            />
          </label>
          <label>
            Major
            <input
              type="text"
              value={this.state.major}
              onChange={this.handleMajorChange}
            />
          </label>
          <label>
            Degree
            <input
              type="text"
              value={this.state.degree}
              onChange={this.handleDegreeChange}
            />
          </label>
          <label>
            Graduation Month/Year
            <input
              type="text"
              value={this.state.graduationDate}
              onChange={this.handleGraduationDateChange}
            />
          </label>
        </form>
        <hr />
      </div>
    );
  }
}

export default Education;
