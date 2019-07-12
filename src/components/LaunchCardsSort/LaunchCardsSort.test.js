import React from 'react'
import ReactDOM from 'react-dom'
import LaunchCardsSort from './LaunchCardsSort'
import LaunchProvider from '../../contexts/LaunchProvider'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <LaunchProvider>
      <LaunchCardsSort />
    </LaunchProvider>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
