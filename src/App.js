import React, { Component } from 'react'
import './App.css'
import Kitchen from './Kitchen'

class App extends Component {
  constructor() {
    super()
    console.log('App.constructor()')
  }

  componentWillMount() {
    console.log('App.componentWillMount()')
  }

  componentDidMount() {
    console.log('App.componentDidMount()')
  }

  render() {
    console.log('App.render()')
    return (
      <div className="App">
        <Kitchen />
      </div>
    )
  }
}

export default App
