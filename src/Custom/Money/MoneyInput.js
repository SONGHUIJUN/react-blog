import React from "react";

export default class MoneyInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  changeShow = (event) => {
    this.props.change(event.target.value)
  }

  render() {
    const value = this.props.value;
    const type = this.props.type;
    return (
      <div>
        <label>{type}:</label>
        <input type="number" value={value} onChange={this.changeShow}/>
      </div>
    )
  }
}