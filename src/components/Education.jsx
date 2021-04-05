import React from "react";
import EducationForm from "./EducationForm";

class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      educationList: [<EducationForm isSubmitted={this.props.isSubmitted} />],
    };
  }

  handleNewEducationForm = () => {
    this.setState((state) => {
      if (!this.props.isSubmitted) {
        const educationList = state.educationList.concat(
          <EducationForm isSubmitted={this.props.isSubmitted} />
        );
        return { educationList };
      }
    });
  };

  render() {
    return (
      <div className="section">
        <div className="heading">
          <h1>Education</h1>
        </div>
        {this.state.educationList.map((form, idx) => (
          <EducationForm isSubmitted={this.props.isSubmitted} key={idx} />
        ))}
        <button className="add-section" onClick={this.handleNewEducationForm}>
          Add Education
        </button>
      </div>
    );
  }
}

export default Education;
