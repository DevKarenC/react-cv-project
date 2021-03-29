import React from "react";

class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>{this.props.sectionName}</h1>
        <hr />
      </div>
    );
  }
}

export default Section;
