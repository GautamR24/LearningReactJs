
import './App.css'

import React, { Component } from 'react'

export default class App extends Component {
  c = "test";
  render() {
    return (
      <div>
        <h1>Hello my first class based components {this.c}</h1>
      </div>
    )
  }
}

