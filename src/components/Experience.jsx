import React from "react";
import ExperienceForm from "./ExperienceForm";

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      experienceList: [<ExperienceForm isSubmitted={this.props.isSubmitted} />],
    };
  }

  handleNewExperienceForm = (e) => {
    this.setState((state) => {
      if (!this.props.isSubmitted) {
        const experienceList = state.experienceList.concat(
          <ExperienceForm isSubmitted={this.props.isSubmitted} />
        );
        return { experienceList };
      }
    });
  };

  render() {
    return (
      <div className="section">
        <div className="heading">
          <h1>Experience</h1>
        </div>
        {this.state.experienceList.map((form) => (
          <ExperienceForm isSubmitted={this.props.isSubmitted} />
        ))}
        <button className="add-section" onClick={this.handleNewExperienceForm}>
          Add Experience
        </button>
      </div>
    );
  }
}

export default Experience;
