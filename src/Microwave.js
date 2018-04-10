import React, { Component } from 'react'

export default class extends Component {
    constructor() {
        super()
        console.log('Microwave.constructor()')
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