import React from 'react'
import ReactDOM from 'react-dom'
import LaunchChart from './LaunchChart'
import Apollo from '../Apollo/Apollo'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Apollo>
      <LaunchChart />
    </Apollo>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
