import React, {Component} from "react";
import {MenuOutlined} from "@ant-design/icons";
import "./top-tabs.css";

export default class TopTabs extends Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      index: 0
    }
  }

  toParent = (tab, index) => {
    // console.log(this.props)
    this.props.init.getContentList(this, tab);
    this.setState({
      index
    })
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
                   className={`tab-item ${index === this.state.index ? "active" : ""}`}>{tab.text}</div>
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
