import React from "react";

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Experience</h1>
        <form>
          <label>
            Company Name
            <input type="text" />
          </label>
          <label>
            Position Title <input type="text" />
          </label>
          <label>
            Employment Dates <input type="text" />
          </label>
          <label>
            Responsibilities
            <input type="text" />
          </label>
        </form>
        <hr />
      </div>
    );
  }
}

export default Experience;
