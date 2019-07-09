import React from 'react'
import ReactDOM from 'react-dom'
import LaunchCardDetails from './LaunchCardDetails'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<LaunchCardDetails />, div)
  ReactDOM.unmountComponentAtNode(div)
})