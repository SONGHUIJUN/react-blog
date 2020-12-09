import React, {Component} from "react";
import "./article-list.css";

export default class ArticleList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // console.log(props);
  }

  render() {
    let {articleData} = this.props;
    return (
      <div className="article-item">
        <div className="article-item-title">
          <b>{articleData.title}</b>
          {
            articleData.subTitle&&
            <div className="article-item-sub-title">
              { articleData.subTitle}
            </div>
          }
        </div>
        <div>{articleData.content}</div>
      </div>
    )
  }
}
