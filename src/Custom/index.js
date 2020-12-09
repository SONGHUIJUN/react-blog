import React from 'react';

import Table from "./Table/Table";
import Example from "./Hook/Hook";

const FancyButton = React.forwardRef((props, ref) => {
  return (
    <button ref={ref} className="FancyButton" onClick={()=>{console.log("宋辉俊!")}}>
      {props.children}
    </button>
  )
});

export default class Index extends React.Component{
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  render() {
    return (
      <div className="App">
        <FancyButton ref={this.ref}>新增</FancyButton>
        <Table />
        <Example count={0}/>
      </div>
    )
  }
}