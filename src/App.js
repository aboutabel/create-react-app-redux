import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as appActionCreators from "./redux/action-creators/app-action-creators";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const { data, setData } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React {data}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => setData(43)} />
      </div>
    );
  }
}

const mapStateToProps = (state = {}) => ({ ...state.app });
const mapDispatchToProps = (dispatch) => bindActionCreators(appActionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);

