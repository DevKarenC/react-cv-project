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
      <div>
        <div className="heading">
          <h1>Education</h1>
          <button className="add-section">+</button>
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
          <form>
            <label>
              School
              <input
                type="text"
                value={this.state.school}
                onChange={this.handleSchoolChange}
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
        )}
        <hr />
      </div>
    );
  }
}

export default Education;
