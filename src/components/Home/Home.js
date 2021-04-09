import React, {Component} from "react";
import {get} from "../../http";
import TopTabs from "../Common/TopTabs/TopTabs";
import "./Counter";
import ArticleList from "../Common/ArticleList/ArticleList";

// import ArticleDetail from "../Common/ArticleDetail/ArticleDetail";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabList: [],
      listData: [],
      key: ''
    }
  }


  componentDidMount() {
    this.getTabList().then();
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
    this.props.history.replace('/home/guanzhu');
  }


  closeArticle = (event, item) => {
    event.stopPropagation();
    // console.log(event);
  }

  componentWillUnmount() {
    this.setState = () => false;
  }

  render() {
    let title = this.props.match.params.title;
    console.log(this.props)
    return (
      <div>
        <TopTabs init={this}/>
        <ArticleList title={title}/>
      </div>
    );
  }
}

export default Home;
