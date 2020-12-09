import React from "react";
import "./theme.css";

export default class Dialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={'theme theme-' + this.props.theme}>
        {this.props.children}
      </div>
    )
  }
}