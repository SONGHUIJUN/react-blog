import React from "react";
import MoneyInput from "./MoneyInput";

export default class Money extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "c",
      value: 0
    }
  }

  cChange = (value) => {
    this.setState({type: 'c', value});
  }

  jChange = (value) => {
    this.setState({type: 'j', value});
  }

  render() {
    const type = this.state.type;
    const value = this.state.value;
    const cValue = type === 'j' ? parseInt(value / 100) : value;
    const jValue = type === 'c' ? parseInt(value * 100) : value;

    return (
      <div>
        <MoneyInput type="c" value={cValue} change={this.cChange}/>
        <MoneyInput type="j" value={jValue} change={this.jChange}/>
      </div>
    )
  }
}