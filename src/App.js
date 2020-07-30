import React, { Component } from "react";
import "./App.css";
import Eurosuper from "./components/Eurosuper";
import Sedmica from "./components/Sedmica";
import Combination from "./components/Combination";
import Save from "./components/Save";

class App extends Component {
  state = {};

  onChange(comb) {
    this.setState({
      comb: comb,
    });
  }

  render() {
    return (
      <div className="App">
        <Combination renderComb={this.state.comb} />
        <Eurosuper combPass={this.onChange.bind(this)} />
        <Sedmica combPass={this.onChange.bind(this)} />
        <br />
        <Save passForSave={this.state.comb} />
      </div>
    );
  }
}

export default App;
