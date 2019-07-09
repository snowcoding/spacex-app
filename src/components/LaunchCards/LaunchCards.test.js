import React from 'react'
import ReactDOM from 'react-dom'
import LaunchCards from './LaunchCards'
import Apollo from '../Apollo/Apollo'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Apollo>
      <LaunchCards />
    </Apollo>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
