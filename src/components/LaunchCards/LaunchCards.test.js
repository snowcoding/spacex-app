import React from 'react'
import ReactDOM from 'react-dom'
import LaunchCards from './LaunchCards'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<LaunchCards />, div)
  ReactDOM.unmountComponentAtNode(div)
})