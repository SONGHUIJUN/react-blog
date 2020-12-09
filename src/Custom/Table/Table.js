import React from "react";
import Column from "./Column";
import data from "../List/data.json";
import "./Table.css";

function TrList(props) {
  return props.data.map(list => {
    return (
      <tr key={list.id}>
        <Column list={list}/>
      </tr>
    )
  })
}

export default class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <table cellPadding={0} cellSpacing={0}>
        <thead>
        <tr>
          <th>姓名</th>
          <th>年龄</th>
          <th>性别</th>
        </tr>
        </thead>
        <tbody>
        <TrList data={data}/>
        </tbody>
      </table>
    )
  }
}