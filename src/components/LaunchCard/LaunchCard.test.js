import React from 'react'
import ReactDOM from 'react-dom'
import LaunchCard from './LaunchCard'
import Apollo from '../Apollo/Apollo'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Apollo>
      <LaunchCard />
    </Apollo>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
