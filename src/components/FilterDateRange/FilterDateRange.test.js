import React from 'react'
import ReactDOM from 'react-dom'
import FilterDateRange from './FilterDateRange'
import LaunchProvider from '../../contexts/LaunchProvider'
import renderer from 'react-test-renderer'

it('snapshot test Date Range Filter', () => {
  const tree = renderer
    .create(
      <LaunchProvider>
        <FilterDateRange />
      </LaunchProvider>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

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
