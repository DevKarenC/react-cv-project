import React, { Component } from "react";
import Header from "./components/Header";
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
