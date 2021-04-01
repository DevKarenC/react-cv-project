import React, { Component } from "react";
import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";
import "./styles/styles.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isSubmitted: false,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.isSubmitted) {
      this.setState({ isSubmitted: false });
    } else {
      this.setState({ isSubmitted: true });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <General isSubmitted={this.state.isSubmitted} />
        <Education isSubmitted={this.state.isSubmitted} />
        <Experience isSubmitted={this.state.isSubmitted} />
        <button type="submit">Edit/Submit</button>
      </form>
    );
  }
}

export default App;
