import React, {Component} from "react";
import "./article-list.css";
import {get} from "../../../http";
import ArticleItem from "./ArticleItem";

class ArticleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: []
    }
    setTimeout(async () => {
      await this.getContentList(props.title);
    })
  }

  showArticleDetail = (item) => {
    // this.props.history.replace('/home/detail');
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('componentDidUpdate')
    if (this.props.title !== prevProps.title) {
      setTimeout(async () => {
        await this.getContentList(this.props.title);
      })
    }
  }

  /**
   * 根据顶部tab获取对应内容
   * @param key
   * @returns {Promise<void>}
   */
  getContentList = async (key) => {
    if (!key) return;
    let res = await get('./data/contentList.json');
    this.setState({
      listData: res[key] || []
    });
  }

  render() {
    return (
      <div className="list-container">
        {this.state.listData ? this.state.listData.map((item, index) => (
          <ArticleItem key={index} articleData={item} detailFunc={this.showArticleDetail}/>
        )) : '暂无数据'}
      </div>
    )
  }
}

export default ArticleList;
