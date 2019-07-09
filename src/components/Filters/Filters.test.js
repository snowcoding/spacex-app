import React from 'react'
import ReactDOM from 'react-dom'
import Filters from './Filters'
import LaunchProvider from '../../contexts/LaunchProvider'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <LaunchProvider>
      <Filters />
    </LaunchProvider>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
