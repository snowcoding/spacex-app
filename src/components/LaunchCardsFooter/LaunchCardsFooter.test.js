import React from 'react'
import ReactDOM from 'react-dom'
import LaunchCardsFooter from './LaunchCardsFooter'
import LaunchProvider from '../../contexts/LaunchProvider';

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <LaunchProvider>
      <LaunchCardsFooter />
    </LaunchProvider>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})