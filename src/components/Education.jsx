import React from "react";

class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Education</h1>
        <form>
          <label>
            School Name
            <input type="text" />
          </label>
          <label>
            Major
            <input type="text" />
          </label>
          <label>
            Degree
            <input type="text" />
          </label>
          <label>
            Graduation Month/Year
            <input type="text" />
          </label>
        </form>
        <hr />
      </div>
    );
  }
}

export default Education;
