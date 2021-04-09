import React, {Component} from "react";

export default class ArticleDetail extends Component {

  goBack = () => {
    this.props.history.replace("/home/list");
  }

  render() {
    return (
      <div>
        <button onClick={this.goBack}>返回列表</button>
        <ul>
          <li>ssssdffsfsdfsdfsfsfs</li>
          <li>ssssdffsfsdfsdfsfsfs</li>
          <li>ssssdffsfsdfsdfsfsfs</li>
          <li>ssssdffsfsdfsdfsfsfs</li>
          <li>ssssdffsfsdfsdfsfsfs</li>
          <li>ssssdffsfsdfsdfsfsfs</li>
          <li>ssssdffsfsdfsdfsfsfs</li>
          <li>ssssdffsfsdfsdfsfsfs</li>
          <li>ssssdffsfsdfsdfsfsfs</li>
          <li>ssssdffsfsdfsdfsfsfs</li>
          <li>ssssdffsfsdfsdfsfsfs</li>
          <li>ssssdffsfsdfsdfsfsfs</li>
          <li>ssssdffsfsdfsdfsfsfs</li>
          <li>ssssdffsfsdfsdfsfsfs</li>
          <li>ssssdffsfsdfsdfsfsfs</li>
          <li>ssssdffsfsdfsdfsfsfs</li>
          <li>ssssdffsfsdfsdfsfsfs</li>
          <li>ssssdffsfsdfsdfsfsfs</li>
          <li>ssssdffsfsdfsdfsfsfs</li>
        </ul>
      </div>
    )
  }
}
