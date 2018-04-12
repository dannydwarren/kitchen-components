import React, { Component } from 'react'
import './App.css'
import Kitchen from './Kitchen'
import Page1 from './Page1'
import { BrowserRouter as Router, Route, NavLink as Link, Switch } from 'react-router-dom' //in terminal install via "npm install react-router-dom"

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
      <Router>
        <div className="App">
          <nav>
            <Link exact to="/" activeStyle={{ fontWeight: 'bold', color: 'red' }}>Home for 4</Link>
            <Link to="/kitchen" activeStyle={{ fontWeight: 'bold', color: 'red' }}>My Super Duper Kitchen</Link>
          </nav>
          <Switch>
            <Route exact path="/" component={Page1} />
            <Route path="/kitchen" component={() => <Kitchen name={this.state.kitchenName} powerIsOn={this.state.kitchenPowerIsOn} />} />
            <Route component={() => <div>404 ERROR</div>} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
