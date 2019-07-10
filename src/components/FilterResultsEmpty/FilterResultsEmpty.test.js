import React from 'react'
import ReactDOM from 'react-dom'
import FilterResultsEmpty from './FilterResultsEmpty'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<FilterResultsEmpty />, div)
  ReactDOM.unmountComponentAtNode(div)
})
