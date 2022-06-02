import React from "react";
import Main from "./Main";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      view: "Main",
      role: "",
    };
  }

  changeView(option) {
    this.setState({ view: option });
  }

  renderView() {
    const { view, role } = this.state;

    if (view === "Main") {
      return <Main />;
    } else if (view === "nope") {
      return <p>Yikes</p>;
    }
  }

  render() {
    return this.renderView();
  }
}

export default App;
