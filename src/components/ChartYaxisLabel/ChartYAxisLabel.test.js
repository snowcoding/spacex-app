import React from 'react'
import ReactDOM from 'react-dom'
import ChartYaxisLabel from './ChartYaxisLabel'

it('renders without crashing', () => {
  const div = document.createElement('div')
  const yAxisLabel = {title:'title', popover:'popever', link:'link'}
  ReactDOM.render(
      <ChartYaxisLabel yAxisLabel={yAxisLabel}/>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})