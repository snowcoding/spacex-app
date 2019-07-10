import React from 'react'
import ReactDOM from 'react-dom'
import LaunchVideo from './LaunchVideo'

it('renders without crashing', () => {
  const div = document.createElement('div')
  const videoLink = 'https://youtube.com/98asfdta453'
  ReactDOM.render(<LaunchVideo videoLink={videoLink}/>, div)
  ReactDOM.unmountComponentAtNode(div)
})

