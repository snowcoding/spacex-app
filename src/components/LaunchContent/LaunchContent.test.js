import React from 'react'
import ReactDOM from 'react-dom'
import LaunchContent from './LaunchContent'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<LaunchContent />, div)
  ReactDOM.unmountComponentAtNode(div)
})
