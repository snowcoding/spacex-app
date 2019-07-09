import React from 'react'
import ReactDOM from 'react-dom'
import LaunchCardsSort from './LaunchCardsSort'
import Apollo from '../Apollo/Apollo'
import { BrowserRouter as Router } from 'react-router-dom'
import LaunchProvider from '../../contexts/LaunchProvider'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Router>
      <Apollo>
        <LaunchProvider>
          <LaunchCardsSort />
        </LaunchProvider>
      </Apollo>
    </Router>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})