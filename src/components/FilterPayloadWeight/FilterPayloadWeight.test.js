import React from 'react'
import ReactDOM from 'react-dom'
import FilterPayloadWeight from './FilterPayloadWeight'
import LaunchProvider from '../../contexts/LaunchProvider'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
      <LaunchProvider>
        <FilterPayloadWeight />
      </LaunchProvider>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
