import React from "react";

class General extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>General Information </h1>
        <form>
          <label>
            Name
            <input type="text" />
          </label>
          <label>
            Email
            <input type="text" />
          </label>
          <label>
            Phone
            <input type="text" />
          </label>
        </form>
        <hr />
      </div>
    );
  }
}

export default General;
