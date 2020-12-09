import React from "react";

export default class Column extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <>
        <td>{this.props.list.name}</td>
        <td>{this.props.list.age}</td>
        <td>{this.props.list.sex}</td>
      </>
    )
  }
}