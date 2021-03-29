import React, { Component } from "react";
import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <General />
        <Education />
        <Experience />
        <button type="submit">Edit/Submit</button>
      </div>
    );
  }
}

export default App;
