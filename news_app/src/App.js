
import './App.css'

import React, { Component } from 'react'
import NavBar from './components/NavBar'
import News from './components/News'


export class App extends Component {
  render() {
    return (
      <div>
        {/* This will all the components */}
        <NavBar/>
        <News pageSize={5} country={"us"} category={"sports"}/>
      </div>
    )
  }
}

export default App


//render will convert the JSX to html and then 
// show the html on the screen