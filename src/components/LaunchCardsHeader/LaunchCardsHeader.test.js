import React from 'react'
import ReactDOM from 'react-dom'
import LaunchCardsHeader from './LaunchCardsHeader'
import LaunchProvider from '../../contexts/LaunchProvider';

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <LaunchProvider>
      <LaunchCardsHeader />
    </LaunchProvider>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
