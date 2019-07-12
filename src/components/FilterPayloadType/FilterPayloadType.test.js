import React from 'react'
import ReactDOM from 'react-dom'
import FilterPayloadType from './FilterPayloadType'
import LaunchProvider from '../../contexts/LaunchProvider'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
        <LaunchProvider>
          <FilterPayloadType />
        </LaunchProvider>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})