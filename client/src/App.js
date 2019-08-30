import React, { Component } from "react";
import _ from "lodash";
import axios from "axios";

export default class App extends Component {
  state = {
    query: ''
  }

  filterCountries = e => {
    console.log('hello');
    
    const query = e.target.value;
    this.setState({ query });
  };

  render() {
    return (
      <div className="ta">
        <input
          onChange={(e) => this.filterCountries(e)}
          type="text"
          placeholder="enter country name"
        />
        <div className="ta-results"></div>
      </div>
    );
  }
}
