import React, {Component} from "react";
import Chart from "../Home/Chart";

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartWidth: document.documentElement.clientWidth
    }
  }

  render() {
    return (
      <Chart width={this.state.chartWidth}/>
    );
  }
}
