import React from 'react'
import ReactDOM from 'react-dom'
import FilterDateRange from './FilterDateRange'
import LaunchProvider from '../../contexts/LaunchProvider'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <LaunchProvider>
      <FilterDateRange />
    </LaunchProvider>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
