import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import Widgets from './components/Widgets';
import Chart from './components/Chart';
import Chat from './components/Chat.js';

class App extends Component {

  render() {

    return (

      <div className="App">

        <div className="row">
          <div className="small-12 columns">
            <h1 className="site-title">Dashboard</h1>
            <Widgets />
          </div>
        </div>

        <div className="row">
          <div className="small-12 columns">
            <h2 className="title-sections">Site Traffic Overview</h2>
            <div className="app-shell el-shadow">
              <Chart />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="small-12 medium-10 large-8 columns">
            <h2 className="title-sections flex align-center">
              <FontAwesome name="comments-o fa-2x" /> Chat
            </h2>
            <Chat />
          </div>
        </div>
      </div>
    );
  }
}

export default App;