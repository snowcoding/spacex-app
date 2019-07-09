import React from 'react'
import ReactDOM from 'react-dom'
import LaunchCards from './LaunchCards'
import Apollo from '../Apollo/Apollo'
import LaunchProvider from '../../contexts/LaunchProvider'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Apollo>
      <LaunchProvider>
        <LaunchCards />
      </LaunchProvider>
    </Apollo>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
