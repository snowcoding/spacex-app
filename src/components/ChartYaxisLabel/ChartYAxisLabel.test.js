import React from 'react'
import ReactDOM from 'react-dom'
import ChartYaxisLabel from './ChartYaxisLabel'
import renderer from 'react-test-renderer'

it('snapshot test Y axis Label of Chart', () => {
  const yAxisLabel = { title: 'title', popover: 'popever', link: 'link' }
  const tree = renderer
    .create(<ChartYaxisLabel yAxisLabel={yAxisLabel} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders without crashing', () => {
  const div = document.createElement('div')
  const yAxisLabel = { title: 'title', popover: 'popever', link: 'link' }
  ReactDOM.render(<ChartYaxisLabel yAxisLabel={yAxisLabel} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
