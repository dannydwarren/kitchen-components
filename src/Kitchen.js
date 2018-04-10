import React, { Component } from 'react'
import Microwave from './Microwave'
import Fridge from './Fridge'

class Kitchen extends Component {
    constructor() {
        super()
        console.log('Kitchen.constructor()')
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
                Kitchen is here and ready to go
                <Microwave />
                <Fridge />
            </div>
        )
    }
}

export default Kitchen
