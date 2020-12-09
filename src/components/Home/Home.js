import React, {Component} from "react";
import {get} from "../../http";
import TopTabs from "../Common/TopTabs/TopTabs";
import "./Counter";
import ArticleList from "../Common/ArticleList/ArticleList";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.state = {
      listData: [],
      tabList: []
    }
    this.getTabList();
  }

  /**
   * 获取顶部tabs
   * @returns {Promise<void>}
   */
  getTabList = async () => {
    let res = await get('./data/homeTabs.json');
    this.setState({
      tabList: res.list
    });
    await this.getContentList(this, res.list[0])
  }

  /**
   * 根据顶部tab获取对应内容
   * @param result
   * @param msg
   * @returns {Promise<void>}
   */
  getContentList = async (result, msg) => {
    let res = await get('./data/contentList.json', {text: msg.text});
    this.setState({
      listData: res[msg.key]
    })
  }

  render() {
    return (
      <div>
        <TopTabs init={this}/>
        <div className="list-container" ref={this.ref}>
          {this.state.listData.map((item, index) => (
            <ArticleList key={index} articleData={item}/>
          ))}
        </div>
      </div>
    );
  }
}
