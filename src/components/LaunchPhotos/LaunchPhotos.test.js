import React from 'react'
import ReactDOM from 'react-dom'
import LaunchPhotos from './LaunchPhotos'

it('renders without crashing', () => {
  const div = document.createElement('div')
  const photos = [1,2,3]
  ReactDOM.render(<LaunchPhotos photos={photos}/>, div)
  ReactDOM.unmountComponentAtNode(div)
})
