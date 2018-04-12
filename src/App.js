import React, { Component } from 'react'
import './App.css'
import Kitchen from './Kitchen'

class App extends Component {
  state = { 
    kitchenName: "Danny's Awesome Kitchen",
    kitchenPowerIsOn: false
  }

  constructor() {
    super()
    console.log('App.constructor()', 'state:', this.state)
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
        <Kitchen name={this.state.kitchenName} powerIsOn={this.state.kitchenPowerIsOn} />
      </div>
    )
  }
}

export default App
