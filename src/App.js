import React, {Component} from "react";
import {Spin} from "antd";
import {HashRouter as Router} from 'react-router-dom';
import FooterNav from "./components/Layout/Footer/FooterNav";
import Content from "./components/Layout/Content/Content";
import Header from './components/Layout/Header/Header';
import store from "./store";

import "./App.css";

class App extends Component {
  state = {
    loading: false
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        loading: store.getState().loading.payload
      })
    })
  }

  render() {
    return (
      <Router>
        <Spin spinning={this.state.loading}>
          <div className='header'>
            <Header/>
          </div>
          <div className='container'>
            <Content/>
          </div>
          <div className='footer'>
            <FooterNav/>
          </div>
        </Spin>
      </Router>
    );
  }
}

export default App;
