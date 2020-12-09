import React from "react";
import "./list.css";
import data from "./data.json";

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.id}>我叫：{number.name}，今年{number.age}岁。</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {show: true};
  }

  render() {
    return (
      <NumberList numbers={data}/>
    )
  }
}