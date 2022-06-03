import React from "react";
import Main from "./Main";
import OnePizza from "./OnePizza";
import SignUp from "./SignUp";
import Mainlogged from "./MainLogged";
import axios from "axios";
import MainAdmin from "./MainAdmin";
import SignIn from "./Login";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      view: "Main",
      role: "",
      current: [],
    };
    this.changeView = this.changeView.bind(this);
    this.onePizza = this.onePizza.bind(this);
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios.get("http://localhost:3001/api/pizza").then((res) => {
      console.log(res.data);
      this.setState({ data: res.data });
    });
    console.log('hiiiiiiiii');
  }

  Clicked(e) {
    this.state.data.filter((pizza) => pizza === e);
  }

  onePizza(card) {
    this.setState({ view: "OnePizza", current: card });
    console.log(this.state.current);
  }

  changeView(option) {
    this.setState({ view: option });
  }

  renderView() {
    const { view, role } = this.state;

    if (view === "Main") {
      return <Main changeView={this.changeView} onePizza={this.onePizza} />;
    } else if (view === "OnePizza") {
      return (
        <OnePizza
          changeView={this.changeView}
          data={this.state.current}
          getData={this.getData}
        />
      );
    } else if (view === "SignUp") {
      return <SignUp changeView={this.changeView} />;
    } else if (view === "Mainlogged") {
      return (
        <Mainlogged changeView={this.changeView} onePizza={this.onePizza} />
      );
    } else if (view === "Admin") {
      return (
        <MainAdmin
          changeView={this.changeView}
          onePizza={this.onePizza}
          getData={this.getData}
        />
      );
    } else if (view === "SignIn") {
      return <SignIn changeView={this.changeView} onePizza={this.onePizza} />;
    }
  }

  render() {
    console.log(this.state);
    return this.renderView();
  }
}

export default App;
