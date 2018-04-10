import React, { Component } from 'react'
import Microwave from './Microwave'
import Fridge from './Fridge'

class Kitchen extends Component {
    constructor(props) {
        super(props)
        console.log('Kitchen.constructor()', props)
    }

    componentWillMount() {
        console.log('Kitchen.componentWillMount()')
    }

    componentDidMount() {
        console.log('Kitchen.componentDidMount()')
    }

    render() {
        console.log('Kitchen.render()')
        return (
            <div>
                <header>
                    <h1>{this.props.name}</h1>
                </header>
                <Microwave powerIsOn={this.props.powerIsOn} />
                <Fridge powerIsOn={this.props.powerIsOn} />
            </div>
        )
    }
}

export default Kitchen
