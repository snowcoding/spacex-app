import React from 'react'
import ReactDOM from 'react-dom'
import LaunchCardsFooter from './LaunchCardsFooter'
import LaunchProvider from '../../contexts/LaunchProvider';

it('renders without crashing', () => {
  const div = document.createElement('div')
  const count = 81
  ReactDOM.render(
    <LaunchProvider>
      <LaunchCardsFooter filteredResultsCount={count}/>
    </LaunchProvider>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})