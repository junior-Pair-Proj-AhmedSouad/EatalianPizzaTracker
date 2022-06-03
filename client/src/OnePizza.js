import React, { Component } from "react";
import "../src/OnePizza.css";
import axios from "axios";

export default class OnePizza extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popularity: "",
      pop: this.props.data.popularity,
    };
    this.counter = this.counter.bind(this);
  }

  counter() {
    this.setState({ popularity: this.props.data.popularity + 1 });
    axios.put(`http://localhost:3001/api/pizza/${this.props.data._id}`, {
      popularity: this.state.pop + 1,
    });
    this.props.getData();
    this.setState({ pop: this.props.data.popularity + 1 });
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <div>
          <div className="nav">
            <span className="logo">Pizza Tracker</span>
            <span onClick={() => this.props.changeView("Main")}>
              See all Pizzas
            </span>
          </div>

          <div className="main"></div>
        </div>
        <div className="post">
          <h1 className="post-title">{this.props.data.name}</h1>
          <div className="post-byline">
            <span className="post-byline-author" style={{ color: "red" }}>
              {this.state.pop} USERS LOVED THIS PIZZA!
            </span>
            <input onClick={() => this.counter()} id="heart" type="checkbox" />
            <label for="heart">❤</label>
          </div>
          <img src={this.props.data.photo} className="post-image" />
          <p style={{ whiteSpace: "pre-line" }}>
            {this.props.data.description}
          </p>
        </div>
      </div>
    );
  }
}
