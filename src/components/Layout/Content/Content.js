import React, {Component} from "react";
import {Route, Switch, withRouter} from 'react-router-dom';
import Home from "../../Home/Home";
import User from "../../User/User";
import store from "../../../store";
import "./Content.css";

class Content extends Component {
  constructor(props) {
    super(props);
    this.setPageUrl(store.getState().tabs.payload)
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setPageUrl(store.getState().tabs.payload)
    })
  }

  /**
   * 点击底部菜单栏切换页面路由
   * @param url
   */
  setPageUrl(url = "/") {
    this.props.history.replace('/' + url);
    // this.props.history.push('/' + url);
  }

  render() {
    return (
      <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/user" component={User}/>
      </Switch>
    );
  }
}

export default withRouter(Content);
