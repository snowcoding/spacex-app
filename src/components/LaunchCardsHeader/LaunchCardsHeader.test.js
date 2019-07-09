import React from 'react'
import ReactDOM from 'react-dom'
import LaunchCardsHeader from './LaunchCardsHeader'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<LaunchCardsHeader />, div)
  ReactDOM.unmountComponentAtNode(div)
})
