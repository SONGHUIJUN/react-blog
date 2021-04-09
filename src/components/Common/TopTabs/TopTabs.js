import React, {Component} from "react";
import {Link} from 'react-router-dom';
import {MenuOutlined} from "@ant-design/icons";
import "./top-tabs.css";

class TopTabs extends Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      index: 0
    }
  }

  toParent = (tab, index) => {
    // console.log(this.props)
    this.setState({
      index
    })
    // this.props.history.push('/home/' + tab.key);
  }

  showItem = () => {
    console.log("显示菜单");
  }

  render() {
    return (
      <div className="hide-table-scroll">
        <div className="top-tabs-container">
          {
            this.props.init.state.tabList.map((tab, index) => (
              <div onClick={() => this.toParent(tab, index)} key={tab.text}
                   className={`tab-item ${index === this.state.index ? "active" : ""}`}><Link to={`/home/${tab.key}`}>{tab.text}</Link></div>
            ))
          }
          <div className="tab-item-right" onClick={this.showItem}>
            <MenuOutlined/>
          </div>
        </div>
      </div>
    )
  }
}

export default TopTabs
