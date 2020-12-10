import React, {Component} from "react";
import "./article-list.css";
import {CloseOutlined} from "@ant-design/icons";

export default class ArticleList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // console.log(props);
  }

  render() {
    let {articleData} = this.props;
    return (
      <div>
        {
          articleData.type === "top" &&
          <div className="article-item">
            <div className="article-item-title">
              {articleData.title}
            </div>
            <div className="article-item-container">
              <span className="article-item-top">置顶</span>
              <span className="article-item-company">{articleData.company}</span>
              <span className="article-item-comment">{articleData.comment}评论</span>
            </div>
          </div>
        }
        {
          articleData.type === "type-right" &&
          <div className="article-item article-item-type-right">
            <div className="article-item-left">
              <div className="article-item-title">
                {articleData.title}
              </div>
              <div className="article-item-container">
                <span className="article-item-company">{articleData.company}</span>
                <span className="article-item-comment">{articleData.comment}评论</span>
                <span className="article-item-time">{articleData.time}</span>
                <span className="article-item-close"><CloseOutlined/></span>
              </div>
            </div>
            <div className="article-item-right">
              <img alt="此处为图片" src="./images/image1.jpg"/>
            </div>
          </div>
        }
        {
          articleData.type === "type-bottom" &&
          <div className="article-item">
            <div className="article-item-title">
              {articleData.title}
            </div>
            <div className="article-item-image">
              {
                articleData.imageList.map(
                  (image, index) => (
                    <div key={index}>
                      <img alt="此处为图片" src={'./images/image' + image.index + '.jpg'}/>
                    </div>)
                )
              }
            </div>
            <div className="article-item-container">
              <span className="article-item-company">{articleData.company}</span>
              <span className="article-item-comment">{articleData.comment}评论</span>
              <span className="article-item-time">{articleData.time}</span>
              <span className="article-item-close"><CloseOutlined/></span>
            </div>
          </div>
        }
      </div>
    )
  }
}
