import React from 'react'
import ReactDOM from 'react-dom'
import FilterPayloadType from './FilterPayloadType'
import Apollo from '../Apollo/Apollo'
import LaunchProvider from '../../contexts/LaunchProvider'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
      <Apollo>
        <LaunchProvider>
          <FilterPayloadType />
        </LaunchProvider>
      </Apollo>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})