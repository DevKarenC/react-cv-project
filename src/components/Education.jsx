import React from "react";

class Education extends React.Component {
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
      <div className="section">
        <div className="heading">
          <h1>Education</h1>
        </div>
        {this.props.isSubmitted ? (
          <form>
            <label>School</label>
            <p>{this.state.school}</p>
            <label>Major</label>
            <p>{this.state.major}</p>
            <label>Degree</label>
            <p>{this.state.degree}</p>
            <label>Graduation Month/Year</label>
            <p>{this.state.graduationDate}</p>
          </form>
        ) : (
          <form className="edit-input">
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
            <label>Graduation Month/Year</label>
            <input
              type="text"
              value={this.state.graduationDate}
              onChange={this.handleGraduationDateChange}
            />
            <button className="add-section">Add Education</button>
          </form>
        )}
      </div>
    );
  }
}

export default Education;
