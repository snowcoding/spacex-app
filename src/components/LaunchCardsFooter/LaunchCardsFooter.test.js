import React from 'react'
import ReactDOM from 'react-dom'
import LaunchCardsFooter from './LaunchCardsFooter'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<LaunchCardsFooter />, div)
  ReactDOM.unmountComponentAtNode(div)
})
