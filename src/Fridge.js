import React, { Component } from 'react'

export default class extends Component {
    constructor() {
        super()
        console.log('Fridge.constructor()')
    }

    componentWillMount() {
        console.log('Fridge.componentWillMount()')
    }

    componentDidMount() {
        console.log('Fridge.componentDidMount()')
    }


    render() {
        console.log('Fridge.render()')
        return (
            <div>
                This is a really cold fridge... burhhhh....
            </div>
        )
    }
}