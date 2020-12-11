import React, {Component} from "react";
import "./article-list.css";
import {CloseOutlined} from "@ant-design/icons";
import { Avatar } from 'antd';

export default class ArticleList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // console.log(props);
  }

  closeArticle = (item) => {
    console.log(item);
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
                <span className="article-item-close" onClick={()=>this.closeArticle(articleData)}><CloseOutlined/></span>
              </div>
            </div>
            <div className="article-item-right">
              <img alt="此处为图片" src={'./images/image' + articleData.imageList[0].index + '.jpg'}/>
            </div>
          </div>
        }
        {
          articleData.type === "has-avatar" &&
          <div className="article-item">
            <div className="article-item-avatar">
              <div>
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              </div>
              <div>
                <div>
                  <b>{articleData.avatarInfo.title}</b>
                  <span className="article-item-close" onClick={()=>this.closeArticle(articleData)}><CloseOutlined/></span>
                </div>
                <div>
                  <span className="article-item-comment">{articleData.avatarInfo.fans}粉丝</span>
                  <span className="article-item-time">{articleData.avatarInfo.company}</span>
                </div>
              </div>
            </div>
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
              <span className="article-item-close" onClick={()=>this.closeArticle(articleData)}><CloseOutlined/></span>
            </div>
          </div>
        }
      </div>
    )
  }
}
