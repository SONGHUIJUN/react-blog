import React, {Component} from "react";
import {
  HomeOutlined,
  VideoCameraOutlined,
  PlayCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./index.css";
import store from "../../../store";
import {changeTabs} from "../../../actions/tabs-actions";

class AppMenuItem extends Component {
  state = {
    current: "home"
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        current: store.getState().tabs.payload
      })
    })
  }

  changeTab = () => {
    store.dispatch(changeTabs(this.props.menuKey))
  }

  render() {
    return (
      <div onClick={this.changeTab}
           className={`app-menu-item ${this.state.current === this.props.menuKey ? "app-menu-item-selected" : ""}`}>
        <div className="app-footer-btn">{this.props.menuIcon}</div>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

class AppMenu extends Component {
  render() {
    return (
      <div className="app-menu">
        <AppMenuItem menuKey="home" menuIcon={<HomeOutlined/>}>首页</AppMenuItem>
        <AppMenuItem menuKey="app" menuIcon={<VideoCameraOutlined/>}>西瓜视频</AppMenuItem>
        <AppMenuItem menuKey="movie" menuIcon={<PlayCircleOutlined/>}>放映厅</AppMenuItem>
        <AppMenuItem menuKey="user" menuIcon={<UserOutlined/>}>我的</AppMenuItem>
      </div>
    );
  }
}

export default class FooterNav extends Component {
  render() {
    return <AppMenu/>;
  }
}
