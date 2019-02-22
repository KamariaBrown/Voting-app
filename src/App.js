import React, { Component } from 'react';
import './App.css';

class Item extends Component {
  constructor(props) {
    super(props);
    const name = props.name;
    const count = props.count;
  }
  render () {
    return (
      <div className="item">
        <div className="content">
          <div className="count">
            <h1>{this.props.count}</h1>
          </div>
          <div className="name">
            <h1>{this.props.name}</h1>
          </div>
          <div className="button">
            <a><h1>+</h1></a>
          </div>
        </div>
      </div>
    )
  }
}



class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <h1>Vote Your JS Library</h1>
        </div>
        <div className="list">
          <Item name="React" count="15" />
          <Item name="Vue" count="12" />
          <Item name="Angular" count="9" />
          <Item name="Ember" count="4" />
        </div>
      </div>
    );
  }
}

export default App;
