import React, { Component } from "react";
import Header from "../src/components/Header";
import General from "../src/components/General";
import Education from "../src/components/Education";
import Experience from "../src/components/Experience";
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
  };

  handleClick = (e) => {
    if (this.state.isSubmitted) {
      this.setState({ isSubmitted: false });
    } else {
      this.setState({ isSubmitted: true });
    }
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <form onSubmit={this.handleSubmit}>
          <General isSubmitted={this.state.isSubmitted} />
          <Education isSubmitted={this.state.isSubmitted} />
          <Experience isSubmitted={this.state.isSubmitted} />
          <button type="submit" onClick={this.handleClick}>
            Edit/Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default App;
