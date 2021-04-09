import React, {Component} from "react";
import {Input} from "antd";
import {PlusCircleFilled, SearchOutlined} from "@ant-design/icons";
import "./index.css";

export default class Header extends Component {
  writeArticle = () => {
    console.log("发布内容");
  }

  render() {
    return (
      <div className="app-header">
        <div className="app-header-input">
          <Input placeholder="Borderless" defaultValue="人民日报 | 曝谢孟伟"
                 prefix={<SearchOutlined style={{fontSize: "0.24rem"}}/>}/>
        </div>
        <div className="app-header-btn" onClick={() => this.writeArticle()}>
          <PlusCircleFilled style={{fontSize: "0.36rem", color: "#fff"}}/>
          <div className='app-header-btn-text'>发布</div>
        </div>
      </div>
    );
  }
}
