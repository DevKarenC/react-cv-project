import React, { Component } from "react";
import Section from "./components/Section";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Section sectionName="General Information" />
        <Section sectionName="Education" />
        <Section sectionName="Experience" />
      </div>
    );
  }
}

export default App;
