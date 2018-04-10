import Fridge from '../Fridge'
import ShallowRenderer from 'react-test-renderer/shallow'
import React from 'react'

it('should shallow render correctly', () => {
    const renderer = new ShallowRenderer()
    renderer.render(<Fridge />)
    const result = renderer.getRenderOutput()

    //console.log(result)

    expect(result.type).toBe('div')
    expect(result.props.children).toEqual('This is a really cold fridge... burhhhh....')
})