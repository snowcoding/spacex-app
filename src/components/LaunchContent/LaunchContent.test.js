import React from 'react'
import ReactDOM from 'react-dom'
import LaunchContent from './LaunchContent'
import Apollo from '../Apollo/Apollo'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Apollo><LaunchContent /></Apollo>, div)
  ReactDOM.unmountComponentAtNode(div)
})