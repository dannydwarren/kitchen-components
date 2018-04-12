import React, { Component } from 'react'

export default class extends Component {
    state = {
        powerIsOn: false
    }

    constructor(props) {
        super(props)
        console.log('Microwave.constructor()', props)

        this.state.powerIsOn = props.powerIsOn

        console.log('Microwave.ctor() state:', this.state)
    }

    componentWillMount() {
        console.log('Microwave.componentWillMount()')
    }

    componentDidMount() {
        console.log('Microwave.componentDidMount()')
    }

    render() {
        console.log('Microwave.render()')
        return (
            <div>
                Microwave here
                <h1>HELLO, I'm a friendly microwave</h1>
            </div>
        )
    }
}