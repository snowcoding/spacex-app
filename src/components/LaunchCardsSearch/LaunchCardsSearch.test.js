import React from 'react'
import ReactDOM from 'react-dom'
import LaunchCardsSearch from './LaunchCardsSearch'
import LaunchProvider from '../../contexts/LaunchProvider'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <LaunchProvider>
      <LaunchCardsSearch />
    </LaunchProvider>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})